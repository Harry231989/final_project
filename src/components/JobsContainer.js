import { useEffect } from "react";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";



const JobsContainer = () => {
  const { jobs,isLoading }  = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllJobs());
    }, []);


  if(isLoading){
    return (
      <Loading center/>
    )
  }
  

  if(jobs.length === 0){
    return (
        <Wrapper>
            <h2>No jobs now </h2>
        </Wrapper>
    )
  }


   return (
     <Wrapper>
       <h2>JobsContainer</h2>
       <div className="jobs">
          {jobs.map((job) => {
           
            return <Job key={job._id} {...job} />
          })}
       </div>
     </Wrapper>
   );
   
  
}


const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default JobsContainer