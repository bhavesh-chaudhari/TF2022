const YEAR = 2022;

const events = [
  {
    id: 3,
    name: "HackMe",
    organizer: "Skills Nights",
    path: "hackme",
    description: `HackMe is a national-level hackathon aiming to spark original and fruitful thinking for a more efficient and uncomplicated lifestyle in the future which majorly depends upon technology and as much as you can rely on technology, it's important to make sure that it isn't harmful to the environment which is why the prime theme of the Hackathon is "A Greener Tomorrow". Ideas are simple to generate but challenging to put into practice. If you believe you can, follow along.`,
    imgPath:
      "https://res.cloudinary.com/doraexp69/image/upload/v1664543139/tf2022/tantrafiesta-hackme_g9zaef.png",
    registrationLink:
      "https://unstop.com/hackathon/hackme-tantrafiesta-2022-indian-institute-of-information-technology-iiit-nagpur-434729",
    timeline: [
      {
        id: 1,
        title: "Registration Starts",
        date: new Date(YEAR, 8, 12, 24, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration Closes",
        date: new Date(YEAR, 8, 18, 10, 0, 0, 0),
      },
      {
        id: 3,
        title: "Tech Quiz",
        date: new Date(YEAR, 8, 18, 14, 0, 0, 0),
      },
      {
        id: 4,
        title: "Quiz Round Result",
        date: new Date(YEAR, 8, 19, 20, 45, 0, 0),
      },
      {
        id: 5,
        title: "Problem Statement Reveal",
        date: new Date(YEAR, 8, 19, 23, 59, 0, 0),
      },
      {
        id: 6,
        title: "Round 1 Starts",
        date: new Date(YEAR, 8, 19, 19, 24, 0, 0),
      },
      {
        id: 7,
        title: "Round 1 Submission",
        date: new Date(YEAR, 8, 27, 2, 0, 0, 0),
      },
      {
        id: 8,
        title: "Round 1 Result",
        date: new Date(YEAR, 8, 30, 30, 0, 0, 0),
      },
      {
        id: 9,
        title: "Grand Finale",
        date: new Date(YEAR, 9, 16, 0, 0, 0, 0),
      },
      {
        id: 10,
        title: "Closing Ceremony & Results",
        date: new Date(YEAR, 9, 16, 0, 0, 0, 0),
      },
    ],
    prizes: [
      `The winner gets a cash prize worth INR 21,000`,
      `Finalist teams will get exclusive HackMe goodies.`,
      `Participation Certificate to all the Greener Tomorrow Tech Quiz qualifying teams`,
    ],
    registration_deadline: [
      new Date(YEAR, 8, 12, 24, 0, 0, 0),
      new Date(YEAR, 8, 18, 10, 0, 0, 0),
    ],
    meta: {
      description: `HackMe is a national-level hackathon aiming to spark original and fruitful thinking under the banner of TantraFiesta 2022.`,
      keywords: "HackMe, Tantrafiesta, Skills Nights IIITN",
      image:
        "https://res.cloudinary.com/doraexp69/image/upload/v1664606328/tf2022/tantrafiesta-hackme-banner.webp",
    },
  },
  {
    id: 4,
    name: "CodeFiesta",
    organizer: "Dot Slash Community",
    path: "codefiesta",
    description: `The CodeFiesta 2022, presented by DotSlash Community, is a competitive
programming contest that offers a platform for every coding geek out there,
to hone their coding skills and compete with the rising coders.
The CodeFiesta is organized under the banner of TantraFiesta 2022 on the
GeeksforGeeks Platform(Event Sponsor). The contest consists of problems
based on Algorithmic Skills, Logic Building and Data Structures, and will
cover some of the most interesting concepts involved in problem-solving.
`,
    imgPath:
      "https://res.cloudinary.com/doraexp69/image/upload/v1664543140/tf2022/tantrafiesta-codefiesta_ignxkf.png",
    registrationLink:
      "https://practice.geeksforgeeks.org/contest/codefiesta-by-iiit-nagpur",
    timeline: [
      {
        id: 1,
        title: "Registration Starts",
        date: new Date(YEAR, 8, 15, 0, 0, 0, 0),
      },
      {
        id: 2,
        title: "Coding Contest",
        date: new Date(YEAR, 9, 12, 0, 0, 0, 0),
        start: new Date(YEAR, 9, 12, 20, 0, 0, 0),
        end: new Date(YEAR, 9, 12, 22, 0, 0, 0),
      },
    ],
    prizes: ["Cash Prizes worth INR 75,000"],
    registration_deadline: [
      new Date(YEAR, 8, 15, 0, 0, 0, 0),
      new Date(YEAR, 9, 11, 10, 0, 0, 0),
    ],
    meta: {
      description: `The CodeFiesta is organized under the banner of TantraFiesta 2022 on the
GeeksforGeeks Platform(Event Sponsor), presented by DotSlash Community.`,
      keywords: "CodeFiesta, TantraFiesta, DotSlash Community",
      image:
        "https://res.cloudinary.com/doraexp69/image/upload/v1663765902/tf2022/tantrafiesta-logo.png",
    },
  },
  {
    id: 5,
    name: "CodeMin",
    organizer: "Dot Slash Community",
    path: "codemin",
    description: `CodeMin is a competitive programming contest where the participants don’t just need to solve the problems but write their code using the minimum number of characters. Solve the problems, optimize your code and shorten it. The shortest solution wins it all! 
`,
    imgPath: "/media/codemin.png",
    registrationLink: "https://www.hackerrank.com/codemin2k22",
    timeline: [
      {
        id: 1,
        title: "Registration Starts",
        date: new Date(YEAR, 8, 29, 0, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration Ends",
        date: new Date(YEAR, 9, 13, 19, 30, 0, 0),
      },
      {
        id: 3,
        title: "Coding Contest",
        date: new Date(YEAR, 9, 13, 0, 0, 0, 0),
        start: new Date(YEAR, 9, 13, 20, 0, 0, 0),
        end: new Date(YEAR, 9, 13, 22, 0, 0, 0),
      },
    ],
    prizes: ["Winner: ₹10,000", "Runner Up: ₹7,500", "2nd Runner Up: ₹5,000"],
    registration_deadline: [
      new Date(YEAR, 8, 29, 0, 0, 0, 0),
      new Date(YEAR, 9, 13, 19, 30, 0, 0),
    ],
    meta: {
      description: `The CodeMin is organized under the banner of TantraFiesta 2022 on the
Hackerrank, presented by DotSlash Community.`,
      keywords: "CodeMin, TantraFiesta, DotSlash Community",
      image: "/media/codemin.png",
    },
  },
  {
    id: 6,
    name: "Finding Nemo",
    organizer: "Udyam, E-Cell IIIT Nagpur",
    path: "finding-nemo",
    description: `Get ready to unplug, relax and refresh your creativity because
    Udyam, the E-Cell wing of IIIT Nagpur, is pleased to announce
    Finding Nemo, aintensive two-round treasure hunt
    competition. This thrilling event will take place on the 15 th of
    October. Finding Nemo is just the perfect event for you to
    ignite the inner detective hidden deep inside you. Fire your
    neurons to work, decode the clues, and get to the ultimate
    treasure. It's the super hysterical ride of mysteries and
    unrevealed secrets for the ultimate treasure-hunting event!
`,
    imgPath: "/media/finding-nemo.png",
    registrationLink: null,
    timeline: [
      {
        id: 1,
        title: "Registration Starts (On Spot)",
        date: new Date(YEAR, 9, 15, 0, 0, 0, 0),
      },
      {
        id: 2,
        title: "Round 1",
        date: new Date(YEAR, 9, 15, 11, 0, 0, 0),
      },
      {
        id: 3,
        title: "Round 2",
        date: new Date(YEAR, 9, 15, 15, 0, 0, 0),
      },
    ],
    prizes: ["Prize Pool: ₹10,000"],
    registration_deadline: [
      new Date(YEAR, 8, 29, 0, 0, 0, 0),
      new Date(YEAR, 9, 13, 19, 30, 0, 0),
    ],
    meta: {
      description: `Finding Nemo is organized under the banner of TantraFiesta 2022 at the permanent campus of IIIT Nagpur, presented by Udyam, E-Cell IIIT Nagpur.`,
      keywords: "Finding Nemo, TantraFiesta, Udyam, E-Cell IIIT Nagpur",
      image: "/media/finding-nemo.png",
    },
  },
  {
    id: 7,
    name: "Design-A-Thon",
    organizer: "Strokes",
    path: "designathon",
    description: `A designer knows he has achieved perfection, not when there is nothing left to add, but when there is nothing left to take away.
    Designathon is a two-round design hackathon organized by
    Strokes, the design club under the hood of TantraFiesta, our annual tech-fest. 
    This event consists of 2 rounds, The UX round ( Knockout Round ) and the UI round ( Finale ). `,
    imgPath:
      "https://res.cloudinary.com/doraexp69/image/upload/v1664543141/tf2022/tantrafiesta-designathon_fk37py.png",
    registrationLink:
      "https://unstop.com/hackathon/design-a-thon-tantrafiesta-2022-indian-institute-of-information-technology-iiit-nagpur-440534",
    timeline: [
      {
        id: 1,
        title: "Registration begins",
        date: new Date(YEAR, 8, 25, 12, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration ends",
        date: new Date(YEAR, 9, 6, 12, 0, 0, 0),
      },
      {
        id: 3,
        title: "Problem Statement Reveal",
        date: new Date(YEAR, 9, 8, 18, 0, 0, 0),
      },
      {
        id: 4,
        title: "UX Round Submission",
        date: new Date(YEAR, 9, 9, 24, 0, 0, 0),
      },
      {
        id: 5,
        title: "UX Round Results",
        date: new Date(YEAR, 9, 11, 12, 0, 0, 0),
      },
      {
        id: 6,
        title: "UI Round Submission",
        date: new Date(YEAR, 9, 13, 12, 0, 0, 0),
      },
      {
        id: 7,
        title: "Results",
        date: new Date(YEAR, 9, 16, 12, 0, 0, 0),
      },
    ],
    prizes: [
      "Prize pool of Rs. 21000/-",
      "Winning Team will be awarded Rs. 12000/-",
      "Runner-up Team will be awarded 9000/-",
    ],
    registration_deadline: [
      new Date(YEAR, 8, 25, 12, 0, 0, 0),
      new Date(YEAR, 9, 6, 12, 0, 0, 0),
    ],
    meta: {
      description: ` Designathon is a two-round design hackathon organized by
    Strokes, the design club under the hood of TantraFiesta.`,
      keywords: "Designathon, Tantrafiesta, Strokes IIITN",
      image:
        "https://res.cloudinary.com/doraexp69/image/upload/v1664606328/tf2022/tantrafiesta-designathon-banner.webp",
    },
  },
  {
    id: 8,
    name: "Twist 'n Turns",
    organizer: "Eklavya",
    path: "twist-n-turns",
    description: `'Twist n Turns' is a Rubik's cube competition organized by the
    sports club under the hood of TantraFiesta, our annual tech-
    fest. No pre-registration will is required for you to participate
    in this event. All present on the campus during Tantrafiesta
    will be eligible to participate. You need to solve the cube as
    fast as possible. The lightning-fast to solve will be declared the
    winner.
    `,
    imgPath: "/media/twist-n-turns.png",
    registrationLink: null,
    timeline: [
      {
        id: 1,
        title: "Registration Start (On Spot)",
        date: new Date(YEAR, 9, 16, 12, 0, 0, 0),
      },
    ],
    prizes: ["Prize pool of Rs. 21000/-"],
    registration_deadline: null,
    meta: {
      description: ` Twist n Turns is a Rubik's cube competition organized by the
      sports club under the hood of TantraFiesta, our annual tech-
      fest.`,
      keywords: "Twist N Turns, Tantrafiesta, Eklavya Sports Club",
      image: "/media/twist-n-turns.png",
    },
  },
  {
    id: 9,
    name: "Clash of Words",
    organizer: "Orator",
    path: "clash-of-words",
    description: `It is easy to think about technology but isn't it harder to put it into words? Nevertheless, none of them ever mentioned that it’s impossible! 
    The Orator Club at IIIT Nagpur presents to you one of the most requested events of the Fest, ‘Clash Of Words’ to be conducted under the hood of Tantra Fiesta 2k22, the biggest annual Tech event of IIIT Nagpur.`,
    imgPath:
      "https://res.cloudinary.com/doraexp69/image/upload/v1664543140/tf2022/tantrafiesta-clash-of-words_cbvfgv.png",
    registrationLink:
      "https://unstop.com/competition/clash-of-words-tech-debate-tantrafiesta-2022-indian-institute-of-information-technology-iiit-nagpur-438532",
    timeline: [
      {
        id: 1,
        title: "Registration begins",
        date: new Date(YEAR, 8, 17, 12, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration ends",
        date: new Date(YEAR, 8, 24, 12, 0, 0, 0),
      },
      {
        id: 3,
        title: "Topic Reveal",
        date: new Date(YEAR, 8, 25, 18, 0, 0, 0),
      },
      {
        id: 4,
        title: "Round 1 Submission",
        date: new Date(YEAR, 8, 28, 24, 0, 0, 0),
      },
      {
        id: 5,
        title: "Round 1 Results",
        date: new Date(YEAR, 8, 30, 12, 0, 0, 0),
      },
      {
        id: 6,
        title: "Topic Reveal for Round 2",
        date: new Date(YEAR, 9, 1, 12, 0, 0, 0),
      },
      {
        id: 7,
        title: "Offline Rounds",
        date: new Date(YEAR, 9, 15, 12, 0, 0, 0),
      },
      {
        id: 8,
        title: "Closing Ceremony",
        date: new Date(YEAR, 9, 16, 12, 0, 0, 0),
      },
    ],
    prizes: ["Prize pool of Rs. 11000/-"],
    registration_deadline: [
      new Date(YEAR, 8, 17, 12, 0, 0, 0),
      new Date(YEAR, 8, 24, 12, 0, 0, 0),
    ],
    meta: {
      description: `The Orator Club at IIIT Nagpur presents one of the most requested events, ‘Clash Of Words’ to be conducted under the hood of Tantra Fiesta 2k22.`,
      keywords: "Clash Of Words, TantraFiesta, Orator Club IIITN",
      image:
        "https://res.cloudinary.com/doraexp69/image/upload/v1663765902/tf2022/tantrafiesta-logo.png",
    },
  },
  {
    id: 10,
    name: "The Four Knights Game",
    organizer: "Eklavya, Sports Club IIITN",
    path: "four-knights-game",
    description: `Shatranj is a two-day chess tournament where participants from around the country
    compete and rise to victory.`,
    imgPath: "/media/four-knights-game.png",
    registrationLink:
      "https://unstop.com/p/the-four-knights-game-tantrafiesta-2022-indian-institute-of-information-technology-iiit-nagpur-446269",
    timeline: [
      {
        id: 1,
        title: "Registration begins",
        date: new Date(YEAR, 8, 30, 12, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration ends",
        date: new Date(YEAR, 9, 5, 12, 0, 0, 0),
      },
      {
        id: 3,
        title: "Round 1",
        date: new Date(YEAR, 9, 10, 12, 0, 0, 0),
      },
      {
        id: 4,
        title: "Round 2",
        date: new Date(YEAR, 9, 14, 12, 0, 0, 0),
      },
    ],
    prizes: ["Worth Rs.6000/-"],
    registration_deadline: [
      new Date(YEAR, 8, 30, 12, 0, 0, 0),
      new Date(YEAR, 9, 5, 12, 0, 0, 0),
    ],
    meta: {
      description: `Shatranj is a two-day chess tournament where participants from around the country
      compete and rise to victory.`,
      keywords: `The Four Knights Game, Tantrafiesta, chess tournament iiitn`,
      image: "/media/four-knights-game.png",
    },
  },
  {
    id: 11,
    name: "Tour de Force ( Valorant )",
    organizer: "Eklavya, Sports Club IIITN",
    path: "tour-de-force",
    description: `Tour De Force is our annual valorant championship organized under tantrafiesta 2k22. It is a
    single elimination tournament with a staggering prize pool of 11k, along with the finale on the
    16th of October.`,
    imgPath: "/media/tour-de-france.png",
    registrationLink: "https://forms.gle/NTd928XD14B4Mmwp7",
    timeline: [
      {
        id: 1,
        title: "Registration begins",
        date: new Date(YEAR, 9, 1, 12, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration ends",
        date: new Date(YEAR, 9, 8, 12, 0, 0, 0),
      },
      {
        id: 3,
        title: "Finale",
        date: new Date(YEAR, 9, 16, 12, 0, 0, 0),
      },
    ],
    prizes: ["Worth Rs.11000/-"],
    registration_deadline: [
      new Date(YEAR, 9, 1, 12, 0, 0, 0),
      new Date(YEAR, 9, 8, 12, 0, 0, 0),
    ],
    meta: {
      description: `Tour De Force is our annual valorant championship organized under tantrafiesta 2k22. It is a
      single elimination tournament with a staggering prize pool of 11k, along with the finale on the
      16th of October.`,
      keywords: `Tour De Force,Tantrafiesta,Valorant`,
      image: "/media/tour-de-france.png",
    },
  },
  {
    id: 12,
    name: "Fall guy",
    organizer: "Eklavya, Sports Club IIITN",
    path: "fall-guy",
    description: `Fall Guys is a platform battle royale game involving up to 60 players who control
    jellybean-like creatures and compete against each other in a series of randomly selected
    mini-games, such as obstacle courses or tag. Come and join us for this fun little game with
    prizes up to Rs.3,000.`,
    imgPath: "/media/fall-guys.png",
    registrationLink: "",
    timeline: [
      {
        id: 1,
        title: "Registration begins",
        date: new Date(YEAR, 9, 16, 12, 0, 0, 0),
      },

      {
        id: 2,
        title: "Games",
        date: new Date(YEAR, 9, 16, 12, 0, 0, 0),
      },
    ],
    prizes: ["Worth Rs.2000/-"],
    registration_deadline: [
      new Date(YEAR, 9, 16, 12, 0, 0, 0),
      new Date(YEAR, 9, 16, 12, 0, 0, 0),
    ],
    meta: {
      description: `Fall Guys is a platform battle royale game involving up to 60 players who control
      jellybean-like creatures and compete against each other in a series of randomly selected
      mini-games, such as obstacle courses or tag. Come and join us for this fun little game with
      prizes up to Rs.3,000.`,
      keywords: `Fall Guy,Tantrafiesta,Eklavya iiitn`,
      image: "",
    },
  },
  {
    id: 13,
    name: "MayMay",
    organizer: "Probe, Student Media Body of IIITN",
    path: "maymay",
    description: `PROBE, The Student Media Body of IIITN, brings you MayMay, a meme-making fun competition. 
    If some scenes ooze out your unnoticed comic humor, then this event is meant just for you to showcase your skills. 
    If you believe you can make people laugh with your relatable-to-life memes, go on Create, share, and make people laugh.`,
    imgPath:
      "https://res.cloudinary.com/doraexp69/image/upload/v1664606764/tf2022/tantrafiesta-maymay.png",
    registrationLink:
      "https://unstop.com/hackathon/maymay-meme-humour-event-tantrafiesta-2022-indian-institute-of-information-technology-iiit-nagpur-443597",
    timeline: [
      {
        id: 1,
        title: "Registration begins",
        date: new Date(YEAR, 8, 28, 12, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration ends",
        date: new Date(YEAR, 9, 12, 24, 0, 0, 0),
      },
      {
        id: 3,
        title: "Meme Submission",
        date: new Date(YEAR, 9, 12, 24, 0, 0, 0),
      },
    ],
    prizes: ["Winner: ₹1000/-", "Runner up: ₹500/-", "3rd Place: ₹250/-"],
    registration_deadline: [
      new Date(YEAR, 8, 28, 12, 0, 0, 0),
      new Date(YEAR, 9, 12, 12, 0, 0, 0),
    ],
    meta: {
      description: `The Probe Student Media Body at IIIT Nagpur presents one of the most requested events, 'MayMay' to be conducted under the hood of Tantra Fiesta 2022.`,
      keywords: "MayMay, TantraFiesta, Probe Student Media Body IIITN",
      image:
        "https://res.cloudinary.com/doraexp69/image/upload/v1664606328/tf2022/tantrafiesta-maymay-banner.webp",
    },
  },
  {
    id: 14,
    name: "RoboRumble",
    organizer: "Iotics",
    path: "robo-rumble",
    description: `Robo Rumble is a flagship robot competition organized by the Iotics Club of IIITN, under the banner of TantraFiesta 2k22,  the biggest annual Tech Fest of IIIT Nagpur. Here you get an exciting and thrilling experience in the view sight. Feel the rumbling of robocars on the tracks, plenty of obstacles, and the boasting show of Robo-mechanical strength in Tug of War. Each and Every second of this event will be filled with the intense mechanical roaring of the R-cars and variating projections of the winning leads.`,
    imgPath:
      "https://res.cloudinary.com/doraexp69/image/upload/v1664543141/tf2022/tantrafiesta-robo-rumble_nz6rxi.png",
    registrationLink:
      "https://unstop.com/competition/robo-rumble-tantrafiesta-2022-indian-institute-of-information-technology-iiit-nagpur-439597",
    timeline: [
      {
        id: 1,
        title: "Registration begins",
        date: new Date(YEAR, 8, 20, 12, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration ends",
        date: new Date(YEAR, 8, 25, 12, 0, 0, 0),
      },
      {
        id: 3,
        title: "Online Screening Round deadline",
        date: new Date(YEAR, 8, 30, 24, 0, 0, 0),
      },
      {
        id: 4,
        title: "Results Display",
        date: new Date(YEAR, 9, 2, 12, 0, 0, 0),
      },
      {
        id: 5,
        title: "Inspection Round",
        date: new Date(YEAR, 9, 15, 12, 0, 0, 0),
        start: new Date(YEAR, 9, 15, 10, 0, 0, 0),
        end: new Date(YEAR, 9, 15, 11, 0, 0, 0),
      },
      {
        id: 6,
        title: "Racing",
        date: new Date(YEAR, 9, 15, 12, 0, 0, 0),
        start: new Date(YEAR, 9, 15, 11, 0, 0, 0),
        end: new Date(YEAR, 9, 15, 13, 0, 0, 0),
      },
      {
        id: 7,
        title: "Finale(Tug of War)",
        date: new Date(YEAR, 9, 15, 12, 0, 0, 0),
        start: new Date(YEAR, 9, 15, 15, 30, 0, 0),
        end: new Date(YEAR, 9, 15, 16, 30, 0, 0),
      },
    ],
    prizes: [
      "Prize pool of Rs. 22500/-",
      "Winning Team will be awarded Rs. 15000/-",
      "Runner-up Team will be awarded 7500/-",
    ],
    registration_deadline: [
      new Date(YEAR, 8, 20, 12, 0, 0, 0),
      new Date(YEAR, 8, 25, 12, 0, 0, 0),
    ],
    meta: {
      description: `Robo Rumble is a flagship robot competition organized by the Iotics Club of IIITN, under the banner of TantraFiesta 2k22`,
      keywords: "Robo Rumble, Tantrafiesta, iotics iiitn",
      image:
        "https://res.cloudinary.com/doraexp69/image/upload/v1664606328/tf2022/tantrafiesta-robo-rumble-banner.webp",
    },
  },
  {
    id: 15,
    name: "Quizzes",
    organizer: "Probe, Student Media Body of IIITN",
    path: "quizzes",
    description: `Who doesn't love to play a short little quiz? And that too when it rewards you for beating
    the scoreboard. This year's TantraFiesta brings you a unique opportunity to grab a quick
    cash prize.
    `,
    imgPath: "/media/event-name.png",
    registrationLink: null,
    timeline: [
      {
        id: 1,
        title: "Green Technology",
        date: new Date(YEAR, 9, 15, 22, 0, 0, 0),
      },
      {
        id: 2,
        title: " Movies and Entertainment",
        date: new Date(YEAR, 9, 15, 22, 0, 0, 0),
      },
      {
        id: 3,
        title: "Quiz Day",
        date: new Date(YEAR, 9, 15, 22, 0, 0, 0),
      },
    ],
    prizes: ["Winner: Rs.2000/-"],
    registration_deadline: [
      new Date(YEAR, 9, 15, 12, 0, 0, 0),
      new Date(YEAR, 9, 15, 12, 0, 0, 0),
    ],
    meta: {
      description: `Who doesn't love to play a short little quiz? And that too when it rewards you for beating
      the scoreboard. This year's TantraFiesta brings you a unique opportunity to grab a quick
      cash prize.`,
      keywords: "QUIZZ, Tantrafiesta,iiitn",
      image: "",
    },
  },
  {
    id: 16,
    name: "Scienfiesta",
    organizer: "IIITN",
    path: "scienfiesta",
    description: `Scienfiesta, is an awareness program targeted at schools to promote sustainable
    technology and its use with the help of an exhibition. We at TantraFiesta ought to promote
    green tech amongst the upcoming generation along with rewards for their hard work and
    innovation.    
    `,
    imgPath: "/media/event-name.png",
    registrationLink: "dummy",
    timeline: [
      {
        id: 1,
        title: "Registration Start",
        date: new Date(YEAR, 8, 27, 12, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration End",
        date: new Date(YEAR, 9, 5, 12, 0, 0, 0),
      },
      {
        id: 3,
        title: "Science Exhibition",
        date: new Date(YEAR, 9, 16, 12, 0, 0, 0),
      },
    ],
    prizes: [
      "1 st Place: INR 10,000 Cash, Trophy and Certificate.",
      "2 nd Place: INR 7,500 Cash, Trophy, and Certificate.",
      "3 rd Place: INR 5,000 Cash, Trophy, and Certificate.",
    ],
    registration_deadline: [
      new Date(YEAR, 8, 27, 12, 0, 0, 0),
      new Date(YEAR, 9, 5, 12, 0, 0, 0),
    ],
    meta: {
      description: `Scienfiesta, is an awareness program targeted at schools to promote sustainable
      technology and its use with the help of an exhibition. We at TantraFiesta ought to promote
      green tech amongst the upcoming generation along with rewards for their hard work and
      innovation.`,
      keywords: "Scienfiesta, Tantrafiesta,Science Exhibition iiitn",
      image: "",
    },
  },
  {
    id: 17,
    name: "Game Jam",
    organizer: "Dimensions",
    path: "game-jam",
    description: `Game Jam is an exciting single-round online mind-boggling competition where the teams
      (of 1-2 students) will be building a one-level 2D game (similar to Arcade, Platformer, etc.)
      that is to be judged on the basis of predefined parameters by the organizing committee.
      The games developed will then be given out to the audience(both offline and online) to
      vote out for the best ones. in order to be eligible to qualify for the finale. Access to all the
      games will be given to the audience (both online and offline) and they would vote for the
      best one. It's solely on the basis of the number of votes a particular game gets, the winning
      team would be rewarded and they take away the magnificent cash prize and other goodies
      back home.
      `,
    imgPath: "/media/gamejam.png",
    registrationLink: "dummy",
    timeline: [
      {
        id: 1,
        title: "Registration Start",
        date: new Date(YEAR, 8, 30, 18, 0, 0, 0),
      },
      {
        id: 2,
        title: "Registration End",
        date: new Date(YEAR, 9, 7, 16, 0, 0, 0),
      },
      {
        id: 3,
        title: "Theme Reveal",
        date: new Date(YEAR, 9, 7, 22, 0, 0, 0),
      },
      {
        id: 4,
        title: "Submision Ends",
        date: new Date(YEAR, 9, 9, 12, 0, 0, 0),
      },
      {
        id: 5,
        title: "Result Announcement",
        date: new Date(YEAR, 9, 16, 12, 0, 0, 0),
      },
    ],
    prizes: ["Prizes Worth : Rs.7000/-"],
    registration_deadline: [
      new Date(YEAR, 8, 30, 18, 0, 0, 0),
      new Date(YEAR, 9, 7, 16, 0, 0, 0),
    ],
    meta: {
      description: `Game Jam is an exciting single-round online mind-boggling competition where the teams
        (of 1-2 students) will be building a one-level 2D game (similar to Arcade, Platformer, etc.)
        that is to be judged on the basis of predefined parameters by the organizing committee.
        The games developed will then be given out to the audience(both offline and online) to
        vote out for the best ones. in order to be eligible to qualify for the finale. Access to all the
        games will be given to the audience (both online and offline) and they would vote for the
        best one. It's solely on the basis of the number of votes a particular game gets, the winning
        team would be rewarded and they take away the magnificent cash prize and other goodies
        back home`,
      keywords: "Game Jam, Tantrafiesta,Dimensions Gmae Jam iiitn",
      image: "/media/event-name.png",
    },
  },
];

export default events;
