import React, { useState, useEffect } from 'react';
import KinesisVideo from 'aws-sdk/clients/kinesisvideo';
import KinesisVideoArchivedMedia from 'aws-sdk/clients/kinesisvideoarchivedmedia';
import AWS from 'aws-sdk';
import { Auth } from 'aws-amplify';
import VideoPlayer from './VideoPlayer.js';

AWS.config.region = 'us-east-1'

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
  var kinesisVideo = null
  var kinesisVideoArchivedContent = null
  await Auth.currentCredentials()
    .then(credentials => {
      console.log("STS")

      AWS.config.AccessKeyId = credentials.accessKeyId;
      AWS.config.SecretAccessKeyId = credentials.SecretAccessKeyId;

      kinesisVideo = new KinesisVideo(credentials);
      kinesisVideoArchivedContent = new KinesisVideoArchivedMedia(credentials);
    })

  console.log('Fetching data endpoint');

  await kinesisVideo.getDataEndpoint({
    StreamName: streamName,
    APIName: "GET_HLS_STREAMING_SESSION_URL"
  }, function (err, response) {
    if (err) { return console.error(err); }

    console.log('Data endpoint: ' + response.DataEndpoint);
    kinesisVideoArchivedContent.endpoint = response.DataEndpoint;//new AWS.Endpoint(response.DataEndpoint);

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
