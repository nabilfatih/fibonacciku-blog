import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 bg-base-100 bg-opacity-50 backdrop-blur-sm">
      <nav className="navbar py-4">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            FibonacciKu
          </Link>
        </h2>
      </nav>
    </div>
  );
};

export default Header;
