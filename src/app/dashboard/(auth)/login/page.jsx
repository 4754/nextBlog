"use client"
import React from 'react'
import {signIn, useSession} from 'next-auth/react'
import styles from './page.module.css'
import Google from 'next-auth/providers/google'
import Button from '@/components/button/Button'
import { useRouter } from 'next/navigation'

const Login = () => {

  const session = useSession();
  const router = useRouter();

  if(session.status === "loading"){
    return <p>Loading...</p>;
  }
  if(session.status === "authenticated"){
    router?.push('/dashboard');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email= e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {email, password});
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {/* {error && "Something went wrong!"} */}
      </form>
       <button className={styles.button} onClick={()=> signIn("google")}>Sign In with Google</button>
    </div>
  )
}

export default Login;