import './Security.css';
import Camera from './Camera.js';

function Security(props) {

  return <>
    <div className="row">
      <div className="col-auto p-5">
        <Camera cameraName="Nursery" streamName="eufy-indoor-camera-1-stream" />
      </div>
      <div className="col-auto p-5">
        <Camera cameraName="Living Room" streamName="eufy-indoor-camera-2-stream" />
      </div>
    </div>
  </>
}

export default Security;
