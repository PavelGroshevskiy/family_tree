import {
	Card,
	CardHeader,
	Heading,
	CardBody,
	Text,
	CardFooter,
	Button,
	Input,
} from "@chakra-ui/react";
import React from "react";

function PersonCard({ name, surName, male, birthday } = {}) {
	console.log(name);
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
					<label>
						<Input
							placeholder="Имя"
							size={"xs"}
							value={stateName}
							onChange={handleNameChange}
						/>
					</label>
				</CardHeader>
				<CardBody>
					<label>
						<Input
							placeholder="Фамилия"
							size={"xs"}
							value={stateSurname}
							onChange={(e) => setSurName(e.target.value)}
						/>
					</label>

					<label>
						<Input
							placeholder="Дата рождения"
							size={"xs"}
							value={stateBirthday}
							onChange={(e) => setBirthday(e.target.value)}
						/>
					</label>
					<label>
						<Input
							placeholder="Пол"
							size={"xs"}
							value={stateMale}
							onChange={(e) => setMale(e.target.value)}
						/>
					</label>
				</CardBody>
				<CardFooter>
					<Button size="xs" colorScheme="blue">
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
