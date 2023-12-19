"use client";
import FollowRecommend from "@/app/(afterLogin)/_components/FollowRecommend";

const users = [
  {
    id: "elonmusk1",
    nickname: "Elon Musk",
    image: "/logo.png",
  },
  {
    id: "elonmusk2",
    nickname: "Elon Musk",
    image: "/logo.png",
  },
  {
    id: "elonmusk3",
    nickname: "Elon Musk",
    image: "/logo.png",
  },
];
export default function FollowRecommendSection() {
  return users?.map((user) => <FollowRecommend user={user} key={user.id} />);
}
