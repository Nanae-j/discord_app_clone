import Sidebar from './components/sidebar/Sidebar';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />
      {/* <Home /> */}
    </div>
  );
}
