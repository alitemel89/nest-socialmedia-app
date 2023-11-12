import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
const Topbar = () => {
  return (
    <section className="sticky md:hidden top-0 z-50 bg-red-500 w-full">
      <div className="flex justify-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <UserButton />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
