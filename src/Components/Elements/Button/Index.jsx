const Button = (props) => {
    const { children = "Button", classname = "bg-blue-700" } = props ;
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white hover:opacity-90`}>
        {children}
      </button>
    )
  };

  export default Button;