import type { Pokemon, Pokemon_v2_move } from '../types/APITypes';
import { getTypeEffectiveness } from './typeEffectiveness';

export const calculateDamage = (
  attacker: Pokemon,
  defender: Pokemon,
  move: Pokemon_v2_move
): number => {
  if (move.pokemon_v2_type.name === 'status') return 0;

  const attackStat =
    move.pokemon_v2_type.name === 'physical'
      ? attacker.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'attack'
        )?.base_stat || 100
      : attacker.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'special-attack'
        )?.base_stat || 100;

  const defenseStat =
    move.pokemon_v2_type.name === 'physical'
      ? defender.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'defense'
        )?.base_stat || 100
      : defender.pokemon_v2_pokemonstats.find(
          (s) => s.pokemon_v2_stat.name === 'special-defense'
        )?.base_stat || 100;

  const defenderTypes = defender.pokemon_v2_pokemontypes.map(
    (t) => t.pokemon_v2_type.name
  );
  const effectiveness = getTypeEffectiveness(
    move.pokemon_v2_type.name,
    defenderTypes
  );

  const baseDamage =
    ((2 * 50 + 10) / 250) * (attackStat / defenseStat) * move.power + 2;
  const damage = Math.floor(
    baseDamage * effectiveness * (Math.random() * 0.15 + 0.85)
  );

  return Math.max(1, damage);
};
