export function createSvgElement(tagName) {
	return document.createElementNS("http://www.w3.org/2000/svg", tagName);
}

//--------------------------

function recursiveFunc(structure) {
	if (Array.isArray(structure)) {
		structure.filter();
	} else {
	}
}

//--------------------------

export function clickDelete() {
	const a = document.querySelectorAll("text.rd3t-label__attributes");
	// console.log(a);
	a.forEach((el) => {
		console.log(el);
		// el.lastChild.appendChild(but);
		const but = `<button>ds</button>`;
		el.lastChild.addEventListener("click", (e) => {
			e.stopPropagation();
			console.log("click");
		});
	});
}

//--------------------------

//--------------------------

export function bfs(name, tree, newNodeName, { surName, birthday, male }) {
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

//--------------------------

function parent(data) {
	console.log(data.parent);
}
