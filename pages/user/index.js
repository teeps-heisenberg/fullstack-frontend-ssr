import { getAllUsers } from '@/utils/api'
import Link from 'next/link';
import React from 'react'

export async function getStaticProps() {
    const users = await getAllUsers();
    //console.log(users);
    return {
        props: {
            users,
        },
        revalidate: 10,
    }
}

const UsersPage = ({ users }) => {
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
            <h2>Users List</h2>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h4>
                            {user.username} - {user.email}
                        </h4>
                        <Link href={`user/${user.id}`}>
                            <button>
                                View
                            </button>
                        </Link>
                        <Link href={`user/edit/${user.id}`}>
                            <button>
                                Edit
                            </button>
                        </Link>
                        <Link href={`user/delete/${user.id}`}>
                            <button>
                                Delete
                            </button>
                        </Link>
                        <hr />
                    </div>
                );
            })}
            <Link href={`user/create`}>
                <button>
                    Create User
                </button>
            </Link>
        </div>
    )
}

export default UsersPage