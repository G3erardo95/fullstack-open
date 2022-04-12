export const Persons = ({ filteredData }) => {
  return (
    <>
      {filteredData.length !== 0 && (
        <div>
          {filteredData.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))}
        </div>
      )}
    </>
  );
};
