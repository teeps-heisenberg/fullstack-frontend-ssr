import React, { useEffect } from 'react'
import { getUserById, deleteUser } from '@/utils/api';
import { useRouter } from 'next/router';

const DeleteUserPage = ({ user }) => {
    const router = useRouter();
    const { userId } = router.query;

    useEffect(() => {
        if (user) {
            handleDeleteUser();
        }
    }, []);

    const handleDeleteUser = async () => {
        try {
            await deleteUser(userId);
            // Redirect to User List page after successful deletion
            alert('User Deleted!');
            router.push('/user');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Deleting User...</h1>
        </div>
    );
};


export async function getServerSideProps(context) {
    const { userId } = context.params;
    const user = await getUserById(userId);

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

export default DeleteUserPage