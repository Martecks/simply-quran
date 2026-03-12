/**
 * Detailed chronological eras and milestones of the Quranic revelation.
 * Maps historical events to revelation phases.
 */

export const REVELATION_ERAS = [
  {
    id: "first-call",
    year: "610 CE",
    location: "Makkah (Cave of Hira)",
    title: "The First Call",
    description: "The spark that ignited a revolution. In the darkness of Hira, a message of knowledge descends upon a society lost in ignorance.",
    image: "/assets/journey/hira.png",
    events: [
      {
        title: "Breaking the Silence",
        text: "The first word 'Read' challenges the oral traditions of an unlettered people.",
        side: "center"
      },
      {
        title: "A Private Awakening",
        text: "Initial believers form a small, secret bond of shared truth.",
        side: "center"
      }
    ],
    surahs: ["96 (Al-Alaq)", "74 (Al-Muddaththir)", "73 (Al-Muzzammil)"]
  },
  {
    id: "early-makkah",
    year: "613 - 616 CE",
    location: "Makkah",
    title: "The Seeds of Community",
    description: "The message moves from whispers to a public call, beginning the transformation of disparate tribes into a single unified community.",
    image: "/assets/journey/makkah.png",
    events: [
      {
        title: "Equality Proclaimed",
        text: "Slaves and nobles begin to stand side-by-side in prayer, breaking ancient hierarchies.",
        side: "center"
      }
    ],
    surahs: ["111 (Al-Masad)", "81 (At-Takwir)", "87 (Al-Ala)"]
  },
  {
    id: "the-boycott",
    year: "617 - 619 CE",
    location: "She'b Abi Talib",
    title: "The Fire of Adversity",
    description: "Years of starvation and isolation. The boycott was intended to break the movement, but it only forged the community's resolve.",
    image: "/assets/journey/boycott.png",
    events: [
      {
        title: "Solidarity in Hunger",
        text: "Sharing the last scraps of food, the Muslims learn the true meaning of brotherhood.",
        side: "center"
      }
    ],
    surahs: ["11 (Hud)", "12 (Yusuf)", "10 (Yunus)"]
  },
  {
    id: "ascension",
    year: "621 CE",
    location: "Jerusalem & The Heavens",
    title: "The Cosmic Perspective",
    description: "Following the 'Year of Sorrow', a miraculous journey reaffirms the Prophet's mission beyond the limitations of earthly strife.",
    image: "/assets/journey/jerusalem.png",
    events: [
      {
        title: "Vertical Growth",
        text: "The 5 daily prayers are established as a rhythmic connection for the growing society.",
        side: "center"
      }
    ],
    surahs: ["17 (Al-Isra)", "53 (An-Najm)"]
  },
  {
    id: "hijrah",
    year: "622 CE",
    location: "Madinah Oasis",
    title: "The Birth of a Nation",
    description: "Migration to Madinah turns a persecuted group into a sovereign community. The 'Hijrah' marks the start of a new world order.",
    image: "/assets/journey/madinah.png",
    events: [
      {
        title: "Ansar & Muhajirun",
        text: "Total strangers divide their homes and wealth, creating a miracle of social integration.",
        side: "center"
      },
      {
        title: "The Constitution",
        text: "The Covenant of Madinah codifies rights and duties for all citizens, regardless of faith.",
        side: "center"
      }
    ],
    surahs: ["2 (Al-Baqarah)", "8 (Al-Anfal)", "3 (Aal-E-Imran)"]
  },
  {
    id: "badr",
    year: "624 CE",
    location: "The Wells of Badr",
    title: "The Shield of the Weak",
    description: "The first defense. The community proves it can survive physical extinction, transitioning from vulnerability to strength.",
    image: "/assets/journey/badr.png",
    events: [
      {
        title: "Internal Discipline",
        text: "Revelations establish the ethics of engagement, justice, and mercy during conflict.",
        side: "center"
      }
    ],
    surahs: ["8 (Al-Anfal)", "22 (Al-Hajj)"]
  },
  {
    id: "conquest",
    year: "630 CE",
    location: "Makkah (The Sanctuary)",
    title: "The Triumph of Mercy",
    description: "The final transformation. Returning to the source of persecution not as conquerors, but as liberators of hearts.",
    image: "/assets/journey/conquest.png",
    events: [
      {
        title: "The Universal Pardon",
        text: "A society built on vengeance is replaced by one founded on forgiveness.",
        side: "center"
      },
      {
        title: "Completion",
        text: "The revelation concludes: 'This day I have perfected your religion for you.'",
        side: "center"
      }
    ],
    surahs: ["48 (Al-Fath)", "110 (An-Nasr)", "5 (Al-Maida)"]
  }
];
