import { getArticleById } from '@/utils/api';
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    const { articleId } = context.params;
    const article = await getArticleById(articleId);
    console.log(article);
    if (!article) {
        return {
            notFound: true, // Return a 404 page if user is not found
        };
    }

    return {
        props: {
            article,
        },
    };
}

const ArticleDetailPage = ({ article }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!article) {
        return <div>Article not found</div>;
    }


    return (
        <div>
            <h2>Article Details</h2>
            <h4>Id: {article.id}</h4>
            <h4>Title: {article.title}</h4>
            <h4>Content: {article.content}</h4>
            <hr />
            <h3>Author Details</h3>
            <h5>Author Id: {article.author.id}</h5>
            <h5>Username: {article.author.username}</h5>
            <h5>Email: {article.author.email}</h5>
            <Link href='/article'>
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default ArticleDetailPage