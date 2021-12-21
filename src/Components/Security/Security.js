import './Security.css';
import Camera from './Camera.js';
import { Auth } from 'aws-amplify';

function Security(props) {

  console.log('Security Auth', Auth)
  return <>
    <button onClick={() => Auth.signOut()}>Sign Out</button>
    <div className="row">
      <div className="col-auto p-5">
        <Camera cameraName="Nursery" streamName="eufy-nursery-stream" />
      </div>
      <div className="col-auto p-5">
        <Camera cameraName="Living Room" streamName="eufy-living-room-stream" />
      </div>
    </div>
  </>
}

export default Security;
