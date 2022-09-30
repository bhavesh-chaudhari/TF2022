import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/slider.css";
import type { AppProps } from "next/app";
import PageLayout from "../layouts/PageLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  const { mutate } = useSWRConfig();

  useEffect(() => {
    AOS.init({
      disable: function () {
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(
          navigator.userAgent
        );
      },
    });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("hasAnimated", "false");

    const registerView = () => {
      fetch(`/api/v1/views`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          const newViews = data.views;
          mutate(`/api/v1/views`, { ...data, views: newViews }, false);
        });
    };

    if (process.env.NODE_ENV === "production") {
      registerView();
    }
  }, [mutate]);

  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
