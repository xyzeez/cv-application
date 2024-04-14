import heroImg from '../assets/project-app-screenshot.png';

// Components
import Button from './button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Start = () => {
  return (
    <section className=" flex flex-col gap-20  py-32 sm:py-36 lg:py-56 px-auto text-center pt-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-4xl text-blue-600 text-balance sm:text-6xl">
          Design Your CV seamlessly in Minutes
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-0  mt-6  leading-8 text-gray-600">
          Your dream CV is a click away with QuickCV. It&apos;s fast, easy, and
          the first step towards your dream career. Ready to kickstart your
          professional journey?
        </p>
        <div className="mt-10">
          <Button reverse={true} size="lg" Icon={ArrowRightIcon}>
            Start designing your CV
          </Button>
        </div>
      </div>
      <div className="rounded-xl lg:rounded-2xl p-2 lg:p-4 -m-2 lg:m-4 bg-blue-900 bg-opacity-5 ring-1">
        <img src={heroImg} alt="" className="rounded-md lg:rounded-xl ring-1" />
      </div>
    </section>
  );
};

export default Start;
