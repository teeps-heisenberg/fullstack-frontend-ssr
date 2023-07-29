import React, { useState } from 'react'
import Link from 'next/link';
import { createArticle } from '@/utils/api';
const CreateArticlePage = () => {
    const [formData, setFormData] = useState({ title: '', content: '', authorId: '' });

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await createArticle(formData);
            alert('Article Created!');
            // Redirect to User List page after successful creation
            window.location.href = '/article';
        } catch (e) {
            console.error('Error creating user:', e);
        }
    }

    return (
        <div>
            <h2>Create Article</h2>
            <form onSubmit={submitHandler}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </label>
                <br />
                <br />
                <br />
                <label>
                    Content:
                    <input
                        type="text"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    />
                </label>
                <br />
                <br />
                <br />
                <label>
                    AuthorId:
                    <input
                        type='number'
                        value={formData.authorId}
                        onChange={(e) => setFormData({ ...formData, authorId: Number(e.target.value) })}
                    />
                </label>
                <br />
                <br />
                <button type="submit">Create Article</button>
            </form>
            <Link href='/article'>
                <button>Go Back</button>
            </Link>

        </div>
    )
}

export default CreateArticlePage