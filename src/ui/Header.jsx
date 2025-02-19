import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useFiles } from "../features/files/useFiles";
import { useEffect, useState } from "react";

import Spinner from "../ui/Spinner";
import Table from "./Table";

function Header() {
	const [input, setInput] = useState("");
	const [filteredFiles, setFilteredFiles] = useState([]);
	const { files, isLoading } = useFiles();

	useEffect(() => {
		if (input) {
			const filtered = files.filter((file) =>
				file.name.toLowerCase().includes(input.toLowerCase())
			);
			setFilteredFiles(filtered);
		} else {
			setFilteredFiles(files);
		}
	}, [input, files]);
	if (isLoading) return <Spinner />;
	return (
		<Table>
			<div className='header'>
				<div className='search-bar'>
					<CiSearch className='search-icon' />
					<input
						placeholder='search...'
						className='search-bar-input'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					{input && (
						<div className='modal'>
							{filteredFiles.length === 0 ? (
								<p style={{ color: "var(--color-red-700)" }}>
									No matching result...
								</p>
							) : (
								filteredFiles.map((file) => (
									<div className='result' key={file.id}>
										<CiSearch />
										<p key={file.id}>{file.name}</p>
									</div>
								))
							)}
						</div>
					)}
				</div>
				<div className='account'>
					<FaUser className='account-icon' />
				</div>
			</div>
		</Table>
	);
}
export default Header;
