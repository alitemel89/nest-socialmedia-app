import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);

    console.log(newUser)
  }
  
  return (
    <Form {...form}>
      <div className="flex justify-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>
      <div>
        <h2 className="text-white text-center text-2xl font-bold pt-4">
          Yeni bir hesap oluştur
        </h2>
        <p className="text-md text-slate-300 pt-4 mb-8">
          Snapgram'ı kullanmak için hesap oluşturunuz.
        </p>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 text-white"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>İsim</FormLabel>
              <FormControl className="w-80">
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kullanıcı Adı</FormLabel>
              <FormControl className="w-80">
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-posta</FormLabel>
              <FormControl className="w-80">
                <Input type="email" {...field} />
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
              <FormLabel>Şifre</FormLabel>
              <FormControl className="w-80 mb-4">
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isLoading ? (
            <div className="flex gap-2">
              Hesap oluşturuluyor <Loader />
            </div>
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-small-regular text-light-2 text-center mt-2">
          Zaten bir hesabınız mı var?
          <Link
            to="/sign-in"
            className="text-violet-400 font-semibold text-sm ml-1"
          >
            Giriş Yapınız.
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignupForm;
