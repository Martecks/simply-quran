/**
 * Chapter Al-Baqarah - Page Data
 * Content, accordion sections, and facts for the Chapter page
 */

const SURAH_2_PAGE = {
    meta: {
        number: 2,
        name: 'Al-Baqarah',
        arabicName: 'سُورَةُ البَقَرَة',
        meaning: 'The Cow',
        type: 'Madinan',
        verses: 286,
        juz: '1-3',
        color: '#1a6b1a',
    },

    intro: [
        'Al-Baqarah is the longest chapter in the Quran, with 286 verses covering almost every aspect of human life: faith, law, history, financial ethics, marriage, and community development. It was revealed in Madinah, providing the foundational framework for the first Muslim society.',
        'The name "The Cow" refers to a specific story where Moses commanded his people to sacrifice a cow. Instead of obeying simply, they asked endless, unnecessary questions until they made the task nearly impossible. The lesson remains timeless: do not overcomplicate the clear guidance that God makes simple.',
        'The Prophet Muhammad noted that Satan flees from any home where this chapter is recited regularly. He also described it as the "peak of the Quran," highlighting that its final two verses provide comprehensive spiritual protection if recited before sleep.'
    ],

    sections: [
        {
            id: 'types-of-people',
            title: 'Three Types of People',
            category: 'Beliefs',
            verseRange: '1-29',
            subsections: [
                {
                    heading: 'This Book has no doubt in it',
                    verseRange: '1-5',
                    summary: '"This is the Book. There is no doubt in it. It is a guide for those who are mindful of God." The Quran opens by making a bold claim: no doubts, no errors. The people it guides are described next: they believe in the unseen, they pray, and they give from what God gave them.',
                },
                {
                    heading: 'Some people will not believe no matter what',
                    verseRange: '6-7',
                    summary: '"It is the same whether you warn them or not. They will not believe." Some people have sealed their own hearts through repeated rejection. God describes this as locks on their hearts, ears, and eyes. They chose to block out the truth, and now it cannot get in.',
                    faq: {
                        title: 'Does God Seal Hearts?',
                        content: 'Scholars explain that the sealing of a heart is not an arbitrary punishment that comes from nowhere. Rather, it is the natural spiritual consequence of an individual’s persistent and willful choice to reject the truth.\n\nEach time a person recognizes a moral truth and consciously turns away from it, their heart becomes slightly more hardened and desensitized. God sealing the heart is the final state where a person has so deeply committed to falsehood that they can no longer perceive reality. The Quran confirms this in other chapters, noting that "on their hearts is the stain of what they have earned."'
                    }
                },
                {
                    heading: 'The hypocrites: They say one thing and do another',
                    verseRange: '8-20',
                    summary: '"They say: we believe in God and the Last Day. But they are not believers." Hypocrites claim to be with the believers but secretly side with the disbelievers. They think they are fooling everyone, but God says they are only fooling themselves. The Quran uses a vivid picture: it is like people who lit a fire, and just when the light spread around them, God took it away and left them in total darkness.',
                    faq: {
                        title: 'Who Were the Hypocrites in Madinah?',
                        content: 'When the Prophet arrived in Madinah, a group of people publicly accepted Islam to maintain their social status while privately working to undermine the community. The most prominent figure was Abdullah ibn Ubayy, who felt the Prophet’s arrival had cost him his chance to be the king of the city.\n\nThese individuals would attend prayers and even join battles, yet they would leak sensitive information to enemies and mock the believers in secret. Their behavior was so significant that the Quran dedicated an entire chapter, Chapter 63, to exposing their traits. Over 100 verses in Al-Baqarah alone help believers identify the subtle signs of such internal treachery.'
                    }
                },
                {
                    heading: 'Worship your Lord and the first challenge',
                    verseRange: '21-25',
                    summary: 'After showing the three types of people, the Quran speaks to all of humanity: "O people, worship your Lord who created you and those before you, so that you may become God-conscious." Then it throws down a challenge for anyone who doubts the Quran: produce just one chapter like it. Call all your helpers. If you cannot do it, and you never will, then take the warning seriously.',
                },
                {
                    heading: 'God is not shy to use any example',
                    verseRange: '26-29',
                    summary: '"God is not shy to give the example of a mosquito or something even smaller." Some people complained that the Quran used examples from nature as too simple. God\'s response: the believers see the truth in those examples, and the disbelievers use them as an excuse to reject. Who are you to tell God what examples to use? He created the heavens and earth in six days and then settled over the Throne. He knows everything.',
                },
            ],
        },
        {
            id: 'adam-story',
            title: 'The Story of Adam',
            category: 'Stories',
            verseRange: '30-39',
            subsections: [
                {
                    heading: 'Why put a human on earth?',
                    verseRange: '30-33',
                    summary: 'God tells the angels: "I am placing a caretaker on earth." The angels ask: "Will you put someone there who causes corruption and sheds blood?" God says: "I know what you do not know." He then teaches Adam the names of everything and asks the angels to name them. They cannot. Adam names them all. This shows that humans have something special: the capacity for deep knowledge.',
                    faq: {
                        title: 'What Does "Caretaker" Mean?',
                        content: 'The Arabic term used is "khalifah," which is often translated as a vicegerent or a successor who manages affairs on behalf of the ultimate owner. By using this word, God is teaching that humanity holds the earth in trust rather than absolute ownership.\n\nThis role carries a profound responsibility for environmental and social stewardship, as we are accountable for how we treat the planet and its inhabitants. The angels’ initial question was not a challenge to God’s wisdom, but born from their observation of previous beings who had caused corruption. God’s response highlighted that Adam was endowed with a unique capacity for conceptual knowledge that the angels did not possess.'
                    }
                },
                {
                    heading: 'Iblis refuses to bow',
                    verseRange: '34-36',
                    summary: 'All beings bow to Adam out of respect, as God commanded. All except Iblis (Satan). He refuses out of pride. Then Adam and his wife are placed in the Garden and told: eat what you want, but stay away from one tree. Iblis tricks them. They eat from it. They are sent to the earth, but God promises: guidance will come to you, and whoever follows it will have no fear.',
                    faq: {
                        title: 'Was Satan an Angel?',
                        content: 'The Quran clarifies that Iblis (Satan) was from the jinn, a creation with free will, rather than an angel, who obey God by their very nature. While he had reached a high spiritual rank through worship, his core was exposed when he was commanded to show respect to Adam.\n\nHis refusal was driven by pure arrogance, as he claimed his creation from fire made him inherently superior to Adam’s creation from clay. This single moment of pride after ages of devotion highlights that no amount of outward worship can protect a soul if it harbors internal arrogance. His story serves as a permanent warning that pride is the most dangerous barrier between a creature and its Creator.'
                    }
                },
                {
                    heading: 'God accepts Adam\'s Repentance',
                    verseRange: '37-39',
                    summary: 'Adam received words from God and repented. God accepted it. This sets one of the most important patterns in the Quran: humans make mistakes, but the door to repentance is always open. Those who follow God\'s guidance will have no fear and no grief. Those who reject it will be in the Fire forever.',
                },
            ],
        },
        {
            id: 'bani-israel-favors',
            title: 'God\'s Favors on the Children of Israel',
            category: 'Stories',
            verseRange: '40-73',
            subsections: [
                {
                    heading: 'Remember the favors I gave you',
                    verseRange: '40-48',
                    summary: '"O Children of Israel, remember the favor I gave you. Keep your covenant with Me and I will keep Mine." God lists what He did for them: saved them from Pharaoh, parted the sea, gave them food from the sky. He asks them to believe in the Quran, which confirms what they already have. Do not mix truth with falsehood. Do not hide the truth when you know it.',
                },
                {
                    heading: 'Saved from Pharaoh: The sea splits',
                    verseRange: '49-52',
                    summary: '"Remember when We saved you from the people of Pharaoh. They were giving you the worst punishment, killing your sons and letting your women live." God split the sea for them. He drowned Pharaoh and his army right in front of them. Then He forgave Moses\' people when they worshipped the calf, so that they might be grateful.',
                    faq: {
                        title: 'The Exodus: What Happened?',
                        content: 'The Children of Israel endured centuries of brutal enslavement in Egypt under the tyrannical rule of Pharaoh. When Moses was sent to liberate them, God eventually commanded him to lead the people out of Egypt under the cover of night.\n\nAs Pharaoh’s army trapped them against the shores of the Red Sea, God instructed Moses to strike the waters with his staff, miraculously splitting the sea into twelve dry paths. After the Israelites crossed safely, the sea collapsed back into its natural state, drowning the entire pursuing army. This event remains one of the most significant demonstrations of divine power and liberation in human history.'
                    }
                },
                {
                    heading: 'Food from the sky and the golden calf',
                    verseRange: '53-57',
                    summary: 'God gave Moses the Torah, a criterion between right and wrong. He forgave the people when they worshipped the golden calf. He gave them shade from clouds in the desert, sent down manna and quails to eat. They were told: eat from the good things We provided. Some of them did wrong, but God did not wrong them. They wronged themselves.',
                },
                {
                    heading: 'The mountain lifted over their heads',
                    verseRange: '58-63',
                    summary: 'They were told to enter a city saying "forgiveness" and they would be forgiven. But they changed the words to something mocking. Then God commanded them about the Sabbath, and some broke it by working. God raised the mountain above them like an umbrella and told them to hold firmly to the Torah. "Remember what is in it, so that you may be God-conscious."',
                    faq: {
                        title: 'The Sabbath Story',
                        content: 'A specific community among the Children of Israel was tested with a prohibition on fishing during the Sabbath. To test their sincerity, God caused fish to swarm near the surface on Saturdays and almost vanish on other days of the week.\n\nInstead of obeying the spirit of the law, some individuals attempted to "trick" the system by placing their nets on Friday and retrieving them on Sunday. This story teaches that God does not accept legalistic loopholes that attempt to bypass moral obligations while keeping up outward appearances. Their eventual punishment serves as a stark reminder that true faith requires internal integrity rather than just following the letter of a rule.'
                    }
                },
                {
                    heading: 'The cow incident: Just do what God says',
                    verseRange: '64-73',
                    summary: '"Moses said to his people: God commands you to sacrifice a cow." Simple. But they kept asking: what color? What age? How old? Each question made it harder, until they found a very specific cow that was nearly impossible to get. This is where the chapter gets its name. The lesson: when God gives a simple command, just do it. Asking too many questions turns an easy thing into a burden.',
                    faq: {
                        title: 'Why Was the Cow Commanded?',
                        content: 'A mysterious murder had occurred among the Israelites, and the subsequent accusations were threatening to tear the community apart. God commanded them to sacrifice a cow and strike the deceased person with a piece of it to miraculously reveal the identity of the killer.\n\nIf the people had obeyed immediately, any cow would have sufficed for the miracle. However, their persistent and unnecessary questioning forced more and more specific requirements until only a very rare, bright yellow cow would fit the description. This incident highlights the danger of over-analyzing divine commands, which often leads to making a simple path far more difficult than it was intended to be.'
                    }
                },
            ],
        },
        {
            id: 'bani-israel-rejection',
            title: 'Hard Hearts and Broken Promises',
            category: 'Warning',
            verseRange: '74-123',
            subsections: [
                {
                    heading: 'Hearts harder than rocks',
                    verseRange: '74-82',
                    summary: '"Then your hearts hardened after that, and they were like rocks or even harder." Some rocks have springs that flow from them. Some split and water comes out. But their hearts had nothing. They twisted God\'s words after understanding them. They broke their covenant again. Some of them never expected the next life in the first place.',
                },
                {
                    heading: 'They said: The Fire will only touch us for a few days',
                    verseRange: '83-86',
                    summary: 'God took their covenant: worship only God, be good to parents, orphans, and the poor, speak kindly to people, pray, and give charity. They agreed, then turned away. They said: "The Fire will not touch us except for a few days." But they had no promise from God for that. They just made it up. "Are you saying about God what you do not know?"',
                },
                {
                    heading: 'Every time a Prophet came, they rejected Him',
                    verseRange: '87-93',
                    summary: '"We gave Moses the Book and sent messengers after him. And We gave Jesus the son of Mary clear proofs and supported him with the Holy Spirit." But every time a prophet came with something they did not like, some of them rejected him and some of them killed him. They even rejected the Quran, which confirms their own scripture.',
                },
                {
                    heading: 'They chose magic over the words of God',
                    verseRange: '94-103',
                    summary: '"If you claim that the home of the next life is for you alone, with no share for others, then wish for death if you are telling the truth." They did not wish for it. The truth is they would never want it. Then God exposes how they abandoned the scripture of God and followed magic instead, even though they knew it was wrong.',
                },
                {
                    heading: 'Competing claims and empty wishes',
                    verseRange: '104-112',
                    summary: '"They say: no one will enter Paradise except Jews or Christians." That is their wish. God says: bring your proof. The truth is that whoever submits to God completely and does good will have their reward. No fear, no grief. The Jews say the Christians have nothing, and the Christians say the Jews have nothing. But both groups recite their own books.',
                },
                {
                    heading: 'Who would stop God\'s Name from Being Mentioned?',
                    verseRange: '113-117',
                    summary: '"Who is more unjust than someone who prevents God\'s name from being mentioned in His mosques and tries to destroy them?" God belongs the East and the West. Wherever you turn, there is the face of God. They say God has taken a son. He is free from that. He says "Be" and it is.',
                },
                {
                    heading: 'Ibrahim was not Jewish or Christian',
                    verseRange: '118-123',
                    summary: 'They ask: "Why does God not speak to us directly?" The argument does not change: they had clear proofs and they rejected them. God tells the believers: you will not be asked about the people of Hell. The Jews will not be satisfied until you follow their religion, and neither will the Christians. Say: "The guidance of God is the true guidance." If you follow their desires after the knowledge that came to you, you have no protector.',
                },
            ],
        },
        {
            id: 'ibrahim-kaaba',
            title: 'Ibrahim and the Kaaba',
            category: 'Stories',
            verseRange: '124-141',
            subsections: [
                {
                    heading: 'Ibrahim passed every test',
                    verseRange: '124-126',
                    summary: '"When his Lord tested Ibrahim with certain commands and he fulfilled them all, God said: I am making you a leader for all people." Ibrahim asked: "And from my descendants?" God said: "My covenant does not include the wrongdoers." Ibrahim then prayed for Makkah to be a place of security and for its people to have food.',
                    faq: {
                        title: 'What Were Ibrahim\'s Tests?',
                        content: 'Ibrahim faced a series of extraordinary trials that required him to prioritize his love for God above all else. He was cast into a great fire by his own community for challenging their idol worship, yet he remained completely undisturbed in his trust in God.\n\nLater, he was commanded to leave his wife Hajar and infant son Ismail in a barren, unpopulated desert valley, and eventually, he was asked to sacrifice his beloved son. By fulfilling every single command "completely," Ibrahim demonstrated a level of submission that earned him the title of "Imam" or leader for all humanity. His life serves as the ultimate archetype of faith perfected through action and absolute consistency.'
                    }
                },
                {
                    heading: 'Ibrahim and Ismail build the Kaaba',
                    verseRange: '127-129',
                    summary: '"Ibrahim and Ismail were raising the foundations of the House, saying: Our Lord, accept this from us." Father and son built the Kaaba together, placing the stones and praying the whole time. They asked God to make them submissive to Him, show them the rituals of worship, and send a messenger from among their descendants who would teach the people.',
                    faq: {
                        title: 'The Story of Zamzam',
                        content: 'When Ibrahim initially left his family in the valley of Makkah, Hajar was forced to run between the hills of Safa and Marwa seven times in a desperate search for water for her crying child. Just as she was about to lose hope, the angel Gabriel struck the earth, causing the miraculous spring of Zamzam to gush forth.\n\nThis well became the primary reason for the settlement of Makkah, as passing tribes were drawn to the reliable source of life in the desert. The Prophet Muhammad’s own arrival centuries later was the answer to the prayer Ibrahim and Ismail made while building the Kaaba. Today, millions of pilgrims continue to drink from that same well, testifying to a miracle that has sustained the city for over four millennia.'
                    }
                },
                {
                    heading: 'Who would leave the religion of Ibrahim?',
                    verseRange: '130-135',
                    summary: '"Who would abandon the religion of Ibrahim except someone who has made a fool of himself?" God chose Ibrahim in this world and he will be among the righteous in the next. Ibrahim told his sons, and Jacob told his sons: "God has chosen this religion for you. Do not die except as those who submit to God." They ask: "Were you there when Jacob was dying?" He told his sons to worship the One God his fathers worshipped.',
                },
                {
                    heading: 'Ibrahim was simply someone who submitted to God',
                    verseRange: '136-141',
                    summary: '"Say: We believe in God and what was revealed to us, and to Ibrahim, Ismail, Isaac, Jacob, and the tribes, and what was given to Moses and Jesus, and what was given to all the prophets. We make no distinction between any of them." Ibrahim was not Jewish or Christian. He was a hanif, someone who turned toward God purely. "That is a community that has passed. They have what they earned and you have what you earn."',
                },
            ],
        },
        {
            id: 'qiblah',
            title: 'The New Prayer Direction',
            category: 'Beliefs',
            verseRange: '142-152',
            subsections: [
                {
                    heading: 'Why did the prayer direction change?',
                    verseRange: '142-145',
                    summary: '"The foolish among the people will say: What made them turn away from their qiblah that they used to face?" God said He only set the previous direction as a test to see who would follow the messenger. Now the direction changes to Makkah. God says to go wherever you are, turn your face toward the Sacred Mosque.',
                    faq: {
                        title: 'From Jerusalem to Makkah',
                        content: 'For the first seventeen months in Madinah, the Muslim community prayed while facing north toward the Holy City of Jerusalem. The Prophet, however, deeply longed to face the Kaaba in Makkah, the house built by his forefather Ibrahim.\n\nWhen the revelation to change the direction finally arrived, it happened while the Prophet was leading a congregational prayer. He turned 180 degrees in the middle of his worship, and the entire congregation followed him without hesitation. This event occurred at what is now known as the Mosque of the Two Qiblahs, marking a definitive moment where the community’s identity was solidified around the ancient sanctuary of the Kaaba.'
                    }
                },
                {
                    heading: 'Turn your face toward the sacred mosque',
                    verseRange: '146-150',
                    summary: '"The People of the Book know this is the truth from their Lord like they know their own sons. But a group of them hides the truth while knowing it." Wherever you are in the world, turn your face toward the Sacred Mosque. God is not unaware of what you do. This is not about the direction itself. It is about following God\'s command wherever it leads.',
                },
                {
                    heading: 'Seek help through patience and prayer',
                    verseRange: '151-152',
                    summary: '"Just as We sent you a messenger from among you who recites Our verses, purifies you, and teaches you the Book and wisdom." God reminds the believers: this whole mission, this new direction, this new community, it is all His favor. "So remember Me and I will remember you. Be grateful to Me and do not reject Me."',
                },
            ],
        },
        {
            id: 'patience-prayer',
            title: 'Patience, Prayer, and the Tests of Life',
            category: 'Character',
            verseRange: '153-177',
            subsections: [
                {
                    heading: 'Seek help through patience and prayer',
                    verseRange: '153-157',
                    summary: '"O you who believe, seek help through patience and prayer. God is with those who are patient." When hardship comes, do not despair. Say: "We belong to God and to Him we return." These people will receive blessings and mercy from their Lord, and they are the guided ones.',
                },
                {
                    heading: 'Safa and marwa are part of worship',
                    verseRange: '158-163',
                    summary: '"Safa and Marwa are among the symbols of God. Whoever makes Hajj or Umrah, there is no blame in walking between them." Then comes one of the Quran\'s strongest warnings: whoever hides the clear proofs that God sent, God curses them, and so do all who curse. The exception is whoever repents and corrects themselves. Your God is One God. There is no god except Him, the Most Gracious, the Most Merciful.',
                    faq: {
                        title: 'Why Walk Between Safa and Marwa?',
                        content: 'The ritual of walking between the hills of Safa and Marwa is a direct commemoration of the struggle and faith of Hajar, the wife of Ibrahim. Finding herself alone in the desert with her infant son, she refused to give up and ran seven times between these hills searching for a sign of water.\n\nHer perseverance was eventually rewarded with the spring of Zamzam, proving that God supports those who combine deep trust with active effort. By repeating this walk during Hajj and Umrah, Muslims are taught to embrace the same spirit of resilience. It serves as a symbolic reminder that no matter how desolate one’s circumstances may appear, sincere effort and prayer can unlock divine help.'
                    }
                },
                {
                    heading: 'Signs in creation',
                    verseRange: '164-171',
                    summary: '"In the creation of the heavens and earth, the alternation of day and night, the ships that sail the sea, the water God sends from the sky: in all of this are signs for people who think." Then the Quran shows what it looks like when people do not think: they follow their fathers blindly, like cattle, even if their fathers understood nothing.',
                },
                {
                    heading: 'Eat what is good and do not follow Satan',
                    verseRange: '172-176',
                    summary: '"O you who believe, eat from the good things We have provided you." The forbidden foods are listed simply: dead animals, blood, pork, and anything killed in a name other than God\'s. But whoever is forced by necessity, with no desire to sin, God is Forgiving and Merciful. Those who hide what God revealed in the Book and sell it for a small price: they eat nothing but Fire.',
                },
                {
                    heading: 'What real goodness looks like',
                    verseRange: '177',
                    summary: '"Goodness is not turning your face toward the east or the west." Real goodness is: believing in God, the Last Day, angels, the Book, and prophets; giving money to those who need it even when you love that money; praying; giving charity; keeping promises; being patient in suffering.',
                    faq: {
                        title: 'Why Was This Verse Revealed?',
                        content: 'This verse was revealed to address a growing controversy regarding the orientation of prayer after the shift from Jerusalem to Makkah. Some people were becoming overly focused on the ritualistic detail of the direction while losing sight of the deeper spiritual objectives of the faith.\n\nGod clarified that true righteousness is not found in the mechanics of geographical orientation, but in the quality of one’s character and social contribution. He redefined "goodness" as a comprehensive blend of sound belief, generosity with wealth, and steadfastness in the face of suffering. This teaching ensures that religious practice never descends into empty ritualism but remains anchored in ethical living.'
                    }
                },
            ],
        },
        {
            id: 'justice-law',
            title: 'Laws of Justice',
            category: 'Rules',
            verseRange: '178-203',
            subsections: [
                {
                    heading: 'The law of equal retaliation',
                    verseRange: '178-179',
                    summary: '"O you who believe, retaliation is prescribed for you in cases of killing." The law involves equality: free for free, slave for slave. But if the family forgives and accepts payment instead, that is acceptable. "In retaliation there is life for you." This prevents endless tribal revenge cycles.',
                    faq: {
                        title: 'Why Does This Law Exist?',
                        content: 'In the pre-Islamic era, tribal conflicts often led to "blood feuds" where a single murder would trigger the killing of many innocent members of the opposing tribe. This law was introduced to impose a strict limit of one life for one life, effectively halting the cycle of disproportionate and endless revenge.\n\nCrucially, the law also provided a pathway for peace by allowing the victim’s family the right to forgive and accept blood money (compensation) instead. By stating that "in retaliation there is life," the Quran highlights that a clearly defined and limited justice system actually preserves the lives of the entire community. It transforms a chaotic system of personal vengeance into a structured system of communal law.'
                    }
                },
                {
                    heading: 'Writing your will before death',
                    verseRange: '180-182',
                    summary: 'It is prescribed for you to write a will for your parents and close relatives in a fair manner. This is an obligation for the God-conscious. Whoever changes the will after hearing it, the sin is on those who change it.',
                },
                {
                    heading: 'Fasting in Ramadan: Why and how',
                    verseRange: '183-188',
                    summary: '"O you who believe, fasting is prescribed for you as it was prescribed for those before you, so that you may become God-conscious." Ramadan is the month the Quran was revealed. Whoever sees the new moon must fast. God wants ease for you, not difficulty.',
                    faq: {
                        title: 'The Night of Power',
                        content: 'Ramadan is especially significant because it is the month in which the Quran was first sent down to the lower heavens. Within this month lies the "Night of Power" (Laylat al-Qadr), which the Quran describes as being more valuable than a thousand months of regular worship.\n\nDuring the final ten nights of the month, Muslims seek out this night through intense prayer and spiritual reflection. The Prophet Muhammad would often retreat into the mosque during this time to focus exclusively on his connection with the Divine. Engaging in worship on this single night is believed to grant the spiritual rewards equivalent to an entire lifetime of devotion.'
                    }
                },
                {
                    heading: 'Hajj and the sacred months',
                    verseRange: '188-196',
                    summary: 'Do not consume each other\'s wealth unjustly or bribe judges. The crescent moons are time markers for people and for Hajj. Fighting in the sacred months is not allowed. But if someone attacks you, fight back in equal measure.',
                },
                {
                    heading: 'Complete the Hajj and umrah for God',
                    verseRange: '197-203',
                    summary: '"Hajj is in well-known months. Whoever commits to Hajj: no sexual relations, no wrongdoing, and no arguing." Prepare for it by packing supplies, but the best supply is God-consciousness. When you finish the rituals, pray for good in both worlds.',
                },
            ],
        },
        {
            id: 'worldly-traps',
            title: 'Worldly Life and Its Traps',
            category: 'Warning',
            verseRange: '204-242',
            subsections: [
                {
                    heading: 'Words that mean nothing',
                    verseRange: '204-207',
                    summary: '"Some people impress you with their words about this life, but they are the worst of enemies." When they leave, they sneak around spreading corruption and destroying resources. God does not like corruption.',
                },
                {
                    heading: 'Enter Islam completely',
                    verseRange: '208-212',
                    summary: '"O you who believe, enter into Islam completely and do not follow the steps of Satan." Do not pick and choose from the religion. The life of this world is made to look beautiful to those who reject faith, but the God-conscious will be above them.',
                    faq: {
                        title: 'Why Can\'t You Pick and Choose from the Religion?',
                        content: 'The command to "enter Islam completely" emphasizes that the faith is designed as a balanced and integrated ecosystem where every part supports the other. Attempting to follow spiritual practices while ignoring financial ethics, for example, creates a disjointed life that fails to achieve the intended internal and social results.\n\nJust as every component in a complex machine is necessary for it to function correctly, every ethical and ritual requirement in Islam plays a role in purifying the soul and building a just society. Picking and choosing based on personal convenience often leads to a hollow version of faith that lacks the power to truly transform the individual or their community into their best versions.'
                    }
                },
                {
                    heading: 'Do you think you will enter Paradise before being tested?',
                    verseRange: '213-216',
                    summary: '"Do you think you will enter Paradise without facing what those before you faced? They were touched by hardship and shaken until the messenger said: When does God\'s help come?" Fighting is made obligatory even though you may hate it.',
                    faq: {
                        title: 'Why Does God Test People with Hardship?',
                        content: 'This verse directly addresses the universal question of why suffering exists if God is loving. The Quran explains that Paradise is a destination of immense value that must be earned through the refinement of one’s character in the laboratory of real-world challenges.\n\nTrials are not meant to break the believer but to burn away arrogance, develop patience, and reveal the depth of one’s actual commitment to higher principles. The verse ends with the powerful reassurance that "God’s help is near," reminding us that hardship is temporary while the spiritual growth and eternal rewards it facilitates are permanent. Even the greatest prophets including Moses and Muhammad were subjected to intense trials to prove their sincerity.'
                    }
                },
                {
                    heading: 'Alcohol and gambling',
                    verseRange: '217-220',
                    summary: '"They ask you about wine and gambling. Say: in them is great sin and some benefit for people. But their sin is greater than their benefit." They ask about orphans: say, fixing their situation is best.',
                    faq: {
                        title: 'Why Is Alcohol Banned?',
                        content: 'The Quran provides a nuanced and honest assessment by acknowledging that alcohol and gambling do offer some perceived social or medicinal benefits. However, it concludes that the overall harm (including addiction, violence, and the destruction of families) far outweighs any temporary pleasure they may provide.\n\nIn modern terms, this is a divine risk assessment that prioritizes the long-term well-being of the individual and society over short-term gratification. This was part of a gradual four-step process that eventually led to a total prohibition, demonstrating God’s understanding of how to gently transition a culture away from deeply ingrained and harmful habits over several years.'
                    }
                },
                {
                    heading: 'Marriage and family life',
                    verseRange: '221-242',
                    summary: 'Guidance on marriage, menstruation, oaths, and divorce. God loves those who purify themselves. Mothers breastfeed for two years. Forgiveness is closer to God-consciousness. Guard your prayers strictly, especially the middle prayer.',
                    faq: {
                        title: 'Why Does Islam Restrict Marriage Choices?',
                        content: 'In the Islamic view, marriage is far more than a romantic contract; it is a foundational partnership intended to build a stable home and raise the next generation with shared values. If two partners hold fundamentally conflicting worldviews on morality and the afterlife, it creates an internal tension that often undermines the stability of the family unit.\n\nBy emphasizing faith as the primary criteria for marriage, the Quran prioritizes spiritual compatibility over social status, wealth, or physical appearance. This ensures that the household remains a place of unified purpose where children can be raised with a clear and consistent moral compass. It also teaches that a person’s internal character is significantly more valuable than any external trait found in the material world.'
                    }
                },
            ],
        },
        {
            id: 'spending-charity',
            title: 'Spending, Charity, and the War on Interest',
            category: 'Rules',
            verseRange: '243-283',
            subsections: [
                {
                    heading: 'Talut and jalut: The army that obeyed',
                    verseRange: '243-252',
                    summary: 'God chose Talut (Saul) for his knowledge and physical strength. He tested his army at a river: whoever drinks is not with me. Most drank. The few who obeyed crossed. With God\'s help, the small faithful army defeated Jalut (Goliath).',
                    faq: {
                        title: 'David and Goliath in the Quran',
                        content: 'The Quranic version of the story of Talut (Saul) and Jalut (Goliath) emphasizes the importance of self-discipline and obedience over mere numbers. Before original battle, the army was tested at a river to see who could control their thirst, a test that most failed.\n\nThe few who exhibited self-control were the ones granted divine support to face an army that appeared much larger and more powerful. This story contains a timeless lesson: success is not determined by external resources, but by the internal quality of those who are fighting for the truth. It was the young David who eventually slew the giant Goliath, proving that God can grant victory to anyone who possesses sincere faith and courage.'
                    }
                },
                {
                    heading: 'Ayat al-Kursi: The greatest verse',
                    verseRange: '253-255',
                    summary: '"God. There is no god except Him, the Ever-Living, the Self-Sustaining." No one can intercede with Him except by His permission. His knowledge encompasses everything. His footstool extends over the heavens and earth.',
                    faq: {
                        title: 'Why Is This the Greatest Verse?',
                        content: 'The Prophet Muhammad explicitly identified verse 255, known as Ayat al-Kursi, as the most profound single verse in the entire Quran. It provides the most concentrated and complete description of God’s absolute power, presence, and infinite knowledge within a single passage of text.\n\nReciting this verse is believed to invite special divine protection for one’s home and sleep, acting as a spiritual shield against negative influences. It reminds the believer that God does not experience fatigue or sleep and that His "Kursi" (Footstool or Throne) encompasses the entirety of the created universe. By contemplating its meaning, a person can achieve a deep sense of security, knowing they are in the care of an all-powerful and ever-present Creator.'
                    }
                },
                {
                    heading: 'No compulsion in religion',
                    verseRange: '256-257',
                    summary: '"There is no compulsion in religion. Truth is clearly distinct from falsehood." Whoever believes in God has grasped the strongest handle. God brings those who believe out of darkness into light.',
                    faq: {
                        title: 'What Does "No Compulsion" Actually Mean?',
                        content: 'This verse establishes the fundamental principle that faith must be a products of free will and sincere conviction, making any form of forced conversion religiously invalid. Because the truth of the message is inherently clear, God leaves the choice to believe entirely in the hands of the individual.\n\nHistorical records confirm that the Prophet never coerced people into joining the faith, even when he held absolute military and social power in Makkah. This principle ensures that the Muslim community is built on genuine hearts rather than hollow pretension. It also serves as a permanent mandate for Muslims to respect the religious freedom of others, allowing the light of the message to be its own proof.'
                    }
                },
                {
                    heading: 'Parables of giving and the war on interest',
                    verseRange: '258-283',
                    summary: 'Charity is like a grain that grows 700. Do not cancel your charity by bragging or hurting people. Interest is forbidden. God makes trade lawful but condemns interest. Write down your loans and get witnesses.',
                    faq: {
                        title: 'Why Is Interest So Serious?',
                        content: 'The Quran takes a uniquely severe stance against "riba" (interest), even describing those who persist in it as being in a state of war against God and His Messenger. This is because interest is viewed as an exploitative financial system that concentrates wealth in the hands of the few while penalizing those whom are in need.\n\nBy contrast, Islam encourages trade and venture-based partnerships where risk and profit are shared between parties. Prohibiting interest forces capital to be invested in real, productive efforts that benefit the entire economy rather than simply growing through the passage of time. This financial ethical framework is designed to create a more equitable society where money serves humanity rather than enslaving it.'
                    }
                },
            ],
        },
        {
            id: 'closing',
            title: 'The Closing Prayer',
            category: 'Beliefs',
            verseRange: '284-286',
            subsections: [
                {
                    heading: 'God knows your thoughts',
                    verseRange: '284-285',
                    summary: 'Whether you reveal what is in your soul or hide it, God knows. The Messenger believes and so do the believers. Each has believed in God, His angels, His books, and His messengers.',
                },
                {
                    heading: 'God does not burden a soul beyond its capacity',
                    verseRange: '286',
                    summary: '"God does not burden a soul beyond what it can bear." Then comes the closing prayer of Al-Baqarah: "Our Lord, do not take us to account if we forget or make a mistake. Pardon us, forgive us, and have mercy on us."',
                    faq: {
                        title: 'Why This Prayer Matters So Much?',
                        content: 'The final two verses of Al-Baqarah are considered a complete spiritual summary of the entire chapter and a powerful protection for the soul. The Prophet stated that whoever recites these verses at night, they will be "sufficient" for them, meaning they offer total coverage of one’s spiritual needs.\n\nThe closing prayer is a masterclass in humility, asking God for forgiveness for our human limitations and seeking relief from the heavy burdens faced by previous generations. It perfectly balances the themes of divine justice with divine mercy, ending the longest chapter of the Quran with a plea for help and victory. Reciting them regularly serves to internalize the message that while we are responsible, God is ultimately our most merciful Master.'
                    }
                },
            ],
        },
    ],

    facts: [
        {
            icon: 'shield',
            title: 'Protection for the Home',
            description: 'The Prophet Muhammad noted that Satan flees from any house where Chapter Al-Baqarah is recited, making it a primary source of spiritual sanctuary for the family.'
        },
        {
            icon: 'star',
            title: 'The Greatest Verse',
            description: 'This chapter contains Ayat al-Kursi (2:255), the greatest single verse in the Quran. Reciting it after prayers is a confirmed path toward achieving eternal success in Paradise.'
        },
        {
            icon: 'ruler',
            title: 'The Record for Length',
            description: 'Al-Baqarah contains the longest verse in the Quran (2:282), which provides a full set of practical guidelines for financial contracts, loans, and documenting debt.'
        },
        {
            icon: 'moon',
            title: 'Treasures from the Throne',
            description: 'The final two verses are so significant that the Prophet described them as having been given directly from God’s treasury located beneath the Divine Throne.'
        },
        {
            icon: 'book',
            title: 'A Decade of Guidance',
            description: 'This chapter was revealed over a period of ten years in Madinah, serving as the live constitution for the first Muslim community as it grew from a small group into a nation.'
        }
    ],

    closingVerse: {
        arabic: 'لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
        translation: '"God does not burden a soul beyond what it can bear."',
        reference: '- Al-Baqarah 2:286'
    }
};

export default SURAH_2_PAGE;
