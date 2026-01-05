import { Character } from "@/types/character"

const API_URL = "https://rickandmortyapi.com/api/character"

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Failed to fetch characters")
  }

  const data = await response.json()
  return data.results
}
