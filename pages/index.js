import Link from 'next/link';
import Layout from '../components/Layout';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'hello nextjs' },
    { id: '2-nextjs', title: '2 nextjs' },
    { id: '3-nextjs', title: '3 nextjs' }
  ];
}
const Index = props => {
  return (
    <Layout>
      <h1>My blog</h1>
      <ul>
        {getPosts().map(post => (
          <li key={post.id}>
            <Link href="/p/[id]" as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
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
    </Layout>
  );
};

export default Index;
