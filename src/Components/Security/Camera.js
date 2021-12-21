import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import { Auth } from 'aws-amplify';
import VideoPlayer from './VideoPlayer.js';

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
/*AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:72e8db17-2a15-433d-a9d8-0d2691a08d9b',
});

AWS.config.credentials = new AWS.WebIdentityCredentials({
  RoleArn: "arn:aws:iam::859700905691:role/us-east-1_hmGlCiqRE-authRole",
  WebIdentityToken: "eyJraWQiOiJhbDVzRzFzWEFlREQrU3gwM25GUzlvMlwvZXNcLzlXdkl6NEtQcWNjRlhyUkE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI4MTQwY2UzNy04NzMxLTQ0NGEtOThiOS00MzRmNDhlN2RkY2QiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfTzlCV01ldlo4X0dvb2dsZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9POUJXTWV2WjgiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiIyc3A4czY3ZW5vaDVscGl2NmdwZzN2N2R2aSIsIm9yaWdpbl9qdGkiOiJmNGQ1YzFiYS04OGE0LTQ4YjctYWJkMi0xNDY2NDAyOTk5YmIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjQwMTAyNzk5LCJleHAiOjE2NDAxMDYzOTksImlhdCI6MTY0MDEwMjc5OSwianRpIjoiMTkyMGI0OWYtY2UzMy00YTNmLWE5YjgtODllNzcyMjU0MjNmIiwidXNlcm5hbWUiOiJnb29nbGVfMTEyOTkyNzY2NDc1ODg2MTYxNDQ3In0.x3Q1bwfB7zPuy9VmSPXwJIpLszPKkWsZaIMA8PQYJLNZSHgZo4t7urZdcaONsDcEVi4v_8y9exAgnjScUwVZb7q_7XkaiDmAO-3zR_4nltamsAZEn1QGKVWKA83VkmvFyKKvNajqKO1v7p2K1x5gJAwUy6fMvrcXb-dP1rRbM2UyIVRNkrFckzWVQP7dYTG1dQQdXrw5-C1A0WQy5T6lBaKGjeFqUHBL_o9vIJr-bGuoIjD_EY7-XcZlZ6OXW1vwKhFbn0F-i_WjHy7aMoVnUCo-sokm5eFaIuBXNhZoMZcEhMSI5wKifRBKcVVRQFjBbqfD1sG6Met6iPj2MT0JRw"
});*/

function Camera(props) {
  const [kinesisStreamUrl, setKinesisStreamUrl] = useState(null);

  var videoJsOptions = {
    autoplay: true,
    controls: true,
    liveui: true,
    height: 400,
    width: 400,
    sources: [{
      src: kinesisStreamUrl,
      type: 'application/x-mpegURL'
    }],
  }

  useEffect(() => {
    if (kinesisStreamUrl == null) {
      getKinesisStreamUrl(props.streamName, setKinesisStreamUrl);
    }
  }, [props.streamName, kinesisStreamUrl, setKinesisStreamUrl]);

  return <>
    {kinesisStreamUrl != null &&
      <div>
        <div className="pl-1 pb-1 strong fs-1">{props.cameraName}</div>
        <VideoPlayer {...videoJsOptions} />
      </div>}
  </>
}

const getKinesisStreamUrl = async (streamName, setKinesisStreamUrl) => {

  console.log("HERE")
  var sts = new AWS.STS()
  console.log(sts);
  var assumeRoleParams = {
    RoleArn: "arn:aws:iam::859700905691:role/us-east-1_hmGlCiqRE-authRole",
    RoleSessionName: "KVS_READ_SESSION",
    DurationSeconds: 900
  }
  var session = sts.assumeRole(assumeRoleParams, function (err, data) {
    if (err) {
      console.log('session err:', err)
    }
    console.log('session data:', data)
  })
  var kinesisVideo = new AWS.KinesisVideo();
  var kinesisVideoArchivedContent = new AWS.KinesisVideoArchivedMedia();

  console.log('Fetching data endpoint');

  await kinesisVideo.getDataEndpoint({
    StreamName: streamName,
    APIName: "GET_HLS_STREAMING_SESSION_URL"
  }, function (err, response) {
    if (err) { return console.error(err); }

    console.log('Data endpoint: ' + response.DataEndpoint);
    kinesisVideoArchivedContent.endpoint = new AWS.Endpoint(response.DataEndpoint);

    // Get a Streaming Session URL
    console.log('Fetching Streaming Session URL');

    kinesisVideoArchivedContent.getHLSStreamingSessionURL({
      StreamName: streamName,
      PlaybackMode: 'LIVE',
      /*HLSFragmentSelector: {
        FragmentSelectorType: $('#fragmentSelectorType').val(),
        TimestampRange: $('#playbackMode').val() === "LIVE" ? undefined : {
          StartTimestamp: new Date($('#startTimestamp').val()),
          EndTimestamp: new Date($('#endTimestamp').val())
        }
      },*/
      //ContainerFormat: 'FRAGMENTED_MP4',
      //DiscontinuityMode: 'ALWAYS'
      DisplayFragmentTimestamp: 'ALWAYS',
      //MaxMediaPlaylistFragmentResults: 5 for LIVE, 1000 for ON_DEMAND,
      //Expires: 300 //seconds
    }, function (err, response) {
      if (err) { return console.error(err); }

      console.log('HLS Streaming Session URL: ' + response.HLSStreamingSessionURL);

      setKinesisStreamUrl(response.HLSStreamingSessionURL);
    });
  });
}

export default Camera;
