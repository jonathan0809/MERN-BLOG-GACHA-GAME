// import Arknights from "./GachaGamesIcon/Arknights.png";
import {formatISO9075} from "date-fns"
export default function Post({tittle, summary, content, cover, createdAt, author}) {

    return (
        <div className="post">
        <div className="image">
          <img src={"http://localhost:4000/"+cover} alt=""></img>
        </div>
        <div className="text">
        <h2>{tittle}</h2>
          <p>{summary}</p>
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
        </div>
      </div>
    );
}