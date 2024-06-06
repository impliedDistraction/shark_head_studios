import React, { useState } from 'react';
import InputField from './InputField'; // Adjust the import path as necessary

interface FormData {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

/**
 * ContactForm component for rendering a form with fields for name, email, address, and phone number.
 *
 * @param onSubmit - The callback function to handle form submission.
 * @returns A JSX element representing the contact form.
 */
const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  /**
   * Validates the form data.
   *
   * @returns A boolean indicating whether the form data is valid.
   */
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number (10 digits required)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles input field changes.
   *
   * @param e - The change event object.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Handles form submission.
   *
   * @param e - The form event object.
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  /**
   * Renders an input field.
   *
   * @param label - The label for the input field.
   * @param type - The type of the input field.
   * @param id - The id of the input field.
   * @param name - The name of the input field.
   * @param value - The current value of the input field.
   * @param errorMessage - The error message to display if validation fails.
   * @param required - Whether the input field is required.
   * @returns A JSX element representing the input field.
   */
  const renderInputField = (
    label: string,
    type: string,
    id: string,
    name: string,
    value: string,
    errorMessage?: string,
    required: boolean = false
  ): JSX.Element => {
    return (
      <InputField
        label={label}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        errorMessage={errorMessage}
        required={required}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderInputField("Name", "text", "name", "name", formData.name, errors.name, true)}
      {renderInputField("Email", "email", "email", "email", formData.email, errors.email, true)}
      {renderInputField("Address", "text", "address", "address", formData.address, errors.address, true)}
      {renderInputField("Phone Number", "tel", "phoneNumber", "phoneNumber", formData.phoneNumber, errors.phoneNumber, true)}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
