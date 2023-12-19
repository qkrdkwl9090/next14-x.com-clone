import style from "./profile.module.css";
import Post from "@/app/(afterLogin)/_components/Post";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import Image from "next/image";
export default function Profile() {
  const user = {
    id: "qkrdkwl9090",
    nickname: "tony",
    image: "/logo.png",
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <Image src={user.image} alt={user.id} width={200} height={200} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
