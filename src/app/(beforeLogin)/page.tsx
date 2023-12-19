import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import cx from "classnames";

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={Logo} alt="Logo" height={900} />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link
          href="/i/flow/signup"
          className={cx(styles.signup, styles.button)}
        >
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login" className={cx(styles.login, styles.button)}>
          로그인
        </Link>
      </div>
    </>
  );
}
