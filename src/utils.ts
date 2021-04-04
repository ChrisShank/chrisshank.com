export type Stage = 'seedling' | 'budding' | 'evergreen';

export function getStageEmoji(stage?: Stage) {
	switch (stage) {
		case 'seedling':
			return '🌱';
		case 'budding':
			return '🌿';
		case 'evergreen':
			return '🌳';
		default:
			return '';
	}
}
