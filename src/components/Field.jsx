function Field({ id, type="text", name, formId = "", onInputChange }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <label htmlFor={id}>{name}</label>
            <input type={type} id={id} data-id={formId} onChange={onInputChange} />
        </div>
    )
}

export default Field;