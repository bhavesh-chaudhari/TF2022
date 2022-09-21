import { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";
import fetcher from "../utils/fetcher";

const ViewCounter = ({state}: {state: boolean}) => {
  const { mutate } = useSWRConfig();
  const { data } = useSWR<{ views: number }>(`/api/v1/views`, fetcher);
  const views = data?.views;

  // useEffect(() => {
    
   
  // }, [mutate, state]);

  return <span> {`${views! > 0 ? views!.toLocaleString() : "0"}`}</span>;
};

export default ViewCounter;
