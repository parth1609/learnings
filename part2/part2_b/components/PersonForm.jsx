import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  handlenewperson,
  newNumber,
  handlenewNumber,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handlenewperson} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handlenewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
