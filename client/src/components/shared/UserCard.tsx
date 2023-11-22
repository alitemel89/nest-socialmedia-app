import { Link } from "react-router-dom";

import { Button } from "../ui/button";
import { UserProperties } from "@/types";

type UserCardProps = {
  user: UserProperties;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link
      to={`/profile/${user.id}`}
      className="flex justify-center flex-col gap-4
       border border-slate-100 rounded-[20px] px-5 py-8"
    >
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="creator"
        className="rounded-full w-14 h-14"
      />

      <div className="flex justify-center flex-col gap-1">
        <p className="text-gray-200 text-center line-clamp-1">
          {user.fullName}
        </p>
      </div>

      <Button type="button" size="sm" className="text-white bg-primary px-5">
        Follow
      </Button>
    </Link>
  );
};

export default UserCard;
