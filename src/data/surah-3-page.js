/**
 * Chapter Aal-E-Imran - Page Data
 * Content, accordion sections, and facts for the Chapter page
 */

const SURAH_3_PAGE = {
    meta: {
        number: 3,
        name: 'Aal-E-Imran',
        arabicName: 'سُورَةُ آلِ عِمْرَان',
        meaning: 'Family of Imran',
        type: 'Madinan',
        verses: 200,
        juz: '3-4',
        color: '#0f4f0f',
    },

    intro: [
        'Aal-E-Imran is the third chapter of the Quran, named after the family of Imran, the household that produced Maryam (Mary) and Isa (Jesus). It is a deeply personal and spiritual chapter focused on maintaining firm faith during times of intense trial and intellectual debate.',
        'Much of this chapter was revealed after the Battle of Uhud, a painful military setback for the early Muslim community. The text serves as a divine debriefing, processing the loss, explaining why God allows believers to face defeat, and providing the spiritual tools needed to rebuild resilience.',
        'If Chapter 2 (Al-Baqarah) provides the legislative blueprint for a new society, Chapter 3 (Aal-E-Imran) provides the psychological and spiritual foundation to keep that community united. The Prophet Muhammad described these two chapters as "the two bright ones" that will act as protective clouds for their reciters on the Day of Judgment.'
    ],

    sections: [
        {
            id: 'faith-foundation',
            title: 'God, Revelation, and the Clear Truth',
            category: 'Beliefs',
            verseRange: '1-32',
            subsections: [
                {
                    heading: 'The living, the self-Sustaining',
                    verseRange: '1-6',
                    summary: '"God. There is no god except Him, the Living, the Self-Sustaining." He sent down the Book in truth, confirming what came before it, the Torah and the Gospel. He is the one who shapes you in the womb however He wants. Nothing in the heavens or earth is hidden from Him.',
                },
                {
                    heading: 'Clear verses and unclear verses',
                    verseRange: '7-9',
                    summary: '"Some of its verses are clear and decisive. They are the foundation of the Book. Others are not entirely clear." People with sickness in their hearts chase the unclear verses to cause confusion. But only God knows their full meaning. The wise say: "We believe in it. It is all from our Lord."',
                    faq: {
                        title: 'Why Does the Quran Have Unclear Verses?',
                        content: 'Scholars explain that the presence of "unclear" (mutashabih) verses serves as a profound test of a believer’s intellectual humility and trust in God. While the vast majority of the Quran consists of "clear" (muhkam) foundational laws, these more complex verses prevent humans from becoming arrogant about their own understanding of the Divine.\n\nThey also provide layers of meaning that can unfold differently as human knowledge and language evolve over centuries. The Quran warns that those who seek to cause division will focus exclusively on these ambiguous passages to support their own agendas. In contrast, those grounded in knowledge accept that the entire book is from their Lord, recognizing that human intellect has natural limits.'
                    }
                },
                {
                    heading: 'Wealth and Children will not save you',
                    verseRange: '10-13',
                    summary: '"Those who disbelieve, their wealth and their children will never protect them from God at all." They are fuel for the Fire. God gives a lesson from Badr: one group fights in God\'s cause, the other rejects Him. God saw both armies, and He supported the believers even though they were outnumbered.',
                    faq: {
                        title: 'The Miracle of Badr',
                        content: 'The Battle of Badr was the first major military encounter in Islamic history, where a small, ill-equipped group of 313 Muslims faced a professional army of over 1,000 soldiers from Makkah. Despite the overwhelming odds, God sent thousands of angels to stand in the ranks and strengthen the hearts of the believers.\n\nThis victory was not just a military win but a spiritual proof that divine support is more decisive than material numbers. This chapter references Badr to remind the community that when they were sincere and united, God granted them the impossible. It serves as a permanent encouragement that as long as a group remains faithful to their principles, they are never truly alone in their struggles.'
                    }
                },
                {
                    heading: 'People love worldly pleasures',
                    verseRange: '14-18',
                    summary: '"Made attractive to people is the love of things they desire: family, wealth, and status symbols." These are the pleasures of this world. But what is with God is far better. Then a powerful declaration: "God bears witness that there is no god but Him, and so do the angels and the people of knowledge."',
                    faq: {
                        title: 'The Psychology of Desire',
                        content: 'God explicitly states that worldly things like wealth, family, and fine property are "made attractive" to the human soul, acknowledging that these desires are natural and not inherently evil. The danger lies in allowing these temporary attractions to become our ultimate purpose rather than seeing them as tools for a higher mission.\n\nThe verse lists these pleasures in order of their typical impact on human behavior, from the intimacy of family to the accumulation of gold and land. By recognizing these as "enjoyments of deception," a believer is taught to keep their heart attached to the Creator while their hands manage the material world. True success is defined not by what we possess here, but by the "beautiful destination" that awaits the God-conscious.'
                    }
                },
            ],
        },
        {
            id: 'maryam-isa',
            title: 'The Story of Maryam and Isa (Jesus)',
            category: 'Stories',
            verseRange: '33-63',
            subsections: [
                {
                    heading: 'God chose this family above all',
                    verseRange: '33-37',
                    summary: '"God chose Adam, Nuh, the family of Ibrahim, and the family of Imran above all people." Maryam\'s mother dedicates her unborn child to God\'s service. When she gives birth to a girl, she names her Maryam and asks God to protect her. Zakariya becomes her guardian, and every time he visits her, he finds her with food.',
                    faq: {
                        title: 'Who Was the Family of Imran?',
                        content: 'The "Family of Imran" refers to the noble household that produced Maryam (Mary) and her son Isa (Jesus), as well as the family of Zakariya and Yahya (John the Baptist). The chapter is named after them to highlight that chosen status is not a matter of tribal privilege but of consistent devotion and moral integrity.\n\nMaryam’s mother made a sincere vow to dedicate her child to the service of the Temple, and though she was surprised to have a girl, God accepted her offering "beautifully." This narrative establishes Maryam as a spiritual giant long before the birth of Jesus, showing how God provides for those who dedicate themselves to His service. Her life serves as the ultimate example of how sincere intention can change the course of history.'
                    }
                },
                {
                    heading: 'Zakariya prays for a son',
                    verseRange: '38-41',
                    summary: 'Seeing how God provides for Maryam, Zakariya is inspired to ask for a child of his own, even though he is very old. "My Lord, give me good offspring." Angels call him while he is praying: "God gives you good news of Yahya." He asks for a sign, and God grants him three days of silence.',
                },
                {
                    heading: 'Maryam and the miraculous birth',
                    verseRange: '42-51',
                    summary: '"O Maryam, God has chosen you and purified you and chosen you above the women of all the worlds." Angels tell her she will have a son named Isa (Jesus), the Messiah, without a father. She asks: "How can I have a child when no man has touched me?" God says: "When He decides something, He says Be, and it is."',
                    faq: {
                        title: 'Jesus in the Quran',
                        content: 'In Islam, Isa (Jesus) is honored as one of the "Arch-Prophets" (Ulul Azm) of great determination, born miraculously to the Virgin Maryam without a father. He was endowed with extraordinary miracles by God’s permission, such as healing the blind, curing leprosy, and even raising the dead to life.\n\nHowever, the Quran is firm in stating that despite these miracles, Jesus is a created human being and a messenger, not a god or the son of God. His relationship to the Creator is defined by absolute submission and service, just like the prophets before him. Muslims believe he was given the Gospel (Injeel) to guide the Children of Israel back to the pure Oneness of God.'
                    }
                },
                {
                    heading: 'Jesus is like Adam',
                    verseRange: '52-63',
                    summary: '"The example of Isa in God\'s sight is like Adam. He created him from dust, then said to him: Be! And he was." This is the Quran\'s clearest argument: if being born without a father makes Isa divine, then Adam should be even more divine because he had no father and no mother.',
                },
            ],
        },
        {
            id: 'interfaith',
            title: 'Dialogue and Common Ground',
            category: 'Theology',
            verseRange: '64-101',
            subsections: [
                {
                    heading: '"Come to a word that is common between us"',
                    verseRange: '64-68',
                    summary: '"Say: O People of the Book, come to a word that is equal between us and you, that we worship none but God." This is the Quran\'s invitation for common ground. Ibrahim was not Jewish or Christian. He was a man who submitted to God before those labels existed.',
                    faq: {
                        title: 'The Foundation of Dialogue',
                        content: 'Verse 3:64 is famously known as the "Common Word" verse, providing the primary Islamic framework for interfaith dialogue and cooperation. It calls for refocusing on the core principle shared by Jews, Christians, and Muslims: the absolute Oneness of God and the rejection of all false idols.\n\nThe Prophet Muhammad famously included this specific verse in his diplomatic letters to heads of state, inviting them to find unity in their shared theological heritage. Rather than focusing on sectarian differences, the Quran encourages believers to find the highest common denominator of truth. This approach emphasizes that true religion is about the heart’s submission to the Creator rather than just tribal or political labels.'
                    }
                },
                {
                    heading: 'Every Prophet carried the same covenant',
                    verseRange: '69-92',
                    summary: '"God took a covenant from every prophet: I have given you a Book and wisdom. Then a messenger will come confirming what you have. You must believe in him and support him." Whoever seeks a religion other than submission to God, it will never be accepted from them.',
                    faq: {
                        title: 'Spending from What You Love',
                        content: 'Verse 3:92 states: "You will never reach true goodness until you spend from what you love." This teaching shifts the focus of charity from the act of giving to the quality of the sacrifice being made by the giver.\n\nIt is easy to donate items we no longer need, but the Quran challenges believers to give away the very things they cherish most, whether it be their wealth, their time, or their comforts. This practice is designed to break the soul’s unhealthy attachment to the material world and prove the sincerity of one’s faith. Many of the Prophet’s companions immediately donated their most valuable lands and properties upon hearing this verse, setting a standard for proactive generosity.'
                    }
                },
                {
                    heading: 'The first house of worship',
                    verseRange: '93-101',
                    summary: '"The first house established for people was the one at Makkah, blessed and a guidance for the worlds." Hajj to this house is an obligation for whoever can make the journey. Hold firmly to the rope of God, all together, and do not be divided.',
                    faq: {
                        title: 'The "Rope of God"',
                        content: 'The powerful metaphor of holding "firmly to the rope of God" in verse 3:103 is a call for communal unity and stability. Scholars describe this "rope" as the Quran and the shared way of life that connects the individual directly to the Divine Presence.\n\nThis command was revealed to a community that had been divided by over a century of tribal warfare and deep-seated animosity before find peace in faith. By holding the same rope, a group ensures that they do not drift apart during times of crisis or fall into the "pit of fire" of internal conflict. It serves as a permanent reminder that the strength of the community is found in its connection to its spiritual source rather than its political power.'
                    }
                },
            ],
        },
        {
            id: 'best-community',
            title: 'The Best Community',
            category: 'Character',
            verseRange: '102-120',
            subsections: [
                {
                    heading: 'You are the best community raised for humanity',
                    verseRange: '102-120',
                    summary: '"You are the best community ever raised for humanity. You command what is right, forbid what is wrong, and believe in God." This title is not a free pass. It comes with a job description: command what is right, forbid what is wrong, and believe in God.',
                    faq: {
                        title: 'Responsibility of the Best Community',
                        content: 'Being called the "best community" in verse 3:110 is not a statement of inherent ethnic or religious superiority, but a conditional title based on proactive social responsibility. The community is only "best" as long as it actively works to promote justice (commanding right) and prevent oppression (forbidding wrong).\n\nIf the community abandons these duties and becomes self-centered, it forfeits the very qualities that made it special in the first place. Early leaders like Umar ibn al-Khattab would warn people that this verse is a heavy weight that requires constant action rather than just a badge of honor. It teaches that the value of a society is measured by its contribution to the well-being of all of humanity.'
                    }
                },
            ],
        },
        {
            id: 'uhud',
            title: 'The Battle of Uhud: Lessons from Defeat',
            category: 'Stories',
            verseRange: '121-175',
            subsections: [
                {
                    heading: 'The archers on the hill',
                    verseRange: '121-138',
                    summary: '"Remember when you left your family in the morning to position the believers for battle." The Prophet placed fifty archers on a hill with clear orders: do not leave this spot. Most of them left, and the battle turned into a disaster.',
                    faq: {
                        title: 'The Crisis at Uhud',
                        content: 'The Battle of Uhud serves as one of the most significant lessons in the history of the early community, emphasizing that military strength means nothing without discipline and obedience. Despite an initial advantage, the loss of focus by the archers allowed the enemy cavalry to circle around and cause a devastating defeat.\n\nSeventy of the Prophet’s closest companions were killed, including his beloved uncle Hamza, and the community was left in a state of profound shock and grief. This chapter uses the event to teach that God does not grant victory based on religious identity alone, but on a combination of faith and strict adherence to strategic orders. It highlights that even the most righteous group can face failure if they allow worldly greed to cloud their judgment.'
                    }
                },
                {
                    heading: 'God rotates victory to test who is real',
                    verseRange: '139-148',
                    summary: '"Do not weaken and do not grieve. You will be superior if you are truly believers." God alternates these days among people so that He may know who truly believes and purify the believers.',
                    faq: {
                        title: 'Why Does God Allow Defeat?',
                        content: 'After the miraculous victory at Badr, many Muslims expected that faith would guarantee an unbroken string of successes. The defeat at Uhud shattered this misconception, with God explaining that He "alternates these days among people" to reveal the true character of individuals.\n\nVictories often attract people looking for easy rewards, but defeats serve to "purify" the community by exposing who is truly committed to the message versus who is only there for the spoils. Hardship acts as a filter that separates the sincere from the hypocritical, ensuring that the foundation of the faith is built on those who can survive a storm. This teaching transforms suffering from a sign of God’s anger into a tool for spiritual and communal growth.'
                    }
                },
                {
                    heading: 'Muhammad is a Messenger, not immortal',
                    verseRange: '149-168',
                    summary: '"Muhammad is only a messenger. Other messengers have passed away before him. If he dies or is killed, would you turn back on your heels?" When a rumor spread at Uhud that he had been killed, many panicked. This verse corrected them.',
                    faq: {
                        title: 'The Rumor of Death',
                        content: 'During the most chaotic moment of the Battle of Uhud, a false rumor spread that the Prophet Muhammad had been killed, causing many of the believers to lose their will to fight. Some sat down in despair, while others even considered returning to their old ways, thinking the mission had ended.\n\nVerse 3:144 was revealed to shock the community back into focus, reminding them that their faith must be in the Message of the Creator, not the person of the messenger. It taught them that truth is eternal and does not depend on the physical presence of any single leader, even one as beloved as the Prophet. This psychological shift prepared the community for the eventual passing of the Prophet years later, ensuring the movement would survive him.'
                    }
                },
                {
                    heading: 'Those who died at Uhud are not dead',
                    verseRange: '169-175',
                    summary: '"Do not think of those who were killed in God\'s cause as dead. They are alive with their Lord, provided for." They are happy with what God has given them. They rejoice in God\'s favor.',
                    faq: {
                        title: 'The Status of the Martyr',
                        content: 'To console those who had lost fathers, sons, and brothers at Uhud, God revealed that those killed in His cause are not "dead" in the way humans understand it. Instead, they are described as being fully "alive with their Lord," enjoying spiritual provisions and a level of peace that surpasses all worldly imagination.\n\nThey are depicted as observing those still living on earth, rejoicing in the fact that their families will eventually join them in a place where there is "no fear and no grief." This belief fundamentally changed the Muslim concept of death, transforming it from a terrifying end into a transition to a higher state of existence. It provided the community with the immense courage needed to stand for justice, knowing that the ultimate reward is immediate and divine.'
                    }
                },
            ],
        },
        {
            id: 'death-signs',
            title: 'Reflecting on Creation',
            category: 'Theology',
            verseRange: '176-200',
            subsections: [
                {
                    heading: 'Every soul will taste death',
                    verseRange: '176-189',
                    summary: '"Every soul will taste death, and you will only receive your full reward on the Day of Judgment." Whoever is pulled away from the Fire and admitted to Paradise has won.',
                    faq: {
                        title: 'The Taste of Passing',
                        content: 'The use of the word "taste" (dha’iqa) in verse 3:185 suggests that death is a brief, momentary experience rather than a final extinction of the self. Just as a taste is temporary and leads to a much larger meal, death is the brief transition that leads to the eternal life of the hereafter.\n\nThis verse is frequently recited at funerals to remind people that the real "win" in life is not wealth or fame, but being successfully "pulled away from the Fire" at the moment of reckoning. It framing worldly life as nothing more than a "deceptive enjoyment," encouraging believers to invest their efforts in what lasts. By internalizing this perspective, a person can remain calm during the ups and downs of life, focusing on the ultimate destination.'
                    }
                },
                {
                    heading: 'Signs for people of understanding',
                    verseRange: '190-200',
                    summary: '"In the creation of the heavens and earth are signs for people of understanding." These are the people who remember God standing, sitting, and lying down. They say: "Our Lord, You did not create this without purpose."',
                    faq: {
                        title: 'The Prophet’s Night Reflection',
                        content: 'The final ten verses of Aal-E-Imran were the favorite verses of the Prophet Muhammad for night reflection, which he would recite immediately upon waking for prayer. He would look up at the stars and contemplate the vastness of the heavens, moved to tears by the realization of God’s perfect design.\n\nHe once remarked, "Woe to the one who recites these verses and does not reflect upon them," urging his followers to see the natural world as a giant open book of signs. These verses call for a faith that is grounded in intellectual observation and deep emotional wonder, rather than blind following. They define the "people of understanding" as those whose scientific observation of nature leads them directly to a spiritual conversation with their Creator.'
                    }
                },
            ],
        },
    ],

    facts: [
        {
            icon: 'cloud',
            title: 'The Cloud of Protection',
            description: 'The Prophet described Chapter Aal-E-Imran as a protective cloud that will shade its frequent reciters on the Day of Judgment, providing comfort when others are in distress.'
        },
        {
            icon: 'shield',
            title: 'Divine Debriefing',
            description: 'This chapter contains the most extensive analysis of the Battle of Uhud, providing a spiritual and psychological blueprint for how a community can recover from a painful defeat.'
        },
        {
            icon: 'star',
            title: 'The Most Detailed Narrative',
            description: 'It provides the most detailed account of the birth and mission of Maryam and Isa (Jesus) in the Quran, honoring their legacy with profound depth and reverence.'
        },
        {
            icon: 'book',
            title: 'Foundation of Dialogue',
            description: 'The "Common Word" verse (3:64) originates here, serving as the historical and theological foundation for all interfaith dialogue between Muslims, Christians, and Jews.'
        },
        {
            icon: 'eye',
            title: 'A Nightly Ritual',
            description: 'The final ten verses were the specific verses the Prophet Muhammad would recite every single night upon waking, using them to ground his soul in the signs of creation.'
        }
    ],

    closingVerse: {
        arabic: 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا ٱصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَٱتَّقُوا ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ',
        translation: '"O you who believe, be patient, endure, remain stationed, and be conscious of God, so that you may succeed."',
        reference: '- Aal-E-Imran 3:200',
    },
};

export default SURAH_3_PAGE;
