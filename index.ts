const rectangles = [
	// Group 1
	[
		{ x: 37.5, y: 12.5 },
		{ x: 50, y: 0 },
		{ x: 61.11, y: -5.55 },
	],
	[
		{ x: 50, y: 25 },
		{ x: 50, y: 16.66 },
		{ x: 61.11, y: 16.68 },
	],
	[
		{ x: 37.5, y: 37.5 },
		{ x: 33.33, y: 16.66 },
		{ x: 38.89, y: 16.68 },
	],
	[
		{ x: 25, y: 25 },
		{ x: 33.33, y: 0 },
		{ x: 38.89, y: -5.55 },
	],

	//Group 2
	[
		{ x: 62.5, y: 37.5 },
		{ x: 83.33, y: 33.34 },
		{ x: 94.44, y: 50.02 },
	],
	[
		{ x: 75, y: 50 },
		{ x: 88.33, y: 50 },
		{ x: 94.44, y: 27.79 },
	],
	[
		{ x: 62.5, y: 62.5 },
		{ x: 66.67, y: 50 },
		{ x: 77.22, y: 50.02 },
	],
	[
		{ x: 50, y: 50 },
		{ x: 66.67, y: 33.34 },
		{ x: 72.22, y: 27.79 },
	],

	//Group 3
	[
		{ x: 37.5, y: 62.5 },
		{ x: 50, y: 66.67 },
		{ x: 61.11, y: 61.13 },
	],
	[
		{ x: 50, y: 75 },
		{ x: 50, y: 83.33 },
		{ x: 61.11, y: 83.36 },
	],
	[
		{ x: 37.5, y: 87.5 },
		{ x: 33.34, y: 83.33 },
		{ x: 38.89, y: 83.36 },
	],
	[
		{ x: 25, y: 75 },
		{ x: 33.34, y: 66.67 },
		{ x: 38.89, y: 61.13 },
	],

	//Group 4
	[
		{ x: 12.5, y: 37.5 },
		{ x: 16.66, y: 33.34 },
		{ x: 27.78, y: 27.79 },
	],
	[
		{ x: 25, y: 50 },
		{ x: 16.66, y: 50 },
		{ x: 27.78, y: 50.02 },
	],
	[
		{ x: 12.5, y: 62.5 },
		{ x: 0, y: 50 },
		{ x: 5.55, y: 50.02 },
	],
	[
		{ x: 0, y: 50 },
		{ x: 0, y: 33.34 },
		{ x: 5.55, y: 27.79 },
	],
]

const colors = {
	initial: '#667EEA',
	1: '#667EEA',
	2: '#5A67D8',
	3: '#4C51BF',
	4: '#7F9CF5',
}

const lengths = [17.68, 16.67, 15.71]

const scaleFactor = 4

function generateKeyFrames(): string {
	return rectangles.reduce((keyframes, rect, i) => {
		i += 1
		const offset = Math.sqrt(2) * lengths[0] / 2
		console.log(offset)

		keyframes += `
		#logo div:nth-child(${i}) {
			animation: 10s ease-out square-${i} forwards;
			background-color: ${colors.initial};
			height: ${lengths[0] * scaleFactor}px; 
			transform: translate(${(rect[0].x - offset) * scaleFactor}px, ${(rect[0].y - offset) * scaleFactor}px) rotate(45deg);
			width: ${lengths[0] * scaleFactor}px;
		}`

		// `@keyframes square-${i} {
		// 	from, 40% { transform: translate(${rect[0].x}px, ${rect[0].y}px) rotate(45deg); height: 17.68px; width: 17.68px; }
		// 	50%, 90%  { transform: translate(${rect[1].x}px, ${rect[1].y}px) rotate(90deg); height: 16.67px width: 16.67px; }
		// 	to        { transform: translate(${rect[2].x}px, ${rect[2].y}px) rotate(135deg); height: 15.71px width: 15.71px;}
		// }
		// `
		return keyframes
	}, '')
}

function addKeyFrames(): void {
	const style = document.createElement('style')
	style.type = 'text/css'
	style.innerHTML = generateKeyFrames()
	document.head.appendChild(style)
}

const logo = document.querySelector('#logo') as HTMLElement
logo.style.width = `${100 * scaleFactor}px`
logo.style.height = `${100 * scaleFactor}px`

addKeyFrames()