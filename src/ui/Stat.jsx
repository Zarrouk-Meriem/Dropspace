import { formatFileSize } from "../services/filesApi";

function Stat({ icon, percentage, type, files, color, totalSize }) {
	// const percentage = ;
	const size = [...files].reduce((ac, cur) => cur.size + ac, 0);
	return (
		<div className='stat'>
			<div className='stat-icon-container' style={{ backgroundColor: color }}>
				{icon}
			</div>
			<div className='stat-details'>
				<h3>{type}</h3>
				<progress className={type} id='file' max='100' value={percentage} />
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<p className='percentage'>{percentage.toFixed(0)}%</p>
					<p>
						{formatFileSize(size)} of {formatFileSize(totalSize)} Used
					</p>
				</div>
			</div>
		</div>
	);
}

export default Stat;
