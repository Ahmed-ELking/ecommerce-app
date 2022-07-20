import SignUp from "../../sign-up-form/sign-up-form.component"
import SignIn from "../../sign-in-form/sign-in-form.component"


const Authentication = () => {

  return (
    <div className="container mx-4 md:mx-auto flex flex-col gap-4 md:flex-row md:justify-around md:gap-0">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
