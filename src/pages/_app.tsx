import { useEffect } from "react";
import "../styles/globals.css";
import styles from "../styles/App.module.css";
import type { AppProps } from "next/app";
import PageLayout from "../layouts/PageLayout";
import NavigationSection from "../components/NavigationSection";
import ContentSection from "../components/ContentSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { registerView } from "../utils/helpers";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: function () {
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(
          navigator.userAgent
        );
      },
    });

    if (process.env.NODE_ENV === "production") {
      registerView();
    }
  }, []);

  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
