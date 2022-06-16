import React from 'react';
import "./Form.css";
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      First name:
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      Last name
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      Email
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      Mobile number
      <input type="text" placeholder="Dog found Location" {...register("Dog found Location", {})} />
      Dog found Location
      <input type="submit" />
    </form>
  );
}
export default Form