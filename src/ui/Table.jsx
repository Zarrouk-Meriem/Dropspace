import { createContext, useContext } from "react";
import styled from "styled-components";

// const CommonRow = styled.div`
// 	display: grid;
// 	grid-template-columns: ${(props) => props.columns};
// 	column-gap: 2.4rem;
// 	align-items: center;
// 	transition: none;
// `;

const Empty = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
	text-align: center;
	margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
	return (
		<TableContext.Provider value={{ columns }}>
			<div className='table' role='table'>
				{children}
			</div>
		</TableContext.Provider>
	);
}

function Header({ children }) {
	const { columns } = useContext(TableContext);
	return (
		<div
			className='table-header'
			role='row'
			style={{ gridTemplateColumns: columns }}
		>
			{children}
		</div>
	);
}
function Row({ children }) {
	const { columns } = useContext(TableContext);
	return (
		<div className='row' role='row' style={{ gridTemplateColumns: columns }}>
			{children}
		</div>
	);
}

function Body({ data, render }) {
	return !data.length ? (
		<Empty>No data to show at the moment</Empty>
	) : (
		<div className='table-body'>{data.map(render)}</div>
	);
}
function Footer() {
	return <div className='table-footer'></div>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
