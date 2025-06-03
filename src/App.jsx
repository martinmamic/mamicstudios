// MamicStudios Webseite – Komplettstruktur mit Video-Background, Navigation, Equipment, Preise, Referenzen und Team
import React, { useState, useEffect, useRef } from "react";
import { BookOpenIcon, BriefcaseIcon, ChatBubbleOvalLeftEllipsisIcon, AdjustmentsHorizontalIcon, ChevronRightIcon, ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'; // Added ChevronLeftIcon and XMarkIcon
import DatenschutzSection from "./DatenschutzSection";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Referenzen', href: '#referenzen' },
    { label: 'Preise', href: '#preise' },
    { label: 'Team', href: '#team' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black z-50 text-white flex justify-between items-center px-8 py-4 shadow-md">
      <div className="font-bold text-xl">
        <img src="/mamicstudios_Logo_weiss.svg" alt="MamicStudios Logo" className="h-4" />
      </div>
      {/* Desktop Nav */}
      <ul className="hidden sm:flex space-x-6 text-sm">
        {navLinks.map((item) => (
          <li key={item.label} className="hover:text-red-500 cursor-pointer">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      {/* Burger Icon for Mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Menü öffnen"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="block w-7 h-0.5 bg-white mb-1.5 rounded transition-all duration-300" style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
        <span className={`block w-7 h-0.5 bg-white mb-1.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className="block w-7 h-0.5 bg-white rounded transition-all duration-300" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
      </button>
      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 shadow-lg flex flex-col items-center py-6 animate-fadeIn z-50">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block w-full text-center py-3 text-lg font-semibold hover:text-red-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const HomeAboutSection = () => (
  <section id="about" className="relative min-h-screen bg-transparent text-white flex flex-col justify-center items-center text-center py-24 md:py-28">
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Changed max-w-5xl to max-w-7xl */}
      {/* Hero Text */}
      <div className="mb-12 lg:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Ich bin Martin Mamic</h1>
        <p className="px-6 py-2 bg-red-600 rounded-full inline-block text-white font-semibold text-base md:text-lg mb-6">Audio Engineer & Beatmaker</p>
        <div className="flex flex-row justify-center items-center gap-x-2 sm:gap-x-6 text-sm md:text-base max-w-xs mx-auto">
          <span className="border-b-2 border-red-500 pb-1 whitespace-nowrap">Klarer Sound.</span>
          <span className="border-b-2 border-red-500 pb-1 whitespace-nowrap">Echte Emotion.</span>
          <span className="border-b-2 border-red-500 pb-1 whitespace-nowrap">Bleibende Produktionen.</span>
        </div>
      </div>

      {/* About Content (Image and Cards) */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch text-left gap-12 lg:gap-20"> {/* Changed md:items-start to md:items-stretch */}
        {/* Left: Bild */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full max-w-md sm:w-3/4 md:w-2/5 mx-auto md:mx-0"> {/* Increased md:w-2/5, added max-w-md for mobile */}
          <img
            src="/martinmamicich.webp"
            alt="Martin Mamic"
            className="w-full h-full rounded-3xl object-cover shadow-xl border-2 border-neutral-700" /* Changed rounded-2xl to rounded-3xl */
          />
        </div>
        {/* Right: Cards */}
        <div className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10"> {/* Increased md:w-3/5 and gaps */}
          {/* Ausbildung Card */}
          <div className="bg-neutral-800 rounded-3xl p-6 shadow-lg border border-neutral-700/70 transition-all duration-300 ease-in-out hover:border-red-500/90 hover:shadow-[0_0_25px_-5px_rgba(239,68,68,0.7)] w-full max-w-md mx-auto sm:w-auto sm:max-w-none sm:mx-0"> {/* Added classes for mobile and reset for sm+ */}
            <div className="flex items-center mb-3"> {/* Increased mb-3 */}
              <BookOpenIcon className="h-7 w-7 text-sky-400 mr-3" /> {/* Increased icon size and mr-3 */}
              <h3 className="text-lg lg:text-xl font-semibold text-sky-400">Ausbildung</h3> {/* Increased text size */}
            </div>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed"> {/* Increased text size sm:text-base */}
              2024 habe ich mein Diplom als Audio Engineer am SAE Institute erhalten und setze derzeit mein Bachelorstudium fort.
            </p>
          </div>
          {/* Erfahrung Card */}
          <div className="bg-neutral-800 rounded-3xl p-6 shadow-lg border border-neutral-700/70 transition-all duration-300 ease-in-out hover:border-red-500/90 hover:shadow-[0_0_25px_-5px_rgba(239,68,68,0.7)] w-full max-w-md mx-auto sm:w-auto sm:max-w-none sm:mx-0"> {/* Added classes for mobile and reset for sm+ */}
            <div className="flex items-center mb-3"> {/* Increased mb-3 */}
              <BriefcaseIcon className="h-7 w-7 text-sky-400 mr-3" /> {/* Increased icon size and mr-3 */}
              <h3 className="text-lg lg:text-xl font-semibold text-sky-400">Erfahrung</h3> {/* Increased text size */}
            </div>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed"> {/* Increased text size sm:text-base */}
              Seit über fünf Jahren produziere ich Beats und arbeite als Recording-, Mixing- & Mastering-Engineer.
            </p>
          </div>
          {/* Philosophie Card */}
          <div className="bg-neutral-800 rounded-3xl p-6 shadow-lg border border-neutral-700/70 transition-all duration-300 ease-in-out hover:border-red-500/90 hover:shadow-[0_0_25px_-5px_rgba(239,68,68,0.7)] w-full max-w-md mx-auto sm:w-auto sm:max-w-none sm:mx-0"> {/* Added classes for mobile and reset for sm+ */}
            <div className="flex items-center mb-3"> {/* Increased mb-3 */}
              <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 text-yellow-400 mr-3" /> {/* Increased icon size and mr-3 */}
              <h3 className="text-lg lg:text-xl font-semibold text-yellow-400">Philosophie</h3> {/* Increased text size */}
            </div>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed"> {/* Increased text size sm:text-base */}
              Bei mamicstudios entstehen Produktionen, die deine Vision mit meiner Expertise vereinen.
            </p>
          </div>
          {/* Arbeitsweise Card */}
          <div className="bg-neutral-800 rounded-3xl p-6 shadow-lg border border-neutral-700/70 transition-all duration-300 ease-in-out hover:border-red-500/90 hover:shadow-[0_0_25px_-5px_rgba(239,68,68,0.7)] w-full max-w-md mx-auto sm:w-auto sm:max-w-none sm:mx-0"> {/* Added classes for mobile and reset for sm+ */}
            <div className="flex items-center mb-3"> {/* Increased mb-3 */}
              <AdjustmentsHorizontalIcon className="h-7 w-7 text-red-400 mr-3" /> {/* Increased icon size and mr-3 */}
              <h3 className="text-lg lg:text-xl font-semibold text-red-400">Arbeitsweise</h3> {/* Increased text size */}
            </div>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed"> {/* Increased text size sm:text-base */}
              Klare Kommunikation, moderner Sound und ein professioneller Workflow stehen dabei im Mittelpunkt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EquipmentSection = () => {
  const [activeTab, setActiveTab] = React.useState('Recording');

  const equipmentData = {
    Recording: [
      {
        name: 'Slate Digital ML-1',
        description: 'Modeling-Mikrofon für hochwertige Vocals und Instrumente. Flexibles System mit professioneller Klangwiedergabe für Studio-Produktionen aller Art.',
        tags: ['Kondensator', '48V Phantom', 'Modeling'], // Added 'Modeling' tag
        image: '/Slatemic.webp',
        category: 'Vocals'
      },
      {
        name: 'Universal Audio Apollo',
        description: 'High-End Audio Interface mit DSP-Processing. Ermöglicht Echtzeit-Monitoring mit UAD-Plugins für latenzarmes Recording und professionelle Aufnahmequalität.',
        tags: ['24-bit/192kHz', 'UAD-2 DSP', 'Realtime'], // Added 'Realtime' tag
        image: '/Apollo.webp',
        category: 'Interface'
      },
      {
        name: 'Headamp 6',
        description: 'Präziser Kopfhörerverstärker für detaillierte Aufnahmen. Ermöglicht klares Monitoring mit mehreren Kopfhörern während der Aufnahmesessions.',
        tags: ['Präzision', 'Monitoring', '6-Kanal'], // Updated tags
        image: '/Headamp.webp',
        category: 'Monitoring'
      },
    ],
    Mixing: [
      {
        name: 'Universal Audio',
        description: 'Legendäre UAD-Plug-ins mit authentischer Emulation analoger Studiohardware.',
        tags: ['UAD Plugins', 'Analog Emulation', 'Processing'], // Changed tags
        image: '/universalaudio.webp',
        category: 'UAD'
      },
      {
        name: 'Slate Digital',
        description: 'Virtual Mix Rack + All Access Pass = komplette Mixing-Chain, Kompressoren, EQs & Co. in einem Plugin – flexibel kombinierbar und perfekt integriert.',
        tags: ['All Access', 'VMR', 'SSL'], // Changed tags
        image: '/Slate.webp',
        category: 'Slate' // Changed from 'Dynamik'
      },
      {
        name: 'Izotope Suite', // Changed from 'Beyerdynamic DT 770 Pro'
        description: 'Vereint leistungsstarke Tools für Mixing, Mastering und Klanganalyse in einer Lösung. Perfekt für effiziente und professionelle Studioarbeit.', // Changed 'vereint' to 'Vereint'
        tags: ['Ozone', 'Neutron', 'AI Tools'],
        image: '/equipement-balken.webp', // Changed to equipement-balken.jpg
        category: 'Native Instruments' // Changed from 'Kopfhörer'
      },
    ],
    Monitoring: [
      {
        name: 'Studiomonitore',
        description: 'Yamaha HS5 Monitore in Kombination mit dem HS8s Subwoofer – für präzises Nahfeld-Monitoring mit erweitertem Bassbereich und ehrlicher Klangabbildung.',
        tags: ['Aktiv', 'HS-Serie', 'Subwoofer'], // Changed tags
        image: '/Lautsprecher.webp',
        category: 'Lautsprecher'
      },
      {
        name: 'Beyerdynamic 770 Pro',
        description: 'Geschlossene Studiokopfhörer mit klarem Klangbild und hoher Isolation.\nIdeal für Recording-Sessions ohne Übersprechen ins Mikrofon.',
        tags: ['Geschlossen', 'Monitoring', '250 Ohm'], // Changed tags
        image: '/dt770.webp',
        category: 'Kopfhörer' // Changed from 'Mikrofon'
      },
      {
        name: 'Monitor Controller', // Changed from 'Beyerdynamic DT 770 Pro'
        description: 'Kontrolle und Klanganpassung über Apollo und SoundID Reference.\nLineares Abhören durch Raumkorrektur – perfekt abgestimmt auf mein Setup.', // Changed description
        tags: ['Apollo DSP', 'SoundID', 'Kalibriert'], // Changed tags
        image: '/monitorcontroller.webp',
        category: 'Controller' // Changed from 'Kopfhörer'
      },
    ],
  };

  const TabButton = ({ label }) => (
    <button
      className={`px-4 pt-2 pb-1 text-sm sm:text-base font-medium transition-colors duration-200 ease-in-out focus:outline-none border-b-2 \
        ${activeTab === label ? 'text-red-500 border-red-500' : 'text-neutral-400 border-transparent hover:text-red-500 hover:border-red-500'}`}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );

  React.useEffect(() => {
    // Alle Bilder aus allen Kategorien vorladen
    Object.values(equipmentData).flat().forEach(item => {
      if (item.image) {
        const img = new window.Image();
        img.src = item.image;
      }
    });
  }, []);

  return (
    <section id="equipment" className="min-h-screen bg-transparent text-white flex flex-col justify-center items-center py-28">
      <style>{`
        @media (min-width: 640px) and (max-width: 1366px) {
          .equipment-tablet-tabs {
            min-height: 48px !important;
            display: flex;
            align-items: flex-end;
            margin-bottom: 3rem !important;
          }
          .equipment-tablet-grid {
            align-items: stretch !important;
            min-height: 600px !important;
            height: 600px !important;
            display: grid !important;
          }
          .equipment-tablet-card {
            height: 100% !important;
            min-height: 450px !important; /* Changed from 480px to 450px */
            display: flex !important;
            flex-direction: column !important;
          }
          .equipment-tablet-img {
            height: 200px !important; /* Changed from 224px to 200px */
            min-height: 200px !important; /* Changed from 224px to 200px */
            max-height: 200px !important; /* Changed from 224px to 200px */
          }
          .equipment-tablet-tag {
            font-size: 0.62rem !important;
            padding: 0.13rem 0.7rem !important;
            min-width: 0 !important;
            line-height: 1.1 !important;
            margin-bottom: 0.22rem !important;
          }
          .equipment-tablet-tags-row {
            width: 100%;
            display: flex;
            flex-direction: column !important;
            flex-wrap: nowrap !important;
            gap: 0.1rem !important;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: auto;
            padding-top: 0.5rem;
          }
        }
        /* iPad Mini (768px - 1023px) und iPad Air (820px - 1180px) optimiert */
        @media (min-width: 640px) and (max-width: 1023px) {
          .equipment-tablet-card {
            min-height: 450px !important; /* Changed from 480px to 450px */
            padding-bottom: 0.5rem !important;
          }
          .equipment-tablet-img {
            height: 200px !important; /* Changed from 224px to 200px */
            min-height: 200px !important; /* Changed from 224px to 200px */
            max-height: 200px !important; /* Changed from 224px to 200px */
          }
          .equipment-tablet-content {
            padding: 1.1rem 1rem 0.5rem 1rem !important;
          }
          .equipment-tablet-title {
            font-size: 1.08rem !important;
            margin-bottom: 0.35rem !important;
          }
          .equipment-tablet-desc {
            font-size: 0.93rem !important;
            margin-bottom: 0.5rem !important;
            line-height: 1.38 !important;
            color: #e5e7eb !important;
            font-weight: 500 !important;
          }
        }
        /* iPad Air (1180px) und Pro (1366px) */
        @media (min-width: 1024px) and (max-width: 1366px) {
          .equipment-tablet-card {
            min-height: 440px !important;
            padding-bottom: 0.7rem !important;
          }
          .equipment-tablet-img {
            height: 210px !important;
            min-height: 210px !important;
            max-height: 210px !important;
          }
          .equipment-tablet-content {
            padding: 1.2rem 1.1rem 0.7rem 1.1rem !important;
          }
          .equipment-tablet-title {
            font-size: 1.13rem !important;
            margin-bottom: 0.45rem !important;
          }
          .equipment-tablet-desc {
            font-size: 0.97rem !important;
            margin-bottom: 0.6rem !important;
            line-height: 1.42 !important;
            color: #e5e7eb !important;
            font-weight: 500 !important;
          }
        }
      `}</style>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Equipment</h2>
        <div className="flex space-x-3 sm:space-x-4 mb-12 equipment-tablet-tabs">
          <TabButton label="Recording" />
          <TabButton label="Mixing" />
          <TabButton label="Monitoring" />
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 w-full max-w-3xl lg:max-w-7xl mx-auto equipment-tablet-grid">
          {equipmentData[activeTab].map((item) => (
            <div key={item.name} className="bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-transform duration-300 sm:hover:scale-105 min-h-[450px] w-full max-w-md mx-auto border border-neutral-700/70 sm:hover:border-red-500/80 hover:shadow-[0_0_25px_-5px_rgba(239,68,68,0.7)] hover:border-red-500/80 active:shadow-[0_0_25px_-5px_rgba(239,68,68,0.7)] active:border-red-500/80 equipment-tablet-card">
              <div className="relative w-full h-56 flex-shrink-0 equipment-tablet-img">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                {item.category && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-semibold px-3 py-1.5 rounded-lg shadow-lg">
                    {item.category}
                  </span>
                )}
              </div>
              <div className="p-7 flex flex-col flex-grow justify-between equipment-tablet-content">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-neutral-100 equipment-tablet-title">{item.name}</h3>
                  <p className="text-neutral-300 text-sm mb-5 flex-grow leading-relaxed font-medium equipment-tablet-desc">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-3 equipment-tablet-tags-row">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-neutral-700 text-neutral-200 text-xs px-3 py-1 rounded-md font-semibold shadow equipment-tablet-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ReferenzenSection Component
const ReferenzenSection = () => {
  const [activeTab, setActiveTab] = React.useState('CHEEKY CHOKAAH');
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [playingIndex, setPlayingIndex] = React.useState(null);
  const audioRefs = React.useRef([]);
  const [progress, setProgress] = React.useState(0);
  const [volumes, setVolumes] = React.useState({}); // Reinstated volume state

  // State for the selected song in the "DELIVERED" EP card, moved to component level
  const [selectedDeliveredSongIndex, setSelectedDeliveredSongIndex] = React.useState(0);

  const referenzenData = {
    'CHEEKY CHOKAAH': [
      { image: '/fake-love.webp', alt: 'Fake Love Album Art', audio: '/audio/FAKE_LOVE.mp3' },
      { image: '/cheeky-chokaah.webp', alt: 'Cheeky Chokaah Artist Image', audio: '/audio/CHEEKY_CHOKAAH.mp3' },
      { image: '/nightmare.webp', alt: 'Nightmare Album Art', audio: '/audio/NIGHTMARE.mp3' },
      { image: '/against-me.webp', alt: 'Against Me Album Art', audio: '/audio/AGAINST_ME.mp3' },
    ],
    MIGO: [
      { image: '/motion.webp', alt: 'Motion Design', audio: '/audio/MOTION.mp3' },
      { image: '/believe.webp', alt: 'Believe Album Art', audio: '/audio/BELIEVE.mp3' },
      { image: '/2tone.webp', alt: '2TONE Single', audio: '/audio/2TONE.mp3' },
      { image: '/delivered.webp', alt: 'DELIVERED EP (3 Songs)', audio: '' }, // Special EP card
    ],
  };

  // Effect for updating progress bar
  React.useEffect(() => {
    let animationFrameId;
    const update = () => {
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        setProgress(audioRefs.current[playingIndex].currentTime);
      }
      animationFrameId = requestAnimationFrame(update);
    };
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [playingIndex]);


  const handlePlay = (index) => {
    // Pause any other playing track
    if (playingIndex !== null && playingIndex !== index && audioRefs.current[playingIndex]) {
      audioRefs.current[playingIndex].pause();
      // audioRefs.current[playingIndex].currentTime = 0; // Optionally reset time of other track
    }

    const currentItem = referenzenData[activeTab]?.[index];
    if (!currentItem || !audioRefs.current[index]) return;

    // Set initial volume if not already set
    if (volumes[index] === undefined) {
      setVolumes(prevVolumes => ({ ...prevVolumes, [index]: 0.7 })); // Default volume 0.7
    }
    audioRefs.current[index].volume = volumes[index] !== undefined ? volumes[index] : 0.7;

    // Nur auf Anfang setzen, wenn das Audio am Ende ist
    if (audioRefs.current[index].ended || audioRefs.current[index].currentTime === audioRefs.current[index].duration) {
      audioRefs.current[index].currentTime = 0;
      setProgress(0);
    }

    setPlayingIndex(index); // Set this card as the currently playing one

    audioRefs.current[index].play().catch(error => console.error("Error playing audio:", error));
  };

  const handlePause = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].pause();
      // Kein src-Reset mehr, damit der Song nicht auf Anfang springt
    }
    if (playingIndex === index) {
      setPlayingIndex(null);
    }
    // setProgress(0); // Fortschritt NICHT zurücksetzen
  };

  const handleTimelineChange = (e, index) => {
    const newTime = parseFloat(e.target.value);
    if (audioRefs.current[index]) {
      audioRefs.current[index].currentTime = newTime;
      setProgress(newTime);
    }
  };

  const handleVolumeChange = (e, index) => {
    const newVolume = parseFloat(e.target.value);
    setVolumes(prevVolumes => ({ ...prevVolumes, [index]: newVolume }));
    if (audioRefs.current[index]) {
      audioRefs.current[index].volume = newVolume;
    }
  };

  // Effect to reset player when activeTab changes
  React.useEffect(() => {
    if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex].pause();
    }
    setPlayingIndex(null);
    setProgress(0);
    // Reset currentTime for all audio elements when tab changes
    audioRefs.current.forEach(audio => {
      if (audio) audio.currentTime = 0;
    });
    setSelectedDeliveredSongIndex(0); // Reset selected song for DELIVERED card
  }, [activeTab]);

  const TabButton = ({ label }) => (
    <button
      className={`px-4 py-2 text-lg sm:text-xl transition-all duration-300 ease-in-out focus:outline-none border-b-2 transform hover:-translate-y-0.5 \
        ${activeTab === label ? 'text-red-500 border-red-500 font-bold' : 'text-neutral-500 border-transparent hover:text-red-500 hover:border-red-500 font-semibold'}`}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );

  // formatTime function is assumed to be globally available in this file

  return (
    <section id="referenzen" className="min-h-screen bg-transparent text-white flex flex-col justify-center items-center py-28">
      <style>{`
  /* iPad Pro (1024px bis 1366px): Referenzen-Grid wie Tablet/Mobile (2x2 große Karten) */
  @media (min-width: 1024px) and (max-width: 1366px) {
    .referenzen-ipadpro-grid {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      grid-template-rows: repeat(2, 1fr) !important;
      gap: 2.5rem !important;
      max-width: 700px !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
  /* Mobile: delivered-song-btn kleiner und kompakter */
  @media (max-width: 639px) {
    .delivered-song-btn {
      font-size: 0.62rem !important;
      padding: 0.09rem 0.32rem !important;
      min-width: 22px !important;
      margin-right: 0.09rem !important;
      margin-left: 0.09rem !important;
      border-radius: 0.45rem !important;
      letter-spacing: 0.01em !important;
      height: 1.3rem !important;
      line-height: 1.1 !important;
      max-width: 70px !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
    .delivered-song-btn:last-child {
      margin-right: 0 !important;
    }
  }
`}</style>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center">Referenzen</h2>
        <p className="text-neutral-400 text-base md:text-lg mb-12 text-center">Meine Produktionen – Mixing, Mastering & Beats</p>
        <div className="flex space-x-5 sm:space-x-8 mb-12">
          <TabButton label="CHEEKY CHOKAAH" />
          <TabButton label="MIGO" />
        </div>
        <div className="grid w-full max-w-md mx-auto sm:w-auto sm:max-w-none sm:mx-0 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 referenzen-ipadpro-grid">
          {(referenzenData[activeTab] || []).map((item, index) => {
            const isDelivered = activeTab === 'MIGO' && item.alt === 'DELIVERED EP (3 Songs)';
            const deliveredSongs = [              { title: 'DELIVERED', file: '/audio/DELIVERED.mp3' },
              { title: 'TRUSS ME', file: '/audio/TRUSS ME.mp3' },
              { title: 'FCKTMRW', file: '/audio/FCKTMRW.mp3' },
            ];

            return (
              <div
                key={index}
                className="aspect-square bg-neutral-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out border-2 border-neutral-700 hover:border-red-500 hover:shadow-[0_0_35px_-10px_rgba(239,68,68,0.8)] hover:scale-[1.04] hover:brightness-110 relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  // Pause only if this card was playing and mouse leaves this specific card
                  if (playingIndex === index) {
                    handlePause(index);
                  }
                }}
              >
                <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-all duration-300" />
                {hoveredIndex === index && (
                  <>
                    {isDelivered && (
                      <div
                        className="absolute left-1/2 z-20 flex justify-center w-full"
                        style={{ top: '18%', transform: 'translateX(-50%)' }}
                      >
                        {deliveredSongs.map((song, i) => (
                          <button
                            key={song.title}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedDeliveredSongIndex(i); // Update selected song index

                              // Stop playback and reset play state when switching song
                              if (audioRefs.current[index]) {
                                audioRefs.current[index].pause();
                                audioRefs.current[index].src = deliveredSongs[i].file;
                                audioRefs.current[index].currentTime = 0;
                                setProgress(0);
                              }
                              setPlayingIndex(null); // Ensure play button is shown
                            }}
                            className={`delivered-song-btn px-2 py-0.5 rounded-md text-xs font-semibold transition-colors duration-200 ${selectedDeliveredSongIndex === i ? 'bg-red-500 text-white' : 'bg-neutral-700 text-neutral-200 hover:bg-red-400 hover:text-white'}`}
                            style={{ fontSize: '0.8rem', minWidth: 44, whiteSpace: 'nowrap' }}
                          >
                            {song.title}
                          </button>
                        ))}
                      </div>
                    )}
                    {/* Overlay immer pointer-events:none, Button außerhalb! */}
                    <div className="absolute inset-0 bg-black/60 z-10" style={{ pointerEvents: 'none' }} />
                    <div className="absolute left-1/2 top-1/2 z-20 flex flex-col items-center justify-center w-full" style={{ transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
                      <audio
                        ref={el => audioRefs.current[index] = el}
                        src={isDelivered ? deliveredSongs[selectedDeliveredSongIndex].file : item.audio}
                        onEnded={() => {
                          if (playingIndex === index) {
                            setPlayingIndex(null);
                            setProgress(0);
                            if(audioRefs.current[index]) audioRefs.current[index].currentTime = 0;
                          }
                        }}
                        onLoadedMetadata={() => {
                          if (audioRefs.current[index]) {
                            audioRefs.current[index].volume = volumes[index] !== undefined ? volumes[index] : 0.7;
                          }
                        }}
                      />
                    </div>
                    {/* Play/Pause-Button außerhalb des pointer-events:none Bereichs! */}
                    <button
                      onClick={() => playingIndex === index ? handlePause(index) : handlePlay(index)}
                      className="absolute left-1/2 top-1/2 mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-white/90 shadow-lg transition-colors duration-200"
                      style={{ pointerEvents: 'auto', zIndex: 9999, touchAction: 'manipulation', transform: 'translate(-50%,-50%)' }}
                    >
                      {playingIndex === index ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500">
                          <rect x="6" y="5" width="4" height="14" rx="1.5" fill="currentColor" />
                          <rect x="14" y="5" width="4" height="14" rx="1.5" fill="currentColor" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500">
                          <polygon points="7,5 21,12 7,19" fill="currentColor" />
                        </svg>
                      )}
                    </button>
                    {/* Restliche Player-UI (Timeline, Volume) bleibt wie gehabt, pointer-events:none, aber nicht interaktiv auf Mobile */}
                    <div className="absolute left-1/2 z-20 flex flex-col items-center justify-center w-full" style={{ bottom: '12%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
                      <div className="flex items-center w-full px-4 mb-2 mx-auto justify-center">
                        <span className="text-xs text-neutral-200 w-12 text-center select-none">
                          {audioRefs.current[index] ? formatTime(audioRefs.current[index].currentTime) : '0:00'}
                        </span>
                        <input
                          type="range"
                          min="0"
                          max={audioRefs.current[index]?.duration || 0}
                          value={audioRefs.current[index]?.currentTime || 0}
                          onChange={(e) => handleTimelineChange(e, index)}
                          className="w-full h-1.5 bg-neutral-600 rounded-lg appearance-none cursor-pointer mx-2 accent-red-500"
                          disabled={!(audioRefs.current[index]?.duration > 0)}
                        />
                        <span className="text-xs text-neutral-200 w-12 text-center select-none">
                          {audioRefs.current[index]?.duration ? formatTime(audioRefs.current[index].duration) : '0:00'}
                        </span>
                      </div>
                      <div className="flex items-center w-full px-4 mt-2 mx-auto justify-center hidden sm:flex">
                        <span className="w-12 flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-neutral-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                          </svg>
                        </span>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volumes[index] !== undefined ? volumes[index] : 0.7}
                          onChange={(e) => handleVolumeChange(e, index)}
                          className="w-full h-1.5 bg-neutral-600 rounded-lg appearance-none cursor-pointer mx-2 accent-red-500"
                        />
                        <span className="w-12" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ); 
          })} {/* This corresponds to line 531 in the error context */}
        </div> {/* This corresponds to line 532 in the error context */}
      </div>
    </section>
  );
};

// PreiseSection Component
const PricingCard = ({ price, service, details, setSelectedService, handleSetSelectedServiceAndScroll }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobileDetailsOpen, setIsMobileDetailsOpen] = React.useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Icon-Map für die Services
  const serviceIcons = {
    'Mix & Master': <InfinityLoopIcon isHovered={isHovered || isMobileDetailsOpen} />, // animiertes Infinity-Loop-Icon
    'Recording': <MicIcon isHovered={isHovered || isMobileDetailsOpen} />, // animiertes Mic-Icon
    'Exclusive Beat': <NoteIcon isHovered={isHovered || isMobileDetailsOpen} />, // animiertes Note-Icon
  };

  // Checkmark-Icon für die Details-Liste
  const CheckmarkIcon = ({ delay = 0 }) => (
    <span style={{
      display: 'inline-block',
      width: 22,
      height: 22,
      marginRight: 8,
      verticalAlign: 'middle',
      filter: 'drop-shadow(0 0 6px #22c55e88)',
      opacity: 1,
      transform: 'scale(1)',
      animation: `checkmark-in 0.38s cubic-bezier(.6,1.5,.5,1) both`,
      animationDelay: `${delay}s`,
    }}>
      <style>{`
        @keyframes checkmark-in {
          0% { opacity: 0; transform: scale(0.6) translateY(10px); filter: blur(4px); }
          60% { opacity: 1; filter: blur(0.5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
      `}</style>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="10" fill="#ef4444" opacity="0.18" />
        <path d="M6.5 12.5L10 16L15.5 7.5" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  const handleAnfrageClick = () => {
    if (handleSetSelectedServiceAndScroll) {
      handleSetSelectedServiceAndScroll(service);
    } else {
      setSelectedService(service);
    }
  };

  return (
    <>
      <style>{`
        .card-hovered {
          transition: box-shadow 0.3s cubic-bezier(.6,1.5,.5,1), border-color 0.3s cubic-bezier(.6,1.5,.5,1), transform 0.3s cubic-bezier(.6,1.5,.5,1), opacity 0.2s;
        }
        @keyframes cardTextIn {
          0% { opacity: 0; transform: translateY(60px) scale(0.95) skewY(6deg); filter: blur(12px); }
          60% { opacity: 1; filter: blur(1px); }
          100% { opacity: 1; transform: translateY(0) scale(1) skewY(0deg); filter: blur(0); }
        }
        @keyframes cardTextOut {
          0% { opacity: 1; transform: translateY(0) scale(1) skewY(0deg); filter: blur(0); }
          100% { opacity: 0; transform: translateY(-30px) scale(0.98) skewY(-2deg); filter: blur(8px); }
        }
        @keyframes cardListIn {
          0% { opacity: 0; transform: translateY(30px) scale(0.98); filter: blur(8px); }
          80% { opacity: 1; filter: blur(0.5px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        /* Info-Icon auf iPad Pro (1024px bis 1366px) immer sichtbar, aber gleiche Größe wie auf anderen Tablets */
        @media (min-width: 1024px) and (max-width: 1366px) {
          .pricing-info-btn {
            opacity: 1 !important;
            width: 36px !important;
            height: 36px !important;
            padding: 0 !important;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          /* Schriftgröße der Preiskarten-Infos etwas kleiner */
          .preise-tablet-card .flex.flex-col.justify-center.items-center.text-center,
          .preise-tablet-card ul,
          .preise-tablet-card li,
          .preise-tablet-card button {
            font-size: 1.01rem !important;
          }
        }
        /* --- NEU: Mobile Schriftgröße für Preiskarten-Infos --- */
        @media (max-width: 639px) {
          .preise-tablet-card ul,
          .preise-tablet-card li,
          .preise-tablet-card button {
            font-size: 0.97rem !important;
            line-height: 1.45 !important;
          }
        }
      `}</style>
      <div
        className={
          `group bg-neutral-800 p-8 rounded-xl shadow-[0_0_25px_-10px_rgba(239,68,68,0.2)] border border-neutral-700/30 flex flex-col justify-center items-center text-center min-h-[480px] transition-all duration-300 ease-in-out w-full max-w-md mx-auto` +
          (isHovered && !isMobile ? ' card-hovered hover:shadow-[0_0_35px_-10px_rgba(239,68,68,0.5)] hover:border-red-500/50 transform hover:-translate-y-1 will-change-transform will-change-opacity' : '')
        }
        onMouseEnter={() => {
          if (!isMobile) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (!isMobile && !isMobileDetailsOpen) setIsHovered(false);
        }}
        style={{ overflow: 'hidden', position: 'relative' }}
      >
        {/* Info Icon: Mobile & Tablet immer sichtbar, Desktop/Web nur bei Hover, iPad Pro immer sichtbar */}
        <button
          className={
            `pricing-info-btn absolute top-4 right-4 p-1 bg-red-500 rounded-full shadow-lg transition-opacity duration-200 opacity-100 lg:opacity-0 group-hover:opacity-100`
          }
          aria-label="Details anzeigen"
          onClick={() => setIsMobileDetailsOpen((open) => !open)}
          style={{ zIndex: 10 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </button>
        {/* Details nur bei Klick auf das i (bzw. auf Mobile) anzeigen, nicht mehr bei Hover! */}
        {(isMobile && isMobileDetailsOpen) ? (
          <div
            className="w-full flex flex-col h-full justify-between"
            style={{
              animation: 'cardTextIn 0.6s cubic-bezier(.6,1.5,.5,1) both',
            }}
          >
            <div className="flex flex-col items-center mb-2">
              {/* Icon statt Text */}
              {serviceIcons[service]}
            </div>
            <div>
              <ul className="space-y-2 text-base md:text-lg text-neutral-300 list-none p-0 mb-4 mt-4 transition-all duration-300" style={{ fontSize: '1.18rem' }}>
                {details.map((detail, i) => (
                  <li key={i} className="flex items-center whitespace-nowrap"
                    style={{animation: `cardListIn 0.5s cubic-bezier(.6,1.5,.5,1) both`, animationDelay: `${0.13 + i*0.07}s`}}>
                    <CheckmarkIcon isHovered={isHovered} delay={0.13 + i*0.07} />
                    <span className="ml-2">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleAnfrageClick}
              className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-base px-5 py-2.5 text-center transition-colors duration-200 ease-in-out w-full shadow-lg shadow-red-500/10 hover:shadow-red-500/30"
              style={{animation: 'cardTextIn 0.7s cubic-bezier(.6,1.5,.5,1) both', animationDelay: '0.22s'}}
            >
              Anfragen
            </button>
          </div>
        ) : (!isMobile && isMobileDetailsOpen) ? (
          <div
            className="w-full flex flex-col h-full justify-between"
            style={{
              animation: 'cardTextIn 0.6s cubic-bezier(.6,1.5,.5,1) both',
            }}
          >
            <div className="flex flex-col items-center mb-2">
              {/* Icon statt Text */}
              {serviceIcons[service]}
            </div>
            <div>
              <ul className="space-y-2 text-base md:text-lg text-neutral-300 list-none p-0 mb-4 mt-4 transition-all duration-300" style={{ fontSize: '1.18rem' }}>
                {details.map((detail, i) => (
                  <li key={i} className="flex items-center whitespace-nowrap"
                    style={{animation: `cardListIn 0.5s cubic-bezier(.6,1.5,.5,1) both`, animationDelay: `${0.13 + i*0.07}s`}}>
                    <CheckmarkIcon isHovered={isHovered} delay={0.13 + i*0.07} />
                    <span className="ml-2">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleAnfrageClick}
              className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-base px-5 py-2.5 text-center transition-colors duration-200 ease-in-out w-full shadow-lg shadow-red-500/10 hover:shadow-red-500/30"
              style={{animation: 'cardTextIn 0.7s cubic-bezier(.6,1.5,.5,1) both', animationDelay: '0.22s'}}
            >
              Anfragen
            </button>
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center h-full"
            style={{
              animation: 'cardTextIn 0.5s cubic-bezier(.6,1.5,.5,1) both',
            }}
          >
            <p className="text-3xl lg:text-4xl font-bold text-red-500 mb-3 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]">{price}</p>
            <p className="text-xl lg:text-2xl text-neutral-200 font-medium">{service}</p>
          </div>
        )}
      </div>
    </>
  );
};

const PreiseSection = ({ setSelectedService, handleSetSelectedServiceAndScroll }) => {
  const pricingData = [
    {
      price: "150 €",
      service: "Mix & Master",
      details: [
        "Professioneller Mix",
        "Präzises Mastering",
        "WAV, MP3 & mehr",
        "Bereit für den Release"
      ]
    },
    {
      price: "50 €/h",
      service: "Recording",
      details: [
        "Studioaufnahme",
        "Akustisch optimierter Raum",
        "Individuelle Aufnahmeleitung",
        "Effizienter Workflow"
      ]
    },
    {
      price: "Auf Anfrage",
      service: "Exclusive Beat",
      details: [
        "Individuelles Sounddesign",
        "Komplette Nutzungsrechte",
        "Genre-Vielfalt möglich",
        "Exklusive Produktion"
      ]
    }
  ];

  return (
    <section
      id="preise"
      className="relative min-h-screen bg-transparent text-white flex flex-col justify-center items-center pt-16 sm:pt-20 pb-20 sm:pb-28 scroll-mt-16 sm:scroll-mt-20"
    >
      <style>{`
  @media (min-width: 640px) and (max-width: 1023px) {
    .preise-tablet-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
      max-width: 480px !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
    .preise-tablet-card {
      min-width: 0 !important;
      max-width: 100% !important;
      width: 100% !important;
    }
  }
  @media (min-width: 1024px) and (max-width: 1366px) {
    .preise-tablet-grid {
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 2.5rem !important;
      max-width: 1200px !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
    .preise-tablet-card {
      min-width: 0 !important;
      max-width: 380px !important;
      width: 100% !important;
      font-size: 1.13rem !important;
    }
    .preise-tablet-card .flex.flex-col.justify-center.items-center.text-center {
      padding: 2.2rem 1.2rem !important;
      font-size: 1.13rem !important;
      line-height: 1.6 !important;
    }
    .preise-tablet-card ul {
      font-size: 1.13rem !important;
      line-height: 1.6 !important;
    }
    .preise-tablet-card button {
      font-size: 1.08rem !important;
      padding-top: 0.9rem !important;
      padding-bottom: 0.9rem !important;
    }
  }
  /* --- NEU: Mobile Schriftgröße für Preiskarten-Infos --- */
  @media (max-width: 639px) {
    .preise-tablet-card ul,
    .preise-tablet-card li,
    .preise-tablet-card button {
      font-size: 0.97rem !important;
      line-height: 1.45 !important;
    }
  }
`}</style>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">Preise</h2>
        <p className="text-neutral-300 text-lg md:text-xl mb-12 sm:mb-16 drop-shadow">Professionelle Leistungen für dein Musikprojekt</p>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 preise-tablet-grid">
          {pricingData.map(card => (
            <div className="preise-tablet-card">
              <PricingCard key={card.service} price={card.price} service={card.service} details={card.details} setSelectedService={setSelectedService} handleSetSelectedServiceAndScroll={handleSetSelectedServiceAndScroll} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ imageSrc, name, role, bio }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto h-[480px] group perspective"> {/* Changed h-[420px] to h-[480px] */}
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Face */}
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-800 rounded-2xl shadow-[0_0_20px_-8px_rgba(239,68,68,0.4)] border border-transparent group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.7)] active:shadow-[0_0_30px_-5px_rgba(239,68,68,0.7)] group-hover:border-red-500/30 active:border-red-500/30 sm:group-hover:scale-[1.03] backface-hidden overflow-hidden flex flex-col"> {/* Adjusted */}
          <img src={imageSrc} alt={name} className="w-full h-80 object-cover" />
          <div className="p-5 bg-neutral-800 flex-grow flex flex-col justify-center"> {/* Adjusted */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
              <div className="relative mt-2">
                <p className="text-sm text-red-500 font-medium text-center mx-6">{role}</p> {/* Role centered, mx-6 for icon space */}
                <ChevronRightIcon
                  className="h-5 w-5 text-neutral-400 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-125"
                  onClick={() => setIsFlipped(true)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-700 rounded-2xl shadow-[0_0_20px_-8px_rgba(239,68,68,0.4)] border border-red-500/50 backface-hidden rotate-y-180 overflow-y-auto p-6 flex flex-col justify-between"> {/* Increased padding */}
          <div> {/* Content wrapper for top part */}
            <div className="flex items-center mb-4"> {/* Centered items, more margin bottom */}
              <img src={imageSrc} alt={`${name} small`} className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-neutral-500 shadow-lg" /> {/* Larger, rounded, shadow */}
              <div className="text-left"> {/* Added text-left */}
                <h3 className="text-xl font-bold text-white mb-1">{name}</h3> {/* Larger, bolder name */}
                <p className="text-sm text-red-400 font-semibold">{role}</p> {/* Larger role, different color/weight */}
              </div>
            </div>
            <hr className="border-neutral-600 my-4" /> {/* Separator */}
            <p className="text-base text-neutral-200 leading-relaxed">{bio}</p> {/* Changed text-sm to text-base */}
          </div>
          <XMarkIcon // Changed from ChevronLeftIcon
            className="h-7 w-7 text-neutral-300 cursor-pointer transition-transform hover:scale-125 absolute top-6 right-6" // Positioned top-right for all views
            onClick={() => setIsFlipped(false)}
          />
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Martin Mamic",
      role: "Chief Executive Officer",
      imageSrc: "/martin.webp",
      bio: "Ich bin der Gründer von mamicstudios und ein leidenschaftlicher Audio Engineer & Beatmaker. Seit über 5 Jahren produziere ich Beats – mit rund 2 Jahren Erfahrung im Recording, Mixing und Mastering. Mein Ziel ist es, künstlerische Visionen mit technischem Feingefühl und kreativem Sounddesign auf höchstem Niveau umzusetzen. Dabei leite ich MamicStudios sowohl kreativ als auch strategisch."
    },
    {
      name: "Letizia Krüger",
      role: "Chief Business Officer",
      imageSrc: "/letizia.webp",
      bio: "Letizia ist Teil von mamicstudios und absolviert derzeit ihr Music Business Diploma an der SAE. Als Chief Business Officer verantwortet sie die geschäftliche und strategische Ausrichtung des Studios. Mit einem Gespür für Struktur, Organisation und Artist Relations sorgt sie dafür, dass kreative Prozesse auch wirtschaftlich sinnvoll umgesetzt werden."
    },
    {
      name: "Alexandra Krüger",
      role: "Finanz- und Lohnbuchhalterin",
      imageSrc: "/alexandra.webp",
      bio: "Alexandra ist gelernte Industriekauffrau mit Fortbildung zur Europasachbearbeiterin und Finanzbuchhalterin. Mit über 34 Jahren Berufserfahrung in Verkauf, Einkauf, Finanz- und Lohnbuchhaltung unterstützt sie mamicstudios als selbstständige Finanz- und Lohnbuchhalterin – zuverlässig, präzise und mit einem Blick fürs Wesentliche."
    }
  ];

  return (
    <section id="team" className="min-h-screen bg-transparent text-white flex flex-col justify-center items-center pt-16 sm:pt-20 pb-20 sm:pb-28 scroll-mt-16 sm:scroll-mt-20">
      <style>{`
  @media (min-width: 640px) and (max-width: 1023px) {
    .team-tablet-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
      max-width: 480px !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
    .team-tablet-card {
      min-width: 0 !important;
      max-width: 100% !important;
      width: 100% !important;
    }
  }
`}</style>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16">Unser Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 w-full max-w-3xl lg:max-w-7xl mx-auto team-tablet-grid">
          {teamMembers.map(member => (
            <div className="team-tablet-card">
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                bio={member.bio}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KontaktSection = ({ selectedService, setSelectedService, videoFade }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [serviceSelection, setServiceSelection] = useState('');

  useEffect(() => {
    if (selectedService) {
      setServiceSelection(selectedService);
      setSubject(`Anfrage für: ${selectedService}`);
    } else {
      setServiceSelection('');
    }
  }, [selectedService]);



  return (
    <section
      id="kontakt"
      className="relative min-h-screen text-white flex flex-col justify-center items-center py-20 sm:py-28 overflow-hidden w-full px-4 box-border"
      style={{ background: 'transparent' }}
    >
      {/* Cleanes graues Overlay mit sanftem Gradient für den Übergang */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(24,24,27,0.0) 0%, #18181b 80%)',
          opacity: videoFade,
          transition: 'opacity 0.4s cubic-bezier(.6,1.5,.5,1)',
        }}
      />
      <div className="relative z-30 w-full max-w-md sm:max-w-2xl mx-auto text-center px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4 drop-shadow-lg">Kontakt</h2>
        <p className="text-neutral-300 text-lg md:text-xl mb-10 sm:mb-12 drop-shadow">Schreib mir eine Nachricht!</p>
        <form className="space-y-6 text-left bg-black/50 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md border border-white/10 w-full box-border" style={{maxWidth:'100%'}} action="https://formsubmit.co/mamicstudios@gmail.com" method="POST">
          {/* Honeypot field for spam protection */}
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
          {/* Disable captcha by Formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Redirect to thank you message (optional) */}
          <input type="hidden" name="_next" value="https://mamicstudios.de/danke.html" />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-neutral-800 border-neutral-700 text-neutral-100 text-sm rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none block w-full p-3 placeholder-neutral-500" placeholder="Dein Name" required /> {/* Added focus:outline-none */}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-neutral-800 border-neutral-700 text-neutral-100 text-sm rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none block w-full p-3 placeholder-neutral-500" placeholder="deine@email.com" required /> {/* Added focus:outline-none */}
          </div>
          {/* Service field: Restructured for correct arrow alignment */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-neutral-300 mb-1">Service</label>
            <div className="relative"> {/* New relative container for select and arrow */}
              <select
                name="service"
                id="service"
                value={serviceSelection}
                onChange={(e) => { setServiceSelection(e.target.value); if (e.target.value) setSubject(''); else setSelectedService(''); }}
                className="bg-neutral-900 border border-neutral-700 text-neutral-100 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none block w-full p-3 transition-all duration-200 appearance-none shadow-sm placeholder-neutral-500 pr-10" // Added focus:outline-none
                style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none', lineHeight: '1.5' }}
              >
                <option value="">Allgemeine Anfrage</option>
                <option value="Mix & Master">Mix & Master</option>
                <option value="Recording">Recording</option>
                <option value="Exclusive Beat">Exclusive Beat</option>
              </select>
              {/* Custom Arrow Icon, centered relative to the select box */}
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">Betreff</label>
            <input type="text" name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="bg-neutral-800 border-neutral-700 text-neutral-100 text-sm rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none block w-full p-3 placeholder-neutral-500" placeholder="Worum geht es?" required /> {/* Added focus:outline-none */}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">Nachricht</label>
            <textarea name="message" id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-neutral-800 border-neutral-700 text-neutral-100 text-sm rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none block w-full p-3 placeholder-neutral-500" placeholder="Deine Nachricht..." required></textarea> {/* Added focus:outline-none */}
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  );
};

const ImpressumSection = () => {
  return (
    <section id="impressum" className="relative min-h-screen text-white flex flex-col justify-center items-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8" style={{ background: '#18181b' }}>
      <div className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-left bg-black/50 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md border border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-8 text-center">Impressum</h2>
        <div className="space-y-6 text-neutral-300">
          <div className="border-b border-neutral-700 pb-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Angaben gemäß § 5 TMG</h3>
            <p>Martin Mamic</p>
            <p>mamicstudios – Einzelunternehmen</p>
            <p>Am Pfarrtor 23</p>
            <p>71272 Renningen</p>
            <p>Deutschland</p>
          </div>
          <div className="border-b border-neutral-700 pb-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Kontakt</h3>
            <p>Telefon: 0157 35527731</p>
            <p>E-Mail: <a href="mailto:mamicstudios@gmail.com" className="text-red-500 hover:text-red-400">mamicstudios@gmail.com</a></p>
          </div>
          <div className="border-b border-neutral-700 pb-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>Martin Mamic</p>
            <p>Am Pfarrtor 23</p>
            <p>71272 Renningen</p>
          </div>
          <div className="border-b border-neutral-700 pb-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Hinweis gemäß § 19 UStG</h3>
            <p>Als Kleinunternehmer wird keine Umsatzsteuer erhoben und ausgewiesen.</p>
          </div>
          <div className="pb-4">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">Plattform der EU-Kommission zur Online-Streitbeilegung</h3>
            <p>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>Ich bin weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-neutral-400 py-8 text-center relative" style={{ background: '#000' }}>
      <style>{`
    @media (min-width: 640px) and (max-width: 1023px) {
      .footer-tablet-grid {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 1.5rem !important;
      }
      .footer-tablet-socials {
        justify-content: center !important;
        margin-bottom: 0.5rem !important;
      }
      .footer-tablet-legal {
        text-align: center !important;
        width: 100% !important;
        margin-bottom: 0.5rem !important;
      }
    }
  `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center sm:grid sm:[grid-template-columns:1fr_auto_1fr] sm:items-center w-full footer-tablet-grid">
          <div className="flex items-center justify-center space-x-2 mx-auto mb-2 block sm:hidden footer-tablet-socials">
            <a href="https://www.instagram.com/raw.lm/" target="_blank" rel="noopener noreferrer" aria-label="rawlm Instagram">
              <img src="/rawlm.webp" alt="rawlm Logo" className="h-8 w-auto drop-shadow-lg rounded-lg bg-white/10 p-1" style={{ boxShadow: '0 0 12px 2px #fff2' }} />
            </a>
            <a href="https://www.instagram.com/buchfuehrungsserviceek/" target="_blank" rel="noopener noreferrer">
              <img src="/AEK.webp" alt="AEK Logo" className="h-8 w-auto rounded-lg bg-white/10 p-1" style={{ boxShadow: '0 0 12px 2px #fff2' }} />
            </a>
            <a href="https://instagram.com/mamicstudios" target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/10 p-1 drop-shadow-lg" aria-label="Instagram" style={{ boxShadow: '0 0 12px 2px #fff2' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@martinmamic" target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/10 p-1 drop-shadow-lg" aria-label="YouTube" style={{ boxShadow: '0 0 12px 2px #fff2' }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="10,8.5 17,12 10,15.5" fill="currentColor" />
              </svg>
            </a>
          </div>
          <p className="text-sm w-full text-center sm:col-start-2 sm:text-center sm:whitespace-nowrap footer-tablet-legal">&copy; {currentYear} mamicstudios. All rights reserved. <span className="mx-2">|</span><a href="#impressum" className="underline hover:text-red-400 transition-colors">Impressum</a> <span className="mx-2">|</span><a href="#datenschutz" className="underline hover:text-red-400 transition-colors">Datenschutz</a></p>
          <div className="hidden sm:col-start-3 sm:justify-self-end sm:flex sm:items-center sm:space-x-5 footer-tablet-socials">
            <a href="https://instagram.com/mamicstudios" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/10 p-1.5 drop-shadow-lg" aria-label="Instagram" style={{ boxShadow: '0 0 14px 2px #fff2' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@martinmamic" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/10 p-1.5 drop-shadow-lg" aria-label="YouTube" style={{ boxShadow: '0 0 14px 2px #fff2' }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="10,8.5 17,12 10,15.5" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.instagram.com/raw.lm/" target="_blank" rel="noopener noreferrer" aria-label="rawlm Instagram">
              <img src="/rawlm.PNG" alt="rawlm Logo" className="h-10 w-auto drop-shadow-lg rounded-lg bg-white/10 p-1.5" style={{ boxShadow: '0 0 14px 2px #fff2' }} />
            </a>
            <a href="https://www.instagram.com/buchfuehrungsserviceek/" target="_blank" rel="noopener noreferrer">
              <img src="/AEK.png" alt="AEK Logo" className="h-10 w-auto drop-shadow-lg rounded-lg bg-white/10 p-1.5" style={{ boxShadow: '0 0 14px 2px #fff2' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// App-Komponente
function App() {
  const [selectedService, setSelectedService] = React.useState('');
  const videoRef = React.useRef(null);
  const teamRef = React.useRef(null);
  const kontaktRef = React.useRef(null);
  const [videoFade, setVideoFade] = React.useState(0); // 0 = voll sichtbar, 1 = voll ausgeblendet

  React.useEffect(() => {
    function handleScroll() {
      if (!teamRef.current || !kontaktRef.current) return;
      const teamRect = teamRef.current.getBoundingClientRect();
      const kontaktRect = kontaktRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Team fullscreen: videoFade = 0
      if (teamRect.top >= 0 && teamRect.bottom <= windowHeight + 1) {
        setVideoFade(0);
        return;
      }
      // Kontakt fullscreen: videoFade = 1
      if (kontaktRect.top <= 0 && kontaktRect.bottom >= windowHeight - 1) {
        setVideoFade(1);
        return;
      }
      // Bereich zwischen Team und Kontakt
      // Wir nehmen als Progress: wie weit ist der untere Rand von Team aus dem Viewport raus bis Kontakt fullscreen ist
      const teamBottom = teamRect.bottom;
      const kontaktTop = kontaktRect.top;
      const fadeStart = windowHeight; // teamBottom == windowHeight → Start Fade
      const fadeEnd = 0; // kontaktTop == 0 → Fade fertig
      let progress = (fadeStart - teamBottom) / (fadeStart - fadeEnd);
      progress = Math.max(0, Math.min(1, progress));
      setVideoFade(progress);
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // New: handle set service and scroll
  const handleSetSelectedServiceAndScroll = (service) => {
    setSelectedService(service);
    setTimeout(() => {
      if (kontaktRef.current) {
        kontaktRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50); // slight delay to ensure state is set
  };

  return (
    <>
      {/* Hintergrundvideo ganz oben, unter der Navigation */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none select-none" style={{ minHeight: '100vh', minWidth: '100vw' }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            opacity: 1 - videoFade,
            filter: 'blur(12px) brightness(0.8) saturate(1.1)',
            transition: 'opacity 0.4s cubic-bezier(.6,1.5,.5,1)',
          }}
        >
          <source src="/backgroundvideoofficial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay für sanften Übergang zu Grau */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(24,24,27,0.0) 60%, #18181b 100%)',
            opacity: videoFade,
            transition: 'opacity 0.4s cubic-bezier(.6,1.5,.5,1)',
            zIndex: 2,
          }}
        />
        {/* Optional: zusätzlicher dunkler Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Content-Overlay */}
      <div className="relative z-10">
        <Navigation />
        <HomeAboutSection />
        <EquipmentSection />
        <ReferenzenSection />
        <PreiseSection setSelectedService={setSelectedService} handleSetSelectedServiceAndScroll={handleSetSelectedServiceAndScroll} />
        <div ref={teamRef} id="team-section-wrapper">
          <TeamSection />
        </div>
        <div ref={kontaktRef} id="kontakt-section-wrapper">
          {/* videoFade wird als Prop übergeben */}
          <KontaktSection selectedService={selectedService} setSelectedService={setSelectedService} videoFade={videoFade} />
        </div>
        <ImpressumSection />
        <section id="datenschutz" className="text-white py-12 px-4" style={{ background: '#18181b' }}>
          <DatenschutzSection />
        </section>
        <Footer />
      </div>
    </>
  );
}

// Modernes animiertes InfinityLoopIcon für Mix & Master (rot-weiß, Glow, stylisch)
const InfinityLoopIcon = ({ isHovered }) => (
  <span style={{
    display: 'inline-block',
    position: 'relative',
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: 'radial-gradient(circle at 60% 40%, #fff 0%, #ef4444 80%, #ef444422 100%)',
    boxShadow: isHovered
      ? '0 0 32px 8px #ef4444cc, 0 0 0 12px #fff2'
      : '0 0 16px 4px #ef4444aa',
    transition: 'box-shadow 0.3s ease-in-out', // Nur box-shadow animieren, Rest durch cardTextIn
    overflow: 'visible',
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'scale(1)' : 'scale(0.7) translateY(20px)', // Zustand für Animation durch cardTextIn
    filter: isHovered ? 'blur(0)' : 'blur(8px)', // Zustand für Animation durch cardTextIn
    marginTop: '10px', // Icon minimal nach unten verschieben
  }}>
    <style>{`



     



      @keyframes infinity-rotate-red { 0%{transform:rotate(0deg);} 100%{transform:rotate(360deg);} }
      @keyframes infinity-rotate-white { 0%{transform:rotate(360deg);} 100%{transform:rotate(0deg);} }
      @keyframes infinity-glow { 0%,100%{filter:drop-shadow(0 0 6px #fff8) drop-shadow(0 0 24px #ef4444cc);} 50%{filter:drop-shadow(0 0 24px #fff) drop-shadow(0 0 36px #ef4444);}

      @keyframes infinity-rotate-red { 0%{transform:rotate(0deg);} 100%{transform:rotate(360deg);} }
      @keyframes infinity-rotate-white { 0%{transform:rotate(360deg);} 100%{transform:rotate(0deg);} }
      @keyframes infinity-glow { 0%,100%{filter:drop-shadow(0 0 6px #fff8) drop-shadow(0 0 24px #ef4444cc);} 50%{filter:drop-shadow(0 0 24px #fff) drop-shadow(0 0 36px #ef4444);} }
    `}</style>
    {/* Red Loop */}
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      style={{
        position: 'absolute',
        top: 2,
        left: 2,
        zIndex: 2,
        filter: 'drop-shadow(0 0 8px #ef4444cc)',
        animation: isHovered
          ? 'infinity-rotate-red 2.2s linear infinite, infinity-glow 1.2s ease-in-out infinite'
          : 'none',
        transition: 'filter 0.3s',
      }}
    >
      <ellipse


        cx="22"
        cy="22"
        rx="13"
        ry="7.5"
        fill="none"
        stroke="#ef4444"
        strokeWidth="4.5"
        opacity="0.95"
        style={{ filter: 'drop-shadow(0 0 8px #ef4444cc)' }}
      />
    </svg>
    {/* White Loop */}
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      style={{
        position: 'absolute',
        top: 2,
        left: 2,
        zIndex: 3,
        filter: 'drop-shadow(0 0 10px #fff8)',
        animation: isHovered
          ? 'infinity-rotate-white 2.2s linear infinite, infinity-glow 1.2s ease-in-out infinite'
          : 'none',
        transition: 'filter 0.3s',
      }}
    >
      <ellipse
        cx="22"
        cy="22"
        rx="13"
        ry="7.5"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        opacity="0.92"
        transform="rotate(60 22 22)"
        style={{ filter: 'drop-shadow(0 0 10px #fff8)' }}
      />
    </svg>
    {/* Center Glow */}
       <span
      style={{
        position: 'absolute',
        left: 16,
        top: 16,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #fff 0%, #ef4444 60%, transparent 100%)',
        opacity: 0.7,
        filter: isHovered
          ? 'blur(6px) brightness(1.2) drop-shadow(0 0 12px #fff8)'
          : 'blur(4px) brightness(1.1)',
        transition: 'filter 0.3s',
        zIndex: 4,
        pointerEvents: 'none',
      }}
    />
  </span>
);

// Modernes animiertes MicIcon für Recording (gelb, Glow, stylisch)
const MicIcon = ({ isHovered }) => (
  <span style={{
    display: 'inline-block',
    position: 'relative',
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: 'radial-gradient(circle at 60% 40%, #fff 0%, #fbbf24 80%, #fbbf2422 100%)',
    boxShadow: isHovered
      ? '0 0 32px 8px #fbbf24cc, 0 0 0 12px #fff2'
      : '0 0 16px 4px #fbbf24aa',
    transition: 'box-shadow 0.3s ease-in-out',
    overflow: 'visible',
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'scale(1)' : 'scale(0.7) translateY(20px)', // Zustand für Animation durch cardTextIn
    filter: isHovered ? 'blur(0)' : 'blur(8px)', // Zustand für Animation durch cardTextIn
    marginTop: '10px',
  }}>
          <style>{`
      @keyframes mic-glow { 0%,100%{filter:drop-shadow(0 0 12px #fff8) drop-shadow(0 0 24px #fbbf24cc);} 50%{filter:drop-shadow(0 0 24px #fff) drop-shadow(0 0 36px #fbbf24);} }
      @keyframes mic-bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }
    `}</style>
    {/* Mic Body */}
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      style={{
        position: 'absolute',
        top: 2,
        left: 2,
        zIndex: 2,
        filter: 'drop-shadow(0 0 8px #fbbf24cc)',
        animation: isHovered
          ? 'mic-glow 1.2s ease-in-out infinite, mic-bounce 1.1s cubic-bezier(.6,1.5,.5,1) infinite'
          : 'none',
        transition: 'filter  0.3s',
      }}
    >
      <rect x="16" y="8" width="12" height="20" rx="6" fill="#fff" opacity="0.93" stroke="#fbbf24" strokeWidth="2.5" />
      <rect x="19.5" y="28" width="5" height="6" rx="2.5" fill="#fbbf24" opacity="0.95" />
      <line x1="22" y1="34" x2="22" y2="38" stroke="#fff" strokeWidth="2.5" />
      <ellipse cx="22" cy="40" rx="7" ry="2.2" fill="#fbbf24" opacity="0.18" />
    </svg>
    {/* Center Glow */}
    <span
      style={{
        position: 'absolute',
        left: 16,
        top: 16,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #fff 0%, #fbbf24 60%, transparent 100%)',
        opacity: 0.7,
        filter: isHovered
          ? 'blur(6px) brightness(1.2) drop-shadow(0 0 12px #fff8)'
          : 'blur(4px) brightness(1.1)',
        transition: 'filter 0.3s',
        zIndex: 4,
        pointerEvents: 'none',
      }}
    />
  </span>
);

// Modernes animiertes NoteIcon für Exclusive Beat (blau, Glow, stylisch, Musiknote, mit Fade-In)
const NoteIcon = ({ isHovered }) => (
  <span style={{
    display: 'inline-block',
    position: 'relative',
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: 'radial-gradient(circle at 60% 40%, #fff 0%, #38bdf8 80%, #38bdf822 100%)',
    boxShadow: isHovered
      ? '0 0 32px 8px #38bdf8cc, 0 0 0 12px #fff2'
      : '0 0 16px 4px #38bdf8aa',
    transition: 'box-shadow 0.3s ease-in-out',
    overflow: 'visible',
    marginTop: '10px',
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'scale(1)' : 'scale(0.7) translateY(20px)',
    filter: isHovered ? 'blur(0)' : 'blur(8px)',
  }}>
    <style>{`
      @keyframes note-glow { 0%,100%{filter:drop-shadow(0 0 12px #fff8) drop-shadow(0 0 24px #38bdf8cc);} 50%{filter:drop-shadow(0 0 24px #fff) drop-shadow(0 0 36px #38bdf8);} }
      @keyframes note-bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-7px);} }
      @keyframes note-swing { 0%,100%{transform:rotate(-8deg);} 50%{transform:rotate(8deg);} }
    `}</style>
    {/* Note Body */}
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      style={{
        position: 'absolute',
        top: 2,
        left: 2,
        zIndex: 2,
        filter: 'drop-shadow(0 0 8px #38bdf8cc)',
        animation: isHovered
          ? 'note-glow 1.2s ease-in-out infinite, note-bounce 1.1s cubic-bezier(.6,1.5,.5,1) infinite, note-swing 2.2s ease-in-out infinite'
          : 'none',
        transition: 'filter 0.3s',
        transformOrigin: '18px 32px',
      }}
    >
      {/* Notenkopf */}
      <ellipse cx="18" cy="32" rx="6" ry="6" fill="#fff" opacity="0.93" stroke="#38bdf8" strokeWidth="2.2" />
      {/* Notenhals */}
      <rect x="20.5" y="13" width="3.5" height="16" rx="1.7" fill="#38bdf8" opacity="0.95" />
      {/* Noten-Fahne */}
      <path d="M24 13 Q32 10 28 22" stroke="#38bdf8" strokeWidth="2.2" fill="none" />
    </svg>
    {/* Center Glow */}
    <span
      style={{
        position: 'absolute',
        left: 16,
        top: 16,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #fff 0%, #38bdf8 60%, transparent 100%)',
        opacity: 0.7,
        filter: isHovered
          ? 'blur(6px) brightness(1.2) drop-shadow(0 0 12px #fff8)'
          : 'blur(4px) brightness(1.1)',
        transition: 'filter 0.3s',
        zIndex: 4,
        pointerEvents: 'none',
      }}
    />
  </span>
);

// Animated green checkmark icon for feature list
const CheckmarkIcon = ({ isHovered, delay = 0 }) => (
  <span style={{
    display: 'inline-block',
    width: 22,
    height: 22,
    marginRight: 8,
    verticalAlign: 'middle',
    filter: 'drop-shadow(0 0 6px #22c55e88)',
    opacity: 1,
    transform: 'scale(1)',
    animation: `checkmark-in 0.38s cubic-bezier(.6,1.5,.5,1) both`,
    animationDelay: `${delay}s`,
  }}>
    <style>{`
      @keyframes checkmark-in {
        0% { opacity: 0; transform: scale(0.5) translateY(10px) rotate(-20deg); filter: blur(6px); }
        60% { opacity: 1; filter: blur(1px); }
        100% { opacity: 1; transform: scale(1) translateY(0) rotate(0deg); filter: blur(0); }
      }
      @keyframes checkmark-glow {

        0%,100%{filter:drop-shadow(0 0 6px #22c55e88) drop-shadow(0 0 12px #22c55e44);}
        50%{filter:drop-shadow(0 0 16px #22c55e) drop-shadow(0 0 24px #22c55e88);}
      }
    `}</style>
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22" fill="none"
      style={{
        display: 'block',
        animation: isHovered ? 'checkmark-pop 0.5s cubic-bezier(.6,1.5,.5,1) both, checkmark-glow 1.2s ease-in-out infinite' : 'none',
        filter: 'drop-shadow(0 0 6px #22c55e88)',
      }}
    >
      <circle cx="11" cy="11" r="10" fill="#ef4444" opacity="0.18" />
      <path d="M6.5 12.5L10 16L15.5 7.5" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

// Helper function for time formatting
function formatTime(sec) {
  if (!sec && sec !== 0) return '0:00';
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export default App;
