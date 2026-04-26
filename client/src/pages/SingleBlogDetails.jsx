import Comment from '@/components/Comment';
import CommentList from '@/components/CommentList';
import Loading from '@/components/Loading';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { getEnv } from '@/helpers/getEnv';
import { useFetch } from '@/hooks/useFetch';
import { decode } from 'entities';
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogDetails = () => {
  const { blog } = useParams();
  const { data, loading, error } = useFetch(
    `${getEnv('VITE_API_BASE_URL')}/blog/get-blog/${blog}`,
    {
      method: 'get',
      credentials: 'include',
    },
  );

  if (loading) return <Loading />;

  return (
    <div className="flex justify-between gap-20">
      {/* blog details */}
      {data && data.blog && (
        <>
          <div className="border rounded w-[70%] p-5">
            <h1 className="text-2xl font-bold mb-5">{data.blog.title}</h1>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-5">
                <Avatar>
                  <AvatarImage src={data.blog.author.avatar} alt="userimage" />
                </Avatar>
                <span>{data.blog.author.name}</span>
              </div>
            </div>

            {/* Blog Image */}
            <div className="my-5">
              <img
                src={data.blog.featuredImage}
                alt="featured Image"
                className="rounded"
              />
            </div>
            {/* Blog Content */}
            <div
              dangerouslySetInnerHTML={{
                __html: decode(data.blog.blogContent) || '',
              }}
            ></div>
            {/* Comment */}
            <div className="border-t mt-5 pt-5">
              <Comment props={{ blogid: data.blog._id }} />
            </div>
            {/* Comment List */}
            {/* <div className="border-t mt-5 pt-5">
              <CommentList props={{ blogid: data.blog._id }} />
            </div> */}
          </div>
        </>
      )}
      {/* related blogs */}
      <div className="border rounded w-[30%]"></div>
    </div>
  );
};

export default SingleBlogDetails;
