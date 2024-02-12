import styles from './Container.module.css'

export const Container = ({ children }) => {
  return <div className={`container ${styles.container}`}>{children}</div>
}
