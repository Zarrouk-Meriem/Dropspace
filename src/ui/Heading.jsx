function Heading({ style = {}, icon, children, iconColor, as = "h1" }) {
	return (
		<div style={style} className='heading'>
			{icon && (
				<div
					className='heading-icon-container'
					style={{ backgroundColor: iconColor }}
				>
					{icon}
				</div>
			)}
			<span>
				{as === "h1" && <h1>{children}</h1>}
				{as === "h2" && <h2>{children}</h2>}
			</span>
		</div>
	);
}

export default Heading;
