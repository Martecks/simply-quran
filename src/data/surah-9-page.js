/**
 * Chapter At-Tawbah - Page Data
 * Content, accordion sections, and facts for the Chapter page
 */

const SURAH_9_PAGE = {
    meta: {
        number: 9,
        name: 'At-Tawbah',
        arabicName: 'سُورَةُ التَّوْبَة',
        meaning: 'The Repentance',
        type: 'Madinan',
        verses: 129,
        juz: '10–11',
        color: '#16783c'
    },

    intro: [
        'At-Tawbah is a unique and intense chapter, distinguished by being the only one in the Quran that does not begin with the "Bismillah" invocation of mercy. It serves as a final, definitive ultimatum to those who repeatedly violated their peace treaties with the Muslim community, marking a point of no return for treachery.',
        'Revealed in the 9th year after the migration to Madinah, the chapter provides a raw and honest exposure of the various groups within society, particularly the hypocrites who attempted to undermine the community from within. It focuses heavily on the grueling Tabuk campaign, a journey that tested every believer’s loyalty to the absolute limit.',
        'Despite its stern focus on war and consequence, the chapter is titled "The Repentance" to emphasize God’s boundless willingness to forgive. It famously recounts the story of three sincere believers who failed to join the army but were eventually granted divine forgiveness after a period of soul-searching and social isolation.'
    ],

    sections: [
        {
            id: 'the-ultimatum',
            title: 'Ultimatum and the Ending of Treaties',
            category: 'Rules',
            verseRange: '1–16',
            subsections: [
                {
                    heading: 'A declaration of disavowal',
                    verseRange: '1–6',
                    summary: 'God and His Messenger declare they are no longer bound by treaties with those who repeatedly broke them. Treacherous groups are given four months to travel safely and reconsider their position.',
                    faq: {
                        title: 'Why Is There No "Bismillah" At the Start?',
                        content: 'At-Tawbah is the only chapter in the Quran that does not begin with the phrase "In the Name of God, the Most Compassionate, the Most Merciful." Classical scholars explain that this is because the chapter opens with a stern and final declaration of war against those who had consistently betrayed their peace agreements. The invocation of mercy would be inconsistent with the tone of a formal ultimatum and the judicial severing of relations.\n\nFurthermore, many companions considered At-Tawbah to be a continuation of the previous chapter, Al-Anfal, as both deal extensively with the laws of war and the defense of the community. Regardless of the technical reason, the absence of the Bismillah serves as a permanent psychological indicator of the gravity and severity of the themes contained within its verses. It reminds the reader that while God is the Most Merciful, His justice is also firm against those who persist in treachery.'
                    }
                },
                {
                    heading: 'The "Sword Verse" in context',
                    verseRange: '5–6',
                    summary: '"Fight the polytheists wherever you find them" is a specific military command against treaty-breakers. However, the same section commands that any enemy seeking asylum must be protected and safely escorted to a place of security.',
                    faq: {
                        title: 'Does This Chapter Command Global Violence?',
                        content: 'Verse 9:5 is frequently isolated by critics as the "Sword Verse" to suggest a general command to kill non-Muslims, but a reading of the surrounding verses reveals a much more specific and defensive context. The command was directed only at those pagan tribes who had repeatedly violated their peace treaties, murdered innocent Muslims, and were actively plotting the community’s destruction.\n\nEven in the heat of this conflict, the very next verse (9:6) explicitly commands the Prophet to grant asylum to any polytheist who requests it and to escort them to a "place of safety" after they have heard the message. This ensures that the use of force is restricted solely to neutralized military threats and never directed at individuals who are peaceful or seeking understanding. The chapter as a whole is a study in maintaining community safety against violent treachery, not an invitation to unprovoked aggression.'
                    }
                },
            ],
        },
        {
            id: 'mosques-and-hunayn',
            title: 'The Sacred Mosque and the Trial of Numbers',
            category: 'Stories',
            verseRange: '17–27',
            subsections: [
                {
                    heading: 'Who is worthy of maintaining a mosque?',
                    verseRange: '17–24',
                    summary: 'Maintaining the Sacred Mosque is not a sign of righteousness if it is coupled with disbelief and the rejection of truth. The true maintainers are those who believe in God and the Last Day.',
                    faq: {
                        title: 'The Real Maintenance of the Kaaba',
                        content: 'Before the conquest of Makkah, the leaders of the Quraysh took great pride in their role as the physical guardians of the Kaaba and their service of providing water to the pilgrims. They believed these prestigious social acts made them superior in the eyes of God, regardless of their idol worship or persecution of the Muslims.\n\nThe Quran decisively corrects this notion, teaching that the outward service of a building is meaningless if the heart inside the builder is disconnected from the One True God. True "maintenance" of a mosque is defined as the presence of sincere prayer, charity, and a commitment to justice rather than just physical renovation or hospitality. This principle ensures that religious status is always determined by internal character and spiritual purity rather than by social prestige or administrative titles.'
                    }
                },
                {
                    heading: 'The Lesson of Hunayn',
                    verseRange: '25–27',
                    summary: 'At the Battle of Hunayn, the Muslims were overconfident due to their large numbers, but they were initially defeated and forced to flee. God then sent down tranquility and unseen forces to grant them victory.',
                },
            ],
        },
        {
            id: 'jizya-and-months',
            title: 'Protection Taxes and Sacred Time',
            category: 'Rules',
            verseRange: '28–37',
            subsections: [
                {
                    heading: 'The Jizya system explained',
                    verseRange: '29',
                    summary: 'Non-Muslim citizens living in the Islamic state were protected through the Jizya tax. This tax was a payment for state defense and an exemption from the mandatory military service required of Muslim citizens.',
                    faq: {
                        title: 'What was the Purpose of Jizya?',
                        content: 'The "Jizya" was a historical tax paid by non-Muslim citizens (known as Dhimmis) who lived under the protection of the Islamic state, and it served several clear administrative purposes. Unlike Muslim citizens, who were religiously obligated to pay Zakat and were liable for mandatory military service, non-Muslims were exempt from both of these heavy burdens.\n\nBy paying the Jizya, these citizens were guaranteed the state’s protection of their lives and property, as well as the complete freedom to practice their own religion and maintain their own places of worship. The tax was only applied to able-bodied, fighting-age men; women, children, the elderly, the poor, and religious clergy were all entirely personal exempt from paying it. In exchange for this small financial contribution, the state took on the full responsibility of defending them against any outside aggression.'
                    }
                },
                {
                    heading: 'Gold, silver, and corrupt scholars',
                    verseRange: '30–35',
                    summary: 'God warns against religious scholars who consume people’s wealth unjustly. Those who hoard gold and silver instead of spending for the common good will have their wealth turned into a burning brand in the afterlife.',
                },
            ],
        },
        {
            id: 'the-tabuk-campaign',
            title: 'The Trial of the Tabuk Expedition',
            category: 'Warning',
            verseRange: '38–41',
            subsections: [
                {
                    heading: 'The difficulty of marching to Tabuk',
                    verseRange: '38–41',
                    summary: 'The campaign to Tabuk was the ultimate test of loyalty, occurring during a time of extreme heat and famine. Some men hesitated, preferring their worldly comforts over the call to defend the community.',
                    faq: {
                        title: 'The Toughest Test of Loyalty',
                        content: 'The expedition to Tabuk occurred in the 9th year of Hijrah, during a period of scorching summer heat and a severe regional famine that had left the community’s resources depleted. To make matters worse, it coincided with the ripening of the date palm harvest, which was the primary source of income for the people of Madinah.\n\nChoosing to leave their lush, cooling gardens to march hundreds of miles across the burning desert toward a massive Byzantine army was the ultimate filter to separate sincere believers from those who practiced faith only when it was convenient. The Quran describes this as a "time of difficulty" (Sa’at al-’Usrah), where every step was a struggle. Those who successfully made the journey were honored as the most resilient members of the community, while those who stayed behind without a valid excuse had their internal character exposed to all.'
                    }
                },
            ],
        },
        {
            id: 'the-hypocrites',
            title: 'The Exposure of the Hypocrites',
            category: 'Warning',
            verseRange: '42–60',
            subsections: [
                {
                    heading: 'Excuses and false oaths',
                    verseRange: '42–48',
                    summary: 'The hypocrites claimed they couldn’t join the army due to various false excuses. God revealed that if the journey had been easy and the loot was near, they would have followed without hesitation.',
                },
                {
                    heading: 'The divine categories of charity',
                    verseRange: '60',
                    summary: 'God explicitly lists the eight categories eligible to receive Zakat charity. This prevents anyone from redirecting these funds toward corrupt or personal political projects.',
                    faq: {
                        title: 'The Constitution of Islamic Welfare',
                        content: 'Verse 9:60 functions as a strict and immutable constitutional law for the Islamic public treasury, ensuring that mandatory charity (Zakat) always reaches those who need it most. By naming eight specific categories (including the poor, the needy, those in debt, and travelers), the Quran prevents rulers from using these funds for their own personal or military projects.\n\nThis system ensures that the wealth of the community is continuously recycled back to its most vulnerable members, creating a permanent social safety net that does not depend on the whims of a particular leader. Before this verse was revealed, there were constant arguments and criticisms about how the funds should be distributed. By taking the decision out of human hands and placing it in divine law, God protected the rights of the underprivileged forever. It remains the foundational document for all Islamic humanitarian and relief efforts today.'
                    }
                }
            ],
        },
        {
            id: 'believers-vs-hypocrites',
            title: 'The Contrast of the Two Groups',
            category: 'Character',
            verseRange: '61–80',
            subsections: [
                {
                    heading: 'Allies of righteousness vs. allies of corruption',
                    verseRange: '67–72',
                    summary: 'The hypocrites command what is wrong and forbid what is right. In contrast, the believers are allies to one another, commanding what is right, establishing prayer, and seeking the pleasure of God.',
                },
            ],
        },
        {
            id: 'those-left-behind',
            title: 'Repentance and the Mosque of Harm',
            category: 'Stories',
            verseRange: '81–122',
            subsections: [
                {
                    heading: 'The "Mosque of Harm" conspiracy',
                    verseRange: '107–110',
                    summary: 'A group of hypocrites built a new mosque as a front for their political plots. God commanded the Prophet never to stand in it, teaching that a building’s intention is more important than its appearance.',
                    faq: {
                        title: 'What Was the "Masjid al-Dirar"?',
                        content: 'The "Mosque of Harm" (Masjid al-Dirar) was a physical building constructed by a group of hypocrites in Madinah who intended to use it as a safe house for a political conspiracy against the Muslim community. On the surface, it looked like a place of worship, but its real purpose was to cause division and provide a base for enemy agents who were working toward the Prophet’s destruction.\n\nGod revealed the secret intention behind the project, classifying it not as a mosque but as an outpost of treachery, and forbade the Prophet from ever praying there. This incident serves as a profound lesson that religious structures and rituals have no value if their foundation is built on harm and deceit. It taught the early community that spiritual institutions must be built on "taqwa" (God-consciousness) and genuine social benefit rather than being used as tools for political manipulation.'
                    }
                },
                {
                    heading: 'The Three Who Were Left Behind',
                    verseRange: '117–122',
                    summary: 'Three sincere believers failed to join the army out of procrastination. After being socially boycotted for fifty days, they sincerely repented, and God revealed verses confirming their forgiveness.',
                    faq: {
                        title: 'The Agony and Forgiveness of Ka’b',
                        content: 'Ka’b bin Malik and two other companions were sincere Muslims who failed to join the Tabuk expedition simply because they procrastinated until it was too late. Unlike the hypocrites who invented lies to avoid accountability, Ka’b told the Prophet the absolute truth: that he had no valid excuse for his absence.\n\nAs a consequence, the three men were socially boycotted by the entire city of Madinah for fifty grueling days, during which the Quran describes the earth as becoming "tight" around them despite its vastness. Their profound isolation and sincere regret eventually led to their divine vindication through verse 9:118. This story is celebrated as a masterpiece of human psychology and the ultimate proof that truthfulness, even when it leads to immediate pain, is the only path to genuine spiritual peace and reconciliation.'
                    }
                },
            ],
        },
        {
            id: 'mercy-prophet',
            title: 'The Character of the Messenger',
            category: 'Character',
            verseRange: '123–129',
            subsections: [
                {
                    heading: 'The heavy burden of the Prophet',
                    verseRange: '128–129',
                    summary: '"A Messenger has come to you from among yourselves. Grievous to him is what you suffer; he is concerned over you and to the believers is kind and merciful."',
                },
            ],
        },
    ],

    facts: [
        {
            icon: 'shield',
            title: 'No Starting Bismillah',
            description: 'This is the ONLY chapter in the Quran that does not begin with the "Bismillah" invocation, marking its unique tone of judicial severing and final ultimatum.'
        },
        {
            icon: 'star',
            title: 'Constitutional Welfare',
            description: 'Verse 60 is the legally binding "Constitution of Zakat," identifying the exact eight categories of people who are entitled to receive mandatory Islamic charity.'
        },
        {
            icon: 'eye',
            title: 'Exposure of Intentions',
            description: 'The chapter earned the title "Al-Fadiha" (The Exposer) among the companions because its verses laid bare the secret motives and lies of the hypocrites in Medina.'
        },
        {
            icon: 'book',
            title: 'The Mosque of Harm',
            description: 'It contains the only Quranic mention of a mosque being demolished by divine command, teaching that no religious ritual can validly house treachery or social harm.'
        },
        {
            icon: 'moon',
            title: 'The Cave Incident',
            description: 'Verse 40 provides a vivid snapshot of the Prophet’s migration, recording his words of reassurance to Abu Bakr while they were hiding in a cave: "Do not be sad; God is with us."'
        }
    ],

    closingVerse: {
        arabic: 'لَقَدْ جَآءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُم بِٱلْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ',
        translation: '"There has certainly come to you a Messenger from among yourselves... he is concerned over you and to the believers is kind and merciful."',
        reference: '- At-Tawbah 9:128'
    }
};

export default SURAH_9_PAGE;
