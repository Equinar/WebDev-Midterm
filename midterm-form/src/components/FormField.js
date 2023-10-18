import React from 'react';

function FormField({ type, name, value, onChange, placeholder }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormField;
