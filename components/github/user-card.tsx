"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, CalendarDays, MapPin } from "lucide-react";
interface GithubProps {
  loading: boolean;

  error: null | string;
}
interface UserProps {
  avatar: string;
  username: string;
  name: string;
  location: string;
  bio: string;
  repos: number;
  followers: number;
  following: number;
  joined: string;
}
const UserCard = () => {
  const [apiStatus, setApiStatus] = useState<GithubProps>({
    loading: false,
    error: null,
  });

  const [user, setUser] = useState<UserProps>();

  const username = "aziz-codes";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setApiStatus({ ...apiStatus, loading: true });
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();

        setApiStatus({ ...apiStatus, loading: false });
        const {
          avatar_url,
          login,
          name,
          created_at,
          public_repos,
          followers,
          following,
          bio,
          location,
        } = data;
        const obj = {
          avatar: avatar_url,
          username: login,
          name,
          joined: created_at,
          repos: public_repos,
          followers,
          following,
          bio,
          location,
        };
        setUser(obj);
      } catch (err) {
        console.log(err);
        setApiStatus({
          ...apiStatus,
          loading: false,
          error: "something went wrong",
        });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl px-3 py-3 rounded-sm my-4">
      <div className="w-full flex md:flex-row flex-col space-y-2 justify-between items-center ">
        <div className="flex items-center gap-3">
          <div>
            <Avatar className="h-28 w-28">
              <AvatarFallback className="capitalize">
                {user?.name.slice(0, 2)}
              </AvatarFallback>
              <AvatarImage src={user?.avatar} loading="lazy" />
            </Avatar>
          </div>
          <div className="flex flex-col">
            <h5 className="font-semibold">{user?.name}</h5>
            <p className="text-xs italic ">{user?.username}</p>
            <p className="w-auto max-w-xs line-clamp-5 md:line-clamp-3 text-[10px] text-muted-foreground">
              {user?.bio}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 justify-center md:justify-end">
          <div className="flex items-center space-x-2">
            <BookOpen className="text-gray-400 w-4 h-4" />
            <span className="text-[10px] text-gray-400">
              {user?.repos} Repos
            </span>
          </div>
          <div className="h-4 w-[1px] bg-gray-400 rounded-md"></div>
          <div className="flex items-center space-x-2">
            <MapPin className="text-gray-400 w-4 h-4" />
            <span className="text-[10px] text-gray-400">{user?.location}</span>
          </div>
        </div>
      </div>
      {/* first row completed here.. */}
      <div className="text-[10px] flex items-center space-x-2 my-2 mx-auto justify-center">
        <CalendarDays className="text-gray-400 w-4 h-4" />
        <span className="text-[10px] text-gray-400">
          {user?.joined.slice(0, user.joined.indexOf("T"))}
        </span>
      </div>
      <div className="flex justify-center text-[10px] space-x-4">
        <p>
          <span className="text-gray-400">{user?.followers}</span> followers
        </p>
        <p>
          <span className="text-gray-400">{user?.following}</span> following
        </p>
      </div>
    </div>
  );
};

export default UserCard;
