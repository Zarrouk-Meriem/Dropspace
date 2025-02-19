function Select({ options, type, onChange, value }) {
	return (
		<select
			className='select'
			style={
				type === "white"
					? { borderColor: "var(--color-grey-100)" }
					: { borderColor: "var(--color-grey-300)" }
			}
			value={value}
			type={type}
			onChange={onChange}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default Select;
