import { Footer, Meta } from "@/components/Elements";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
