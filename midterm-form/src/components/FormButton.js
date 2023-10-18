import React from 'react';

function FormButton({ type, label, onClick, className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
}

export default FormButton;
