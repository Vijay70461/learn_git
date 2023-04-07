import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <h1 className="logo">
          <Link href="/">Logo</Link>
        </h1>
        <ul className="navbar">
          <li>
            <Link href="/home"> Home</Link>
          </li>
          <li>
            <Link href="/services"> Services</Link>
          </li>
          <li>
            <Link href="/contact"> Contact</Link>
          </li>
          <li>
            <Link href="/aboutus"> About US</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
