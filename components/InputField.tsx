import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
}

/**
 * InputField component for rendering input fields with a label and error message.
 *
 * @param label - The label for the input field.
 * @param type - The type of the input field.
 * @param id - The id of the input field.
 * @param name - The name of the input field.
 * @param value - The current value of the input field.
 * @param onChange - The change event handler for the input field.
 * @param errorMessage - The error message to display if validation fails.
 * @param required - Whether the input field is required.
 * @returns A JSX element representing the input field.
 */
const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  errorMessage,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </div>
  );
};

export default InputField;
