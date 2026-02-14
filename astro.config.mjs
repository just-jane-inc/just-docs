// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    base: '/',
    server: {
        allowedHosts: ['bahms.org', '.bahms.org', 'localhost']
    },
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
            title: 'just__docs',
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/just-jane-inc/just-docs'}],
            sidebar: [
                {label: 'Quick Introduction', slug: 'introduction'},
                {label: 'Giga VIP', slug: 'giga-vip'},
                {
                    label: 'B.A.H.M.S.',
                    items: [
                        {label: 'Jill', slug: 'bahms/jill'},
                        {label: 'Sounds', slug: 'bahms/sounds'},
                        {label: 'TTS', slug: 'bahms/tts'},
                        {label: 'Duels', slug: 'bahms/duels'},
                        {label: 'Slot Machine', slug: 'bahms/slot-machine'},
                        {label: 'Bounce House', slug: 'bahms/bounce-house'},
                        {label: 'Juniper (tamagotchi)', slug: 'bahms/juniper'},
                        {label: 'Credits', slug: 'bahms/credits'},
                    ]
                },
                {label: 'Commands', slug: 'commands'},
                {label: 'Redeems', slug: 'redeems'},
            ],
        }),
    ],
});
