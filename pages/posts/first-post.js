import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../../styles/home.module.css'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const FirstPost = ({ allPostsData }) => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${styles.headingMd} ${styles.padding1px}`}>
                <h2 className={styles.headingLg}>Blog</h2>
                <ul className={styles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={styles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
export default FirstPost;