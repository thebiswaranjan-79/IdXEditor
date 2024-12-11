import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping.js";

export default function usePing() {
  useQuery({
    queryFn: pingApi,
    queryKey: "ping",
  });
}
