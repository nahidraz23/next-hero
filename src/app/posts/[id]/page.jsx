import { dynamicPost } from '@/services/getApi';
import React from 'react';

const PostDetailsPage = async ({ params }) => {

    const {title, body} = await dynamicPost(params.id)

    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-red-600'>Title: {title}</h2>
            <p className='text-xl text-center'>{body}</p>
        </div>
    );
};

export default PostDetailsPage;