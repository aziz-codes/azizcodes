"use client";
import AvatarLoader from "@/components/avatar-loader";
import UserCardSkeleton from "@/skeletons/user-card-skeleton";

import dynamic from "next/dynamic";

const Github = () => {
  const Contributions = dynamic(
    () => import("@/components/github/contributions"),
    {
      loading: () => <AvatarLoader />,
      ssr: false,
    }
  );
  const UserCard = dynamic(() => import("@/components/github/user-card"), {
    loading: () => <UserCardSkeleton />,
    ssr: false,
  });
  return (
    <div className="flex flex-col  space-y-4 w-full px-3 mt-3">
      <UserCard />
      <Contributions />
    </div>
  );
};

export default Github;
