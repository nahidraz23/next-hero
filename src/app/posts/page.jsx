import { getPosts } from '@/services/getApi';
import Link from 'next/link';
import React from 'react';

const PostPage = async () => {

    const postData = await getPosts();

    return (
        <div>
            <h1 className='text-center text-2xl py-6'>Post page</h1>
            <div className='grid grid-cols-4 gap-6'>
                {
                    postData.map(({ id, title, body }) =>
                        <div key={id} className='border-2 p-2'>
                            <h1 className='text-center font-bold text-green-500'>Title: {title}</h1>
                            <p className='text-center py-2'>{body}</p>
                            <button className='btn btn-primary'><Link href={`/posts/${id}`}>See Details</Link></button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PostPage;