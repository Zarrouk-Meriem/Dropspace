import Spinner from "../ui/Spinner";
import Heading from "../ui/Heading";
import { useFiles } from "../features/files/useFiles";
import Stat from "../ui/Stat";
import { FaRegFile, FaRegFileImage, FaRegFileVideo } from "react-icons/fa6";
import FileTable from "../features/files/FileTable";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
import { HiOutlineArchiveBox } from "react-icons/hi2";
function Home() {
	const { files, isLoading } = useFiles();
	if (isLoading) return <Spinner />;
	const filesNum = files.length;
	const documents = files?.filter((file) => file.type === "file");
	const videos = files?.filter((file) => file.type === "video");
	const images = files?.filter((file) => file.type === "image");
	const starredFiles = files?.filter((file) => file.isStarred);
	const archivedFiles = files?.filter((file) => file.isArchived);
	const fileCount = documents.length;
	const videoCount = videos.length;
	const imageCount = images.length;
	const filesPercentage = (fileCount / filesNum) * 100;
	const imagePercentage = (imageCount / filesNum) * 100;
	const videoPercentage = (videoCount / filesNum) * 100;
	const totalSize = [...files].reduce((ac, cur) => cur.size + ac, 0);

	return (
		<>
			<div className='home'>
				<Stat
					percentage={filesPercentage}
					icon={<FaRegFile className='stat-icon' />}
					type={"Documents"}
					color={"var(--color-purple-600)"}
					files={documents}
					totalSize={totalSize}
				/>
				<Stat
					percentage={imagePercentage}
					type={"Images"}
					icon={<FaRegFileImage className='stat-icon' />}
					color={"var(--color-green-700)"}
					files={images}
					totalSize={totalSize}
				/>
				<Stat
					percentage={videoPercentage}
					type={"Videos"}
					icon={<FaRegFileVideo className='stat-icon' />}
					color={"var(--color-pink-500)"}
					files={videos}
					totalSize={totalSize}
				/>
				<div className='recent-files'>
					<Heading style={{ marginBottom: "0" }}>Recent Files</Heading>
					<FileTable recent={true} />
				</div>
				<div className='linkers'>
					<Link to={"/starred"} className='link'>
						<div className='linker'>
							<div className='linker-stat'>
								<Heading
									as='h2'
									icon={
										<CiStar
											style={{
												strokeWidth: "1px",
												height: "4.4rem",
												width: "4.4rem",
												color: "white",
											}}
										/>
									}
									iconColor={"var(--color-yellow-500)"}
								/>
								<div>
									<h2>{starredFiles.length} Starred Files</h2>
									Go to view
								</div>
							</div>
						</div>
					</Link>
					<Link to={"/archived"} className='link'>
						<div className='linker'>
							<div className='linker-stat'>
								<Heading
									as='h2'
									icon={
										<HiOutlineArchiveBox
											style={{
												height: "4.4rem",
												width: "4.4rem",
												color: "white",
											}}
										/>
									}
									iconColor={"var(--color-pink-500)"}
								/>
								<div>
									<h2>{archivedFiles.length} Archived Files</h2>
									Go to view
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Home;
