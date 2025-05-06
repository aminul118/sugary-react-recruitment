/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/AuthContext";
import { Label } from "../ui/label";
import { toast } from "react-toastify";

type LoginFormInputs = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      username: "react@test.com",
      password: "playful009",
    },
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data.username, data.password);
      toast.success("Successfully logged in");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="dark:bg-slate-800 w-full h-full flex flex-col justify-center p-6 lg:rounded-r-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 mx-auto md:w-96"
      >
        <h1 className="text-5xl font-bold text-center mb-12">Login</h1>

        <Label htmlFor="username">Enter Your Username</Label>
        <Input
          id="username"
          {...register("username", { required: "Username is required" })}
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}

        <Label htmlFor="password">Enter Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
