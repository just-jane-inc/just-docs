// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    base: '/',
    security: {
        allowedDomains: [
            {
                hostname: 'docs.bahms.org',
                protocol: 'https'
            },
            {
                hostname: 'localhost',
                protocol: 'http'
            }
        ]
    },
    integrations: [
        starlight({
            title: 'Just__Docs',
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'}],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {label: 'Example Guide', slug: 'guides/example'},
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: {directory: 'reference'},
                },
            ],
        }),
    ],
});
