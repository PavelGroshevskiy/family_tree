import React from "react";
import { createSvgElement } from "../utils/utils";
import "./LineChart.css";

function LineChart() {
	const { chart, setChart } = React.useState(create);

	function setAttributeFunc($svgElement, $svgAttributes) {
		Object.keys($svgAttributes).forEach((key) => {
			console.log($svgAttributes[key]);
			$svgElement.setAttribute(key, $svgAttributes[key]);
		});
	}

	function create() {
		const $svg = createSvgElement("svg");
		// const $svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		console.log(typeof $svg);
		document.body.querySelector(".chart") &&
			document.body.querySelector(".chart").appendChild($svg);
		console.log(
			document.body.querySelector(".chart") &&
				document.body.querySelector(".chart").offsetWidth
		);

		setAttributeFunc($svg, {
			width: "100",
			height: "100",
			viewBox: `0 0 ${600} ${600}`,
		});

		return <h1>Hi</h1>;
	}

	React.useEffect(() => {
		create();
	}, []);

	return (
		<div className="chart">
			<h1>Here</h1>
		</div>
	);
}

export default LineChart;
