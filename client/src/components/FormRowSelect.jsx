const FormRowSelect = ({name, labelText, list, defaultValue = "", onChange}) => {
  return (
      <div className="form-row mb-3">
          <label htmlFor="name" className="form-label text-capitalize">
              {labelText || name}
          </label>
          <select
              name={name}
              id={name}
              className="form-select"
              defaultValue={defaultValue}
              onChange={onChange}
          >
              {list.map((itemValue) => {
                  return (
                      <option className="text-capitalize"  key={itemValue} value={itemValue}>
                          {itemValue}
                      </option>
                  );
              })}
          </select>
      </div>
  );
};
export default FormRowSelect;
