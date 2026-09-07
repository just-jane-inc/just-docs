import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { file } from 'astro/loaders';
import { streamSetupSchema } from './content/schemas/stream-setup';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	streamSetup: defineCollection({
		loader: file('src/assets/stream-setup.yaml'),
		schema: streamSetupSchema(),
	}),
};
