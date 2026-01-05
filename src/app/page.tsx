export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Rick and Morty Dashboard
      </h1>

      <p className="text-gray-600 max-w-md mb-6">
        Aplicación desarrollada en Next.js 15 que consume la API pública
        de Rick and Morty, con dashboard, filtros y visualización de datos.
      </p>

      <div className="flex gap-4">
        <a
          href="/home"
          className="px-5 py-2 rounded bg-black text-white hover:bg-gray-800 transition"
        >
          Ver personajes
        </a>

        <a
          href="/dashboard"
          className="px-5 py-2 rounded border border-black hover:bg-gray-100 transition"
        >
          Ir al dashboard
        </a>
      </div>
    </main>
  );
}
