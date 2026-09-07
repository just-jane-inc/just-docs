const escapeHtml = (value: string) => value
	.replace(/&/g, '&amp;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

export const inlineMarkdown = (value: string) => escapeHtml(value)
	.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
	.replace(/`([^`]+)`/g, '<code>$1</code>')
	.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
	.replace(/\*([^*]+)\*/g, '<em>$1</em>');

export const paragraphMarkdown = (value: string) => value
	.trim()
	.split(/\n\s*\n/)
	.map((block) => `<p>${inlineMarkdown(block.replace(/\s*\n\s*/g, ' '))}</p>`)
	.join('');
