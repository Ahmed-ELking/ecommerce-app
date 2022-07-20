import {useState} from "react"

import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword 
  } 
  from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"

const initialFormFields = {
    email: "",
    password: "",
}
const SignIn = () => {

  const [formFields, setFormFields] = useState(initialFormFields)
  const {email, password} = formFields

  const resetForm = () => {
        setFormFields(initialFormFields)
    }

  const signInWithGoogle = async () => {
    try {
      const {user} = await signInWithGooglePopup()
      await createUserDocumentFromAuth(user)
    } catch (error) {
      console.log("User creation encountered an error: ", error.message)
    }
  }

  const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
        const response = await signInAuthUserWithEmailAndPassword(email, password)
        console.log(response);
        resetForm()
    } catch (error) {
        switch (error.code) {
            case "auth/user-not-found":
                alert("no user associated to this email address")
                break;
            case "auth/wrong-password":
                alert("incorrect password for this email address")
                break;
            default:
                alert("Please sign up first or use google sign in")
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
            <button className="btn-primary" type="submit">Sign in</button>
            <button type="button" className="btn-primary bg-[#4285f4] text-white hover:bg-[#357ae8] hover:border-none" onClick={signInWithGoogle}>
            sign in with Google
            </button>
          </div>
        </form>
    </div>
  )
}

export default SignIn
