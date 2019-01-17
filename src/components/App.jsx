import VideoList from './VideoList.js'
import VideoPlayer from './VideoPlayer.js'
import Search from './Search.js'

var App = (props) => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer />
      </div>
      <div className="col-md-5">
        <VideoList />
      </div>
    </div>
  </div>
);



/*var helperVideoList = (props) => (
  <ul>
    {props.videoList.map(calledVideoItem =>
      <App videoItem={calledVideoItem} />
    )}
  </ul>
)*/



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


