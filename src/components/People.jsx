const People = ({ handleInputs, people }) => {
  return (
    <>
      <div className="h2-container">
        <h2 className="people">Number of People</h2>
        <div className="error">Can't be zero</div>
      </div>
      <input
        onChange={handleInputs}
        value={people === 0 ? "" : people}
        className="people-input"
        placeholder="0"
        type="number"
      />
    </>
  );
};

export default People;
