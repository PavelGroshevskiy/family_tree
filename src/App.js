import { Box } from "@chakra-ui/react";
import "./App.css";
import React from "react";
import Tree from "react-d3-tree";
import AddTreeModal from "./components/AddTreeModal";

function App() {
	const [node, setNode] = React.useState();
	const [tree, setTree] = React.useState({
		name: "root",
		attributes: {
			surName: "surName",
			suName: "surName",
			srName: "surName",
			Delete: "del",
		},
		children: [],
	});

	function clickDelete() {
		const a = document.querySelectorAll("tspan");

		a.forEach((el) => {
			el.addEventListener("click", () => {
				console.log(tree);

				// console.log("click");
			});
		});
	}
	clickDelete();

	function remove(id) {
		tree.children.forEach((el) => console.log(el.data));
	}
	remove();
	// console.log(node && node.data.__rd3t);

	const closeModal = () => setNode();

	const handleSubmit = (name, birthday, male, surName) => {
		const newTree = bfs(node.data.name, tree, name, { birthday, male, surName });

		if (newTree) setTree(newTree);
	};

	function bfs(name, tree, newNodeName, { surName, birthday, male }) {
		const queue = [];

		queue.unshift(tree);
		while (queue.length > 0) {
			const currNode = queue.pop();
			console.log(currNode);

			if (currNode.name === name) {
				currNode.children.push({
					name: newNodeName,
					attributes: {
						surName: surName,
						birthday: birthday,
						male: male,
						Delete: "delete",
					},
					children: [],
				});
				return { ...tree };
			}
			for (let i = 0; i < currNode.children.length; i++) {
				queue.unshift(currNode.children[i]);
			}
		}
	}

	function parent(data) {
		console.log(data.parent);
	}

	return (
		<Box h={"100vh"} w={"100%"}>
			<Tree
				nodeSize={{
					x: "210",
					y: "150",
				}}
				pathFunc={"elbow"}
				translate={{
					x: 200,
					y: 200,
				}}
				data={tree}
				onNodeClick={(data, event) => {
					setNode(data);
					console.log(data);
					// parent(data);
					// console.log(event.target && event.target.parentNode.getAttribute("id"));

					// (() => console.log(node))();
				}}
			/>
			<AddTreeModal isOpen={Boolean(node)} onClose={closeModal} onSubmit={handleSubmit} />
		</Box>
	);
}

export default App;
