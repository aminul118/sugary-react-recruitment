import LgoinForm from "@/components/login/LoginForm";
import LoginBanner from "@/components/login/LoginBanner";

const Login = () => {
  return (
    <section className="h-screen flex flex-col  justify-center px-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-2 lg:px-0 justify-between max-w-5xl mx-auto lg:shadow-2xl lg:rounded-lg">
        <LoginBanner />
        <LgoinForm />
      </div>
    </section>
  );
};

export default Login;
