import { perfilSaude } from "../data/ProfileData";

function Profiles() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-10 sm:pb-16 -mt-6 md:-mt-10">
      <div className="relative">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 sm:p-6 shadow-lg shadow-emerald-500/5 backdrop-blur">
          <p className="text-xs font-medium text-emerald-500 mb-3">
            Destaques da Comunidade
          </p>
          <div className="space-y-4">
            {perfilSaude.map((profile) => (
              <article
                key={profile.id}
                className="flex gap-3 sm:gap-4 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/80 hover:border-emerald-400 transition"
              >
                <img
                  src={profile.foto}
                  alt={profile.nome}
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{profile.nome}</h3>
                  <p className="text-xs text-emerald-500">{profile.cargo}</p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {profile.resumo}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {profile.habilidadesTecnicas.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden sm:block absolute -z-10 inset-0 translate-x-6 translate-y-6 blur-3xl opacity-40 bg-gradient-to-br from-emerald-500/40 via-sky-500/30 to-slate-900/0" />
      </div>
    </section>
  );
}

export default Profiles;
