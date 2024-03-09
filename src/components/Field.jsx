function Field({
  id,
  type = "text",
  name,
  value,
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
        marginTop: "6px"
      }}
    >
      <label htmlFor={id}>{name} {required ? '*' : null}</label>
      <input
        type={type}
        id={id}
        value={value}
        data-id={formId}
        required={required}
        onChange={onInputChange}
      />
    </div>
  );
}

export default Field;
