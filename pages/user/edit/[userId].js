import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUserById, updateUser } from '@/utils/api';
import Link from 'next/link';

const EditUserPage = ({ user }) => {
    const router = useRouter();
    const { userId } = router.query;

    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    useEffect(() => {
        if (user) {
            setFormData({
                username: user.username,
                email: user.email,
                password: '',
            });
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(userId, formData);
            alert('User Updated!');
            // Redirect to User List page after successful update
            window.location.href = '/user';
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    // if (!user || !formData) { // Add condition to check formData as well
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                </label>
                <br />
                <br />
                <br />
                <label>
                    Email:
                    <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </label>
                <br />
                <br />
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </label>
                <br />
                <br />
                <button type="submit">Update User</button>
            </form>
            <Link href='/user'>
                <button>Go Back</button>
            </Link>
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

export default EditUserPage;