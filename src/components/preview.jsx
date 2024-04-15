import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

// Components
import Button from './button';
import Resume from './resume';

const Preview = ({ relativeStyle }) => {
  return (
    <section className={`${relativeStyle} flex flex-col gap-4`}>
      <div className="flex flex-row items-end justify-between gap-4">
        <div className="w-full">
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700">
            <div
              className="bg-blue-600 flex items-center justify-center text-xs font-medium text-blue-100 text-center p-0.5 py-1.5 leading-none"
              style={{ width: '45%' }}>
              <span>45%</span>
            </div>
          </div>
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
