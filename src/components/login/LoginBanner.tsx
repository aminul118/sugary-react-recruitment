import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/login-register.json";
const LoginBanner = () => {
  return (
    <div className="bg-slate-400 lg:rounded-l-lg">
      <Lottie animationData={groovyWalkAnimation} loop={true} />
    </div>
  );
};

export default LoginBanner;
