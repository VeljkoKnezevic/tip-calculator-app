const Tip = ({ tip, handleInputs, handleButton }) => {
  return (
    <>
      <h2 className="tip">Select Tip %</h2>
      <div className="tip-buttons">
        <button
          type="button"
          className="tip-button"
          value={5}
          onClick={handleButton}
        >
          5%
        </button>
        <button
          type="button"
          className="tip-button"
          value={10}
          onClick={handleButton}
        >
          10%
        </button>
        <button
          type="button"
          className="tip-button"
          value={15}
          onClick={handleButton}
        >
          15%
        </button>
        <button
          type="button"
          className="tip-button"
          value={25}
          onClick={handleButton}
        >
          25%
        </button>
        <button
          type="button"
          className="tip-button"
          value={50}
          onClick={handleButton}
        >
          50%
        </button>
        <input
          type="number"
          placeholder="Custom"
          value={tip === 0 ? "" : tip}
          onChange={handleInputs}
          className="custom"
        />
      </div>
    </>
  );
};

export default Tip;
