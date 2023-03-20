import { useState, useEffect } from "react";
import { Logo,FormStudent } from "../components";
import styled from "styled-components";

const initialState = {
  name: '',
  email: '',
  password: '',
  isStudent: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const allInput = (e) => {
    console.log(e.target);
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
         <Logo />
         <h3>Login</h3>
         <FormStudent type='text' name='name' value={values.name} allInput={allInput} />
         <FormStudent type='email' name='email' value={values.email} allInput={allInput} />
         <FormStudent type='password' name='password' value={values.password} allInput={allInput} />
         <button type="submit" className="btn btn-block">submit</button>
      </form>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid #a32eff;
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Register