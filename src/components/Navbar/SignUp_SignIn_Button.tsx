import { SignUp_SignIn_ButtonTypes } from "./Interfaces";

const SignUp_SignIn_Button = ({ text, classes }: SignUp_SignIn_ButtonTypes) => {
  return <button className={`btn py-2 px-8 ${classes}`}>{text}</button>;
};

export default SignUp_SignIn_Button;
