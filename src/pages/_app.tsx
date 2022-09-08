import "../styles/globals.css";
import styles from "../styles/App.module.css";
import type { AppProps } from "next/app";
import PageLayout from "../layouts/PageLayout";
import NavigationSection from "../components/NavigationSection";
import ContentSection from "../components/ContentSection";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
      <div className={styles.app}>
        <NavigationSection />
        <ContentSection />
      </div>
    </PageLayout>
  );
}

export default MyApp;
