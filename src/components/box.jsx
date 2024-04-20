const Box = ({ containerStyle, children }) => {
  return (
    <div className={`w-sys px-sys mx-auto ${containerStyle}`}>{children}</div>
  );
};

export default Box;
