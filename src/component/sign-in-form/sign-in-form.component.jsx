import { useState } from "react"
import { useDispatch } from "react-redux"

import FormInput from "../form-input/form-input.component"
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action"
import { Button, BUTTON_TYPE_CLASS } from "../button/button.component"



const initialFormFields = {
    email: "",
    password: "",
}

const SignIn = () => {

  const dispatch = useDispatch()

  const [ formFields, setFormFields ] = useState( initialFormFields )
  const { email, password } = formFields

  const resetForm = () => {
    setFormFields( initialFormFields )
    }

  const signInWithGoogle = async () => {
    dispatch( googleSignInStart() )
  }



  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields( { ...formFields, [ name ]: value } )
  }
  


  const handleSubmit = async (event) => {
    event.preventDefault()

    try
    {
      dispatch( emailSignInStart( email, password ) )
      resetForm()
      
    } catch ( error )
    {
      switch (error.code) {
        case "auth/user-not-found":
          alert( "no user associated to this email address" )
          break;
        case "auth/wrong-password":
          alert( "incorrect password for this email address" )
          break;
        default:
          alert( "Please sign up first or use google sign in" )
      }
    }
  }

  
  return (
    <div className="flex flex-col w-96">
        <h2 className="my-2 text-2xl font-black">I already have an account</h2>
        <span className="text-lg font-bold">Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput label="Email" required type="email" name="email" onChange={handleChange} value={email} />
          <FormInput label="Password" required type="password" name="password" onChange={handleChange} value={password} />
          <div className="flex space-x-3 md:justify-between mt-4">
            <Button className={`${BUTTON_TYPE_CLASS.base}`} type="submit">Sign in</Button>
            <button type="button" className={`${BUTTON_TYPE_CLASS.base} ${BUTTON_TYPE_CLASS.google}`} onClick={signInWithGoogle}>
            sign in with Google
            </button>
          </div>
        </form>
    </div>
  )
}

export default SignIn
