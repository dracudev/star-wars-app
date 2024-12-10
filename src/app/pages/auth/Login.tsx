import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
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

const Login: React.FC = () => {
  const { form, onSubmit, error, loading } = useAuthForm(loginUser);
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="mt-5 flex flex-col items-center justify-center bg-[#0c0c0c] p-4">
      <h1 className="font-starjedi mb-4 text-2xl text-white">Welcome back</h1>
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
          {error && <p className="mt-4 text-red-500">{error}</p>}
          <Button
            type="submit"
            className="text-md mt-2 items-center justify-center bg-zinc-800"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </Button>
          {user.isAuthenticated && (
            <p className="text-green-500">Logged in as {user.email}</p>
          )}
        </form>
      </Form>
    </div>
  );
};

export default Login;
