import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.title}>タイトル</p>
        <p className={styles.title_sub}>サブタイトル</p>
      </main>
    </div>
  );
}
