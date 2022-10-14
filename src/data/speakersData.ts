const YEAR = 2022;
const MONTH = 9;

const speakersData = [
  {
    id: 1,
    name: "Sandeep Jain",
    imgPath: "/media/speakers/sandeep-jain.png",
    type: "Tech Talk",
    organizer: "GeeksForGeeks",
    headline: `Presents an ingenious talk on IT Industries & Internship Preparation`,
    designation: "Founder and CEO at Geeks For Geeks",
    startTime: new Date(YEAR, MONTH, 15, 14, 0, 0, 0),
    endTime: new Date(YEAR, MONTH, 15, 15, 0, 0, 0),
    venue: "In front of Academic Block A, IIIT Nagpur",
    imgSizes: {
      section: [200, 200],
      page: [400, 400],
    },
  },
  {
    id: 2,
    name: "Dr. Bhim Singh",
    imgPath: "/media/speakers/bhim-singh.png",
    type: "Tech Talk",
    organizer: "GeeksForGeeks",
    headline: `Presents an ingenious talk on IT Industries & Internship Preparation`,
    designation: "SERB National Science Chair & Emeritus Professor, IIT Delhi",
    startTime: new Date(YEAR, MONTH, 15, 14, 0, 0, 0),
    endTime: new Date(YEAR, MONTH, 15, 15, 0, 0, 0),
    venue: "In front of Academic Block A, IIIT Nagpur",
    imgSizes: {
      section: [230, 200],
      page: [400, 400],
    },
  },
  {
    id: 3,
    name: "Sreenivas Voruganti",
    imgPath: "/media/speakers/sreenivas-voruganti.png",
    type: "Tech Talk",
    organizer: "GeeksForGeeks",
    headline: `Presents an ingenious talk on IT Industries & Internship Preparation`,
    designation: "Team Leader Google SDN, Banglore",
    startTime: new Date(YEAR, MONTH, 15, 14, 0, 0, 0),
    endTime: new Date(YEAR, MONTH, 15, 15, 0, 0, 0),
    venue: "In front of Academic Block A, IIIT Nagpur",
    imgSizes: {
      section: [250, 220],
      page: [400, 400],
    },
  },
  {
    id: 4,
    name: "Arsh Goyal",
    imgPath: "/media/speakers/arsh-goyal.png",
    type: "Tech Talk",
    organizer: "GeeksForGeeks",
    headline: `Presents an ingenious talk on IT Industries & Internship Preparation`,
    designation: "Educational YouTuber, Senior SWE at Samsung India",
    startTime: new Date(YEAR, MONTH, 15, 14, 0, 0, 0),
    endTime: new Date(YEAR, MONTH, 15, 15, 0, 0, 0),
    venue: "In front of Academic Block A, IIIT Nagpur",
    imgSizes: {
      section: [200, 200],
      page: [400, 400],
    },
  },
];

export default speakersData;
