import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

// Components
import Button from './button';
import Resume from './resume';
import Progress from './progress';

const Preview = ({ relativeStyle }) => {
  return (
    <section className={`${relativeStyle} flex flex-col gap-4`}>
      <div className="flex flex-row items-end justify-between gap-4">
        <div className="w-full flex flex-col gap-1">
          <p>Lorem ipsum dolor sit amet.</p>
          <Progress />
        </div>
        <Button Icon={ArrowDownTrayIcon} responsive={true}>
          Download
        </Button>
      </div>
      <div>
        <Resume />
      </div>
    </section>
  );
};

export default Preview;
