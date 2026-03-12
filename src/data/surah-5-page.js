/**
 * Chapter Al-Ma'idah - Page Data
 * Content, accordion sections, and facts for the Chapter page
 */

const SURAH_5_PAGE = {
    meta: {
        number: 5,
        name: 'Al-Maida',
        arabicName: 'سُورَةُ المَائِدَة',
        meaning: 'The Table Spread',
        type: 'Madinan',
        verses: 120,
        juz: '6-7',
        color: '#c49550',
    },

    intro: [
        'Al-Maida is one of the very last chapters revealed in the Quran, acting as a final seals on the divine law. The text opens with the heavy command: "Fulfill your contracts," setting a tone of absolute integrity in all legal, social, and spiritual commitments.',
        'The name "The Table Spread" refers to a miraculous request made by the disciples of Jesus near the end of the chapter, but the overarching theme is the concept of covenants: the sacred agreements between God and different nations throughout history.',
        'Revealed during the Prophet’s final year, it contains the historic declaration of the religion’s perfection. This chapter serves as a comprehensive summary of food laws, social justice, and the theological boundaries between different faith communities.'
    ],

    sections: [
        {
            id: 'contracts-food',
            title: 'Contracts, Food Laws, and Finality',
            category: 'Rules',
            verseRange: '1-5',
            subsections: [
                {
                    heading: 'Fulfill your contracts',
                    verseRange: '1-2',
                    summary: '"O you who believe, fulfill your contracts." Livestock animals are lawful for you to eat, except what will be listed. Hunting is forbidden while you are in the state of pilgrimage. Do not violate the sacred months or the symbols of God.',
                },
                {
                    heading: 'The religion is perfected',
                    verseRange: '3-5',
                    summary: '"Today I have perfected your religion for you." Detailed food laws list forbidden items like dead animals, blood, and pork. The food of the People of the Book is lawful for you, and chaste marriage with them is also permitted.',
                    faq: {
                        title: 'The "Perfection" of the Religion',
                        content: 'This historic verse was revealed during the Prophet’s farewell pilgrimage on the Day of Arafah, marking the completion of the Quranic revelation process. It signifies that the essential framework for human guidance, spiritual growth, and social laws had been finalized and chosen specifically as the path of Islam.\n\nWhen the second caliph Umar ibn al-Khattab first heard this verse, he began to weep, intuitively understanding that if the mission was complete, the Prophet’s time on earth was likely coming to an end. This verse is seen as a formal divine hand-off to the community, charging them with the responsibility of maintaining the complete faith until the end of time. It stands as a profound reassurance that God’s favor upon the believers had reached its absolute pinnacle.'
                    }
                },
            ],
        },
        {
            id: 'justice-purity',
            title: 'Purity, Justice, and Sincerity',
            category: 'Rules',
            verseRange: '6-11',
            subsections: [
                {
                    heading: 'How to perform Wudu',
                    verseRange: '6-7',
                    summary: '"O you who believe, when you stand up for prayer, wash your faces and your arms up to the elbows." God does not want to burden you; He wants to purify you and complete His favor on you. Remember His covenant when you said: "We hear and we obey."',
                    faq: {
                        title: 'The Purpose of Physical Purity',
                        content: 'The ritual of Wudu (ablution) is designed as a physical and mental transition, moving the believer from the distractions of the daily world into a state of focused communication with God. By washing the most active parts of the body (the face, hands, and feet), a person is reminded to keep their senses and actions aligned with spiritual purity.\n\nThe Prophet explained that as the water drops fall, they symbolically wash away the minor sins committed by the eyes, hands, and feet, allowing the believer to stand before their Creator with a refreshed soul. This requirement ensures that a Muslim is always mindfully clean throughout the day, reinforcing the Islamic principle that "cleanliness is half of faith." It turns a simple act of hygiene into a deep spiritual preparation for the ultimate encounter with the Divine.'
                    }
                },
                {
                    heading: 'Justice even toward enemies',
                    verseRange: '8-11',
                    summary: '"Do not let the hatred of a people prevent you from being just. Be just. That is closer to God-consciousness." Even if you have been wronged, you must remain fair. Put your trust in God as He saved you from those who wanted to harm you.',
                    faq: {
                        title: 'Justice Above Emotion',
                        content: 'Verse 5:8 is considered one of the most powerful and demanding mandates for justice in any legal system, as it requires fairness even toward those we strongly dislike or who have actively harmed us. While it is easy to be fair to friends, the true test of moral character is being objective and balanced with an enemy.\n\nThis principle ensures that the legal system never becomes a tool for tribal revenge or personal bitterness, but remain anchored in absolute truth. During the conquest of Makkah, the Prophet Muhammad demonstrated this perfectly by forgiving his most brutal former enemies who had persecuted him for decades. By placing justice as the closest companion to "God-consciousness," the Quran teaches that our ethics must always override our temporary emotions and prejudices.'
                    }
                },
            ],
        },
        {
            id: 'broken-covenants',
            title: 'Lessons from Past Covenants',
            category: 'Theology',
            verseRange: '12-26',
            subsections: [
                {
                    heading: 'The covenant with the Children of Israel',
                    verseRange: '12-14',
                    summary: '"God took a covenant from the Children of Israel... but they broke it." God warned that their hearts would become hard and they would distort the truth. Even when you find treachery, the Quran tells the believers: "pardon them and overlook. God loves those who do good."',
                    faq: {
                        title: 'The Nature of the Covenant',
                        content: 'The "covenant" described here was a comprehensive agreement with the Children of Israel that required them to establish regular prayer, give back to the poor, and support all of God’s messengers without distinction. These were not just ritual acts but a commitment to lead a life of active social and spiritual responsibility in exchange for divine protection.\n\nThe Quran notes that when a nation breaks its promises consistently, their "hearts become hard," making them increasingly insensitive to moral truth and compassion. Despite detailing these historical failings, the verse ends with a striking command for the Prophet to continue pardoning and overlooking their faults. This highlights that the ultimate goal of the Quran is not to stoke resentment but to call all people back to the original spirit of their shared heritage.'
                    }
                },
                {
                    heading: 'The refusal to enter the Holy Land',
                    verseRange: '20-26',
                    summary: '"O my people, enter the Holy Land that God has written for you." They refused out of fear of the powerful inhabitants. They told Musa: "Go, you and your Lord, and fight. We are sitting right here." As a result, they were left to wander for forty years.',
                    faq: {
                        title: 'The 40 Years of Wandering',
                        content: 'When the Children of Israel reached the border of the Holy Land, they allowed their fear of the current inhabitants to override their trust in God’s explicit guarantee of victory. Their dismissive response to their prophet (telling him to go and fight with God alone) was seen as a profound failure of faith and courage.\n\nAs a consequence, that entire generation was denied entry and sentenced to wander the Sinai desert for forty years until a new, more resilient generation could arise to lead the nation. This story serves as a permanent warning that divine promises require human effort and bravery to be fulfilled in the physical world. It also teaches that a community’s lack of discipline and trust can delay their own success for decades.'
                    }
                },
            ],
        },
        {
            id: 'cain-abel',
            title: 'The First Murder and the Value of Life',
            category: 'Stories',
            verseRange: '27-40',
            subsections: [
                {
                    heading: 'Habil and Qabil: Sincerity vs. Jealousy',
                    verseRange: '27-31',
                    summary: '"Tell them the true story of Adam\'s two sons. Both offered a sacrifice. One was accepted, the other was not." Jealousy led one brother to kill the other, making this the first murder in history. A crow was sent to teach him how to bury the body.',
                    faq: {
                        title: 'The Lesson of the First Murder',
                        content: 'The story of Habil and Qabil (Abel and Cain) centers on the idea that external acts of worship mean nothing to God without internal sincerity and "taqwa" (God-consciousness). The rejected brother’s rage was not caused by any fault in Habil, but by his own inability to accept that God looks at the quality of a person’s heart.\n\nHabil’s refusal to fight back even when threatened with death demonstrated a level of spiritual maturity that chose peace over personal survival. The murderer’s subsequent regret, triggered by watching a simple crow bury its own kind, highlights how humanity often has to learn basic moral decency from the natural world. This narrative stands as the archetypal warning against the destructive power of envy and the finality of taking a human life.'
                    }
                },
                {
                    heading: 'Saving one soul is like saving all humanity',
                    verseRange: '32-34',
                    summary: '"Whoever kills a soul... it is as if he has killed all of humanity. And whoever saves one, it is as if he has saved all of humanity." This verse established the ultimate value of every individual human life in the eyes of God.',
                },
                {
                    heading: 'The penalty for theft',
                    verseRange: '35-40',
                    summary: '"The male thief and the female thief: cut their hands as a penalty for what they earned." This serves as a severe deterrent for premeditated theft in a secure society. But whoever repents and reforms after their crime, God will turn to them.',
                    faq: {
                        title: 'Justice and Desperation',
                        content: 'While the punishment for theft appears severe, Islamic legal scholars have established forty strict conditions that must all be satisfied before it can ever be applied. The stolen item must be of significant value and taken from a secure, locked location, and most importantly, the thief must not be stealing out of necessity or survival.\n\nDuring a historic famine, the Caliph Umar famously suspended this punishment because people were being driven to steal out of hunger, showing that mercy must always override the letter of the law in times of crisis. The ultimate objective of the law is not to mutilate but to create a society so safe and economically just that theft becomes a choice based on greed rather than a need. In practice, this high legal threshold means the punishment was exceptionally rare throughout Islamic history.'
                    }
                },
            ],
        },
        {
            id: 'judging-law',
            title: 'Law and Competition in Goodness',
            category: 'Rules',
            verseRange: '41-50',
            subsections: [
                {
                    heading: 'A life for a life, an eye for an eye',
                    verseRange: '44-47',
                    summary: '"We wrote... a life for a life, an eye for an eye... but whoever forgives it as charity, it becomes an expiation for them." God provides the option for equal justice but consistently encourages the higher path of mercy.',
                    faq: {
                        title: 'The Path of Mercy',
                        content: 'The "eye for an eye" law was originally revealed in the Torah and confirmed in the Quran as a way to limit the cycle of violence by ensuring punishments were strictly proportional to the crime. In pre-Islamic tribal warfare, an injury to one person could trigger the deaths of dozens of innocent tribe members; this law effectively capped that revenge.\n\nHowever, the Quran immediately follows this legal limit with a powerful spiritual incentive: that choosing to forgive the offender is a form of charity that erases the victim’s own sins. By giving the victim the legal right to justice but the spiritual invitation to forgive, God balances the practical needs of public safety with the higher evolution of the soul. This dual approach ensures that justice remains fair while keeping the door to reconciliation permanently open.'
                    }
                },
                {
                    heading: 'Compete with one another in doing good',
                    verseRange: '48-50',
                    summary: '"For each of you, God made a law and a clear path... so compete with one another in doing good." God could have made us one nation, but He tests us through our differences. Your ultimate return is to God alone.',
                    faq: {
                        title: 'Competing in Goodness',
                        content: 'This verse explains that the diversity of religious laws and communities throughout history is divinely intended as a "test" of how humans handle their differences. Rather than wasting time in endless theological debate or physical conflict, God commands different faith groups to engage in a "race" toward virtuous actions and social benefit.\n\nIt shifts the focus from "who is right" in an abstract sense to "who can be the best version of themselves" in a practical sense. The Day of Judgment is described as the only time when these ultimate disagreements will be fully resolved by the Creator Himself. Until then, the highest form of religious observance is to excel in compassion, justice, and the service of others.'
                    }
                },
            ],
        },
        {
            id: 'alliances-loyalty',
            title: 'Loyalty and Real Protection',
            category: 'Warning',
            verseRange: '51-71',
            subsections: [
                {
                    heading: 'Ultimate loyalty is for God and His messenger',
                    verseRange: '51-56',
                    summary: '"Your real ally is only God, His Messenger, and the believers who establish prayer and give charity." This was revealed in a specific context of political betrayal and war, defining who a believer can truly trust.',
                    faq: {
                        title: 'Understanding Political Alliances',
                        content: 'The Arabic term "awliya" used in verse 5:51 refers to protectors, patrons, or those to whom one gives their ultimate political and religious loyalty. These verses were revealed during a time when the early Muslim community was under constant threat of extinction, and some members were secretly making deals with enemies to ensure their own survival.\n\nThe Quran does not prohibit basic kindness, trade, or friendships with people of other faiths, as confirmed by other verses command justice and good relations. Instead, it warns against placing one’s final trust in groups that actively mock the faith or work toward the community’s destruction. True security, the Quran argues, is found in a deep connection with God and those who share one’s core values of justice and worship.'
                    }
                },
            ],
        },
        {
            id: 'jesus-table',
            title: 'Jesus and the Table from Heaven',
            category: 'Beliefs',
            verseRange: '72-120',
            subsections: [
                {
                    heading: 'Jesus and his mother used to eat food',
                    verseRange: '72-77',
                    summary: '"The Messiah himself said: O Children of Israel, worship God, my Lord and your Lord." The Quran reminds us that Jesus and his mother were human beings who needed food to survive, proving that they were not divine beings.',
                    faq: {
                        title: 'The Argument of Necessity',
                        content: 'The Quran uses the simple, observable fact that Jesus and Maryam "used to eat food" as a powerful logical proof of their humanity and non-divinity. God, by definition, is "Al-Hayy" (The Ever-Living) and "Al-Qayyum" (The Self-Sustaining), meaning He has no needs and depends on absolutely nothing to exist.\n\nA being that must consume material food to maintain their life is an "accident" of creation, dependent on God’s provisions and vulnerable to hunger and physical limits. While honoring Jesus as a miraculous prophet and a "spirit from Him," the Quran draws a clear intellectual boundary between the Creator who provides food and the prophets who consume it. This teaching invites a faith that is grounded in sound reason and the recognition of God’s absolute uniqueness.'
                    }
                },
                {
                    heading: 'The final ban on alcohol and gambling',
                    verseRange: '87-93',
                    summary: '"Wine, gambling... are an abomination from Satan\'s work. Avoid them so you may succeed." Satan wants to stir up hatred and turn you away from prayer. This was the final, definitive prohibition of intoxicants.',
                    faq: {
                        title: 'The Gradual Prohibition',
                        content: 'The total ban on alcohol in Islam was not imposed overnight, but through a gentle four-step process that allowed the community’s hearts and habits to change gradually. It began with simple observations about the fruits used for wine, followed by a warning that their harms outweighed their benefits, and then a restriction on praying while intoxicated.\n\nThis final verse in Al-Maida was the "completion" of the process, declaring intoxicants a tool of Satan used to stir up social hostility and spiritual neglect. Because the community had been prepared for years, they responded to this verse by immediately emptying every container of wine into the streets of Madinah, turning the city roads into rivers of discarded alcohol. This remains one of the greatest examples in history of using moral education to achieve a total and voluntary social shift.'
                    }
                },
                {
                    heading: 'The miracle of the table spread',
                    verseRange: '112-115',
                    summary: 'The disciples asked for a table from heaven to "put our hearts at ease." Jesus prayed, and God agreed to send it, but warned that anyone who disbelieved after such a clear sign would face a unique and severe punishment.',
                },
                {
                    heading: 'The testimony of Jesus on Judgment Day',
                    verseRange: '116-120',
                    summary: '"O Isa, did you tell people to take you and your mother as gods besides God? He says: Glory be to You! I would never say what I have no right to say." Jesus will confirm that he only taught the worship of the One God.',
                    faq: {
                        title: 'The Great Question',
                        content: 'On the Day of Judgment, God will ask Jesus a question that specifically addresses the core theological difference between Islam and mainstream Christianity: "Did you tell people to worship you?" This moment is depicted not as a challenge to Jesus, but as a public vindication of his true mission as a monotheistic prophet.\n\nJesus’ response is a masterpiece of humility and theological precision, stating that he only witnessed what his people did while he was among them and that the outcome belongs to God’s wisdom alone. This dramatic dialogue serves as a final and definitive clarification for all of humanity that no messenger, no matter how miraculous, ever claimed divinity for themselves. It ends the longest chapter of laws with a return to the absolute Oneness of the Creator.'
                    }
                },
            ],
        },
    ],

    facts: [
        {
            icon: 'star',
            title: 'The Seal of Laws',
            description: 'Al-Maida is one of the last complete chapters revealed, acting as the final sealing of the Quranic legal system and social contracts for the community.'
        },
        {
            icon: 'shield',
            title: 'Religion Perfected',
            description: 'Verse 3 contains the historic declaration: "Today I have perfected your religion for you," a moment so significant that the Caliph Umar wept in realization of its weight.'
        },
        {
            icon: 'ruler',
            title: 'Final Alcohol Ban',
            description: 'This chapter carries the definitive and total prohibition of alcohol and gambling, closing a gradual four-stage educational process with a powerful social transformation.'
        },
        {
            icon: 'book',
            title: 'The Value of One Life',
            description: 'Verse 32, "Whoever saves a life, it is as if he saved all of humanity," provides the ultimate Islamic foundation for the sanctity of human life and humanitarian efforts.'
        },
        {
            icon: 'cross',
            title: 'Vindication of Jesus',
            description: 'It concludes with a dramatic dialogue where Jesus himself testifies before God that he never commanded his followers to deify him or his mother, Maryam.'
        }
    ],

    closingVerse: {
        arabic: 'لِلَّهِ مُلْكُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَمَا فِيهِنَّ',
        translation: '"To God belongs the dominion of the heavens and the earth and whatever is within them."',
        reference: '- Al-Ma\'idah 5:120',
    },
};

export default SURAH_5_PAGE;
