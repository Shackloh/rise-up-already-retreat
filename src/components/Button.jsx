const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyles = 'font-bold py-3 px-6 rounded-lg transition inline-block';
  const variants = {
    primary: 'bg-gold-500 hover:bg-gold-600 text-forest-900',
    secondary: 'border-2 border-forest-500 text-forest-500 hover:bg-forest-50',
    light: 'bg-white hover:bg-gray-100 text-forest-900'
  };
  return <button className={`${baseStyles} ${variants[variant]}`} {...props}>{children}</button>;
};
export default Button;
