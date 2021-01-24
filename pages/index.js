import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        props.allPostsData.map((post) => {
          return (
            < li className={styles.listItem} key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a style={{ color: "black" }}>{post.title}</a>
              </Link>
            </li>
          )
        })
      }
    </div>
  )
}