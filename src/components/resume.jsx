import React from 'react';
import { useState, createRef } from 'react';
import { observeSize } from '../utils';

const rootWidth = document.getElementById('root').clientWidth;
const hDerivation = 141.43 / 100;
const pDerivation = 5.71 / 100;

const Resume = () => {
  const [resumeWidth, setResumeWidth] = useState(rootWidth);

  const useRefSize = (ref) => {
    React.useEffect(() => {
      if (ref.current) {
        const { current } = ref;
        observeSize(current, setResumeWidth);
      }
    }, [ref]);
  };

  const resumeRef = createRef();
  useRefSize(resumeRef);

  return (
    <section
      ref={resumeRef}
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
