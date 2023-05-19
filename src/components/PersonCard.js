import { Card, CardHeader, CardBody, CardFooter, Button, Input } from "@chakra-ui/react";
import React from "react";

function PersonCard({ name, surName, male, birthday } = {}) {
	const [stateName, setName] = React.useState(name);
	const [stateSurname, setSurName] = React.useState(surName);
	const [stateMale, setMale] = React.useState(male);
	const [stateBirthday, setBirthday] = React.useState(birthday);

	function handleNameChange(e) {
		setName(e.target.value);
	}

	return (
		<>
			<Card
				style={{ margin: "30px" }}
				size="sm"
				w={200}
				h={250}
				align="center"
				variant="elevated"
			>
				<CardHeader>
					<Input
						placeholder="Имя"
						size={"xs"}
						value={stateName}
						onChange={handleNameChange}
					/>
				</CardHeader>
				<CardBody>
					<Input
						placeholder="Фамилия"
						size={"xs"}
						value={stateSurname}
						onChange={(e) => setSurName(e.target.value)}
					/>

					<Input
						placeholder="Дата рождения"
						size={"xs"}
						value={stateBirthday}
						onChange={(e) => setBirthday(e.target.value)}
					/>

					<Input
						placeholder="Пол"
						size={"xs"}
						value={stateMale}
						onChange={(e) => setMale(e.target.value)}
					/>
				</CardBody>
				<CardFooter>
					<Button size="xs" colorScheme="blue" onClick={() => console.log("click")}>
						Add
					</Button>
					<Button size="xs" colorScheme="red">
						Delete
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}

export default PersonCard;
