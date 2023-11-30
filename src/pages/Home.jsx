import React from 'react'
import ResumeLink from '../components/ResumeLink';
import CandidateDetails from '../components/CandidateDetails';
import BmiCalculator from '../components/BmiCalculator';

export default function Home() {
  let array=[<CandidateDetails/>, <ResumeLink/>, <BmiCalculator/>]

  return (
    <div>
      {
        array.map((x) => {
        return(
      <section key={x}>{x}</section>
        )})
      }          
    </div>
  );
}