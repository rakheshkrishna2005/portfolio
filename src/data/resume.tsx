import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rakhesh Krishna",
  initials: "P",
  url: "https://rakheshkrishna.vercel.app",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
  "Software Dev | AI/ML | SIH'24 Finalist | 🥈 Runner-up @M!NT (IITM) Hackathon | Contributor @GSSOC '24  @SWOC '25",
  summary:
    "I am an AI/ML and Software Developer with [experience](/#work) in open source and developing Deep Learning, Computer Vision, and NLP [projects](/#projects). Pursuing [B.E in Computer Science (AI & ML)](/#education), I have competed in over [5 hackathons](/#hackathons), including the Smart India Hackathon 2024 finals and securing Runner-Up in the MINT IITM Hackathon.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "SQL",
    "MongoDB",
    "PyTorch",
    "Tensorflow",
    "Scikit-learn",
    "NLTK",
    "OpenCV",
    "Postman",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "rakheshkrishnap@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rakheshkrishna2005",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rakhesh-krishna-p",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "Mail",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:rakheshkrishnap@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Social Winter of Code",
      href: "https://www.socialwinterofcode.com",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/swoc.png",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "Upcoming open-souce program.",
    },
    {
      company: "Smart India Hackathon",
      href: "https://www.sih.gov.in",
      badges: [],
      location: "Chennai, India",
      title: "Team Leader",
      logoUrl: "/sih.png",
      start: "Aug 2024",
      end: "Dec 2024",
      description:
        "Finalist of Smart India Hackathon 2024, a national level hackathon. Led a team of 6 to build a robust AI software to automate the monitoring of road construction projects.",
    },
    {
      company: "GirlScript Summer of Code",
      badges: [],
      href: "https://gssoc.girlscript.tech",
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/gssoc.png",
      start: "Oct 2024",
      end: "Nov 2024",
      description:
        "Merged 8 PRs by contributing in the field of Computer Vision, Deep Learning and Natural Language Processing.",
    },
    {
      company: "Trios Technologies",
      href: "https://triostechnology.com/about.php",
      badges: [],
      location: "Chennai, India",
      title: "Artificial Intelligence Intern",
      logoUrl: "/trios.jpeg",
      start: "Aug 2024",
      end: "Sep 2024",
      description:
        "Worked on developing a deep learning model using CNN and implemented frontend and backend server for the web app.",
    },
    {
      company: "Google Developer Student Club",
      href: "https://www.linkedin.com/company/google-developer-student-club-eec",
      badges: [],
      location: "Chennai, India",
      title: "Student Member",
      logoUrl: "/gdsc.jpeg",
      start: "Sep 2023",
      end: "Sep 2024",
      description:
        " Completed the Google Cloud Study JAM conducted in September 2023 and  Gen AI Study JAM conducted in May 2024.",
    },
  ],
  education: [
    {
      school: "SRM Easwari Engineering College",
      href: "https://srmeaswari.ac.in",
      degree: "B.E in Computer Science (AI & ML)",
      logoUrl: "/uni.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Velankanni Matriculation School",
      href: "https://vmhss.org",
      degree: "Elementary to High School",
      logoUrl: "/school.jpeg",
      start: "2007",
      end: "2022",
    },
    {
      school: "Dakshina Bharat Hindi Prachar Sabha",
      href: "https://dbhpscentral.org/PageOpen.php?page=003",
      degree: "Rashtrabasha, Hindi Language and Literature",
      logoUrl: "/dbhps.jpeg",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "SiteVision AI",
      href: "https://rakheshkrishna2005-sitevision-map.hf.space",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      description:
        "AI software to automate the monitoring of road construction projects.",
      technologies: [
        "Python",
        "PyTorch",
        "OpenCV",
        "YOLOv8",
        "UNet",
        "PyDeck",
        "NumPy",
        "MongoDB",
        "Streamlit",
      ],
      links: [
        {
          type: "Website",
          href: "https://rakheshkrishna2005-sitevision-map.hf.space",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://tinyurl.com/sitevision-ai",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/sitevision.jpg",
      video:
        "",
    },
    {
      title: "Vision X",
      href: "https://rakheshkrishna2005-vision-x.hf.space",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "A computer vision web app for real-time object tracking using Computer Vision.",
      technologies: [
        "Python",
        "PyTorch",
        "OpenCV",
        "YOLOv8",
        "NumPy",
        "Streamlit",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rakheshkrishna2005/Vision-X",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://rakheshkrishna2005-vision-x.hf.space",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://tinyurl.com/vision-x",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/visionx.jpg",
      video: "",
    },
    {
      title: "Alzheimer MRI Analyzer",
      href: "https://rakheshkrishna2005-alzheimer-mri-analyzer.hf.space",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "A deep learning application to classify 250 MRI scans for Alzheimer's stages in 1 minute.",
      technologies: [
        "Python",
        "Pandas",
        "PyTorch",
        "ResNet 50",
        "Streamlit",
      ],
      links: [
        {
          type: "Website",
          href: "https://rakheshkrishna2005-alzheimer-mri-analyzer.hf.space",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://tinyurl.com/alzheimer-mri-analysis",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/mriapp.jpg",
      video: "",
    },
    {
      title: "Disease Progression Analyzer",
      href: "https://rakheshkrishna2005-disease-progression-analyzer.hf.space",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "Developed an personalized AI to analyze disease progression with chatbot support.",
      technologies: [
        "Python",
        "LangChain",
        "Groq",
        "Llama3",
        "Streamlit",
      ],
      links: [
        {
          type: "Website",
          href: "https://rakheshkrishna2005-disease-progression-analyzer.hf.space",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://tinyurl.com/disease-progression-analyzer",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/chatbot.jpg",
      video:
        "",
    },
    {
      title: "Voting System Website",
      href: "https://github.com/rakheshkrishna2005/aiml-election",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "A voting website that I developed for my department - CSE (AI & ML).",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Flask",
        "PostgreSQL",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rakheshkrishna2005/aiml-election",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/election.jpg",
      video:
        "",
    },
    {
      title: "Open Weather",
      href: "https://open-weather.streamlit.app",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "A Weather Dashboard showing current weather data and forecasts for any city.",
      technologies: [
        "Python",
        "Plotly",
        "OpenWeather API",
        "Streamlit",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/rakheshkrishna2005/open-weather",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://open-weather.streamlit.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/openweather.jpg",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "MINT Hackathon",
      dates: "",
      location: "IIT Madras, Chennai, India",
      description:
        "Developed an AI application to automate the traffic management near schools and hospitals and won ₹10,000.",
      image:
        "/mint.jpeg",
      links: [
        {
          title: "LinkedIn Post",
          icon: <Icons.linkedin className="h-3 w-3" />,
          href: "https://www.linkedin.com/posts/easwari-engineering-college-srm-group-_srmeaswari-easwariengineeringcollege-hackathonsuccess-activity-7245645546311319552-jnU8?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Smart India Hackathon",
      dates: "",
      location: "IIT Gandhinagar, Ahmedabad, India",
      description:
        "Developed an AI software for automating road construction progress monitoring at national finals.",
      image:
        "/sih.png",
      links: [
        {
          title: "LinkedIn Post",
          icon: <Icons.linkedin className="h-3 w-3" />,
          href: "",
        },
      ],
    },
    {
      title: "SRM Datathon",
      dates: "",
      location: "IITM Reasearch Park, Chennai, India",
      description:
        "Developed an AI healthcare chatbot to assist patients with their health-related queries.",
      icon: "public",
      image:
        "/datathon.png",
      links: [
        {
          title: "LinkedIn Post",
          icon: <Icons.linkedin className="h-3 w-3" />,
          href: "https://www.linkedin.com/posts/rakhesh-krishna-p_september-2024-hackathons-activity-7248293355212693506-LuyB?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "KCG Innothon",
      dates: "",
      location: "KCG Tech, Chennai, India",
      description:
        "Developed a workforce management system to track attendance, manage schedules, and provide performance metrics.",
      image:
        "/innothon.jpeg",
      links: [
        {
          title: "LinkedIn Post",
          icon: <Icons.linkedin className="h-3 w-3" />,
          href: "https://www.linkedin.com/posts/rakhesh-krishna-p_september-2024-hackathons-activity-7248293355212693506-LuyB?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
  ],
} as const;
