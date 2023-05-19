import "./App.css";
import React from "react";
import Tree from "./components/Tree";
import LineChart from "./components/LineChart";

function App() {
	const [data, setData] = React.useState([
		{
			name: "nameApp",
			surName: "surName",
			male: "male",
			birthday: "birthdat",
			children: [
				{
					name: "nameApp2",
					surName: "surName2",
					male: "male2",
					birthday: "birthdat2",
					children: [],
				},
			],
		},
		{
			name: "nameApp3",
			surName: "surName3",
			male: "male3",
			birthday: "birthdat3",
			children: [],
		},
	]);

	return (
		<>
			<Tree data={data} />
			<LineChart />
		</>
	);
}

export default App;
