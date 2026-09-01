import { defineCollection} from 'astro:content';
import { z } from 'astro/zod' // schema validation helper
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { file } from 'astro/loaders';

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

type SetupNode = {
	id: string;
	label: string;
	hint?: string;
	icon?: string;
	rect: [number, number, number, number];
	shape?: 'box' | 'rounded' | 'pill' | 'circle' | 'screen';
	color?: string;
	into?: string;
	info?: z.infer<typeof infoPageSchema>[];
	nodes?: SetupNode[];
};

const nodeSchema: z.ZodType<SetupNode> = z.lazy(() => z.object({
	id: z.string(),
	label: z.string(),
	hint: z.string().optional(),
	icon: z.string().optional(),
	// [x, y, width, height] as percent of the parent box
	rect: z.tuple([z.number(), z.number(), z.number(), z.number()]),
	shape: z.enum(['box', 'rounded', 'pill', 'circle', 'screen']).optional(),
	color: z.string().optional(),
	into: z.string().optional(),
	info: z.array(infoPageSchema).optional(),
	nodes: z.array(nodeSchema).optional(),
}));

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	streamSetup: defineCollection({
		loader: file('src/assets/stream-setup.yaml'),
		schema: z.object({
			title: z.string(),
			caption: z.string().optional(),
			aspect: z.string().optional(),
			info: z.array(infoPageSchema).optional(),
			nodes: z.array(nodeSchema),
			edges: z.array(z.object({
				from: z.string(),
				to: z.string(),
				label: z.string().optional(),
				dashed: z.boolean().optional(),
			})).optional(),
		}),
	}),
};
