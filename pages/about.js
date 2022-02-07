import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <h3>About Page</h3>
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
export default AboutPage;
