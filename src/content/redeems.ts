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
    let attemptsRemaining = 3;
    let result = description;

    while (typeof result === 'object' && --attemptsRemaining >= 0) {
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
    postSelect: {['*']: {
        ...overrides,
        description: await resolveRedeemDescription(
            overrides.description ?? ''
        ),
    }},
});