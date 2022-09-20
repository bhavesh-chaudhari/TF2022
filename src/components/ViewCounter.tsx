import { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";
import fetcher from "../utils/fetcher";

const ViewCounter = () => {
  const { mutate } = useSWRConfig();
  const { data } = useSWR<{ views: number }>(`/api/v1/views`, fetcher);
  const views = data?.views;

  useEffect(() => {
    const registerView = () => {
      fetch(`/api/v1/views`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const newViews = data.views;
          mutate(`/api/v1/views`, { ...data, views: newViews }, false);
        });
    };

    if (process.env.NODE_ENV === "production") {
      registerView();
    }
  }, [mutate]);

  return <span> {`${views! > 0 ? views!.toLocaleString() : "***"}`}</span>;
};

export default ViewCounter;
