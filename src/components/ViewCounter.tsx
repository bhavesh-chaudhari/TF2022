import useSWR from "swr";
import fetcher from "../utils/fetcher";

const ViewCounter = ({ state }: { state: boolean }) => {
  const { data } = useSWR<{ views: number }>(`/api/v1/views`, fetcher);
  const views = data?.views;

  return <span> {`${views! > 0 ? views!.toLocaleString() : "0"}`}</span>;
};

export default ViewCounter;
