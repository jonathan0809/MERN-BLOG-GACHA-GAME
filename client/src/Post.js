import Arknights from "./GachaGamesIcon/Arknights.png";
export default function Post(){
    return (
        <div className="post">
        <div className="image">
          <img src={Arknights} alt=""></img>
        </div>
        <div className="text">
        <h2>Gacha game: Arknights</h2>
          <p className="description">
            Arknights (Chinese: 明日方舟; pinyin: Míngrì Fāngzhōu; lit. 'Ark of
            Tomorrow') is a free-to-play tactical RPG/tower defense mobile game
            developed by Chinese developer Hypergryph.
          </p>
          <p className="info">
            <a className="author">Jonah</a>
            <time>25/01/2024 19:54</time>
          </p>
        </div>
      </div>
    );
}