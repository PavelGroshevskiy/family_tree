import { Box } from "@chakra-ui/react";
import "./App.css";
import React from "react";
import Tree from "react-d3-tree";
import AddTreeModal from "./components/AddTreeModal";
import { bfs, clickDelete } from "./utils/utils";

const initialTree = {
	name: "root",
	attributes: {
		surName: "surName",
		suName: "surName",
		srName: "surName",
		Delete: "del",
	},
	children: [],
};

function App() {
	const [node, setNode] = React.useState();
	const [tree, setTree] = React.useState(initialTree);

	console.log(node && node.data.__rd3t);
	console.log(node && node.children);

	const closeModal = () => setNode();

	const handleSubmit = (name, birthday, male, surName) => {
		const newTree = bfs(node.data.name, tree, name, { birthday, male, surName });

		if (newTree) {
			setTree(newTree);
			clickDelete();
		}
	};

	return (
		<Box h={"100vh"} w={"100%"}>
			<Tree
				data={tree}
				collapsible={false}
				nodeSize={{
					x: "210",
					y: "150",
				}}
				pathFunc={"elbow"}
				translate={{
					x: 200,
					y: 200,
				}}
				onNodeClick={(data, event) => {
					setNode(data);
					// console.log(data);
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
