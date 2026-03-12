/**
 * Chapter Al-Anfal - Page Data
 * Content, accordion sections, and facts for the Chapter page
 */

const SURAH_8_PAGE = {
    meta: {
        number: 8,
        name: 'Al-Anfal',
        arabicName: 'سُورَةُ الأَنفَال',
        meaning: 'The Spoils of War',
        type: 'Madinan',
        verses: 75,
        juz: '9–10',
        color: '#16783c'
    },

    intro: [
        'Al-Anfal is often called the "Chapter of Badr," as it was revealed shortly after the very first major battle in Islamic history at the wells of Badr. It provides a profound analysis of a victory where 313 poorly equipped Muslims defeated a massive, professional army of nearly 1,000 Meccans.',
        'The name "The Spoils of War" refers to the opening verses, which immediately addressed a dispute among the believers over the captured equipment. God intervened to take the wealth out of their hands, teaching the community that their success was a divine gift rather than a result of their own material power or military strategy.',
        'This chapter outlines the essential ethics of combat, the treatment of prisoners, and the rules of international treaties. Beyond its legal focus, it serves as a masterclass in spiritual trust, stripping away the illusion of physical strength and pointing directly to the unseen support of the Divine.'
    ],

    sections: [
        {
            id: 'spoils-and-hearts',
            title: 'Divine Spoils and the Nature of Belief',
            category: 'Character',
            verseRange: '1–10',
            subsections: [
                {
                    heading: 'The true ownership of wealth',
                    verseRange: '1–4',
                    summary: 'They ask you about the spoils of war. "Say: The spoils belong to God and the Messenger. So fear God and amend your relations." The true believers are those whose hearts tremble when God is mentioned.',
                    faq: {
                        title: 'Why Did God Take the Spoils?',
                        content: 'Immediately after the unprecedented victory at Badr, a human dispute broke out among the Muslim ranks regarding how to distribute the captured armor, weapons, and camels. To prevent this material gain from corrupting the spiritual purity of their mission, God revealed that the "spoils" belonged entirely to Him and His Messenger rather than those who fought.\n\nThis divine intervention cooled the heated arguments and redirected the companions’ focus back to the core values of unity and brotherhood. By removing the financial incentive from the first battle, the Quran taught that the primary goal of their struggle was the establishment of truth and justice, not the accumulation of worldly wealth. Only later were specific rules established for the fair division of such resources among the soldiers and the needy.'
                    }
                },
                {
                    heading: 'The descent of the angels',
                    verseRange: '9–10',
                    summary: 'When the Muslims called for help, God answered: "I will reinforce you with a thousand angels." God did this as good news to put their hearts at peace, for victory comes only from God.',
                    faq: {
                        title: 'The Role of Angels in Battle',
                        content: 'Islamic history records that during the Battle of Badr, when the small Muslim force was facing a heavily armed army three times its size, God sent a thousand angels to stand in their ranks. The Quran clarifies that the presence of these celestial beings was primarily intended as "good news" to provide psychological and spiritual stability to the anxious believers.\n\nWhile the angels had a terrifying impact on the enemy’s morale, the text emphasizes that true victory is an act of God’s will rather than the result of any physical force, whether human or angelic. This teaching prevents the community from becoming overconfident in supernatural help and reminds them that their ultimate reliance must always be on the Creator alone. Badr remains the definitive example that when a small group is sincere, God can multiply their strength in ways that defy military logic.'
                    }
                },
            ],
        },
        {
            id: 'divine-intervention',
            title: 'The Hand of God on the Battlefield',
            category: 'Stories',
            verseRange: '11–19',
            subsections: [
                {
                    heading: 'Strategic miracles: Rain and sand',
                    verseRange: '11–14',
                    summary: 'God sent down rain to purify the believers and make the sandy ground firm under their feet. He inspired the angels to strike the necks and fingers of the enemy to neutralize their ability to fight.',
                    faq: {
                        title: 'The Precision of Divine Strikes',
                        content: 'The Quranic command to "strike the necks and fingers" of the combatants in verse 8:12 is a description of a highly effective military strategy suited for ancient sword-based warfare. By targeting the hands and fingers, a soldier is instantly rendered unable to hold a weapon, neutralizing the threat without necessarily causing death.\n\nThis level of detail demonstrates that God’s intervention on the battlefield was not just a vague cloud of power, but a precise and calculated support for the believers’ safety. It also served to shatter the Meccans’ arrogance, as their superior numbers and equipment were made useless by unexpected environmental and tactical shifts. The verse serves as a reminder that every physical movement and every outcome is ultimately under the absolute control of the Divine.'
                    }
                },
                {
                    heading: 'You did not throw when you threw',
                    verseRange: '17–19',
                    summary: '"You did not kill them, but God killed them. And you did not throw when you threw, but God threw." The Prophet threw a handful of sand toward the enemy, and God caused it to blind the opposing army.',
                },
            ],
        },
        {
            id: 'hearing-and-life',
            title: 'Responding to the Call of Life',
            category: 'Beliefs',
            verseRange: '20–29',
            subsections: [
                {
                    heading: 'Listen to the message that gives life',
                    verseRange: '24–26',
                    summary: '"Respond to God and to the Messenger when he calls you to that which gives you life." Know that God stands between a person and his heart. Remember when you were few and oppressed in the land.',
                },
                {
                    heading: 'The test of wealth and children',
                    verseRange: '27–29',
                    summary: 'Do not betray God and the Messenger, or betray your trusts while you know better. Your wealth and your children are only a test. If you fear God, He will give you the ability to tell right from wrong.',
                },
            ],
        },
        {
            id: 'plots-and-finances',
            title: 'Assassination Plots and Divine Planning',
            category: 'Rules',
            verseRange: '30–40',
            subsections: [
                {
                    heading: 'The plot against the Messenger',
                    verseRange: '30–35',
                    summary: 'The disbelievers plotted to imprison, kill, or exile the Prophet. "They were planning, and God was planning, and God is the best of planners." Their worship at the Sacred House was only whistling and clapping.',
                    faq: {
                        title: 'The Assassination Plot in Makkah',
                        content: 'Shortly before the historic migration to Madinah, the leaders of the Quraysh met in a council to finalize a plan to end the Prophet’s life once and for all. They decided to select one strong young man from every major tribe to strike him simultaneously, so that the legal responsibility for his blood would be scattered and his family would be unable to seek revenge.\n\nHowever, God revealed their secret plan to the Prophet, allowing him to escape Makkah safely that very night while Ali ibn Abi Talib lay in his bed as a decoy to confuse the assassins. This incident is cited in the Quran as the ultimate proof that human conspiracies cannot override divine protection. It teaches that while enemies may use every resource to plot, the final "plan" that manifest in reality is always the one permitted by the Creator.'
                    }
                },
            ],
        },
        {
            id: 'division-of-spoils',
            title: 'Legal Rulings and Battle Logistics',
            category: 'Rules',
            verseRange: '41–54',
            subsections: [
                {
                    heading: 'The division of the Khums',
                    verseRange: '41',
                    summary: '"Whatever you take as spoils of war, one-fifth is for God, the Messenger, near relatives, orphans, the needy, and the traveler." The rest is for those who were present on the battlefield.',
                },
                {
                    heading: 'Satan abandons his allies',
                    verseRange: '48–54',
                    summary: 'Satan promised the Meccan army victory, saying: "No one can defeat you today." But when the battle began, he turned and ran, saying: "I see what you do not see; I fear God." Deception always fails in the end.',
                },
            ],
        },
        {
            id: 'treaties-and-peace',
            title: 'The Ethics of War and Peace',
            category: 'Rules',
            verseRange: '55–64',
            subsections: [
                {
                    heading: 'Handling treachery with fairness',
                    verseRange: '58–59',
                    summary: 'If you suspect treachery from a group you have a treaty with, publicly declaring the peace is over. "Throw the treaty back at them fairly." God does not love the treacherous or those who break their promises.',
                    faq: {
                        title: 'The Quranic Rules for Ending Treaties',
                        content: 'The Quran establishes a high ethical standard for international relations, even in cases where a peace treaty is being violated by the other side. If a Muslim leader has clear and proven evidence of an imminent betrayal, they are not permitted to launch a surprise attack while the treaty technically still stands.\n\nInstead, they are commanded to "throw the treaty back" to the enemy in a transparent and public manner, ensuring that both parties are fully aware that the state of peace has ended. This prevents the Muslims from ever being the ones who initiate treachery and maintains the community’s reputation for absolute integrity. This principle ensures that even in the lead-up to war, the actions of the believers remain anchored in honesty and divine ethics.'
                    }
                },
                {
                    heading: 'Military readiness as a deterrent',
                    verseRange: '60–60',
                    summary: '"Prepare against them whatever you are able of power... to strike terror into the enemy." Military strength is meant to prevent war by creating a strong deterrent against those who would attack.',
                    faq: {
                        title: 'The Strategy of Peace Through Strength',
                        content: 'Verse 8:60 provides a foundational principle for Islamic national security: the maintenance of a strong and visible military defense as a means of deterring aggression. The command to prepare "whatever power you are able" is not a call for unprovoked expansionism, but a strategy to ensure that hostile forces calculate that an attack on the Muslims would be too costly.\n\nBy being prepared and technologically capable, a society can effectively "strike terror" into the hearts of would-be tyrants, thereby preventing conflict before it even begins. In this context, building military strength is seen as a tool for preserving peace rather than a justification for starting wars. It reflects a realistic understanding of human nature, where true security is often maintained by being too strong to be easily intimidated.'
                    }
                },
                {
                    heading: 'Inclining toward peace',
                    verseRange: '61–64',
                    summary: '"If they incline to peace, then you must also incline to it, and rely upon God." Even if you think they are lying to gain an advantage, you must accept an offer of peace and trust in God’s protection.',
                },
            ],
        },
        {
            id: 'prisoners-and-loyalty',
            title: 'Prisoners of War and True Brotherhood',
            category: 'Rules',
            verseRange: '65–75',
            subsections: [
                {
                    heading: 'Compassion for prisoners',
                    verseRange: '67–71',
                    summary: 'Tell the prisoners: "If God knows any good in your hearts, He will give you something better than what was taken." The Prophet chose to accept ransom for the prisoners of Badr and allowed many to go free.',
                    faq: {
                        title: 'A Revolutionary Treatment of Prisoners',
                        content: 'The Battle of Badr resulted in the first group of seventy prisoners ever taken by the Muslim community, leading to a historic debate on how they should be treated. While some companions suggested execution to end the threat, the Prophet Muhammad chose the path of mercy, allowing prisoners to be ransomed or even set free based on their behavior.\n\nIn a remarkable historical innovation, prisoners who were literate but unable to pay a financial ransom were allowed to earn their freedom by teaching ten Muslim children how to read and write. This policy transitioned military captives from being mere laborers or victims into being contributors to the community’s education. It remains a definitive example of how Islamic ethics prioritized literacy and compassion even in the immediate aftermath of a violent conflict.'
                    }
                },
            ],
        },
    ],

    facts: [
        {
            icon: 'star',
            title: 'The Logic of Badr',
            description: 'This chapter provides the definitive analysis of the Battle of Badr (2 AH), where 313 Muslims defeated a Meccan force of 1,000, changing the course of history.'
        },
        {
            icon: 'shield',
            title: 'Peace Through Deterrence',
            description: 'Verse 60 establishes the military principle of deterrence, commanding the community to be so well-prepared that potential enemies are afraid to initiate a war.'
        },
        {
            icon: 'moon',
            title: 'Satan’s Betrayal',
            description: 'In verse 48, the Quran describes how Satan encouraged the Meccan army and promised them victory, only to abandon them and run away when he saw the angels arriving.'
        },
        {
            icon: 'book',
            title: 'The Whistling "Prayer"',
            description: 'Verse 35 notes that the Meccan pagans’ only form of "worship" at the Kaaba involved nakedness, whistling, and clapping, which the Quran identifies as a mockery of true prayer.'
        },
        {
            icon: 'conversation',
            title: 'Ransom Through Literacy',
            description: 'Following Badr, the Prophet allowed prisoners of war to earn their freedom by teaching children how to read, establishing a unique link between military victory and education.'
        }
    ],

    closingVerse: {
        arabic: 'وَإِن جَنَحُوا۟ لِلسَّلْمِ فَٱجْنَحْ لَهَا وَتَوَكَّلْ عَلَى ٱللَّهِ ۚ إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ',
        translation: '"If they incline to peace, then you also incline to it, and rely upon God. Indeed, it is He who is the Hearing, the Knowing."',
        reference: '- Al-Anfal 8:61'
    }
};

export default SURAH_8_PAGE;
