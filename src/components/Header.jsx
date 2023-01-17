import "./Header.css";

function Header() {
  return (
    <>
      <div className="HeaderBox">
        <h1 className="TitleBox">ROCK PAPER SCISSORS</h1>
        <div className="ScoreBox">
          <p className="ScoreTitle">SCORE</p>
          <Score score="0" />
        </div>
      </div>
    </>
  );
}

export function Score({ score, count }) {
  count = 0;
  return (
    <>
      <div className="ScoreCount">
        <p>{score}</p>
      </div>
    </>
  );
}

export default Header;
