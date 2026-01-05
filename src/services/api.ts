import { ApiResponse } from '@/types/character';

export async function fetchCharacters(): Promise<ApiResponse> {
  const res = await fetch('https://rickandmortyapi.com/api/character');

  if (!res.ok) {
    throw new Error('Error fetching characters');
  }

  return res.json();
}
