import { Note, notes } from '@viridi';
import {
	forceLink,
	forceSimulation,
	forceManyBody,
	forceX,
	forceY,
	SimulationNodeDatum,
	SimulationLinkDatum,
} from 'd3-force';
import { create } from 'd3';
import './main.css';
import { getStageEmoji, Stage } from './utils';

type GraphNode = SimulationNodeDatum & Note;
type GraphLink = SimulationLinkDatum<GraphNode>;

const nodes: GraphNode[] = notes;
const links: GraphLink[] = notes.flatMap((note) =>
	note.linkIds.map((id) => ({ source: note.id, target: id }))
);

const simulation = forceSimulation(nodes)
	.force(
		'link',
		forceLink<GraphNode, GraphLink>(links).id((d) => d.id)
	)
	.force('charge', forceManyBody().strength(-350))
	.force('x', forceX())
	.force('y', forceY());

const height = 600;
const width = 600;

const svg = create('svg').attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`);

const link = svg
	.append('g')
	.attr('stroke', '#999')
	.attr('stroke-opacity', 0.6)
	.selectAll('line')
	.data(links)
	.join('line')
	.attr('stroke-width', Math.sqrt(2));

const node = svg
	.append('g')
	.attr('fill', 'black')
	.attr('stroke-linecap', 'round')
	.attr('stroke-linejoin', 'round')
	.selectAll('g')
	.data(nodes)
	.join('g');

node
	.append('circle')
	.attr('fill', '#FFFFFFBB')
	.attr('r', (d) => d.rank * 90);

node
	.append('text')
	// .attr('x', '50%')
	// .attr('y', '50%')
	.attr('text-anchor', 'middle')
	.attr('font-size', (d) => `${d.rank * 6}rem`)
	.attr('y', '0.31em')
	.text((d) => getStageEmoji(d.frontmatter.stage));

node
	.append('text')
	.attr('x', 8)
	.attr('y', '0.31em')
	.attr('font-size', '0.5rem')
	.attr('opacity', '0.5')
	.text((d) => d.title);

node.append('title').text((d) => d.title);

simulation.on('tick', () => {
	link
		.attr('x1', (d) => d.source.x)
		.attr('y1', (d) => d.source.y)
		.attr('x2', (d) => d.target.x)
		.attr('y2', (d) => d.target.y);

	node.attr('transform', (d) => `translate(${d.x},${d.y})`);
});

const app = document.querySelector('#app');

if (app) {
	app.append(svg.node()!);
}
