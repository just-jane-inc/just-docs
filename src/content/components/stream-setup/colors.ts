export const PRESET_COLORS: Record<string, string> = {
	grey: '#8a919c',
	blue: '#4d8dff',
	cyan: '#35d0d8',
	green: '#5fd35a',
	orange: '#ff9a3c',
	yellow: '#ffd23f',
	purple: '#a875ff',
};

export const DEFAULT_COLOR = PRESET_COLORS.blue;

const HEX_COLOR = /^#?([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const NAMED_COLOR = /^[a-z]+$/i;

export const resolveColor = (value?: string) => {
	const raw = String(value ?? '').trim();

	if (!raw) {
		return DEFAULT_COLOR;
	}

	if (PRESET_COLORS[raw.toLowerCase()]) {
		return PRESET_COLORS[raw.toLowerCase()];
	}

	if (HEX_COLOR.test(raw)) {
		return raw.startsWith('#') ? raw : `#${raw}`;
	}

	return NAMED_COLOR.test(raw) ? raw : DEFAULT_COLOR;
};
