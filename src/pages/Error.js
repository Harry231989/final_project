import { Link } from "react-router-dom";
import img from "../assets/images/Yorick.jpg";
import styled from 'styled-components';




const Error = () => {
  return (
    <Source className='full-page'>
      <div>
        <img src={img} alt='Go back' />
        <h3>😔😔😔!!Sorry Page not found</h3>
        <p>We really can't figure what you want!!!👀👀👀</p>
        <Link to='/'>Please Go Back</Link>
      </div>
    </Source>
  );
  
 
  
}

const Source = styled.main`
  text-align: center;
  img {
    width: 120vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: #a32eff;
    text-decoration: underline;
    text-transform: capitalize;
  }
`;


export default Error