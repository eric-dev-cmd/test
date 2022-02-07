import Link from "next/link";

const BlogPage = () => {
  return (
    <>
      <h3>Blog Page</h3>
      <ul>
        <li>
          <Link href="/">
            <a>Home Page</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default BlogPage;
