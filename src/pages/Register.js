import { useState, useEffect } from "react";
import { Logo,FormStudent } from "../components";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: '',
  email: '',
  password: '',
  isStudent: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const {user, isLoading} = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const allInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`)
    setValues({...values, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, password, isStudent} = values;
    if(!email || !password || (!isStudent && !name)){
     toast.error('Not you Yorick!!')
     return;
    }
    if(isStudent){
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }))
  }

  const toggleStudent = () => {
     setValues({...values, isStudent: !values.isStudent })
  }

  useEffect(() => {
     if(user){
      setTimeout(() => {
        navigate('/')
      },2000)
     }
  },[user])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3> {values.isStudent ? 'Login' : 'Register'} </h3>
        {!values.isStudent && (
          <FormStudent
            type='text'
            name='name'
            value={values.name}
            allInput={allInput}
          />
        )}
        <FormStudent
          type='email'
          name='email'
          value={values.email}
          allInput={allInput}
        />
        <FormStudent
          type='password'
          name='password'
          value={values.password}
          allInput={allInput}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
         {isLoading ? 'loading...' : 'submit' }
        </button>
        <p>
         {values.isStudent? 'Not a student @ Spice ?' : 'Already a Student ?'}
          <button type='button' onClick={toggleStudent} className="member-btn">
            {values.isStudent ? 'Register' : 'Login'}
          </button>
        </p>
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
    color: #a32eff;
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Register