import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Link from "next/link";

export const metadata = {
  title: "Blogia||Blogs",
  description: "This is host of blogs",
};

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, { cache: 'no-store' });
  // console.log(res);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => {
        return (
          <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
            <div className={styles.imgConatiner}>
              <Image
                src={item.img}
                alt=""
                height={250}
                width={400}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
