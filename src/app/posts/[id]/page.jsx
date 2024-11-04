import { dynamicPost, getPosts } from '@/services/getApi';
import React from 'react';

// export const metadata = {
//     title: 'Post Details',
//     description: 'Post Details Page'
// }

export const generateMetadata = async ({params}) => {
    const postData = await dynamicPost(params.id);

    return {
        title: `Post Details of ${params.id}`,
        description: postData.body
    }
}

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