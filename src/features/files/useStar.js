import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editFile as editFileApi } from "../../services/filesApi";
import toast from "react-hot-toast";

export function useStarFile() {
	const queryClient = useQueryClient();
	const { isLoading: isStarring, mutate: starFile } = useMutation({
		mutationFn: (id) => {
			editFileApi(id, { isStarred: true });
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["files"]);
			toast.success("File successfully starred");
		},
		onError: (err) => console.error(err.message),
	});
	return { isStarring, starFile };
}
