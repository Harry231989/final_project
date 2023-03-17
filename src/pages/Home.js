import logo from "../assets/images/Spice.png"
import adrian  from "../assets/images/Adrian.jpg"
import styled from 'styled-components';


 const Home = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='Spice Student Job' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            spice <span>student</span> app
          </h1>
          <p>
            Hi there!!! My name is Adrian and I know am handsome, which makes
            girls like me a lot. But am focus about my future and took this
            Bootcamp at Spice ... Really helped me a lot. In short, a good
            developer is someone who is passionate about their work, dedicated
            to their craft, and always looking for ways to improve. They are the
            backbone of any successful tech company and are essential to
            building the products and services that we rely on every day.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={adrian} alt='Spice Student App' className='img main-img' />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: #57feff;
    }
  }
  p{
    color: var(--grey-600);
  }
  .main-img{
    display: none;
  }
  @media (min-width: 992px) {
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img{
        display: block;
    }
  }
`;

export default Home