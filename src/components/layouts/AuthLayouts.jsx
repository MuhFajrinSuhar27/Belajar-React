
const AuthLayout = (props) => {
    const {children, title} = props;
    return (
        <div className="w-full max-w-xs">
          <h1 className="mb-2 text-3xl font-bold  text-blue-600">{title}</h1>
          <p1 className="font-medium text-slate-500"> welcome, Please enter your details  </p1>
        {children}
        
        </div>
    );
};

export default AuthLayout;