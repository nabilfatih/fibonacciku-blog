import Footer from "./footer";
import Meta from "./meta";
import NextNProgress from "nextjs-progressbar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <NextNProgress
        color="#ee3554"
        startPosition={0.1}
        stopDelayMs={400}
        height={2}
        showOnShallow={true}
      />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
