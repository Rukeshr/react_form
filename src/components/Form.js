import React from "react";
import './Form.css'
import { useForm } from 'react-hook-form';

const Form = () => {
    const form = useForm()
    const { register, handleSubmit }  = form // This method allows you to register an input or select element and apply validation rules to React Hook Form .register will track the form states such as onChange, onBlur, name, ref
    
    const onSubmit = (data) => {
        console.log('submitted', data);
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                { <input type="text" id="username" {...register("username")} placeholder="User name" /> /* uses the spread operator to pass the register method to the input fields as props. The register method is used to track the state of the form elements such as onChange, onBlur, name, ref, and to apply validation rules to the form. */}

                <input type="email" id="email" {...register("email")} placeholder="E-mail" />

                <button>Submit</button>
            </form>
        </div>
    )
}


export default Form