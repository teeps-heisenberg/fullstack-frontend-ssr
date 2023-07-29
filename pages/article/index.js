import React from 'react'
import Link from 'next/link'
import { getAllArticles } from '@/utils/api'

export async function getStaticProps() {
    const articles = await getAllArticles();
    return {
        props: {
            articles,
        },
        revalidate: 10,
    }
}


const ArticleListPage = ({ articles }) => {
    if (!articles) {
        return <p>Loading</p>;
    }
    return (
        <div>
            <nav>
                <ul>
                    <Link href='/user'>
                        <li>Users</li>
                    </Link>
                    <Link href='/article'>
                        <li>Articles</li>
                    </Link>
                </ul>
            </nav>
            <h2>All Articles</h2>
            {
                articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h4>{article.title}</h4>
                            <p>{article.content}</p>
                            <Link href={`article/${article.id}`}>
                                <button>
                                    View
                                </button>
                            </Link>
                            <Link href={`article/edit/${article.id}`}>
                                <button>
                                    Edit
                                </button>
                            </Link>
                            <Link href={`article/delete/${article.id}`}>
                                <button>
                                    Delete
                                </button>
                            </Link>
                            <hr />
                        </div>
                    );
                })
            }
            <Link href={`article/create`}>
                <button>
                    Create User
                </button>
            </Link>
        </div>
    )
}

export default ArticleListPage