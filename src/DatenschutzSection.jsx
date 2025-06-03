import React from "react";

const DatenschutzSection = () => (

<section id="datenschutz" className="relative min-h-screen text-white flex flex-col justify-center items-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full box-border" style={{ background: '#18181b' }}>
    <div className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-left bg-black/50 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md border border-white/10 overflow-hidden break-words box-border">
      <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-8 text-center">Datenschutzerklärung</h2>
      <div className="space-y-6 text-neutral-300 text-sm md:text-base">
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">1. Allgemeine Hinweise</h3>
        <p>Der Schutz deiner persönlichen Daten ist mir ein besonderes Anliegen. Ich behandle deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">2. Verantwortlicher</h3>
        <p>Martin Mamic<br />mamicstudios – Einzelunternehmen<br />Am Pfarrtor 23<br />71272 Renningen<br />Deutschland<br />📧 E-Mail: mamicstudios@gmail.com</p>
        <hr className="my-4 border-neutral-700" />
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">3. Erhebung und Verarbeitung personenbezogener Daten</h3>
        <p>Ich verarbeite personenbezogene Daten nur, wenn du mir diese freiwillig mitteilst – etwa über das Kontaktformular.</p>
        <p>Erhobene Daten:<br />
        • Name<br />
        • E-Mail-Adresse<br />
        • Betreff &amp; Nachricht<br />
        Diese Angaben werden ausschließlich zur Bearbeitung deiner Anfrage genutzt.</p>
        <hr className="my-4 border-neutral-700" />
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">4. Kontaktformular</h3>
        <p>Wenn du mir über das Kontaktformular eine Nachricht sendest, erfolgt die Übermittlung über den Dienst <strong>Formsubmit</strong> (formsubmit.io). Dabei wird deine Nachricht direkt an meine E-Mail-Adresse weitergeleitet.</p>
        <p>Die Datenschutzerklärung von Formsubmit findest du unter:<br />
        <a href="https://formsubmit.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">https://formsubmit.io/legal/privacy-policy</a></p>
        <p>Es erfolgt keine Speicherung auf meiner eigenen Website oder einem Server.</p>
        <hr className="my-4 border-neutral-700" />
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">5. Einsatz von Google Fonts</h3>
        <p>Auf dieser Website wird die Schriftart “Wix Madefor Display” von Google Fonts eingebunden. Die Fonts werden über einen externen Server von Google geladen.</p>
        <p>Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland<br />
        Datenschutzerklärung: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">https://policies.google.com/privacy</a></p>
        <p>Beim Aufruf der Schrift können technisch bedingt Daten (z. B. IP-Adresse) an Google übermittelt werden.</p>
        <hr className="my-4 border-neutral-700" />
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">6. Keine Cookies / Kein Tracking</h3>
        <p>Diese Webseite verwendet keine Cookies, keine Analyse-Tools (z. B. Google Analytics) und kein Tracking.</p>
        <hr className="my-4 border-neutral-700" />
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">7. Deine Rechte</h3>
        <p>Du hast jederzeit das Recht auf:<br />
        • Auskunft über die gespeicherten Daten<br />
        • Berichtigung oder Löschung<br />
        • Einschränkung der Verarbeitung<br />
        • Widerspruch gegen die Verarbeitung<br />
        • Datenübertragbarkeit<br />
        Außerdem hast du das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>
        <hr className="my-4 border-neutral-700" />
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">8. SSL-Verschlüsselung</h3>
        <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Du erkennst dies an der Adresszeile deines Browsers (“https://”).</p>
        <hr className="my-4 border-neutral-700" />
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">9. Änderungen</h3>
        <p>Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an aktuelle rechtliche Anforderungen oder Änderungen im Funktionsumfang anzupassen.</p>
      </div>
    </div>
  </section>
);

export default DatenschutzSection;
