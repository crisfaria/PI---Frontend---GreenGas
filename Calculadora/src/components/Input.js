const Input = ({ id, name, value, onChange, className }) => {
    return (
      <input
        type="number"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`border p-2 w-full ${className}`}
        required
      />
    );
  };
  
  export default Input;
  