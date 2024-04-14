import { StarIcon } from '@heroicons/react/24/outline';

// Components
import Button from './button';

const Form = ({ relativeStyle }) => {
  return (
    <div className={`${relativeStyle} font-inherit`}>
      The quick brown fox jumps over the lazy dog.
      <Button Icon={StarIcon}>Button text</Button>
    </div>
  );
};

export default Form;
