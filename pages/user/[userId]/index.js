// pages/users/details/[userId].js

import React from 'react';
import { useRouter } from 'next/router';
import { getUserById } from '@/utils/api';
import Link from 'next/link';

export async function getServerSideProps(context) {
    const { userId } = context.params;
    const user = await getUserById(userId);
    console.log(user);
    if (!user) {
        return {
            notFound: true, // Return a 404 page if user is not found
        };
    }

    return {
        props: {
            user,
        },
    };
}

const UserDetailsPage = ({ user }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <h4>Id: {user.id}</h4>
            <h4>Username: {user.username}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Articles Posted: {user.articles.length}</h4>
            {
                user.articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h5>{article.title}</h5>
                            <h6>{article.content}</h6>
                        </div>
                    );
                })
            }
            <Link href='/user'>
                <button>Go Back</button>
            </Link>
        </div>
    );
};



export default UserDetailsPage;