import styled from "styled-components";

const StyledEmpty = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	align-self: center;
	margin-bottom: 5rem;
`;

function Empty({ tableOf, singleWord }) {
	return (
		<StyledEmpty>
			<img src={`.././public/No ${tableOf}.svg`} alt={singleWord} />
			<p
				style={{
					fontWeight: "500",
					fontSize: "22px",
					lineHeight: "27px",
					textAlign: "center",
					color: "#2F2F2F",
					marginTop: "4.5rem",
				}}
			>
				There are no {tableOf} at the moment.
			</p>
			<p
				style={{
					fontWeight: "500",
					fontSize: "18px",
					lineHeight: "21.78px",
					textAlign: "center",
					color: "#878787",
					marginTop: "2rem",
				}}
			>
				Start creating {tableOf} by clicking the button bellow then you will
				find all your created cabins here.
			</p>
		</StyledEmpty>
	);
}

export default Empty;
