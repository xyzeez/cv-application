// Components
import Button from '../components/button';

const Steps = () => {
  return (
    <ol className="flex flex-wrap sm:justify-between gap-x-2 gap-y-4  items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  rtl:space-x-reverse">
      <li className="grow shrink flex items-center text-blue-600 ">
        <span className="flex mr-4 items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 ">
          1
        </span>
        Personal
        <svg
          className="w-3 h-3 ms-[20%] lg:ms-[10%] rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li className="grow shrink flex items-center">
        <span className="flex mr-4 items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 ">
          2
        </span>
        Experience
        <svg
          className="w-3 h-3 ms-[20%] lg:ms-[10%] rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li className="grow shrink flex items-center">
        <span className="flex mr-4 items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 ">
          3
        </span>
        Education
        <svg
          className="w-3 h-3 ms-[20%] lg:ms-[10%] rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li className="grow shrink flex items-center">
        <span className="flex mr-4 items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 ">
          4
        </span>
        Others
      </li>
    </ol>
  );
};

const FieldBox = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">{children}</div>
  );
};

const FormField = ({ label, type, placeholder }) => {
  const id = label.toLowerCase().replace(/\s+/g, '-');

  const inputStyle =
    'w-full mt-2 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

  return (
    <div className="flex flex-col items-start w-full">
      <label
        htmlFor={id}
        className="text-base font-medium leading-6 text-gray-900">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          aria-errormessage={`${id}-error`}
          placeholder={placeholder ? placeholder : ''}
          rows="3"
          className={inputStyle}
        />
      ) : (
        <input
          type={type ? type : 'text'}
          id={id}
          name={id}
          aria-errormessage={`${id}-error`}
          placeholder={placeholder ? placeholder : ''}
          className={inputStyle}
        />
      )}
      <p id={`${id}-error`} aria-live="polite" className="mt-2 text-sm hidden">
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

const PersonalData = () => {
  return (
    <div className="p-4">
      <div className="pb-2 border-b">
        <h2 className="text-xl font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mb-2 mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div className="flex flex-col gap-4 items-start py-4">
        <FieldBox>
          <FormField label={'First Name'} />
          <FormField label={'Last Name'} />
        </FieldBox>

        <FieldBox>
          <FormField label={'Professional Title'} />
        </FieldBox>

        <FieldBox>
          <FormField
            type="textarea"
            label={'About'}
            placeholder={'e.g Professional UI/UX Designer with 3 years...'}
          />
        </FieldBox>

        <FieldBox>
          <FormField label={'Phone Number'} />
          <FormField label={'Email'} type={'email'} />
        </FieldBox>

        <FieldBox>
          <FormField label={'Address'} />
        </FieldBox>

        <FieldBox>
          <FormField
            label={'Languages'}
            placeholder={'e.g English, Arabic, Yoruba'}
          />
        </FieldBox>
        <div className="flex flex-row items-center justify-end gap-4 w-full mt-2">
          {/* <Button variant="sec">
            Continue
          </Button> */}
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

const ExperienceData = () => {
  return (
    <div className="p-4">
      <div className="pb-2 border-b">
        <h2 className="text-xl font-semibold leading-7 text-gray-900">
          Work Experience
        </h2>
        <p className="mb-2 mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div className="flex flex-col gap-4 items-start py-4">
        <FieldBox>
          <FormField label={'Company'} />
          <FormField label={'Duration'} placeholder={'2018 - Present'} />
        </FieldBox>

        <FieldBox>
          <FormField label={'Job Title'} />
        </FieldBox>

        <FieldBox>
          <FormField
            type="textarea"
            label={'Job Description'}
            placeholder={'e.g Professional UI/UX Designer with 3 years...'}
          />
        </FieldBox>

        <FieldBox>
          <FormField
            type="textarea"
            label={'Achievements'}
            placeholder={'Seperate with comma'}
          />
        </FieldBox>
        <div className="flex flex-row items-center justify-end gap-4 w-full mt-2">
          <Button variant="sec">Previous</Button>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

const EducationData = () => {
  return (
    <div className="p-4">
      <div className="pb-2 border-b">
        <h2 className="text-xl font-semibold leading-7 text-gray-900">
          Education
        </h2>
        <p className="mb-2 mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div className="flex flex-col gap-4 items-start py-4">
        <FieldBox>
          <FormField label={'Institution'} />
          <FormField label={'Duration'} placeholder={'2018 - 2020'} />
        </FieldBox>

        <FieldBox>
          <FormField label={'Certificate'} />
        </FieldBox>

        <div className="flex flex-row items-center justify-end gap-4 w-full mt-2">
          <Button variant="sec">Previous</Button>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

const OthersData = () => {
  return (
    <div className="p-4">
      <div className="pb-2 border-b">
        <h2 className="text-xl font-semibold leading-7 text-gray-900">
          Others
        </h2>
        <p className="mb-2 mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div className="flex flex-col gap-4 items-start py-4">
        <FieldBox>
          <FormField label={'Section Title'} />
        </FieldBox>

        <FieldBox>
          <FormField
            label={'Section Items'}
            type={'textarea'}
            placeholder={'seperate items with comma'}
          />
        </FieldBox>

        <div className="flex flex-row items-center justify-end gap-4 w-full mt-2">
          <Button variant="sec">Previous</Button>
          <Button type="submit">Save</Button>
        </div>
      </div>
    </div>
  );
};

const Form = ({ relativeStyle }) => {
  return (
    <form
      className={`${relativeStyle} shadow-form rounded-lg font-inherit  bg-white`}>
      <Steps />
      {/* <PersonalData /> */}
      {/* <ExperienceData /> */}
      {/* <EducationData /> */}
      <OthersData />
    </form>
  );
};

export default Form;
