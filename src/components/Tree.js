import React from "react";
import PersonCard from "./PersonCard";

function Tree({ data }) {
	return (
		<>
			<div>
				{data.map((card, id) => (
					<PersonCard
						key={id}
						name={card.name}
						surName={card.surName}
						male={card.male}
						birthday={card.birthday}
					/>
				))}
			</div>
			<div></div>
		</>
	);
}

export default Tree;
