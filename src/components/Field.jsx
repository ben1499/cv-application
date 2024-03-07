function Field({
  id,
  type = "text",
  name,
  formId = "",
  required = false,
  onInputChange,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <label htmlFor={id}>{name} {required ? '*' : null}</label>
      <input
        type={type}
        id={id}
        data-id={formId}
        required={required}
        onChange={onInputChange}
      />
    </div>
  );
}

export default Field;
