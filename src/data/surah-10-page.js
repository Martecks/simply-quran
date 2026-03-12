/**
 * Chapter Yunus - Page Data
 * Content, accordion sections, and facts for the Chapter page
 */

const SURAH_10_PAGE = {
    meta: {
        number: 10,
        name: 'Yunus',
        arabicName: 'سُورَةُ يُونُس',
        meaning: 'Jonah',
        type: 'Makkan',
        verses: 109,
        juz: '11',
        color: '#1a6b1a'
    },

    intro: [
        'Chapter Yunus is named after the Prophet Jonah (Yunus), yet his specific story appears only briefly near the end of the chapter. Its primary focus is the establishing of the Quran as a divine miracle and a response to those who claimed the Prophet Muhammad had fabricated the text himself.',
        'What makes the mentioned story of Jonah unique is the outcome: his nation is the only one in the Quranic record that repented collectively and was subsequently spared from divine destruction. Whereas other nations like \'Ad and Thamud were destroyed for their persistence in pride, the people of Nineveh chose humility at the last moment.',
        'The chapter provides a deeply comforting theological message, reminding the reader that God is the ultimate manager of all affairs, from the movement of the celestial bodies to the intake of a single breath. It encourages a posture of patience and trust, urging believers to follow the revelation even when faced with mockery or hardship.'
    ],

    sections: [
        {
            id: 'god-guides',
            title: 'Divine Wisdom and the Cosmic Order',
            category: 'Theology',
            verseRange: '1–11',
            subsections: [
                {
                    heading: 'Is revelation to a human strange?',
                    verseRange: '1–2',
                    summary: '"Is it a wonder to the people that We revealed to a man from among them: Warn the people...?" The chapter addresses the social objection that a messenger should have been an angel rather than a common man.',
                },
                {
                    heading: 'The management of the Throne',
                    verseRange: '3–6',
                    summary: '"Your Lord is God who created the heavens and earth in six days, then established Himself above the Throne, directing all matters." He made the sun a radiance and the moon a light.',
                    faq: {
                        title: 'The Concept of "Six Days"',
                        content: 'The Quranic mention of the world being created in "six days" (Ayyam) is understood by Islamic scholars as referring to six distinct cosmic periods or epochs of creation rather than standard 24-hour earthly days. Unlike some other religious traditions, the Quran explicitly rejects the idea that God experienced fatigue or needed to "rest" on a seventh day, as exhaustion is a human limitation.\n\nThese periods represents the organized and purposeful stages through which the universe was brought into existence by the Divine Will. The verse emphasizes that after the initial creation, God remained actively involved in "directing all matters" (Yudabbiru al-Amr), meaning the universe is not a clockwork machine left to run on its own. It serves to establish that every natural law and cosmic event is a direct result of continuous divine management.'
                    }
                },
                {
                    heading: 'The mercy in delayed punishment',
                    verseRange: '11',
                    summary: '"If God were to hasten evil for people as they hasten for good, their term would have already ended." God’s delay is an act of mercy, giving people the maximum window of time to turn back.',
                    faq: {
                        title: 'Why Does Justice Take Time?',
                        content: 'In many places in the Quran, the defiant would mock the prophets by challenging them to "bring the punishment now" if they were truly telling the truth. Verse 10:11 explains that if God responded to human urgency and punished every sin instantly, the human race would have ceased to exist long ago due to its own errors.\n\nHis delay is not a sign of indifference or absence, but a deliberate extension of mercy designed to allow the sinner to realize their mistake and sincerely repent. This "term" (Ajal) assigned to each nation and individual is a grace period where the door to change remains wide open. It teaches that the apparent "silence" of God in the face of injustice is actually a space for human growth and the ultimate manifestation of His patience.'
                    }
                },
            ],
        },
        {
            id: 'human-nature',
            title: 'Human Psychology and Selective Faith',
            category: 'Guidance',
            verseRange: '12–23',
            subsections: [
                {
                    heading: 'Calling God only in crises',
                    verseRange: '12',
                    summary: '"When hardship touches a person, they call Us... sitting or standing. But when We remove it, they carry on as if they never called Us." This highlights the human tendency toward opportunistic faith.',
                },
                {
                    heading: 'The ship in the violent storm',
                    verseRange: '21–23',
                    summary: '"When you are on ships... and a violent storm comes, they call God with pure sincere devotion... But when He saves them, they immediately rebel." The ocean is the ultimate truth-teller.',
                    faq: {
                        title: 'The Theology of the Sea',
                        content: 'The Quran frequently uses the imagery of ships in a storm to illustrate the "Fitrah" or the innate, primordial belief in a single Creator that exists within every human soul. On dry land, in the comfort of civilization and technology, a person may feel self-sufficient and even deny the existence of a higher power.\n\nHowever, when caught in a violent storm at sea where all material safety nets (wealth, status, and engineering) are rendered useless, human ego instantly collapses and the survivor instinctively calls out to God with "pure, sincere devotion." This psychological shift proves that monotheism is the default setting of the human heart, which only becomes obscured by the distractions of worldly comfort. The verse warns that the "rebellion" that follows once the person is safely back on land is a form of spiritual amnesia.'
                    }
                },
            ],
        },
        {
            id: 'worldly-life',
            title: 'The Parable of the Fleeting World',
            category: 'Theology',
            verseRange: '24–36',
            subsections: [
                {
                    heading: 'The earth leveled bare',
                    verseRange: '24',
                    summary: 'God compares the life of this world to vegetation that flourishes after rain, making the earth look beautiful. But once the owners think they have mastered it, God’s command comes and levels it bare.',
                },
                {
                    heading: 'Assumption vs. Reality',
                    verseRange: '31–36',
                    summary: '"Most of them follow nothing but conjecture, and it is useless against the truth." The chapter challenges the people to identify who truly provides for them and who controls their very sight and hearing.',
                },
            ],
        },
        {
            id: 'quran-challenge',
            title: 'The Ultimate Literary Challenge',
            category: 'Theology',
            verseRange: '37–56',
            subsections: [
                {
                    heading: 'Produce a single chapter',
                    verseRange: '37–39',
                    summary: '"Or do they say he invented it? Say: Then produce a single chapter like it and call upon whoever you can besides God." This open challenge remains the core proof of the Quran’s origin.',
                    faq: {
                        title: 'The Quranic Challenge Explained',
                        content: 'The "Tahaddi" or the challenge to produce something equal to the Quran is a central theme in the Prophet’s mission to the poetic and eloquent Arab society. In verse 10:38, God challenges the skeptics to produce just one "chapter" that matches the Quran’s unique linguistic structure, spiritual depth, and perfect internal consistency.\n\nDespite the fact that pre-Islamic Arabs were masters of the Arabic language and prided themselves on their unmatched eloquence, no individual or group was able to meet this challenge with anything that stood the test of time. This failure is presented as a logical proof that the Quran is not the product of human genius or "borrowed" folklore, but is a divine revelation from the Creator of language itself. Over 1,400 years later, the invitation remains open to the world, serving as a permanent invitation to investigate the book’s miraculous nature.'
                    }
                },
            ],
        },
        {
            id: 'healer-mercy',
            title: 'The Quran: Medicine for the Soul',
            category: 'Guidance',
            verseRange: '57–70',
            subsections: [
                {
                    heading: 'Healing for what is in the chests',
                    verseRange: '57–58',
                    summary: '"There has come to you an instruction from your Lord and a healing for what is in the chests." The Quran is presented as the primary treatment for spiritual and psychological diseases.',
                    faq: {
                        title: 'How the Quran Functions as Healing',
                        content: 'When the Quran refers to itself as a "Shifa" (cure or healing) for "what is in the chests," it is speaking of its ability to resolve the fundamental existential crises that plague the human heart. These diseases include the poison of arrogance, the exhausting pursuit of greed, the darkness of despair, and the constant anxiety of a life without meaning.\n\nBy realigning a person’s worldview toward their Creator, the Quran provides an internal peace that cannot be found in material accumulation. It acts as "medicine" by providing clear answers to life’s biggest questions, thereby calming the turbulent soul and replacing fear with "Tawakkul" (trust in God). It is not merely a book of information, but a transformative energy that, when recited and understood, restores the health of the human spirit.'
                    }
                },
                {
                    heading: 'Who decides what is Halal?',
                    verseRange: '59–61',
                    summary: '"Say: Has God permitted you, or do you invent lies against God?" Humans do not have the right to arbitrarily declare things lawful or unlawful based on their own cultural whims.',
                    faq: {
                        title: 'The Authority Over Law',
                        content: 'Verse 10:59 establishes a critical boundary in Islamic jurisprudence regarding the authority to define what is "Halal" (permissible) and "Haram" (forbidden). It warns that for a human being, whether a leader, a scholar, or a layperson, to take something that God has made lawful and declare it forbidden based on their own cultural bias is a grave theological crime.\n\nThis principle protects the community from the "yokes" of man-made religious burdens and ensures that the religion remains as God intended it: simple and focused on truth. It teaches that true worship is not about creating new restrictions to show piety, but about adhering to the boundaries set by the Divine. Falsely attributing such restrictions to God is described as "forging a lie," which corrupts the very nature of faith and leads people away from the balance of the straight path.'
                    }
                },
                {
                    heading: 'The allies of God (Wali)',
                    verseRange: '62–64',
                    summary: '"Unquestionably, the allies of God: no fear will there be concerning them, nor will they grieve." The believers who are God-conscious are promised glad tidings in both worlds.',
                },
            ],
        },
        {
            id: 'prophets-stories',
            title: 'The Persistence of Truth: Noah to Moses',
            category: 'Stories',
            verseRange: '71–93',
            subsections: [
                {
                    heading: 'Noah and the messengers who followed',
                    verseRange: '71–75',
                    summary: 'Noah dares his people to carry out their plot against him, trusting entirely in God. Later messengers were rejected in the same way, as nations inherited the stubbornness of their ancestors.',
                },
                {
                    heading: 'The preservation of Pharaoh\'s body',
                    verseRange: '90–93',
                    summary: 'As Pharaoh is drowning, he tries to repent, but God rejects it: "Now? After you were among the corrupters? Today We will preserve your body as a sign for those who come after you."',
                    faq: {
                        title: 'The Pharaoh and the Sign of the Body',
                        content: 'Verse 10:92 contains a specific and historic prophecy: that the physical body of the Pharaoh who persecuted Moses would be preserved by God as a "sign" for future generations. While the history of Ancient Egypt was lost for centuries, the discovery of royal mummies in the late 19th century (specifically that of Ramesses II or Merneptah) shocked the scientific world.\n\nMany researchers have pointed to the physical state of these mummies as a fulfillment of the Quranic verse, which was revealed at a time when nobody in the Arabian desert could have possibly known about the practice of mummification or the location of the Pharaohs’ tombs. This "preservation" serves as a permanent archaeological warning that regardless of how much power a person exerts on earth, they will eventually be returned to their Creator. It is a physical testimony to the truth of the Exodus story and the ultimate triumph of the oppressed over the tyrant.'
                    }
                },
            ],
        },
        {
            id: 'jonah-exception',
            title: 'Jonah’s People: The Unique Exception',
            category: 'Stories',
            verseRange: '94–109',
            subsections: [
                {
                    heading: 'One city that repented and was spared',
                    verseRange: '98',
                    summary: 'The people of Jonah (Nineveh) are the only nation in the Quran who turned back to God collectively after seeing the signs, and were saved from destruction.',
                    faq: {
                        title: 'Why Were Jonah\'s People Spared?',
                        content: 'Throughout the Quranic narrative, nations like \'Ad, Thamud, and the people of Lot were warned multiple times but chose to mock their prophets until the punishment became inevitable. However, the people of Nineveh, to whom Prophet Jonah was sent, represent a miraculous and beautiful anomaly in human history.\n\nWhen they realized the gravity of their error and the reality of the impending divine consequence, the entire city, from the common laborers to the ruling elite, humbled themselves in sincere repentance. Because they turned back while the door of opportunity was still open, God removed the "punishment of disgrace" from them and allowed them to continue their civilization in peace. This story is included to teach that destruction is never God’s first choice; His preference is always for people to repent and live, and that a collective change in heart can literally alter the planned course of destiny.'
                    }
                },
                {
                    heading: 'God does not force belief',
                    verseRange: '99–100',
                    summary: '"If your Lord had willed, everyone on earth would have believed... Can you then compel people to become believers?" Faith is a free choice, and forced belief is a spiritual contradiction.',
                    faq: {
                        title: 'The Logic of Free Will',
                        content: 'Verse 10:99 establishes a core principle of Islamic theology: that belief in God must be a voluntary and intellectual choice rather than a result of coercion. The verse rhetorically asks the Prophet that if the Creator Himself (who possesses the absolute power to make every heart believe) chose to grant humans free will, who then has the right to try and force a person to have faith?\n\nThis highlights that "forced faith" is a logical impossibility, as true belief requires the sincere conviction of the heart and the active engagement of the mind. God created humans specifically to test their willingness to seek the truth, and if He had made belief mandatory, the entire educational and spiritual purpose of earthly life would be lost. This verse stands as a permanent protection for freedom of conscience, reminding believers that their duty is only to convey the message clearly, while the final choice belongs to each individual soul.'
                    }
                },
            ],
        },
    ],

    facts: [
        {
            icon: 'star',
            title: 'Nation of Nineveh',
            description: 'Jonah\'s people are the only civilization mentioned in the Quran that repented collectively and was successfully spared from total destruction.'
        },
        {
            icon: 'shield',
            title: 'Mummy Prophecy',
            description: 'Verse 92 is considered a major historic sign, accurately predicting the preservation of Pharaoh’s physical body for discovery more than a thousand years later.'
        },
        {
            icon: 'eye',
            title: 'No Forced Faith',
            description: 'The chapter reinforces that God specifically chose not to force humanity to believe, making sincere and voluntary choice the only valid form of faith.'
        },
        {
            icon: 'book',
            title: 'Literary Challenge',
            description: 'Verse 38 contains the famous standing challenge for anyone to produce just one single chapter that matches the Quran’s unique linguistic and spiritual quality.'
        },
        {
            icon: 'heart',
            title: 'Spiritual Medicine',
            description: 'It describes the Quran as a "cure for what is in the chests," identifying its verses as a primary treatment for psychological and existential anxieties.'
        }
    ],

    closingVerse: {
        arabic: 'أَلَآ إِنَّ أَوْلِيَآءَ ٱللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ',
        translation: '"Unquestionably, the allies of God will have no fear, nor will they grieve."',
        reference: '- Yunus 10:62'
    }
};

export default SURAH_10_PAGE;
