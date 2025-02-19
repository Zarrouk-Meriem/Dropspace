function Button({ color, children, onClick }) {
	return (
		<button
			onClick={onClick}
			className='btn'
			style={{ backgroundColor: color }}
		>
			{children}
		</button>
	);
}

export default Button;
