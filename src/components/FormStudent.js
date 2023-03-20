import React from 'react'

const FormStudent = ({type, name, value, allInput, labelText}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
       {name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={allInput}
        className='form-input'
      />
    </div>
  );
}

export default FormStudent