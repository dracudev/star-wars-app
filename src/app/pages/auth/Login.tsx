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
    <div className="m-4 flex flex-col items-center justify-center rounded-xl border-2 border-solid border-white bg-white p-8 text-black sm:p-16">
      <h1 className="mb-8 text-center font-starjedi text-2xl">Welcome back</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center justify-center space-y-4 text-black invalid:bg-red-900"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full invalid:bg-red-900">
                <FormControl className="invalid:bg-red-900">
                  <Input
                    placeholder="Email"
                    {...field}
                    className="invalid:bg-red-900"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <p className="mt-4 text-center text-zinc-400">{error}</p>}
          <Button
            type="submit"
            className="text-md mt-2 bg-zinc-800 transition-colors duration-300 hover:bg-orange-700"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : "Login"}
          </Button>
          <Link to="/signup">
            <p className="mt-2 text-center transition-colors duration-300 hover:text-orange-700">
              Dont have an account? Create one!
            </p>
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default Login;
