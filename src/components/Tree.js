import React from "react";
import PersonCard from "./PersonCard";

function Tree({ data }) {
	console.log(data);

	return (
		<>
			<div>
				{data.map((card) => (
					<PersonCard
						name={card.name}
						surName={card.surName}
						male={card.male}
						birthday={card.birthday}
					/>
				))}
			</div>
			;
		</>
	);
}

export default Tree;
