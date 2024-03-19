/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ska",
  title: "Hi all, I'm Iskander",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SkaGitWork",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "denguezli.iskander@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Creation of several evacuation plans in the security field on Autocad"
    )
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Auto Cad 2D",
      fontAwesomeClassname: "fas fa-building"
    }
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Higher Institute of Applied Sciences and Technology of Sousse",
      logo: require("./assets/images/issat2.png"),
      subHeader: "Diploma in Computer Systems Engineering",
      duration: "2019 - 2022"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName:
        "Higher Institute of Applied Sciences and Technology of Sousse",
      logo: require("./assets/images/issat2.png"),
      subHeader: "Master's Degree in Pervasive Computer Systems",
      duration: "2022 - Ongoing"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Auto Cad",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Architect",
      company: "MIAC",
      companylogo: require("./assets/images/MIAC.png"),
      date: "June 2018 – Present",
      desc: "Creation of several evacuation plans in the security field on Autocad for different companies (Elegance Shoes, Hutchinson Tunisie, AMS, General Fish)"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Final Course Project Internship",
      company: "MIAC / SWATECH",
      companylogo: require("./assets/images/MIAC.png"),
      date: "Feb 2022 - Jul 2022",
      desc: "The goal of this project is to create an IoT system that detects failures or the lack of firefighting equipment. This system enables data exchange between a nodeMCU card, pressure sensors for RIAs, and dry contact sensors for fire extinguishers. After deployment, we can measure RIA terminal pressures to identify failures or detect missing fire extinguishers."
    },
    {
      role: "Développeur Full-Stack",
      company: "Creo",
      companylogo: require("./assets/images/creo.webp"),
      date: "2021 – 2022 for 6 months",
      desc: "Digital transformation, development of static websites, e-commerce platforms, web and mobile applications, Graphic design. Corporate identity, digital marketing, SEO... \n\nDevelopment of a management platform for a doctor's office."
    },
    {
      role: "Co-host",
      company: "MIAC",
      companylogo: require("./assets/images/MIAC.png"),
      date: "Feb 2024 – Ongoing",
      desc: "Conducting training in the areas of building safety, vehicle fleet and vehicle maintenance."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/primo.png"),
      projectName: "Primo Bike Shop",
      projectDesc:
        "This is a landing page for a fictional bike shop. It's made with HTML and CSS. It contains 5 sections: services, about, clients, milestones, and contact.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://primo-bike-shop.pages.dev/"
        }
      ]
    },
    {
      image: require("./assets/images/kinedoc.png"),
      projectName: "Kine Doc",
      projectDesc:
        "KineDoc is an innovative platform that allows you to quickly find a doctor closest to you and schedule an appointment online for free.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kinedocrdv.fr/"
        }
      ]
    },
    {
      image: require("./assets/images/iberConseil.png"),
      projectName: "Iber Conseil",
      projectDesc:
        "IBER, presents itself as your trusted advisor in the real estate world.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://iber.pages.dev/"
        }
      ]
    },
    {
      image: require("./assets/images/MIAC.png"),
      projectName: "MIAC Consulting",
      projectDesc:
        "MIAC Consulting was made to promote client services and trainings. It contains several pages: Services, Training, and Contact.\nTechnologies used: HTML, CSS, JavaScript and Next.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.miaconsulting.com.tn/"
        }
      ]
    },
    {
      image: require("./assets/images/nasr website.png"),
      projectName: "Nasr Hospitality",
      projectDesc:
        'Nasr Hospitality Consulting was made to promote client services and trainings. It contains several pages: "About us", "Services", "Career", "Online Certificate" and "News". Also it\'s translated in 4 different languages.\nTechnologies used: HTML, CSS, JavaScript, PHP',
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nasrhospitality.com"
        }
      ]
    },
    {
      image: require("./assets/images/toDoApp.webp"),
      projectName: "To Do App",
      projectDesc:
        'The app contains a light and dark mode filters to display only completed or in progress to-do and finally a "drag and drop" feature to rearrange your to-do.',
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skagitwork.github.io/Todo-app-website/"
        }
      ]
    },
    {
      image: require("./assets/images/rockPaperScissors.webp"),
      projectName: "Rock Paper Scissors",
      projectDesc:
        "Probably the toughest one, it's a Rock Paper Scissors game, you choose what you want to play, then after a moment, you see what the house picked.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skagitwork.github.io/Rock-Paper-Scissors-game-Website/"
        }
      ]
    },
    {
      image: require("./assets/images/calculatorApp.webp"),
      projectName: "Calculator",
      projectDesc:
        "This is the first App I created when I got back to web development. Although it's a simple project, it was quite challenging.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skagitwork.github.io/"
        }
      ]
    },
    {
      image: require("./assets/images/launchCountDownApp.webp"),
      projectName: "Launch Count Down App",
      projectDesc:
        "I never expected to get such a result from a simple countdown. As you can see, it's a web countdown.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skagitwork.github.io/Launch-countdown-timer-Website-Challenge"
        }
      ]
    },
    {
      image: require("./assets/images/3columnPreviewCardApp.webp"),
      projectName: "3-Column Preview Card",
      projectDesc:
        "This project was an easy one, it's a good way to practice layout and responsiveness.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skagitwork.github.io/3-column-preview-card-component--Website/"
        }
      ]
    },
    {
      image: require("./assets/images/statsPreviewCardComponent.webp"),
      projectName: "Stats preview card component",
      projectDesc: "A simple frontend project.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skagitwork.github.io/Stats-preview-card-component-Website/"
        }
      ]
    },
    {
      image: require("./assets/images/sunnySieAgencyLandingPage.webp"),
      projectName: "Sunnyside agency landing page",
      projectDesc:
        "My first landing page, or my second project. It's a landing page for both mobile and desktop.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skagitwork.github.io/Sunnyside-agency-landing-page/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title:
        "Adobe PhotoShop & Adobe Illustrator, IT service institute of the Sahel (ISIS)",
      // subtitle:
      // "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/ISIS.jpg"),
      imageAlt: "IT service institute of the Sahel (ISIS) Logo",
      footerLink: [
        //   {
        //     name: "Certification",
        //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        //   },
        //   {
        //     name: "Award Letter",
        //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        //   },
        //   {
        //     name: "Google Code-in Blog",
        //     url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        //   }
      ]
    },
    {
      title: "Surveillance Cameras, Alarm Systems and Time Clock, Zoom Academy",
      // subtitle:
      // "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/zoomAcademy.jpg"),
      imageAlt: "Zoom Academy Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 92 640 172",
  email_address: "denguezli.iskander@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
