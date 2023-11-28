import "./App.css";
import Photos from "./Components/Photos/Photos";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/comments/Comments";

function App() {
  return (
    <>
      <Posts />
      <br />
      <Photos />
      <br />
      <Comments />
    </>
  );
}

export default App;
