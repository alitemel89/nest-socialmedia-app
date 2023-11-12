import { SignIn } from "@clerk/clerk-react";

export default function AuthLayout() {
  return (
    <div className="flex h-screen">
      <section
        className="flex flex-1 justify-center 
          items-center flex-col py-10 bg-black text-white"
      >
        <div className="mx-auto">
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <div>
          <h2 className="text-white text-center text-2xl font-bold pt-4 mb-4">
            Snapgram'a hoşgeldiniz.
          </h2>
        </div>
        <SignIn />
      </section>

      <img
        src="/assets/images/side-img.svg"
        alt="logo"
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
      />
    </div>
  );
}
