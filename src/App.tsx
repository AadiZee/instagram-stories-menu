import { storyData } from "./data/data.js";
import "./styles/app.css";

const App = () => {
  return (
    <ul className="stories-menu">
      {storyData.map((story) => (
        <li className={story.class} key={story.id}>
          <div className="img-wrapper">
            <img src={story.imgSrc} alt="profile-pic" className="img" />
          </div>
          <p>{story.userName}</p>
        </li>
      ))}
    </ul>
  );
};

export default App;
