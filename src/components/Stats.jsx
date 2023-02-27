const Stats = ({ reset, tipAmount, total }) => {
  return (
    <div className="stats">
      <div className="stats-container tip-amount">
        <p className="stats-para">
          <span className="bold">Tip Amount</span> / person
        </p>
        <p className="tip-amount-value">
          ${tipAmount === Infinity || isNaN(tipAmount) ? 0 : tipAmount}
        </p>
      </div>
      <div className="stats-container total">
        <p className="stats-para">
          <span className="bold">Total</span> / person
        </p>
        <p className="total-value">
          ${total === Infinity || isNaN(tipAmount) ? 0 : total}
        </p>
      </div>
      <button
        className="reset"
        type="button"
        onClick={(e) => reset(e)}
        disabled={!tipAmount}
      >
        Reset
      </button>
    </div>
  );
};

export default Stats;
