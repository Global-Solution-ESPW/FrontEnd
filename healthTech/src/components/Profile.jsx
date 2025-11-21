import { useMemo, useState } from "react";
import { perfilSaude } from "../data/ProfileData";

function Profiles() {
  const [search, setSearch] = useState("");
  const [cidade, setCidade] = useState("todas");
  const [area, setArea] = useState("todas");
  const [selectedProfile, setSelectedProfile] = useState(null);

  const cidades = useMemo(() => {
    const set = new Set(perfilSaude.map((p) => p.localizacao));
    return ["todas", ...Array.from(set)];
  }, []);

  const areas = useMemo(() => {
    const set = new Set(perfilSaude.map((p) => p.area));
    return ["todas", ...Array.from(set)];
  }, []);

  const filtrados = useMemo(() => {
    return perfilSaude.filter((p) => {
      const texto = `${p.nome} ${p.cargo} ${p.resumo}`.toLowerCase();
      const buscaOk = texto.includes(search.toLowerCase());

      const cidadeOk = cidade === "todas" ? true : p.localizacao === cidade;

      const areaOk = area === "todas" ? true : p.area === area;

      return buscaOk && cidadeOk && areaOk;
    });
  }, [search, cidade, area]);

  const destaque = filtrados.slice(0, 10);

  const handleRecomendar = () => {
    alert("Função simulada: recomendar profissional na rede HealthShift.");
  };

  const handleMensagem = () => {
    alert("Função simulada: enviar mensagem para o profissional.");
  };

  return (
    <section
      id="profissionais"
      className="max-w-6xl mx-auto px-4 pb-12 sm:pb-16 -mt-4"
    >
      <div className="mb-6 sm:mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-50">
              Profissionais da saúde na HealthShift
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Explore profissionais fictícios da área da saúde, simulando uma
              rede de carreira semelhante ao LinkedIn, integrada a um arquivo
              JSON local.
            </p>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {filtrados.length} profissionais encontrados
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-400 text-xs">
                  🔍
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por nome, cargo ou termos ex.: 'pediatra', 'UTI', 'telemedicina'..."
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 pl-8 pr-3 py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:w-[320px]">
              <select
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                {cidades.map((c) => (
                  <option key={c} value={c}>
                    {c === "todas" ? "Todas as cidades" : c}
                  </option>
                ))}
              </select>

              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                {areas.map((a) => (
                  <option key={a} value={a}>
                    {a === "todas" ? "Todas as áreas" : a}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Dados fictícios armazenados em JSON local, conforme especificação da
            Global Solution, simulando uma rede profissional de saúde.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {destaque.map((profile) => (
          <article
            key={profile.id}
            className="flex gap-3 sm:gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 hover:shadow-sm hover:border-sky-500 transition-all"
          >
            <div className="flex-shrink-0">
              {profile.foto ? (
                <img
                  src={profile.foto}
                  alt={profile.nome}
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />
              ) : (
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  {profile.nome.slice(0, 2)}
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-50">
                    {profile.nome}
                  </h3>
                  <p className="text-xs text-sky-700 dark:text-sky-300">
                    {profile.cargo}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {profile.localizacao} · Área: {profile.area}
                  </p>
                </div>
                <span className="inline-flex text-[10px] px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 dark:bg-sky-900/30 dark:text-sky-200 dark:border-sky-900">
                  Aberto a oportunidades
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1 line-clamp-2">
                {profile.resumo}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {profile.habilidadesTecnicas.slice(0, 3).map((h) => (
                  <span
                    key={h}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-100 border border-slate-200 dark:border-slate-700"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white"
                  onClick={handleRecomendar}
                >
                  Conectar
                </button>
                <button
                  type="button"
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-100 hover:border-sky-500"
                  onClick={handleMensagem}
                >
                  Mensagem
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProfile(profile)}
                  className="text-[11px] font-medium text-sky-700 dark:text-sky-300 hover:underline"
                >
                  Ver perfil completo
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProfile && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="max-w-xl w-full mx-4 rounded-2xl bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 border border-slate-300 dark:border-slate-700 p-5 sm:p-6 relative">
            <button
              type="button"
              onClick={() => setSelectedProfile(null)}
              className="absolute right-3 top-3 text-xs px-2 py-1 rounded-full border border-slate-300 dark:border-slate-600 hover:border-sky-500"
            >
              Fechar
            </button>

            <div className="flex items-center gap-3 mb-4">
              {selectedProfile.foto ? (
                <img
                  src={selectedProfile.foto}
                  alt={selectedProfile.nome}
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border border-slate-300 dark:border-slate-600"
                />
              ) : (
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-sky-100 flex items-center justify-center text-[11px] font-semibold text-sky-700">
                  {selectedProfile.nome.slice(0, 2)}
                </div>
              )}
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  {selectedProfile.nome}
                </h3>
                <p className="text-xs text-sky-600 dark:text-sky-300">
                  {selectedProfile.cargo}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {selectedProfile.localizacao} · {selectedProfile.area}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm mb-3">{selectedProfile.resumo}</p>

            <div className="grid gap-3 text-[11px] sm:text-xs">
              <div>
                <h4 className="font-semibold mb-1">Habilidades técnicas</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProfile.habilidadesTecnicas.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Soft skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProfile.softSkills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Experiência profissional</h4>
                {selectedProfile.experiencias.map((exp, idx) => (
                  <div key={idx} className="mb-1">
                    <p className="font-semibold">
                      {exp.cargo} · {exp.empresa}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      {exp.inicio} — {exp.fim}
                    </p>
                    <p>{exp.descricao}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <h4 className="font-semibold mb-1">Formação acadêmica</h4>
                  {selectedProfile.formacao.map((f, idx) => (
                    <p key={idx}>
                      {f.curso} · {f.instituicao} ({f.ano})
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Certificações</h4>
                  <ul className="list-disc list-inside">
                    {selectedProfile.certificacoes.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <h4 className="font-semibold mb-1">Idiomas</h4>
                  {selectedProfile.idiomas.map((i, idx) => (
                    <p key={idx}>
                      {i.idioma} · {i.nivel}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Áreas de interesse</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProfile.areaInteresses.map((a) => (
                      <span
                        key={a}
                        className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white"
                  onClick={handleRecomendar}
                >
                  Recomendar profissional
                </button>
                <button
                  type="button"
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-100 hover:border-sky-500"
                  onClick={handleMensagem}
                >
                  Enviar mensagem
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Profiles;
