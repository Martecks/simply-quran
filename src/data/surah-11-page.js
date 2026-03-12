/**
 * Chapter Hud - Page Data
 * Content, accordion sections, and facts for the Chapter page
 */

const SURAH_11_PAGE = {
    meta: {
        number: 11,
        name: 'Hud',
        arabicName: 'سُورَةُ هُود',
        meaning: 'Prophet Hud',
        type: 'Makkan',
        verses: 123,
        juz: '11–12',
        color: '#16783c'
    },

    intro: [
        'Chapter Hud is one of the most intense and emotionally heavy chapters in the Quran. The Prophet Muhammad famously said, "Chapter Hud and its sister chapters have turned my hair gray." It is a relentless examination of what happens when civilizations push the boundaries of God\'s patience to the absolute limit.',
        'Whereas Chapter Yunus showcased a nation that repented and was saved, Chapter Hud presents the opposite trajectory. It provides terrifying, detailed accounts of the total destruction of six separate civilizations: the people of Noah, \'Ad, Thamud, the people of Lot, Midian, and Pharaoh, each of whom refused to listen until it was too late.',
        'The central message is about the agonizing cost of standing firm on the truth, even when massively outnumbered and surrounded by hostility. It serves as a profound meditation on the loneliness of the prophets and the inevitable, inescapable justice of God against those who persist in corruption.'
    ],

    sections: [
        {
            id: 'quran-and-human-nature',
            title: 'The Revelation and Human Fickleness',
            category: 'Theology',
            verseRange: '1–24',
            subsections: [
                {
                    heading: 'A book with perfected verses',
                    verseRange: '1–8',
                    summary: 'The Quran is a book whose verses are perfected and finely detailed by the Wise and Acquainted God. Its message is simple: worship only God and seek His forgiveness. God guarantees the provision of every living creature on earth.',
                },
                {
                    heading: 'The psychology of ungratitude',
                    verseRange: '9–11',
                    summary: 'Human nature without faith is fickle: total despair in hardship, total arrogance after relief. The Quran teaches that only those who remain patient and do righteous deeds are excluded from this emotional rollercoaster.',
                    faq: {
                        title: 'Why Are Humans Called Ungrateful?',
                        content: 'Verses 9-11 provide a sharp psychological portrait of the human heart when it is disconnected from faith. When hardship strikes, a person without spiritual grounding sinks into total despair, believing that nothing will ever improve. But the moment blessings arrive, the same person flips entirely, becoming boastful and claiming they "earned" the success through their own merit.\n\nThis describes an emotional instability that swings between two unhealthy extremes. The Quran highlights that the only escape from this cycle is through patience during difficulty and genuine gratitude during ease. By connecting to a source of meaning larger than oneself, the believer achieves a psychological steadiness that protects them from both the depression of despair and the blindness of arrogance.'
                    }
                },
                {
                    heading: 'The challenge of ten chapters',
                    verseRange: '12–14',
                    summary: 'The Meccans claimed the Prophet forged the Quran. God challenges them: "Bring ten forged chapters like it, and call upon anyone you can besides God to help you." Their inability to respond is proof of its divine origin.',
                    faq: {
                        title: 'The Escalating Quranic Challenge',
                        content: 'The Quran challenges its critics through a series of escalating dares that progressively lower the bar, making the failure ever more humiliating. In Chapter Hud (11:13), the challenge is to produce just ten chapters. In Chapter Yunus (10:38) and Al-Baqarah (2:23), the bar drops even lower to just one single chapter.\n\nDespite the fact that the pre-Islamic Arabs were considered the undisputed masters of oral poetry and linguistic artistry, not a single person or group was able to produce even the shortest chapter (just three verses) that could match the Quran\'s unique combination of linguistic perfection, legal depth, and prophetic accuracy. This historic failure is presented as one of the strongest logical arguments for the book\'s divine origin, proving that it could not have been the work of a human mind.'
                    }
                },
            ],
        },
        {
            id: 'story-of-noah',
            title: 'Noah and the Great Flood',
            category: 'Stories',
            verseRange: '25–49',
            subsections: [
                {
                    heading: 'The argument with the elite',
                    verseRange: '25–35',
                    summary: 'Noah warned his people, but the wealthy elite rejected him. They refused to follow a religion where they would be equal to the poor, and demanded that Noah expel the lower-class believers before they would consider his message.',
                    faq: {
                        title: 'Why the Elite Rejected Noah',
                        content: 'The primary reason the wealthy elite of Noah\'s society rejected his message was not a genuine theological objection, but a deeply rooted class prejudice. Noah\'s earliest and most devoted followers were the poorest, most marginalized members of their community, people whom the rich viewed as beneath them.\n\nThe elite were horrified at the idea of a religion that would place them on equal footing with their own laborers and servants. They went so far as to make a conditional offer: they would consider the message only if Noah first drove away the poor believers. Noah flatly refused this demand, establishing a permanent prophetic principle that the truth is never adjusted to accommodate the pride of the powerful. This dynamic of class-based rejection of truth repeats itself in every prophetic story in the Quran.'
                    }
                },
                {
                    heading: 'The drowning of Noah\'s son',
                    verseRange: '40–49',
                    summary: 'As the Ark sailed through waves like mountains, Noah called to his son to come aboard. His son replied that he would take refuge on a mountain. A wave came between them, and the son drowned. When Noah grieved, God firmly told him: "He is not of your family. His conduct was unrighteous."',
                    faq: {
                        title: 'Spiritual Bonds Over Blood Bonds',
                        content: 'This scene is one of the most emotionally devastating in the entire Quran. Noah, a prophet of God, watches his own son drown and instinctively calls out to God, reminding Him that "my son is of my family, and Your promise is true." God\'s response is immediate and firm: "O Noah, he is not of your family."\n\nThis establishes a foundational principle in Islamic theology: the deepest bond between human beings is faith, not biology. A son who openly rejects God and sides with the enemies of truth has severed the spiritual tie that would have connected him to his father in the eternal afterlife. It teaches that on the Day of Judgment, family lineage and tribal connections will mean nothing. The only "family" that will matter is the community of sincere believers who chose truth over comfort.'
                    }
                },
            ],
        },
        {
            id: 'ad-thamud',
            title: 'The Destruction of \'Ad and Thamud',
            category: 'Stories',
            verseRange: '50–68',
            subsections: [
                {
                    heading: 'Hud and the mighty \'Ad',
                    verseRange: '50–60',
                    summary: 'The prophet Hud was sent to the powerful civilization of \'Ad. Despite his plea for them to repent and receive abundant blessings, they accused him of being struck with madness by their own gods. Hud declared his absolute trust in God, and the entire nation was erased from earth.',
                },
                {
                    heading: 'Salih and the doomed she-camel',
                    verseRange: '61–68',
                    summary: 'The prophet Salih presented a miraculous she-camel as a divine sign to the people of Thamud. Despite being warned, they cruelly killed the animal. Salih gave them a three-day countdown before a devastating blast wiped them from their homes.',
                    faq: {
                        title: 'The Three-Day Countdown',
                        content: 'After the people of Thamud slaughtered the miraculous she-camel (a sign they had themselves requested from God as proof), Prophet Salih delivered an unforgettable warning: "Enjoy yourselves in your homes for three days. That is a promise that will not be denied."\n\nThis three-day grace period served multiple purposes in the divine plan. It gave the people a final window to repent, though their arrogance prevented them from doing so. It also built an unbearable atmosphere of psychological dread, as every passing hour confirmed that the Prophet\'s word was about to come true. When the terrifying blast finally struck on the third day, there was no excuse left for anyone: they had been given clear knowledge of the exact timeline, a level of transparency in divine punishment that is almost unmatched in the Quran.'
                    }
                },
            ],
        },
        {
            id: 'abraham-and-lot',
            title: 'Abraham, Lot, and the Angels',
            category: 'Stories',
            verseRange: '69–83',
            subsections: [
                {
                    heading: 'Abraham receives glad tidings',
                    verseRange: '69–76',
                    summary: 'Angels visited Abraham in human form. When they refused his food, he became afraid. They revealed they had come to destroy the people of Lot. Abraham, known for his empathy, tried to argue with the angels to spare the city, but was told the decree could not be repelled.',
                },
                {
                    heading: 'The destruction of Lot\'s city',
                    verseRange: '77–83',
                    summary: 'The angels arrived at Lot\'s house in the form of handsome men. The corrupt men of the city rushed to the door to demand them. The angels revealed their identity and told Lot to leave with his family at night. At sunrise, God turned the city upside down and rained stones upon it.',
                    faq: {
                        title: 'What Was Lot\'s Offer?',
                        content: 'When the violent mob of the city surrounded Lot\'s house demanding his guests, the Quran records Lot as saying: "These are my daughters," urging the men toward lawful marriage rather than criminal assault. Classical scholars explain that a prophet is considered a spiritual "father" to his entire nation, so "my daughters" refers to the women of the city in general.\n\nLot was not literally offering his own daughters to a mob; rather, he was desperately trying to redirect the men toward legally and morally permissible relationships. His plea highlights the severity of the situation: a prophet reduced to begging his own people to choose basic human decency. The fact that they ignored even this final offer confirmed that the city had passed the point of no return.'
                    }
                },
            ],
        },
        {
            id: 'shuayb-midian',
            title: 'Shu\'ayb and the Crime of Financial Fraud',
            category: 'Stories',
            verseRange: '84–95',
            subsections: [
                {
                    heading: 'The prophet of economic justice',
                    verseRange: '84–86',
                    summary: '"Give full measure and weight, and do not defraud people of their goods." Shu\'ayb confronted the systemic financial corruption of Midian, proving that God considers economic injustice to be as severe as idol worship.',
                    faq: {
                        title: 'When Business Becomes a Sin',
                        content: 'The story of Prophet Shu\'ayb is unique among the prophetic narratives because his primary mission was not about combating idolatry or polytheism, but about confronting systemic financial crime. The people of Midian had built their entire economy on a foundation of rigged scales, shortchanged customers, and monopolistic practices that extracted wealth from the vulnerable.\n\nThe Quran treats their destruction with the same severity as the destruction of overt idol-worshipping nations, establishing a critical theological principle: that economic injustice is not a "minor" or "secular" sin. It is a profound violation of the trust God places in humans to deal with each other fairly. The message for modern readers is clear: a society that is religiously devout in its rituals but systematically corrupt in its commerce is no safer from divine consequence than an openly pagan one.'
                    }
                },
                {
                    heading: 'Midian mirrors Thamud',
                    verseRange: '87–95',
                    summary: 'The people mocked Shu\'ayb, sarcastically asking if his "prayer" was why they should change their business practices. When the divine command came, a terrifying blast destroyed them, just as it had destroyed Thamud before them.',
                },
            ],
        },
        {
            id: 'lessons-and-firmness',
            title: 'Standing Firm on the Straight Path',
            category: 'Guidance',
            verseRange: '96–123',
            subsections: [
                {
                    heading: 'Pharaoh leads his people to the Fire',
                    verseRange: '96–99',
                    summary: 'Because Pharaoh led his people into arrogance in this world, he will physically lead them down into the Fire on the Day of Resurrection. A leader who corrupts his people shares in every single sin they commit.',
                },
                {
                    heading: 'Why does God destroy cities?',
                    verseRange: '116–119',
                    summary: '"God would never destroy a city completely if its people were busy reforming it." The key word is "reforming" (Muslihoon): a society where people are personally good but ignore systemic injustice is still at risk.',
                    faq: {
                        title: 'The Rule of Active Reform',
                        content: 'Verse 11:117 is one of the most important sociological statements in the entire Quran. It declares that God would never bring total destruction upon a community that is actively working to reform itself and correct its mistakes. The emphasis is on the word "Muslihoon" (reformers), which is distinct from "Salihoon" (personally righteous).\n\nThis is a critical distinction: it is not enough for individuals to simply be "good people" in their private lives while systemic injustice festers around them. God protects societies where there is an active effort to fight corruption, promote justice, and correct wrongdoing. A city of silent bystanders, no matter how personally devout, is not guaranteed protection. This verse is a direct call to civic engagement and social responsibility, teaching that passive righteousness in the face of widespread evil is a form of complicity.'
                    }
                },
                {
                    heading: 'The hardest command in the Quran',
                    verseRange: '112–115',
                    summary: '"So remain on a right course as you have been commanded." This single verse is reportedly the primary reason the Prophet said this chapter turned his hair gray: the weight of being commanded to maintain absolute consistency in righteousness, without deviation, for an entire lifetime.',
                },
            ],
        },
    ],

    facts: [
        {
            icon: 'eye',
            title: 'The Chapter That Turned Hair Gray',
            description: 'The Prophet Muhammad said that Chapter Hud and its sister chapters caused his hair to turn gray, largely because of the command in verse 112: "So remain on a right course exactly as you have been commanded."'
        },
        {
            icon: 'shield',
            title: 'Faith Over Blood',
            description: 'The story of Noah\'s son drowning establishes that spiritual bonds supersede biological ones. In the eyes of God, the only "family" that matters for eternity is the community of sincere believers.'
        },
        {
            icon: 'book',
            title: 'The Sliding Challenge',
            description: 'Verse 13 features the Quran challenging the Arabs to produce ten forged chapters. In other chapters, the challenge drops to just one, proving the impossibility of replicating even the shortest passage.'
        },
        {
            icon: 'moon',
            title: 'Financial Crime Equals Destruction',
            description: 'The story of Shu\'ayb shows that systematic financial corruption (rigging scales, cheating customers) is treated with the same divine severity as outright idol worship.'
        },
        {
            icon: 'conversation',
            title: 'Abraham Pleads for Mercy',
            description: 'Abraham\'s attempt to negotiate with the angels to spare Lot\'s people reveals his extraordinary level of empathy, trying to save a corrupt city purely out of his own compassionate nature.'
        }
    ],

    closingVerse: {
        arabic: 'وَلِلَّهِ غَيْبُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَإِلَيْهِ يُرْجَعُ ٱلْأَمْرُ كُلُّهُۥ فَٱعْبُدْهُ وَتَوَكَّلْ عَلَيْهِ ۚ وَمَا رَبُّكَ بِغَـٰفِلٍ عَمَّا تَعْمَلُونَ',
        translation: '"To God belongs the unseen of the heavens and the earth, and to Him all matters will be returned. So worship Him and rely upon Him."',
        reference: '- Hud 11:123'
    }
};

export default SURAH_11_PAGE;
