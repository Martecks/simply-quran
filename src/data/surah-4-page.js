/**
 * Chapter An-Nisa - Page Data
 * Content, accordion sections, and facts for the Chapter page
 */

const SURAH_4_PAGE = {
    meta: {
        number: 4,
        name: 'An-Nisa',
        arabicName: 'سُورَةُ النِّسَاء',
        meaning: 'The Women',
        type: 'Madinan',
        verses: 176,
        juz: '4-6',
        color: '#6b5a48',
    },

    intro: [
        'An-Nisa is one of the longest chapters in the Quran and acts as a comprehensive social and legal framework for the early Muslim community. It is named "The Women" because it introduced revolutionary rights for women that were essentially non-existent in the pre-Islamic world.',
        'Revealed in Madinah primarily after the Battle of Uhud, the chapter addresses the urgent societal needs created by the loss of seventy Muslim men. It provides detailed guidance on the protection of widows and orphans, inheritance laws, and the ethical management of family and communal life.',
        'Beyond its legal focus, An-Nisa also explores deep theological themes, including the nature of justice, the dangers of hypocrisy, and the true status of Jesus within the hierarchy of prophets. Its most famous declaration, "Stand firm for justice even against yourselves," remains a global standard for ethical governance.'
    ],

    sections: [
        {
            id: 'orphans-family',
            title: 'Humanity, Orphans, and inheritance',
            category: 'Rules',
            verseRange: '1-14',
            subsections: [
                {
                    heading: 'All humans come from one soul',
                    verseRange: '1',
                    summary: '"O people, be conscious of your Lord who created you from a single soul, and from it created its mate." The chapter opens with a powerful statement of universal equality, reminding humanity that every person on earth sharing the same origin regardless of race, class, or gender.',
                },
                {
                    heading: 'The protection of orphans',
                    verseRange: '2-6',
                    summary: '"Give orphans their property. Do not replace their good things with your bad ones." It warns against consuming the wealth of orphans and set strict conditions for marriage to ensure no one exploits the vulnerable. Test orphans as they mature and return their wealth when they are ready.',
                    faq: {
                        title: 'Why Does This Chapter Focus on Orphans?',
                        content: 'The intense focus on orphans in An-Nisa was a direct response to the social crisis following the Battle of Uhud, where many women were widowed and children orphaned. In pre-Islamic society, guardians often exploited these children, consuming their inheritance and marrying orphan girls simply to gain control over their assets.\n\nThese verses established a new legal standard where the mistreatment of an orphan’s wealth was considered a "great sin" and a path to destruction. God prioritized the rights of the most vulnerable members of society before even detailing the laws of marriage or daily worship. This emphasizes that a society is judged by how it treats those who cannot defend themselves.'
                    }
                },
                {
                    heading: 'The inheritance system',
                    verseRange: '7-10',
                    summary: '"For men there is a share of what parents and relatives leave, and for women there is a share." This established a fixed system of inheritance where no one could be excluded by tribal custom. Those who consume the wealth of orphans unjustly are filling their stomachs with fire.',
                    faq: {
                        title: 'The Revolutionary Inheritance System',
                        content: 'In 7th-century Arabia, tribal custom allowed only the eldest fighting males to inherit wealth, leaving women, children, and the elderly with absolutely nothing. An-Nisa completely shattered this custom by guaranteeing fixed shares for women, children, and parents, a reform that happened over a thousand years before similar property rights were recognized in much of the Western world.\n\nWomen were granted the legal right to own and manage their own property, independent of their husbands or male relatives. The Quran describes these inheritance rules as "limits set by God," making their fair distribution a matter of religious duty rather than personal choice. This system provided a level of financial security for women that was unparalleled in its era.'
                    }
                },
                {
                    heading: 'The exact shares of inheritance',
                    verseRange: '11-14',
                    summary: '"God commands you regarding your children: the male gets the share of two females." Detailed shares are provided for daughters, parents, and spouses. These are limits set by God. Whoever obeys will enter Paradise, and whoever crosses them will enter the Fire.',
                    faq: {
                        title: 'The Logic of Financial Responsibility',
                        content: 'The specific inheritance ratios in Islam are rooted in a broader system of mandatory financial responsibilities rather than a statement on the inherent value of individuals. In the Islamic legal framework, a man is religiously obligated to provide for his wife, children, and extended family using his own wealth.\n\nIn contrast, a woman’s inheritance is entirely her own to keep, invest, or spend as she pleases, with no obligation to contribute to the household expenses even if she is wealthy. Therefore, the "two-to-one" ratio is designed to balance the man’s heavy financial burdens against the woman’s lack of them. When these lifetime obligations are factored in, women often end up with more disposable personal wealth than their male counterparts.'
                    }
                },
            ],
        },
        {
            id: 'marriage-women',
            title: 'Marriage Laws and Social Justice',
            category: 'Rules',
            verseRange: '15-28',
            subsections: [
                {
                    heading: 'Women are not property',
                    verseRange: '19-21',
                    summary: '"O you who believe, it is not lawful for you to inherit women by force." It ended the pre-Islamic custom of treating widows as part of an inheritance. It also commanded kindness even if one dislikes their spouse, as God may place much good in that relationship.',
                    faq: {
                        title: 'The Limit on Multiple Wives',
                        content: 'Before the Quran was revealed, polygamy was practiced across many cultures with no limits on the number of wives or requirements for their fair treatment. Islam introduced a strict limit of four wives but coupled it with a daunting condition: the husband must treat them all with absolute justice and equality.\n\nThe verse notably states: "But if you fear you cannot be just, then only one," emphasizing that monogamy is the safer and preferred spiritual path. This permission was primarily a social safety net for widows and orphans during times of war, ensuring they had legal protection and financial support. Many scholars point to later verses about the impossibility of perfect equality to argue that the Quran points toward a monogamous ideal.'
                    }
                },
                {
                    heading: 'Prohibited relationships',
                    verseRange: '22-25',
                    summary: 'A detailed list of prohibited relationships is provided to protect the integrity of the family unit. These include mothers, daughters, sisters, and other close relatives. It also allows for marriage to those under one\'s care if the proper conditions and permissions are met.',
                },
                {
                    heading: 'Lightening the human burden',
                    verseRange: '26-28',
                    summary: '"God wants to make things clear to you... and to lighten your burden because the human being was created weak." God understands our limitations and designed the laws to be manageable for the average person, not just for the superhuman.',
                    faq: {
                        title: 'What Does "Created Weak" Mean?',
                        content: 'The Quranic statement that humans were "created weak" is an expression of divine compassion, recognizing that we are prone to temptation, laziness, and emotional shifts. Rather than demanding perfection that humans cannot achieve, God provides a path of constant improvement and frequent repentance.\n\nThis recognition led to many flexibilities in Islamic law, such as shortening prayers for travelers or exempting the sick from fasting. It teaches believers to be patient with their own shortcomings and to keep turning back to God whenever they falter. The overall goal of the religion is to lighten the spiritual and psychological burdens of life, proving that God wants ease for His servants rather than hardship.'
                    }
                },
            ],
        },
        {
            id: 'wealth-justice',
            title: 'Wealth and Character',
            category: 'Character',
            verseRange: '29-42',
            subsections: [
                {
                    heading: 'Trade and mutual consent',
                    verseRange: '29-31',
                    summary: '"Do not consume each other\'s wealth unjustly, but only through trade by mutual consent." Cooperation and fair dealing are the foundations of the economy. If you avoid major sins, God will erase your lesser sins.',
                },
                {
                    heading: 'Kindness to the nine categories',
                    verseRange: '36-38',
                    summary: '"Be good to parents, relatives, orphans, the poor, neighbors (near and far), companions, travelers, and those under your care." God does not love the arrogant or the stingy who hide His favors from others.',
                    faq: {
                        title: 'The Rights of the Neighbor',
                        content: 'The Prophet Muhammad emphasized the rights of the neighbor so frequently that his companions thought the neighbor might eventually be given a share of the inheritance. The Quranic command to be good to "neighbors close and neighbors far" includes everyone living in one’s vicinity, regardless of their faith or social status.\n\nBy placing kindness to neighbors directly alongside the worship of God, the Quran makes social ethics a core component of religious devotion. A "neighbor" is classically defined as anyone within forty houses in every direction, creating a network of mutual care and safety in every community. This teaching ensures that faith is not just an internal feeling but a visible force for good in the physical world.'
                    }
                },
            ],
        },
        {
            id: 'shirk-obedience',
            title: 'The Core of Belief and Authority',
            category: 'Beliefs',
            verseRange: '43-70',
            subsections: [
                {
                    heading: 'The unforgivable sin',
                    verseRange: '47-50',
                    summary: '"God does not forgive that partners be associated with Him, but He forgives anything less than that for whoever He wills." This reinforces absolute monotheism as the foundation of all faith.',
                    faq: {
                        title: 'Why Is Shirk So Serious?',
                        content: 'Shirk, or the act of associating partners with God, is considered the gravest transgression because it rejects the very foundation of the relationship between the Creator and the created. It is like a citizen of a country rejecting its ultimate constitution; without that baseline recognition, the system of the law cannot function for them.\n\nHowever, it is important to note that God’s mercy is open to anyone who repents from shirk during their lifetime. The "unforgivable" status only applies if a person consciously persists in this state until their death. For every other sin, God’s mercy is so vast that He may choose to forgive it through other good deeds or sincere regret. This teaching highlights that the most important truth a human can hold is the absolute Oneness of God.'
                    }
                },
                {
                    heading: 'Governance and justice',
                    verseRange: '58-59',
                    summary: '"God commands you to return trusts to their owners and to judge with justice." It also establishes the chain of authority: Obey God, obey the Messenger, and those in authority. Disputes should be referred back to God and the Messenger.',
                    faq: {
                        title: 'The Limits of Political Authority',
                        content: 'This verse provides the constitutional foundation for Islamic political theory, balancing the need for social order with the requirement for ethical governance. While it commands obedience to "those in authority," it immediately qualifies this by saying that disputes must be referred back to the Quran and the Prophetic tradition.\n\nThis means that no leader has absolute power, and their commands are only valid as long as they do not openly contradict the laws of God. The objective is to create a society governed by divine principles rather than the whims of any single person or elite group. It empowers the average citizen to hold their leaders accountable to a higher moral standard, ensuring that justice remains the ultimate goal of the state.'
                    }
                },
            ],
        },
        {
            id: 'fighting-oppression',
            title: 'Fighting for the Oppressed',
            category: 'Rules',
            verseRange: '71-100',
            subsections: [
                {
                    heading: 'A rescue mission for the weak',
                    verseRange: '71-84',
                    summary: '"What is wrong with you that you do not fight in the cause of God and for the oppressed men, women, and children." It calls the community to defend those who are being tortured and prevented from practicing their faith.',
                    faq: {
                        title: 'Defending the Oppressed',
                        content: 'The Quran describes the call to arms as a "rescue mission" for those who are being brutally mistreated and have no one else to stand for them. This includes the elderly, women, and children who were being persecuted in Makkah long after the Prophet had migrated to Madinah.\n\nThe verse asks a piercing psychological question: how can you remain comfortable while your brothers and sisters in humanity are crying out for divine help? This establishes that legitimate combat in Islam is primarily for the purpose of ending oppression and protecting religious freedom. It transformed the concept of "holy war" from tribal aggression into a controlled and ethical effort to liberate the weak from the hands of tyrants.'
                    }
                },
                {
                    heading: 'Intentional killing is a major crime',
                    verseRange: '92-93',
                    summary: '"Whoever kills a believer intentionally, his punishment is Hell, where he will remain forever." The sanctity of life is paramount. Accidental killing requires free a slave and paying compensation (blood money) to the family.',
                },
                {
                    heading: 'Investigate before you act',
                    verseRange: '94-96',
                    summary: '"O you who believe, when you go out to fight... investigate carefully." Do not assume someone offering peace is an enemy just to gain worldly advantage. God has many better gains for the sincere.',
                },
            ],
        },
        {
            id: 'prayer-justice-verse',
            title: 'Internal and External Justice',
            category: 'Beliefs',
            verseRange: '101-135',
            subsections: [
                {
                    heading: 'Justice overrides tribal loyalty',
                    verseRange: '105-112',
                    summary: 'God reminds the Prophet: "Do not be an advocate for the treacherous." This was revealed in a case where a Muslim tried to frame an innocent Jewish neighbor. The Quran defended the innocent individual regardless of their faith.',
                    faq: {
                        title: 'The Defense of the Innocent Jew',
                        content: 'Among the most powerful demonstrations of Quranic justice is the case of Tu’mah ibn Ubayriq, a Muslim who stole armor and frame a Jewish neighbor for the crime. Despite intense tribal pressure for the Prophet to side with his own follower to save the tribe’s reputation, God revealed verses clearing the Jewish man and condemning the "treacherous" Muslim.\n\nThis incident proved that the Quranic concept of justice is blind to religious and tribal identity. It sent a clear message that the Prophet’s community would not be a place where the guilty were protected by their social status or group membership. It remains one of the historical proofs that Islamic justice is intended to be a force for the universal protection of all human beings.'
                    }
                },
                {
                    heading: 'The standard of absolute justice',
                    verseRange: '135',
                    summary: '"O you who believe, be maintainers of justice, as witnesses to God, even if it is against yourselves, your parents, or your relatives." This is the pinnacle of ethical demand: truth at any cost.',
                    faq: {
                        title: 'The Harvard Verse',
                        content: 'Verse 4:135 is famously displayed on the walls of the Harvard Law School library as one of the most powerful expressions of justice ever articulated. It demands that a believer testify truthfully even if it leads to the punishment of their own parents, their children, or themselves.\n\nBy making every individual a "witness for God," the Quran removes all room for personal bias or family favoritism in matters of the law. This standard is designed to eliminate the common systemic corruption where the rich and powerful are protected from the consequences of their actions. It teaches that the highest form of loyalty is not to one’s tribe or family, but to the truth itself.'
                    }
                },
            ],
        },
        {
            id: 'jesus-narrative',
            title: 'The Hypocrites and the truth about Jesus',
            category: 'Theology',
            verseRange: '136-176',
            subsections: [
                {
                    heading: 'They did not kill Jesus',
                    verseRange: '156-159',
                    summary: '"They did not kill him and they did not crucify him. It was made to appear so to them." God raised him up to Himself. Jesus will be a witness against those who rejected him on the Day of Judgment.',
                    faq: {
                        title: 'The Islamic View on the Crucifixion',
                        content: 'The Quran provides a unique theological perspective on the end of Jesus’ earthly mission, stating that he was neither killed nor successfully crucified by his enemies. Instead, it explains that "it was made to appear so to them," suggesting that God miraculously saved His messenger from an ignoble death at the hands of a mob.\n\nMost classical scholars interpret this as someone else being made to look like Jesus and being executed in his place, while Jesus himself was raised alive to the heavens. This belief preserves the honor of the Prophet Jesus, showing that God does not allow His most beloved servants to be humiliated by their oppressors. He is believed to be in a state of divine preservation until his prophesied return to earth near the end of time.'
                    }
                },
                {
                    heading: 'A light and a proof',
                    verseRange: '163-176',
                    summary: 'God inspired Muhammad just as He inspired Nuh, Ibrahim, Isa, Musa, and the other prophets. Do not say "Trinity" or "Three." God is One. The chapter ends with a final ruling on sibling inheritance.',
                    faq: {
                        title: 'The Quranic Critique of the Trinity',
                        content: 'The Quran explicitly instructs Christians to "cease" from the doctrine of the Trinity, stating that God is far above the human limitation of having a son or being part of a "Three." It clarifies that Jesus is a "word" from God and a "spirit" created by Him, but he remains a servant and a messenger rather than a divine being.\n\nThis critique is not intended as an attack on Christians as people, but as a call to return to the original, pure monotheism taught by Jesus himself. The Quran emphasizes that worshiping anyone alongside the Creator is the ultimate spiritual deviation. It invites all "People of the Book" to recognize that true honor for Jesus lies in following his teachings of submission to the One God rather than deifying him.'
                    }
                },
            ],
        },
    ],

    facts: [
        {
            icon: 'shield',
            title: 'Pioneer of Women’s Rights',
            description: 'An-Nisa established legal rights for women to own property, inherit wealth, and refuse forced marriages over 1,300 years before similar reforms reached most Western nations.'
        },
        {
            icon: 'ruler',
            title: 'The Standard of Justice',
            description: 'Verse 135, which commands justice even against one\'s own family, is recognized as a global masterpiece of ethics and is famously displayed at the Harvard Law School library.'
        },
        {
            icon: 'book',
            title: 'The Social Constitution',
            description: 'This chapter functions as a comprehensive social code, providing the most detailed Quranic instructions on marriage, divorce, orphans, inheritance, and international war ethics.'
        },
        {
            icon: 'star',
            title: 'The Core Warning',
            description: 'It contains the most serious warning against Shirk (associating partners with God), identifying it as the only sin that God will not forgive if a person persists in it until death.'
        },
        {
            icon: 'eye',
            title: 'Historical Defense',
            description: 'In one of the most remarkable acts of historical justice, this chapter contains specific verses revealed by God to defend an innocent Jewish man who had been framed by a Muslim tribesman.'
        }
    ],

    closingVerse: {
        arabic: 'يَـٰٓأَيُّهَا ٱلنَّاسُ قَدْ جَآءَكُم بُرْهَـٰنٌ مِّن رَّبِّكُمْ',
        translation: '"O humanity, there has come to you a conclusive proof from your Lord."',
        reference: '- An-Nisa 4:174',
    },
};

export default SURAH_4_PAGE;
