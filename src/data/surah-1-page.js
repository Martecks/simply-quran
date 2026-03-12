/**
 * Chapter Al-Fatiha - Page Data
 * Content, accordion sections, and facts for the Chapter page
 */

const SURAH_1_PAGE = {
    meta: {
        number: 1,
        name: 'Al-Fatiha',
        arabicName: 'سُورَةُ الفَاتِحَة',
        meaning: 'The Opening',
        type: 'Makkan',
        verses: 7,
        juz: '1',
        color: '#d4a832',
    },

    intro: [
        'Al-Fatiha is the first chapter of the Quran, and it is the most recited passage in the world. Muslims say it at least 17 times a day in their five daily prayers.',
        'Think of it as the Quran\'s opening statement. In just 7 verses, it captures everything: who God is, what our relationship with Him looks like, and the one thing we should ask for above all else, which is guidance.',
        'The Prophet said nothing like it was ever revealed in the Torah, the Gospel, or the Psalms. It is unique to this community and called "Umm al-Kitab," the Mother of the Book.'
    ],

    sections: [
        {
            id: 'praise',
            title: 'Praising God and His Names',
            category: 'Theology',
            verseRange: '1-4',
            subsections: [
                {
                    heading: 'Starting with God\'s Name',
                    verseRange: '1',
                    summary: 'Everything begins with "In the name of God, the Most Gracious, the Most Merciful." Before any rules or commands, mercy comes first. This sets the tone for the entire Quran.',
                    faq: {
                        title: 'Why Does the Quran Start with Mercy?',
                        content: 'The Prophet explained that God has 99 names, and among the most prominent are Al-Rahman and Al-Rahim, which both emphasize His infinite compassion. He also shared that God\'s mercy actually overcomes His anger, signifying that grace is His fundamental posture toward creation.\n\nBy opening the Quran with these names, the text is declaring from the very first word that God is on your side. His default setting toward you is one of benevolence and forgiveness rather than punishment. This choice of opening sets a hopeful and nurturing tone for every message that follows in the subsequent chapters.'
                    }
                },
                {
                    heading: 'All praise belongs to God',
                    verseRange: '2',
                    summary: 'God is called "Rabb," which does not just mean Creator. It means the One who sustains, raises, and guides everything to where it needs to be. He is Lord of all worlds, not just ours.',
                    faq: {
                        title: 'What Does "Rabb" Actually Mean?',
                        content: 'The Arabic word "Rabb" is often translated simply as "Lord," but this English term fails to capture its profound depth. A Rabb is someone who creates something, owns it completely, and then meticulously nurtures it through every stage of its growth until it reaches its full potential.\n\nThink of how a master gardener plants a seed and then water, protects, and guides it until it becomes a magnificent tree. God performs this role on a cosmic scale for every single atom and soul in existence. This encompasses everything from the mechanical laws of physics to the spiritual evolution of the human heart, ensuring that all worlds are sustained by His constant care.'
                    }
                },
                {
                    heading: 'Mercy mentioned again',
                    verseRange: '3',
                    summary: 'God\'s mercy is repeated a second time right here. Before He mentions judgment or consequences, He mentions mercy twice in a row. That is not an accident. It is the defining quality He wants you to know about Him.'
                },
                {
                    heading: 'Master of Judgment Day',
                    verseRange: '4',
                    summary: 'After all that mercy, there is a reality check: there will be a Day when every action is weighed. This creates balance. You have hope in His mercy, but you also know that your choices matter.'
                }
            ]
        },
        {
            id: 'covenant',
            title: 'Speaking Directly to God',
            category: 'Guidance',
            verseRange: '5',
            subsections: [
                {
                    heading: 'You alone we worship',
                    verseRange: '5',
                    summary: '"You alone we worship, and You alone we ask for help." The word "You" comes before the verb on purpose. It means: only You, no one else. This verse is the agreement between you and God, renewed every single prayer.',
                    faq: {
                        title: 'The Conversation in Al-Fatiha',
                        content: 'In a famous prophetic tradition known as a hadith qudsi, God states that He has divided Al-Fatiha into two halves: one for Himself and one for His servant. When you recite "All praise is for God," God actually responds by saying, "My servant has praised Me."\n\nThis reveals that prayer is not a one-sided monologue but a real, interactive conversation with the Divine. When you reach the second half and ask for guidance, God responds by promising that His servant shall have exactly what they asked for. This intimacy transforms the ritual of prayer into a profound personal encounter that is renewed multiple times every single day.'
                    }
                }
            ]
        },
        {
            id: 'guidance',
            title: 'The Prayer for Guidance',
            category: 'Guidance',
            verseRange: '6-7',
            subsections: [
                {
                    heading: 'Guide us to the straight path',
                    verseRange: '6',
                    summary: 'This is the most important prayer in Islam. You do not ask for it once. You ask in every prayer, every single day. That is because guidance is not a one-time thing. You need it in every moment and every decision you make.',
                    faq: {
                        title: 'Why Do You Need to Ask for Guidance Every Day?',
                        content: 'Guidance is often misunderstood as a simple yes-or-no state, but in Islamic theology, it is viewed as a continuous process with infinite levels. You may have the guidance to find the truth, but you still need the guidance to understand it deeply and the strength to live by it consistently.\n\nEven the Prophet himself, who was the most guided human being, was commanded to recite this prayer at least 17 times every day. This teaches us that we can be strong in one moment and weak in the next, or wise in one area of life but lost in another. By asking for the "straight path" repeatedly, we are seeking constant divine recalibration for our hearts and minds.'
                    }
                },
                {
                    heading: 'Three types of People',
                    verseRange: '7',
                    summary: 'The chapter ends by showing three paths: the people God blessed, those who rejected the truth, and those who wandered away. When you ask for guidance, you are specifically asking to be kept on the first path and away from the other two.',
                    faq: {
                        title: 'Who Are the Three Groups?',
                        content: 'The "blessed" group refers to the prophets, the truthful, the martyrs, and the righteous who followed the light they were given. The second group refers to those who recognized the truth but willfully turned against it due to pride or worldly gain, thus earning divine displeasure.\n\nThe third group represents those who wandered away from the truth simply because they lacked knowledge or were led astray by their own whims. Every time you recite Al-Fatiha, you are making a conscious choice to align your life with the first group. You are asking for the clarity to avoid the traps of stubborn rejection and the confusion of aimless wandering.'
                    }
                }
            ]
        }
    ],

    facts: [
        {
            icon: 'conversation',
            title: 'A Conversation with God',
            description: 'In a hadith qudsi, God says He divided Al-Fatiha into two halves. When you recite it, God actually responds to each verse you utter, creating a direct dialogue with the Divine.'
        },
        {
            icon: 'star',
            title: 'Recited 17 Times Daily',
            description: 'Muslims recite Al-Fatiha in every unit of the five daily prayers. No other passage in any world scripture is repeated this frequently by its followers as a mandatory act of worship.'
        },
        {
            icon: 'crown',
            title: 'The Greatest Chapter',
            description: 'The Prophet Muhammad described Al-Fatiha as the greatest chapter in the entire Quran. It is uniquely called "The Mother of the Book" because it contains all the core themes of the revelation.'
        },
        {
            icon: 'shield',
            title: 'Spiritual Healing',
            description: 'Al-Fatiha is also known as "Ash-Shifa" (The Cure). It has been used since the time of the Prophet as a source of spiritual remedy and protection for both the mind and the heart.'
        },
        {
            icon: 'book',
            title: 'Over a Dozen Names',
            description: 'This chapter carries many titles, including "The Seven Oft-Repeated Verses" and "The Opening." Each of its names reflects a different dimension of its power and primary role in a believer\'s life.'
        }
    ],

    closingVerse: {
        arabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        translation: '"Guide us to the straight path."',
        reference: '- Al-Fatiha 1:6'
    }
};

export default SURAH_1_PAGE;
