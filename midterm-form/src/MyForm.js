import React from 'react';
import { useFormState } from './useForm/useFormState';
import { useFormSubmission } from './useForm/useFormSubmission';
import FormField from './components/FormField';
import FormButton from './components/FormButton';

function MyForm() {
  const initialState = {
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  };

  const { formData, handleInputChange, resetForm } = useFormState(initialState);
  const handleSubmit = useFormSubmission(() => {
    alert(JSON.stringify(formData, null, 2));
    resetForm();
  });

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <FormField
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <FormField
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <FormField
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
        />
        <FormField
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price"
        />

        <FormButton type="submit" label="Submit" className="submit-button" />
        <FormButton type="button" label="Cancel" onClick={resetForm} className="cancel-button" />
      </form>
    </div>
  );
}

export default MyForm;
