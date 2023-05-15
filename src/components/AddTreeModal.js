import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

function AddTreeModal({ isOpen, onClose, onSubmit }) {
	const [name, setName] = React.useState("");
	const [surname, setSurName] = React.useState("");
	const [male, setMale] = React.useState("");
	const [birthday, setBirthday] = React.useState("");

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Some</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Имя</FormLabel>
							<Input value={name} onChange={(event) => setName(event.target.value)} />
							<FormLabel>Фамилия</FormLabel>
							<Input
								value={surname}
								onChange={(event) => setSurName(event.target.value)}
							/>
							<FormLabel>Пол</FormLabel>
							<Input value={male} onChange={(event) => setMale(event.target.value)} />
							<FormLabel>Дата рождения</FormLabel>
							<Input
								value={birthday}
								onChange={(event) => setBirthday(event.target.value)}
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button
							onClick={() => {
								onSubmit(name, birthday, male, surname);
								onClose(setBirthday(""), setMale(""), setSurName(""), setName(""));
							}}
							disabled={!name}
							colorScheme="blue"
						>
							Add
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default AddTreeModal;
