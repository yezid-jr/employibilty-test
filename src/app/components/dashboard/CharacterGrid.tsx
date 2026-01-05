import { Character } from '@/types/character';

export function CharacterGrid({ characters }: { characters: Character[] }) {
  return (
    <div className="row">
      {characters.map(c => (
        <div key={c.id} className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm">
            <img src={c.image} alt={c.name} />
            <div className="card-body">
              <h5>{c.name}</h5>
              <span className="badge bg-secondary">{c.status}</span>
              <p className="text-muted">Especie: {c.species}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
