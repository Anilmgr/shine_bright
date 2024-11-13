const FormRow = ({type,name,labelText, defaultValue, onChange}) => {
    return (
        <div className="form-row mb-3">
            <label htmlFor={name} className="form-label text-capitalize">
                {labelText || name}
            </label>
            <input type={type} id={name} name={name} defaultValue={defaultValue} className="form-control" onChange={onChange}/>
        </div>
    );
}
export default FormRow;