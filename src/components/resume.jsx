import React from 'react';
import { useState, useEffect } from 'react';
import { observeSize } from '../utils';

const rootWidth = document.getElementById('root').clientWidth;
const hDerivation = 141.43 / 100;
const pDerivation = 5.71 / 100;

const Resume = () => {
  const [resumeWidth, setResumeWidth] = useState(rootWidth);

  useEffect(() => {
    const resumeDOM = document.querySelector('#resumeID');

    observeSize(resumeDOM, setResumeWidth);
  }, []);

  return (
    <section
      id="resumeID"
      style={{
        minHeight: resumeWidth * hDerivation,
        padding: resumeWidth * pDerivation,
      }}
      className={`grid grid-rows-1 grid-cols-1 w-full max-w-[21cm] shadow-resume bg-white`}>
      <div>contents</div>
    </section>
  );
};

export default Resume;
