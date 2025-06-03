import React from 'react';

export default function ImpressumPage() {
  return (
    <section className="relative min-h-screen text-white flex flex-col justify-center items-center py-20 sm:py-28 px-0" style={{ background: '#18181b' }}>
      <div className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-left bg-black/50 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md border border-white/10 w-full">
        <h2 className="text-2xl sm:text-4xl font-bold text-red-500 mb-8 text-center">Impressum</h2>
        <div className="space-y-6 text-neutral-300 text-sm md:text-base">
          <h3 className="text-xl font-semibold text-neutral-100 mb-2">Angaben gemäß § 5 TMG</h3>
          <p>Martin Mamic<br />
mamicstudios – Einzelunternehmen<br />
Am Pfarrtor 23<br />
71272 Renningen<br />
Deutschland</p>
          <hr className="my-4 border-neutral-700" />
          <h3 className="text-xl font-semibold text-neutral-100 mb-2">Kontakt</h3>
          <p>Telefon: 0157 35527731<br />
E-Mail: <a href="mailto:mamicstudios@gmail.com" className="text-red-500 hover:text-red-400">mamicstudios@gmail.com</a></p>
          <hr className="my-4 border-neutral-700" />
          <h3 className="text-xl font-semibold text-neutral-100 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>Martin Mamic<br />
Am Pfarrtor 23<br />
71272 Renningen</p>
          <hr className="my-4 border-neutral-700" />
          <h3 className="text-xl font-semibold text-neutral-100 mb-2">Hinweis gemäß § 19 UStG</h3>
          <p>Als Kleinunternehmer wird keine Umsatzsteuer erhoben und ausgewiesen.</p>
          <hr className="my-4 border-neutral-700" />
          <h3 className="text-xl font-semibold text-neutral-100 mb-2">Plattform der EU-Kommission zur Online-Streitbeilegung</h3>
          <p><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">https://ec.europa.eu/consumers/odr</a></p>
          <p>Ich bin weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      </div>
    </section>
  );
}