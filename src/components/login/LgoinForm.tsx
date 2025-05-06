import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/AuthContext";
import { Label } from "../ui/label";

type LoginFormInputs = {
  username: string;
  password: string;
};

const LgoinForm = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>({
    defaultValues: {
      username: "react@test.com",
      password: "playful009",
    },
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    await login(data.username, data.password);
    navigate("/dashboard");
  };
  return (
    <div className="dark:bg-slate-800 w-full h-full flex flex-col justify-center p-6 lg:rounded-r-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 mx-auto md:w-96 "
      >
        <h1 className="text-5xl font-bold text-center mb-12">Login</h1>
        <Label htmlFor="username">Enter Your Username</Label>
        <Input {...register("username")} placeholder="Username" />
        <Label htmlFor="username">Enter Passworde</Label>
        <Input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LgoinForm;
