const Button = ({ onClick, icon: Icon, children, className = "" }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;