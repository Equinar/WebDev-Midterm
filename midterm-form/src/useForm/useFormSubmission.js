export function useFormSubmission(onSubmit) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit();
    };
  
    return handleSubmit;
  }
  