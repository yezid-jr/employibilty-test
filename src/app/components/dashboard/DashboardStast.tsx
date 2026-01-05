interface Props {
  stats: {
    total: number;
    alive: number;
    dead: number;
    unknown: number;
  };
}

export function DashboardStats({ stats }: Props) {
  return (
    <div className="row mb-4">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="col-md-3">
          <div className="card text-center p-3 shadow-sm">
            <h6>{key.toUpperCase()}</h6>
            <p className="fw-bold">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
