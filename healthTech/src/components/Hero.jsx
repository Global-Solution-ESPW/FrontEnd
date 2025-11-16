function Hero() {
  return (
    <section
      id="sobre"
      className="max-w-6xl mx-auto px-4 py-10 sm:py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      <div className="space-y-6">
        <span className="inline-flex text-xs font-semibold tracking-wide uppercase text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-900">
          Global Solution · Futuro do Trabalho
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Conectando profissionais de{" "}
          <span className="text-emerald-500">saúde</span> a novas formas de
          trabalhar.
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          A HealthConnect Pro é uma rede profissional focada exclusivamente na
          área de saúde, aproximando talentos, clínicas e hospitais por meio da
          tecnologia. Explore perfis, competências e propósitos em um único
          ecossistema digital.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-full">
            Explorar profissionais
          </button>
          <button className="border border-slate-300 dark:border-slate-700 text-sm px-5 py-2.5 rounded-full hover:border-emerald-500 hover:text-emerald-500">
            Ver como funciona
          </button>
        </div>

        <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <div>
            <p className="font-semibold text-emerald-500">+60 perfis</p>
            <p>Profissionais de saúde simulados em JSON.</p>
          </div>
          <div>
            <p className="font-semibold text-emerald-500">
              Filtro por área e cidade
            </p>
            <p>Saúde conectada às necessidades locais.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
