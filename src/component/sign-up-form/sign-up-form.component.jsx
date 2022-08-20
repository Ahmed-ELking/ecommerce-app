import { useState } from "react"
import { useDispatch } from "react-redux"

import { signUpStart } from "../../store/user/user.action"
import FormInput from "../form-input/form-input.component"
import { Button, BUTTON_TYPE_CLASS } from "../button/button.component"


const initialFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUp = () => {

    const dispatch = useDispatch()

    const [ formFields, setFormFields ] = useState( initialFormFields )
    const { displayName, email, password, confirmPassword } = formFields

    const resetForm = () => {
        setFormFields( initialFormFields )
    }
    

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields( { ...formFields, [ name ]: value } )
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) { 
            alert("Password do not match")
            return;
        }
        try {
            dispatch( signUpStart( email, password, displayName ) )
            resetForm()

        } catch (error) {
            if (error.code === "auth/email-already-in-use") { 
                alert("Email already in use")
            } else { 
            console.log("User creation encountered an error: ", error.message)
            }
        }
    }
    
  return (
    <div className="flex flex-col w-96" >
      <h2 className="my-2 text-2xl font-black">Don't have an account</h2>
      <span className="text-lg font-bold">Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display your name" required type="text" name="displayName" onChange={handleChange} value={displayName} />

        <FormInput label="Email" required type="email" name="email" onChange={handleChange} value={email} />

        <FormInput label="Password" required type="password" name="password" onChange={handleChange} value={password} />

        <FormInput label="Confirm password" required type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword} />

        <Button className={`${BUTTON_TYPE_CLASS.base} mx-auto mb-3 mt-4`} type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp
