import React from "react";
import { signUpUser } from "../../../firebase/authActions";
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

const SignUp: React.FC = () => {
  const { form, onSubmit, error, loading } = useAuthForm(signUpUser);

  return (
    <div className="mt-5 flex flex-col items-center justify-center bg-[#0c0c0c] p-4">
      <h1 className="mb-4 font-starjedi text-2xl text-white">Welcome Abroad</h1>
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
            className="text-md mt-2 items-center justify-center bg-zinc-800 hover:bg-orange-700"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
