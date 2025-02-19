import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editFile as editFileApi } from "../../services/filesApi";

export function useArchiveFile() {
	const queryClient = useQueryClient();
	const { isLoading: isArchiving, mutate: archiveFile } = useMutation({
		mutationFn: (id) => {
			editFileApi(id, { isArchived: true });
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["files"]);
		},
		onError: (err) => console.error(err.message),
	});
	return { isArchiving, archiveFile };
}
