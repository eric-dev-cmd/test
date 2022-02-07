import Link from "next/link";
import { useRouter } from "next/router";

export const HomePage = () => {
  const router = useRouter();

  const onHandleClick = () => {
    console.log("Placing your order!");
    router.replace("/product");
  };
  return (
    <>
      <h3>Home Page</h3>
      <ul>
        <li>
          <Link href="/product">
            <a>Products</a>
          </Link>
        </li>
        <button onClick={onHandleClick}>Place Order</button>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default HomePage;
