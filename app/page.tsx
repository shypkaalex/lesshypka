import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-stone-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">

        <img
          src="/les.jpg"
          alt="Les Shypka"
          className="mb-10 h-56 w-56 rounded-full object-cover border border-amber-300/30"
        />

        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-amber-300">
          Les Shypka
        </p>


        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-stone-300">
          Bridge Builder Mission Statement: "To help people gain clarity about the mechanics of reality".
        </p>

        <p className="text-sm md:text-base text-white/80 leading-relaxed tracking-wide">
  Knight of{" "}
  <a
    href="https://orderofstgeorge.co.uk/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-amber-300 hover:text-amber-200 transition-colors"
  >
    Order of St. George
  </a>
  {" · "}
  <a
    href="https://otj.ngo/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-amber-300 hover:text-amber-200 transition-colors"
  >
    L’Ordre du Temple de Jérusalem
  </a>
  {" · "}
  <a
    href="https://ordredutemple.fr/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-amber-300 hover:text-amber-200 transition-colors"
  >
    Order of the Temple
  </a>
</p>

        <div className="mt-16 grid w-full gap-6 md:grid-cols-3">

          <Link
            href="/origin"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-amber-300/40 hover:bg-white/[0.05]"
          >
            <h2 className="font-serif text-3xl text-amber-200">
              Origin
            </h2>

            <p className="mt-4 text-stone-300">
              Family history, manuscripts, heraldry and documented ancestry.
            </p>
          </Link>

          <a
            href="https://alexlogos.consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-amber-300/40 hover:bg-white/[0.05]"
          >
            <h2 className="font-serif text-3xl text-amber-200">
              Action
            </h2>

            <p className="mt-4 text-stone-300">
              Alex Logos Consulting. From Clarity to Results.
            </p>
          </a>

          <a
            href="https://lesaion.world"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-amber-300/40 hover:bg-white/[0.05]"
          >
            <h2 className="font-serif text-3xl text-amber-200">
              Vision
            </h2>

            <p className="mt-4 text-stone-300">
              LES AION. Human potential in the age of AI.
            </p>
          </a>

        </div>

      </section>
    </main>
  );
}