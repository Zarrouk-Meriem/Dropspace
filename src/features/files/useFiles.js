import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../../services/filesApi";
import { useSearchParams } from "react-router";

export function useFiles() {
	const [searchParams] = useSearchParams();
	let [field, direction] = (searchParams.get("sortBy") || "date-asc").split(
		"-"
	);
	const sortBy = { field, direction };

	const {
		isLoading,
		data: files = {},
		error,
	} = useQuery({
		queryKey: ["files", sortBy],
		queryFn: () => fetchFiles({ sortBy }),
	});
	return { isLoading, files, error };
}
