import Link from "next/link";

export const ProfilePage = () => {
  return (
    <>
      <h3>Profile Page</h3>
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
export default ProfilePage;
