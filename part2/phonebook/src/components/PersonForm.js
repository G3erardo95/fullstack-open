export const PersonForm = ({
  onSubmit,
  nameValue,
  numberValue,
  handlerName,
  handlerNumber,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={nameValue} onChange={handlerName} />
      </div>
      <div>
        number:
        <input value={numberValue} onChange={handlerNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
