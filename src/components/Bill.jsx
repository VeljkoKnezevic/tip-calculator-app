const Bill = ({ handleInputs, bill }) => {
  return (
    <>
      <h2 className="bill">Bill</h2>

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
