const Bill = ({ handleInputs, bill }) => {
  return (
    <>
      <div className="h2-container">
        <h2 className="bill">Bill</h2>
        <p className="error">Can't be zero</p>
      </div>

      <input
        onChange={handleInputs}
        value={bill === 0 ? "" : bill}
        className="bill-input"
        placeholder="0"
        type="number"
        step={0.01}
      />
    </>
  );
};

export default Bill;
