import { Auth } from 'aws-amplify';

function Storage(props) {
  return <>
    <button onClick={() => Auth.signOut()}>Sign Out</button>
    <div className="row">
      <div className="col-auto p-5">
        <div >HI</div>
      </div>
    </div>
  </>
}

export default Storage;
