import { Link, NavLink, useLocation } from "react-router-dom";

import { INavLink } from "@/types";
import { sidebarLinks } from "@/constants";
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";


const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { user } = useUser();

  return (
    <nav className="hidden h-screen md:flex px-6 py-10 flex-col justify-between min-w-[270px] bg-black text-white">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>

        <Link to={`/profile`} className="flex gap-3 items-center">
          <img
            src={"/assets/icons/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{user?.fullName}</p>
            <p className="text-sm text-gray-500">
              {user?.emailAddresses[0].emailAddress}
            </p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`rounded-lg base-medium hover:bg-violet-500 transition group ${
                  isActive && "bg-violet-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert group-hover:brightness-0 group-hover:transition; ${
                      isActive && "invert brightness-0 transition"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <UserButton />
    </nav>
  );
};

export default LeftSidebar;
