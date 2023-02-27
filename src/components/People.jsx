const People = ({ handleInputs, people }) => {
  return (
    <>
      <h2 className="people">Number of People</h2>

      <input
        onChange={handleInputs}
        value={people === 0 ? "" : people}
        className="people-input"
        placeholder="0"
        type="number"
        step={1}
        min={1}
      />
    </>
  );
};

export default People;
