const Button = ({ onClick, children, className }) => {
    return (
      <button onClick={onClick} className={`bg-green-600 text-white p-2 rounded ${className}`}>
        {children}
      </button>
    );
  };
  
  export default Button;
  