export const Persons = ({ filteredData, deletefunc }) => {
  return (
    <>
      {filteredData.length !== 0 && (
        <div>
          {filteredData.map((person) => (
            <p key={person.name}>
              {person.name} {person.number} <button onClick={() => {deletefunc(person.id, filteredData, person.name)}}> Delete</button>
            </p>
          ))}
        </div>
      )}
    </>
  );
};
