import React from "react";
import './Form.css'

const Form = () => {
    return(
        <div>
            <form>
                <input type="text" id="username" name="username" placeholder="User name" />

                <input type="email" id="email" name="email" placeholder="E-mail" />

                <button>Submit</button>
            </form>
        </div>
    )
}


export default Form