import UserCardSkeleton from "@/skeletons/user-card-skeleton";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const Github = () => {
  const Contributions = dynamic(
    () => import("@/components/github/contributions"),
    {
      loading: () => <Loader2 className="w-5 h-5 animate-spin mx-auto" />,
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
