interface Props {
  search: string;
  setSearch: (v: string) => void;
  statusFilter: string;
  setStatusFilter: (v: string) => void;
  total: number;
}

export function DashboardFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  total,
}: Props) {
  return (
    <div className="mb-4 p-3 rounded bg-light">
      <div className="row g-2">
        <input
          className="form-control col"
          placeholder="Buscar..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="form-select col"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <span className="text-muted col">
          Total visibles: {total}
        </span>
      </div>
    </div>
  );
}
