import { z } from 'astro/zod';

const infoPageSchema = z.object({
	title: z.string().optional(),
	body: z.string().optional(),
	specs: z.array(z.object({
		label: z.string(),
		value: z.string(),
	})).optional(),
	link: z.object({
		label: z.string(),
		href: z.string(),
	}).optional(),
});

const edgeSchema = z.object({
	from: z.string(),
	to: z.string(),
	label: z.string().optional(),
	dashed: z.boolean().optional(),
});

export type StreamSetupInfoPage = z.infer<typeof infoPageSchema>;
export type StreamSetupEdge = z.infer<typeof edgeSchema>;
export type StreamSetupNode = {
	id: string;
	label: string;
	hint?: string;
	icon?: string;
	rect: [number, number, number, number];
	shape?: 'box' | 'rounded' | 'pill' | 'circle' | 'screen';
	color?: string;
	into?: string;
	info?: StreamSetupInfoPage[];
	nodes?: StreamSetupNode[];
};

const nodeSchema: z.ZodType<StreamSetupNode> = z.lazy(() => z.object({
	id: z.string(),
	label: z.string(),
	hint: z.string().optional(),
	icon: z.string().optional(),
	rect: z.tuple([z.number(), z.number(), z.number(), z.number()]),
	shape: z.enum(['box', 'rounded', 'pill', 'circle', 'screen']).optional(),
	color: z.string().optional(),
	into: z.string().optional(),
	info: z.array(infoPageSchema).optional(),
	nodes: z.array(nodeSchema).optional(),
}));

export const streamSetupSchema = () => z.object({
	title: z.string(),
	caption: z.string().optional(),
	aspect: z.string().optional(),
	info: z.array(infoPageSchema).optional(),
	nodes: z.array(nodeSchema),
	edges: z.array(edgeSchema).optional(),
});

export type StreamSetupScene = z.infer<ReturnType<typeof streamSetupSchema>>;
