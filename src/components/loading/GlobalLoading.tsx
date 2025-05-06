import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/loading-spiner.json";
const GlobalLoading = () => {
  return (
    <div className=" lg:rounded-l-lg ">
      <Lottie
        className="w-40 mx-auto h-screen flex-col justify-center items-center"
        animationData={groovyWalkAnimation}
        loop={true}
      />
    </div>
  );
};

export default GlobalLoading;
