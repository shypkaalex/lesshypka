const familyLines = [
  "Shypka",
  "Szupiany",
  "Maksymowicz",
  "Wengrynowicz",
  "Chotyniecki",
  "Witoszyński",
  "Seeligmann",
  "Nosalewicz",
  "Nazarewicz",
  "Wachnianin",
  "de Sozań",
  "Rastawiecki",
  "Wańkowicz",
  "Liskowacki",
];

export default function OriginPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-stone-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.5em] text-amber-300">
          Les Shypka
        </p>

        <h1 className="font-serif text-6xl text-stone-50 md:text-8xl">
          Origin
        </h1>

        <div className="mx-auto mt-10 h-px w-24 bg-amber-300" />

        <p className="mx-auto mt-10 max-w-2xl text-lg tracking-wide text-stone-300 md:text-xl">
          Family Lines · Historical Documents · Family Archives
        </p>
      </section>

      

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 font-serif text-4xl text-amber-200 md:text-5xl">
          Witoszyński
        </h2>

        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <img
              src="/origin/witoszynski-coa.png"
              alt="Witoszyński coat of arms"
              className="mx-auto max-h-[360px] object-contain"
            />
            <p className="mt-6 text-center text-sm uppercase tracking-[0.3em] text-stone-400">
              Coat of Arms
            </p>
          </div>

          <div className="rounded-3xl border border-amber-300/20 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Ancestors Memorial Manuscript
            </p>

            <h3 className="mt-5 font-serif text-5xl text-stone-50">1634 A.D.</h3>

            <div className="mt-6 space-y-2 text-lg text-stone-300">
              <p>566 recorded names</p>
              <p>Church Slavonic</p>
              <p>Parchment manuscript</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <img
            src="/origin/manuscript-1.jpg"
            alt="Witoszyński ancestors memorial manuscript"
            className="rounded-3xl border border-white/10"
          />
          <img
            src="/origin/manuscript-2.jpg"
            alt="Witoszyński ancestors memorial manuscript detail"
            className="rounded-3xl border border-white/10"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 font-serif text-4xl text-amber-200 md:text-5xl">
          House of Sozań
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Direct Maternal Ancestor
            </p>
            <h3 className="mt-5 font-serif text-4xl text-stone-50">
              André I l&apos;Ancien de Sozań
            </h3>
            <p className="mt-4 text-xl text-stone-300">(1759–1807)</p>
            <p className="mt-6 text-lg text-stone-300">
Abbé nullius de Sozań</p>

<div className="mt-10 border-t border-amber-300/20 pt-8">
  <p className="mb-6 text-xs uppercase tracking-[0.35em] text-amber-300">
    Direct Maternal Line
  </p>

  <div className="space-y-2 text-stone-300">
    
    <p>Maria Anna de Sozań</p>
    <p className="text-amber-300">↓</p>

    <p>Thekla Nazarewicz</p>
    <p className="text-amber-300">↓</p>

    <p>Rev. Petrus Witoszyński</p>
    <p className="text-amber-300">↓</p>

    <p>Philippina Witoszyńska</p>
    <p className="text-amber-300">↓</p>

    <p>Helena Chotyniecka</p>
    <p className="text-amber-300">↓</p>

    <p>Oleksandr Szupiany</p>
    <p className="text-amber-300">↓</p>

    <p>Halyna Szupiana</p>
    <p className="text-amber-300">↓</p>

    <p className="font-semibold text-amber-200">
      Les Shypka
    </p>
  </div>
</div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
              Direct Great-Grandson of André
            </p>
            <h3 className="mt-5 font-serif text-4xl text-stone-50">
              Henri-Adam de Sozań
            </h3>
            <p className="mt-4 text-xl text-white/70">
  (1878–1956)
</p>
            <p className="mt-6 text-lg text-stone-300">Cardinal extra numero de la S.E.R., Prince-Abbé de Sozań</p>
            <img
              src="/origin/cardinal-arms.png"
              alt="Cardinal arms of Henri-Adam de Sozań"
              className="mx-auto mt-8 max-h-[280px] object-contain"
            />

<div className="mt-8 border-t border-white/10 pt-8">
  <p className="mb-2 text-sm uppercase tracking-[0.3em] text-amber-300">
    Order of Christ
  </p>

  <p className="mb-6 text-stone-300">
    Knight <em>de jure sanguinis</em>
  </p>

  <img
    src="/origin/order-christ.jpg"
    alt="Order of Christ insignia"
    className="mx-auto max-h-[420px] w-auto object-contain"
  />
