export const typeColors: Record<string, string> = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

export const getTypeColor = (type: string): string => {
  return typeColors[type] || '#68A090';
};

export const getTypeGradient = (types: string[]): string => {
  if (types.length === 1) {
    return `linear-gradient(135deg, ${getTypeColor(types[0])}, ${getTypeColor(
      types[0]
    )}aa)`;
  }
  return `linear-gradient(135deg, ${getTypeColor(types[0])}, ${getTypeColor(
    types[1]
  )})`;
};
