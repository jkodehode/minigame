const PaperBox = () => {
  return (
    <div className="PaperBox SelectorBox" id="paper">
      <img src={PaperImg} alt="paper image" />
    </div>
  );
};

const ScissorBox = () => {
  return (
    <div className="ScissorBox SelectorBox" id="scissor">
      <img src={ScissorImg} alt="scissor image" />
    </div>
  );
};

const RockBox = () => {
  return (
    <div className="RockBox SelectorBox" id="rock">
      <img src={RockImg} alt="rock image" />
    </div>
  );
};
