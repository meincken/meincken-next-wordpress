import { Meta } from "@/components/Elements";
import styles from './Layout.module.css'

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <main className={`${styles.container} container`}>{children}</main>
    </>
  );
}
