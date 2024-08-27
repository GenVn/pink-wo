import { CategoryList } from "@/types";
import useSWR from "swr";
import { fetcher } from "../utils";

// Client Side fetching data
export function getCategory(
  fetchChilds = false,
  page = 0,
  size = 20,
  sort = "asc"
) {
  const { data, error, isLoading } = useSWR<CategoryList>(
    `${process.env.NEXT_PUBLIC_API_HOSTNAME}/categories/?fetchChilds=${fetchChilds}&page=${page}&size=${size}&sort=${sort}`,
    fetcher
  );
  return {
    cateList: data,
    isLoading: isLoading,
    isError: error,
  };
}
