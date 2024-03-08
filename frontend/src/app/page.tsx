"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Sign in as {session.user!.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Not sign in</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </main>
  );
}
