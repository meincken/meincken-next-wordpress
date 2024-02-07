import { Footer, Meta } from "@/components/Elements";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
