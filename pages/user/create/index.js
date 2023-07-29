import { createUser } from '@/utils/api';
import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
const CreateUserPage = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await createUser(formData);
            alert('User Created!');
            // Redirect to User List page after successful creation
            window.location.href = '/user';
        } catch (e) {
            console.error('Error creating user:', e);
        }
    }
    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={submitHandler}>
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
                <button type="submit">Create User</button>
            </form>
            <Link href='/user'>
                <button>Go Back</button>
            </Link>

        </div>
    )
}

export default CreateUserPage