import {
      mobile,
      backend,
      creator,
      web,
      javascript,
      typescript,
      html,
      css,
      reactjs,
      redux,
      tailwind,
      nodejs,
      mongodb,
      git,
      figma,
      docker,
      meta,
      rungtatech,
      tesla,
      shopify,
      carrent,
      jobit,
      // tripguide,
      threejs,
      hostelApp,
      backend_node,
      dsa
    } from "../assets";
    
    export const navLinks = [
      {
        id: "about",
        title: "About",
      },
      {
        id: "work",
        title: "Work",
      },
      {
        id: "contact",
        title: "Contact",
      },
    ];
    
    const services = [
      {
        title: "Web Developer",
        icon: web,
      },
      {
        title: "React Developer",
        icon: mobile,
      },
      {
        title: "Backend Developer",
        icon: backend,
      },
      {
        title: "Competitive Programmer",
        icon: creator,
      },
    ];
    
    const technologies = [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      // {
      //   name: "TypeScript",
      //   icon: typescript,
      // },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
      {
        name: "git",
        icon: git,
      },
      // {
      //   name: "figma",
      //   icon: figma,
      // },
      // {
      //   name: "docker",
      //   icon: docker,
      // },
    ];
    
    const experiences = [
      {
        title: "Node.js Backend Developer",
        company_name: "Rungta Tech",
        icon: rungtatech,
        iconBg: "#383E56",
        date: "September 2024 - December 2024",
        points: [
          "Developed and maintained the backend for a comprehensive Hostel Management System using Node.js, catering to multiple user roles including students, wardens, gate guards, and super admins.",
          "Designed and implemented QR code-based functionalities for:",
          "Attendance tracking: Each student is assigned a unique QR code used for marking daily attendance.",
          "Outing pass generation: A dynamic QR code-based outing pass is generated daily, valid for 12-24 hours, to manage student movements efficiently.",
          "Collaborated with cross-functional teams, including frontend developers and designers, to ensure seamless integration and functionality across the system's four applications.",
          "Participated in code reviews, ensuring clean, efficient, and maintainable code while providing constructive feedback to peers.",
          "Leveraged technologies like Express.js, MongoDB, and RESTful APIs to deliver scalable and robust backend solutions.",
        ],
        source_code_link: "https://github.com/ku12al/HM-system",
      },
      // {
      //   title: "React Native Developer",
      //   company_name: "Tesla",
      //   icon: tesla,
      //   iconBg: "#E6DEDD",
      //   date: "Jan 2021 - Feb 2022",
      //   points: [
      //     "Developing and maintaining web applications using React.js and other related technologies.",
      //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //     "Implementing responsive design and ensuring cross-browser compatibility.",
      //     "Participating in code reviews and providing constructive feedback to other developers.",
      //   ],
      // },
      // {
      //   title: "Web Developer",
      //   company_name: "Shopify",
      //   icon: shopify,
      //   iconBg: "#383E56",
      //   date: "Jan 2022 - Jan 2023",
      //   points: [
      //     "Developing and maintaining web applications using React.js and other related technologies.",
      //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //     "Implementing responsive design and ensuring cross-browser compatibility.",
      //     "Participating in code reviews and providing constructive feedback to other developers.",
      //   ],
      // },
      // {
      //   title: "Full stack Developer",
      //   company_name: "Meta",
      //   icon: meta,
      //   iconBg: "#E6DEDD",
      //   date: "Jan 2023 - Present",
      //   points: [
      //     "Developing and maintaining web applications using React.js and other related technologies.",
      //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //     "Implementing responsive design and ensuring cross-browser compatibility.",
      //     "Participating in code reviews and providing constructive feedback to other developers.",
      //   ],
      // },
    ];
    
    const testimonials = [
      {
        testimonial:
          "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        testimonial:
          "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial:
          "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ];
    
    const projects = [
      {
        name: "E-commerce Platform",
        description:
          " Engineered an E-commerce platform with a robust authentication system and product management features using Node.js, Express, and MongoDB. Integrated React to build a dynamic and responsive front-end Integrated Nodemailer inside the web for verification user",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "NodeJs",
            color: "red-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
          {
            name: "mongodb",
            color: "green-text-gradient",
          },
        ],
        image: carrent,
        source_code_link: "https://github.com/ku12al/e-commerce",
      },
      {
        name: "Weather application",
        description:
          "Engineered a real-time weather application using OpenWeather API to fetch weather data based on user location dynamically. Improved API call efficiency.  Implemented frontend components using Handlebars (hbs) and Embedded JavaScript (ejs) to create dynamic and responsive user interfaces",
        tags: [
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
          {
            name: "restapi",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "pink-text-gradient",
          },
          {
            name: "NodeJs",
            color: "red-text-gradient",
          },
        ],
        image: jobit,
        source_code_link: "https://github.com/ku12al/weathernewproject",
      },
      {
        name: "Hostel Mangement System",
        description:
          "Solely developed the backend of a Hostel Management System, managing student registration and attendance processes. Engineered RESTful API endpoints using Node.js and Express.js for efficient data flow and management.",
        tags: [
          {
            name: "Node Js",
            color: "blue-text-gradient",
          },
          {
            name: "MongoDb",
            color: "green-text-gradient",
          },
          {
            name: "ExpressJs",
            color: "pink-text-gradient",
          },
        ],
        image: hostelApp,
        source_code_link: "https://github.com/ku12al/HM-system",
      },
    ];

    const certificates = [
      {
        name: "Node Js Backend Mystry",
        description:
          "I successfully completed a comprehensive Node.js certification from Coding Spoon, where I gained hands-on experience in building scalable backend applications. This certification covered core Node.js modules, Express.js, RESTful APIs, asynchronous programming, and MongoDB integration. It solidified my backend development skills and enhanced my ability to build real-world applications using modern JavaScript technologies.",
        image: backend_node,
        source_code_link: "https://drive.google.com/file/d/1Hzee1FRMpafKBFiY18t-iN3t4DI4ag5X/view?usp=sharing",
      },
      {
        name: "Data Structure and Algorithm",
        description:
          "Successfully completed a comprehensive DSA course using C++ from Coding Spoon. The course covered core concepts like arrays, strings, linked lists, stacks, queues, trees, graphs, recursion, dynamic programming, and more. Practiced solving real-world problems and improved my algorithmic thinking, problem-solving ability, and C++ proficiency.",
        image: dsa,
        source_code_link: "https://drive.google.com/file/d/14XKG0l_LJ0oQ9OsSc71a_20eq7zTgL3-/view",
      },
      {
        name: "SIH 2023 Co-ordinator Certificate",
        description:
          "I received the SIH 2023 Coordinator Certificate for successfully organizing and managing the internal Smart India Hackathon activities at my college. As a coordinator, I facilitated team formation, guided participants through the submission process, and ensured smooth communication between teams and organizers. This experience enhanced my leadership, communication, and organizational skills while contributing to one of India's largest innovation events.",
        image: hostelApp,
        source_code_link: "https://github.com/ku12al/HM-system",
      },
      {
        name: "SIH 2024 Co-ordinator Lead Certificate",
        description:
          "Honored with the SIH 2024 Coordinator Lead Certificate for taking a leadership role in organizing the Smart India Hackathon at my college. As the Lead Coordinator, I was responsible for overseeing the entire internal hackathon process — from team registration and idea validation to mentoring and final submissions. This role allowed me to collaborate with faculty and students, sharpen my leadership and management skills, and contribute to fostering innovation at the grassroots level.",
        image: hostelApp,
        source_code_link: "https://github.com/ku12al/HM-system",
      },
      {
        name: "hackathon participant",
        description:
          "Solely developed the backend of a Hostel Management System, managing student registration and attendance processes. Engineered RESTful API endpoints using Node.js and Express.js for efficient data flow and management.",
        image: hostelApp,
        source_code_link: "https://github.com/ku12al/HM-system",
      },
    ];
    
    export { services, experiences, technologies, projects, testimonials, certificates};
