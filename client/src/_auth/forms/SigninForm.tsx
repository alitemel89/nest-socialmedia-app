import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";

import { SigninValidation } from "@/lib/validation";

const SigninForm = () => {
  const isLoading = true;

  // Query

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
  //     const session = await signInAccount(user);

  //     if (!session) {
  //       toast({ title: "Login failed. Please try again." });

  //       return;
  //     }

  //     const isLoggedIn = await checkAuthUser();

  //     if (isLoggedIn) {
  //       form.reset();

  //       navigate("/");
  //     } else {
  //       toast({ title: "Login failed. Please try again.", });

  //       return;
  //     }
  //   };

  return (
    <Form {...form}>
      <div className="flex justify-center flex-col text-white">
        <div className="mx-auto">
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <div>
          <h2 className="text-white text-center text-2xl font-bold pt-4">
            Hesabınıza Giriş Yapınız.
          </h2>
        </div>
        <form
          //   onSubmit={form.handleSubmit(handleSignin)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">E-posta</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
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
                <FormLabel className="shad-form_label">Şifre</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {isLoading ? (
              <div className="flex gap-2">
                Giriş Yapılıyor <Loader />
              </div>
            ) : (
              "Kayıt Ol"
            )}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Hesabınız yok mu?
            <Link
              to="/sign-up"
              className="text-primary-500 ml-1 text-violet-400 font-semibold"
            >
              Kayıt Ol
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
