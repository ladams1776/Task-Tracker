import Link from 'next/link';
import Layout from '../components/Layout';
import Post from './p/[id]';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'hello nextjs' },
    { id: '2-nextjs', title: '2 nextjs' },
    { id: '3-nextjs', title: '3 nextjs' }
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>
      {`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>
        {`
          h1,
          a {
            font-family: 'Arial';
          }

          ul {
            padding: 0;
          }
        `}
      </style>
    </Layout>
  );
}
