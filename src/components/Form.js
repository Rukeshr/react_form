import React from "react";
import './Form.css'
import { useForm } from 'react-hook-form';

const Form = () => {
    const form = useForm({
        // defaultValues: async () => {
        //     const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        //     const data = await response.json();
        //     return{
        //         username: data.name,
        //         email: data.email
        //     }
        // } This is fetch a data from api and display on the field.
        defaultValues: {
            username: "Rukesh",
            email: "rukesh@help.com"
        }
    });
    const { register, handleSubmit, formState } = form // This method allows you to register an input or select element and apply validation rules to React Hook Form .register will track the form states such as onChange, onBlur, name, ref
    const { errors } = formState;
    const onSubmit = (data) => {
        console.log('submitted', data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input type="text" id="username" {...register("username", {
                    required: { value: true, message: "Username is required" }
                })} placeholder="User name" /> {/* uses the spread operator to pass the register method to the input fields as props. The register method is used to track the state of the form elements such as onChange, onBlur, name, ref, and to apply validation rules to the form. */}
                <p className="error">{errors.username?.message}</p>
                <input type="email" id="email" {...register("email", {
                    pattern: { 
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
                        message: "Invalid email!" 
                    },  
                    validate: {
                        notAdmin: (fieldValue) => {
                        return (fieldValue !== "admin@example.com" || "Enter different email address");
                    }
                }})} placeholder="E-mail" />
                <p className="error">{errors.email?.message}</p>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default Form