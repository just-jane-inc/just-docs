import type { StreamSetupNode } from '../../schemas/stream-setup';

export type Box = { x: number, y: number, w: number, h: number };

const STAGE: Box = { x: 0, y: 0, w: 100, h: 100 };

export const flattenNodes = (
	nodes: StreamSetupNode[] | undefined,
	parent: Box = STAGE,
): Array<{ node: StreamSetupNode, box: Box }> => (nodes ?? []).flatMap((node) => {

	const [x, y, w, h] = node.rect;
	const box: Box = {
		x: parent.x + (x / 100) * parent.w,
		y: parent.y + (y / 100) * parent.h,
		w: (w / 100) * parent.w,
		h: (h / 100) * parent.h,
	};

	return [{ node, box }, ...flattenNodes(node.nodes, box)];
});

const clipToEdge = (box: Box, dx: number, dy: number, gap: number) => {
	const cx = box.x + box.w / 2;
	const cy = box.y + box.h / 2;
	const scale = Math.min(
		dx ? (box.w / 2) / Math.abs(dx) : Infinity,
		dy ? (box.h / 2) / Math.abs(dy) : Infinity,
	);
	const length = Math.hypot(dx, dy) || 1;

	return {
		x: cx + dx * scale + (dx / length) * gap,
		y: cy + dy * scale + (dy / length) * gap,
	};
};

export const edgeLine = (from: Box, to: Box) => {
	const dx = (to.x + to.w / 2) - (from.x + from.w / 2);
	const dy = (to.y + to.h / 2) - (from.y + from.h / 2);
	const start = clipToEdge(from, dx, dy, 1);
	const end = clipToEdge(to, -dx, -dy, 1.6);

	return {
		x1: start.x,
		y1: start.y,
		x2: end.x,
		y2: end.y,
		midX: (start.x + end.x) / 2,
		midY: (start.y + end.y) / 2,
	};
};

export const parseAspect = (aspect = '16 / 9') => {
	const [width, height] = aspect.split('/').map(Number);
	return (width / height) || 16 / 9;
};
