import type {MarkdownInstance} from "astro";

export interface RedeemOverrides {
    description?: string|Promise<MarkdownInstance<any>>;
}
export type RedeemsSelection = Record<string, RedeemOverrides>;

export type RedeemsSelectorConfiguration = Record<'onSelect'|'postSelect', RedeemsSelection>;

export interface RedeemsSection {
    title: string;
    description?: string|Promise<MarkdownInstance<any>>;
    redeems: Promise<RedeemsSelectorConfiguration>;
}

export interface ResolvedRedeemsSection {
    title: string;
    description: string;
    redeems: RedeemsSelectorConfiguration;
}

export const resolveRedeemDescription = async (description: string|Promise<MarkdownInstance<any>>): Promise<string> => {
    let result = description;

    if (typeof result === 'object') {
        const markdown = await result;
        result = await markdown.compiledContent()
    }

    if (typeof result !== 'string') {
        throw new Error(`Could not unwrap description of type "${typeof result}"`);
    }

    return result;
}

export const resolveRedeemsSection = async (section: RedeemsSection): Promise<ResolvedRedeemsSection> => ({
    ...section,
    description: await resolveRedeemDescription(section.description ?? ''),
    redeems: await section.redeems
})

export const selectRedeems = async (selection: RedeemsSelection): Promise<RedeemsSelectorConfiguration> => {
    let onSelect: RedeemsSelection = {};
    
    for (const selector of Object.keys(selection)) {
        const overrides = selection[selector];
        
        if (typeof overrides !== 'object') {
            throw new Error('Redeems overrides must be an object.');
        }

        const { description = '' } = overrides;
        
        onSelect[selector] = {
            ...overrides,
            description: await resolveRedeemDescription(description)
        };
    }
    
    return {
        onSelect,
        postSelect: {}
    }
};

export const selectRemainingRedeems = async (overrides: RedeemOverrides = {}): Promise<RedeemsSelectorConfiguration> => ({
    onSelect: {},
    postSelect: {['.+']: {
        ...overrides,
        description: await resolveRedeemDescription(
            overrides.description ?? ''
        ),
    }},
});

export enum RedeemID {
    // On the clock.
    ClockIn = 'f7561313-f967-46f5-88f6-945f00444c08',
    ClockOut = '6da4ae7c-9540-450f-ac7f-38d8bdbcf547',
    WriteAComment = 'cc88a833-7707-49a0-b198-18a116205aa0',
    Commit = 'd0a6c37d-2ecd-44c8-8aa6-f7ab756025af',
    Suggestions = 'ec8b4c0c-dcaa-4163-b437-6497becdc345',
    Link = '503cc41c-67a1-4f71-b1e4-b6ce9f493cbb',
    UnitTest = 'fa193225-0f67-403a-974a-1eac1a2d4d96',

    // Off the clock.
    FishingRod = '6671bd1e-b0b7-4056-9ecf-ab14f8fd2b44',
    Zshoom = '47b9d636-4e9e-4587-8f0d-8b28a654e9dd',
    JuniperPats = 'fe75c4b6-70cc-4bf0-9255-cb77b6687919',
    Gamba = 'e4d81ee0-90fb-402d-9aaa-0c0f4cb81cc9',
    WordCloud = '7620ff65-c879-4440-aae8-f248d10f8b0a',
    PyramidScheme = 'c5989822-767f-4f01-8973-a1898e09bfc0',

    // Care for Jane.
    Hydrate = '0cccb3d9-4cdc-425b-b2e7-6051264f2383',
    Stretch = '1170947b-a7ac-445a-b80e-91c735d858d8',
    StayPositive = 'd414b1b3-9b9d-4a82-91e2-4bd6b46d2d21',

    // Interact with Jane.
    PayAttentionToMe = '1b497994-d9d1-48bc-91a2-fda8ae4a4309',
    Nya = 'd5886b0a-e2c8-43c6-9b6f-9edf6648d8e5',
    Bark = '9e635557-eb5d-4f26-a8e0-226e7a2af3df',
    AraAra = '02b556de-4164-4c88-93d4-29fc0d980838',
    SpokenForMe = '0f0367b0-155a-4ea8-99c1-0bf7f6e73354',

    // Interact with Jill.
    SayHeyJill = '0242ca8e-fe0c-42c2-86f2-6db9d4509a7a',

    // Custom voice.
    LetMeSpeak = 'e5c0380c-2afd-4796-8296-d7212b2f2144',
}