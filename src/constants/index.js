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
    rmit,
    swinburne,
    imove,
    benit,
    carrent,
    jobit,
    tripguide,
    threejs,
    csharp,
    angular,
    php,
    postman,
    python,
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
        title: "Web Designer",
        icon: mobile,
    },
    {
        title: "Full Stack Developer",
        icon: backend,
    },
    {
        title: "Software Engineer",
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
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
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
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "postman",
        icon: postman,
    },
];

const experiences = [
    {
        title: "Diploma Of Information Technology",
        company_name: "RMIT University, Melbourne",
        icon: rmit,
        iconBg: "#383E56",
        date: "2018 - 2019",
        points: [
            "I have gained comprehensive knowledge in various areas related to the field of Information and Communication Technology (ICT)",
            "In particular, I have focused on building dynamic websites, where I have acquired the skills to design and develop websites that are interactive, user-friendly, and responsive",
            "Additionally, I have honed my proficiency in applying introductory object-oriented language skills, enabling me to create efficient and modular code structures for web development",
            "Moreover, I have developed a solid understanding of project management principles specific to the ICT industry, allowing me to effectively plan, execute, and oversee ICT projects, ensuring their successful completion within established constraints",
            "By combining these skills, I am well-equipped to contribute to the development of innovative and user-centric digital solutions.",
        ],
    },
    {
        title: "Bachelor Of Computer Science",
        company_name: "Swinburne University, Melbourne",
        icon: swinburne,
        iconBg: "#E6DEDD",
        date: "2019 - 2022",
        points: [
            "I have developed a strong understanding of core computer science concepts, programming languages, and problem-solving techniques.",
            "The emphasis on industry relevance has equipped me with practical skills and hands-on experience using industry tools and frameworks",
            "Additionally, the collaborative learning environment has fostered my teamwork and communication skills, preparing me for real-world work environments",
            "With access to industry connections and internship opportunities, I have gained valuable insights into the field and expanded my professional network",
            "Overall, my studies at Swinburne University have empowered me with a solid foundation and the confidence to excel in the dynamic and ever-evolving world of computer science.",
        ],
    },
    {
        title: "Designer/ Full Stack Developer",
        company_name: "IMOVE AUSTRALIA",
        icon: imove,
        iconBg: "#E6DEDD",
        date: "March 2022 - Oct 2022",
        points: [
            "In my role as a designer and full-stack developer, I played a pivotal role in both the design and development aspects of my projects",
            "I spearheaded the creation of the design and prototype for my website team, ensuring visually appealing and user-friendly interfaces. Additionally, I took the lead in devising a comprehensive plan and collaborated with my team to establish streamlined front-end and back-end processes.",
            "To enhance our project's functionality, I successfully integrated Next.js, a powerful framework, with GTFS data",
            "This integration allowed us to visualize the simulation of public transport services in Melbourne, providing users with an immersive and informative experience.",
            "Through these endeavors, I showcased my ability to combine design expertise with technical skills, resulting in innovative and impactful solutions.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "BENIT",
        icon: benit,
        iconBg: "#E6DEDD",
        date: "2020 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