</div>

          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <img
              src="/origin/teodorowicz-portrait.jpg"
              alt="Joseph Teodorowicz"
              className="mx-auto max-h-[380px] rounded-2xl object-contain"
            />
            <h3 className="mt-6 font-serif text-3xl text-stone-50">
              Joseph Theodorowicz
            </h3>
            <p className="mt-2 text-stone-400">1864–1938</p>
            <p className="mt-4 text-stone-300">
              Archbishop of the Armenians of Leopolis
            </p>
          </div>

          <div className="space-y-8">
            <article className="rounded-3xl border border-amber-300/20 bg-white/[0.03] p-8">
              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-amber-300">
                Document I
              </p>
              <p className="font-serif text-2xl leading-relaxed text-stone-100">
                We, Joseph Theodorowicz, by the Divine Mercy and the grace of the Holy Apostolic See, Archbishop of Leopold of the Armenian Rite, etc., etc., etc., have the joy and honor to proclaim and confirm that His Holiness Pope Benedict XV created, during an audience in the year 1916, the cardinalate for His Excellency Abbot Nullius of Sozan for diplomatic reasons. The present Cardinalate applies to his male successors, without further confirmation. His Excellency Abbot Nullius of Sozan belongs to the Apostolic Gens and is descended from the holy King-Prophet David and Saint Gregory the Illuminator. He is now present as [His] Excellency the Most Reverend Henri Adam, of the SRE [Sanctæ Romanæ Ecclesiæ] Cardinal Abbot of Sozan. Given in Our city of Leopold [Lemberg] on April 16, 1922. Signed ✠ Joseph, Archbishop. Sozan, copy made on September 22, 1942. [in the margin: Original in situ]
              </p>
              <p className="mt-6 text-sm leading-relaxed text-stone-400">
                Decree (in German) signed on April 16, 1922, in Leopoldsburg, and copied on September 22, 1942, in the Sozan Registers . Archives of the current Prince-Abbot. Original in the archives of the Armenian Archdiocese of Leopoldsburg.
              </p>
            </article>

            <article className="rounded-3xl border border-amber-300/20 bg-white/[0.03] p-8">
              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-amber-300">
                Document II
              </p>
              <p className="font-serif text-2xl leading-relaxed text-stone-100">
                “We, Joseph Theodorowicz, by the Divine Mercy and the grace of the Holy Apostolic See, Archbishop of Leopold of the Armenian Rite, etc., etc., etc., have the honor to announce and confirm that His Excellency Henri Adam de Sozań has validly accepted his legitimate right to be a Knight of the Order of Christ through the legitimate lineage of His Majesty Denis I, King of Portugal, Founder and Grand Master of the Order of Christ. His Excellency has inherited this right for his male successors in office. His Holiness Pope Benedict XV graciously accepted him and his successors as Knights de jure sanguinis of the Order of Christ, under the Extra Numero clause. Given in Our city of Leopold [Lemberg] on August 16, 1922. Signed ✠ Joseph, Archbishop. Sozan, copy made on September 21, 1942. [in margin: Original in situ]”
              </p>
              <p className="mt-6 text-sm leading-relaxed text-stone-400">
                Decree (in German) signed onAugust 16, 1922to Leopold, and copied theSeptember 21, 1942in the Registers of Sozan . Archive collection of the current Prince-Abbot. Original in the archives of the Armenian Archdiocese of Leopol
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 font-serif text-4xl text-amber-200 md:text-5xl">
          Family Archive
        </h2>

        <img
          src="/origin/family-archive.png"
          alt="Family archive, Galicia, early 20th century"
          className="w-full rounded-3xl border border-white/10"
        />

        <div className="mt-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Galicia
          </p>
          <p className="mt-3 font-serif text-3xl text-stone-50">
            Early 20th Century
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 font-serif text-4xl text-amber-200 md:text-5xl">
          Family Lines
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {familyLines.map((name) => (
            <div
              key={name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-xl text-stone-100"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 py-16 text-center text-sm tracking-[0.3em] text-stone-500">
        LES SHYPKA · ORIGIN
      </footer>
    </main>
  );
}