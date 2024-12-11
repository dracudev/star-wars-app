import React from "react";
import { loginUser } from "../../../firebase/authActions";
import useAuthForm from "../../../hooks/useAuthForm";
import { Button } from "../../../components/shadcn-ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/shadcn-ui/form";
import { Input } from "../../../components/shadcn-ui/input";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Login: React.FC = () => {
  const { form, onSubmit, error, loading } = useAuthForm(loginUser);

  return (
    <div className="mt-5 flex flex-col items-center justify-center bg-transparent p-4">
      <h1 className="mb-4 font-starjedi text-2xl text-white">Welcome back</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 text-black"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <p className="mt-4 flex items-center justify-center text-zinc-400">
              {error}
            </p>
          )}
          <Button
            type="submit"
            className="text-md mt-2 items-center justify-center bg-zinc-800 transition-colors duration-300 hover:bg-orange-700"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : "Login"}
          </Button>
          <Link to="/signup">
            <p className="text-white">Dont have an account? Create one!</p>
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default Login;
