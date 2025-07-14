export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 px-8 py-16">
      <p className="text-2xl  font-bold">Versus Fighting Improve.io</p>
      <p>
        Bienvenue sur la plateforme qui te permettera de t&apos;améliorer sur un
        jeu de combat
      </p>
      <p>La plateforme se focalise pour le moment sur Street Fighter 6</p>
      <p className="mb-4">Cette plateforme te permet:</p>
      <div className="max-w-sm border border-zinc-400 rounded-md p-4 shadow-2xl">
        <ul className="flex flex-col gap-4 list-inside">
          <li>
            <span className="text- text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 inline h-6 w-6 text-indigo-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
            Prendre des notes sur ton personnage et par ses matchup de manière
            écrite ou vocale
          </li>
          <li>
            <span className="text- text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 inline h-6 w-6 text-indigo-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
            Partager tes notes avec d&apos;autres joueurs
          </li>
          <li>
            <span className="text- text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 inline h-6 w-6 text-indigo-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
            A venir: Une plateforme de coaching en ligne pour améliorer tes
            skills
          </li>
          <li>Et bien plus encore ...</li>
        </ul>
      </div>
    </main>
  );
}
