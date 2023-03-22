

const FormRow = ({type, name, value, handleChange, labelText}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
       {labelText ||  name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        //if later there is a problem ..check the naming handleChange
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
}

export default FormRow;