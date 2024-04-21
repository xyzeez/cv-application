import { useState, useEffect, useRef } from 'react';
import { observeSize } from '../utils';

const rootWidth = document.getElementById('root').clientWidth;
const hDerivation = 141.43 / 100;
const pDerivation = 5.71 / 100;

const Resume = () => {
  const [resumeWidth, setResumeWidth] = useState(rootWidth);
  const resumeDOM = useRef(null);

  useEffect(() => {
    observeSize(resumeDOM.current, setResumeWidth);
  }, []);

  return (
    <section
      ref={resumeDOM}
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
