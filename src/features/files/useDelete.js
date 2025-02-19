import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editFile as editFileApi } from "../../services/filesApi";
import { useLocation } from "react-router";
import toast from "react-hot-toast";

export function useDeleteFile() {
	const { pathname } = useLocation();
	const QueryClient = useQueryClient();
	const { isLoading: isDeleting, mutate: deleteFile } = useMutation({
		mutationFn: (id) => {
			if (pathname === "/archived") editFileApi(id, { isArchived: false });
			else editFileApi(id, { isStarred: false });
		},
		onSuccess: () => {
			QueryClient.invalidateQueries(["files"]);
			if (pathname === "/archived") toast.success("file unArchived");
			else toast.success("file unStarred");
		},
		onError: (err) => console.error(err.message),
	});
	return { isDeleting, deleteFile };
}
