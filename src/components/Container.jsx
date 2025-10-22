const Container = ({ className = '', children }) => (
  <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
    {children}
  </div>
);

export default Container;
