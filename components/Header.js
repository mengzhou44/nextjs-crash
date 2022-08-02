import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>WebDev</span> News
      </div>
      <p className={styles.description}>
        keep up todate with the latest web dev news
      </p>
    </div>
  );
};

export default Header;
