function Hero() {
  const scrollToProfiles = () => {
    const section = document.getElementById("profissionais");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="sobre"
      className="max-w-6xl mx-auto px-4 py-10 sm:py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      <div className="space-y-6">
        <span className="inline-flex text-[11px] font-semibold tracking-wide uppercase text-sky-700 bg-sky-50 dark:bg-sky-900/40 px-3 py-1 rounded-full border border-sky-100 dark:border-sky-800">
          Global Solution · HealthShift · Futuro do Trabalho
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900 dark:text-slate-50">
          A rede de carreira para quem cuida da saúde das pessoas.
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          A <strong>HealthShift</strong> conecta profissionais da saúde,
          clínicas e hospitais em um ambiente digital inspirado no LinkedIn,
          focado em bem-estar, requalificação contínua e novas formas de
          trabalhar na saúde.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-5 py-2.5 rounded-full"
            onClick={scrollToProfiles}
          >
            Explorar profissionais da saúde
          </button>
        </div>

        <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <div>
            <p>Profissionais da saúde em diferentes áreas de atuação.</p>
          </div>
          <div>
            <p className="font-semibold text-sky-700 dark:text-sky-300">
              Busca e filtros inteligentes
            </p>
            <p>Filtre por cidade, área de atuação e habilidades técnicas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
