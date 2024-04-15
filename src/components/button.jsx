const Button = ({
  type,
  variant,
  color,
  size,
  Icon,
  responsive,
  reverse,
  children,
}) => {
  const generalClasses = `
  ${reverse ? 'flex-row-reverse' : 'flex-row'} 
  rounded-lg shadow-sm inline-flex justify-center items-center font-inter font-medium text-center text-base leading-6 focus:ring-4 dark:focus:ring-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-in-out duration-150`;

  const sizes = {
    sm: 'px-4 py-2',
    md: 'px-4 py-2.5',
    lg: 'px-5 py-3',
  };

  const variants = {
    pry: {
      light:
        'text-white bg-blue-600 hover:bg-blue-700 bg-opacity-100 focus:ring-blue-300',
      dark: 'text-white bg-white bg-opacity-10 border border-[transparent] hover:border-white/50 focus:ring-white',
    },
    sec: {
      light:
        'bg-white text-gray-500 hover:bg-gray-600 border border-gray-300 focus:ring-gray-300',
      dark: 'bg-[transparent] text-white border border-white',
    },
  };

  return (
    <button
      type={type ? type : 'button'}
      className={`${generalClasses} ${sizes[size ? size : 'md']} 
      ${variants[variant ? variant : 'pry'][color ? color : 'light']}`}
      aria-label={children}>
      {Icon && (
        <Icon
          className={`text-inherit size-5 ${
            responsive ? (reverse ? 'max-md:-ml-1.5' : 'max-md:-mr-1.5') : ''
          }
          ${reverse ? 'ml-2 -mr-1' : '-ml-1 mr-2'}`}></Icon>
      )}
      <span className={`${Icon && responsive ? 'hidden md:block' : ''}`}>
        {children}
      </span>
    </button>
  );
};

export default Button;
