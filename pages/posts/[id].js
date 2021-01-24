import Head from 'next/head'
import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default function Post(props) {
    return (
        <Layout>
            <Head>
                <title>{props.postData.title}</title>
            </Head>
            {props.postData.title}
            <br />
            {props.postData.id}
            <br />
            {props.postData.date}
        </Layout>
    )
}