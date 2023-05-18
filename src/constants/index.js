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
    ptemaster,
    pokemonapp,
    employee_polls,
    threejs,
    csharp,
    angular,
    php,
    postman,
    python,
    myread,
    comparensave,
    energy
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
            "The software developer did an excellent job in ensuring that the software is bug-free and stable. I have been using it for a while now, and I have not encountered any issues or crashes.",
        name: "Julie Duong",
        designation: "Accountant",
        company: "SIXT",
        image: "../../public/julie_duong.png",
    },
    {
        testimonial:
            "Good habit working attitude, proactive and enthusiasm.",
        name: "Hieu Mai",
        designation: "CEO",
        company: "BENIT",
        image: "../../public/hieu_mai.png",
    },
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Jay proved me wrong.",
        name: "Johnny Nguyen",
        designation: "Compression Manager",
        company: "Australian Pharmaceutical Manufacturers (APM)",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
];

const projects = [
    {
        name: "PTE Master",
        description:
            "PTE Master & PTE Platform are online Learning system with integration to AI(NLP) for students practice English to take English Test PTE",
        tags: [
            {
                name: "Laravel-PHP",
                color: "blue-text-gradient",
            },
            {
                name: "Kubernetes",
                color: "green-text-gradient",
            },
            {
                name: "Dockers",
                color: "green-text-gradient",
            },
            {
                name: "Angular",
                color: "pink-text-gradient",
            },
            {
                name: "AWS",
                color: "yellow-text-gradient",
            },
            {
                name: "Microservices",
                color: "yellow-text-gradient",
            },
        ],
        image: ptemaster,
        source_code_link: "https://www.masterpte.com.au/",
    },
    {
        name: "Comparensave",
        description:
            "I have maintained and refactor code from new design of the website compare 100s of home loans, investment loans and SMSF loans from Australia’s most trusted lenders.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "REST API",
                color: "green-text-gradient",
            },
            {
                name: "Jira + Wiki",
                color: "yellow-text-gradient",
            },
            {
                name: "Slack",
                color: "yellow-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: comparensave,
        source_code_link: "https://comparensave.com.au/",
    },
    {
        name: "Pokemon APP",
        description:
            "Creating a website can search and display all Pokemon Data as well as showing details of each pokemon through APIs with the purpose of practicing React Skills.",
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
                name: "CSS",
                color: "pink-text-gradient",
            },
            {
                name: "HTML",
                color: "yellow-text-gradient",
            },
            {
                name: "Javascript",
                color: "yellow-text-gradient",
            },
            {
                name: "Postman",
                color: "yellow-text-gradient",
            },
        ],
        image: pokemonapp,
        source_code_link: "https://pokemon-dw1isp5g6-jayt98.vercel.app/gen-i",
    },
    {
        name: "Employee Polls",
        description:
            "I built a web app that lets an employee can login and create polls for coworkers. The process goes like this: An employee is asked a question in the form: 'Would you rather [option A] or [option B] ?'. Answering 'neither' or 'both' is not possible.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "blue-text-gradient",
            },
            {
                name: "API data",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "yellow-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: employee_polls,
        source_code_link: "https://employee-polls-lc6cpkmvw-jayt98.vercel.app/login?redirectTo=/",
    },
    {
        name: "My Reader",
        description:
            "In the MyReads project, I created a bookshelf app that allows me to select, search and categorize books I have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that I used to persist information as I interact with the application",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "API data",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "yellow-text-gradient",
            },
            {
                name: "Postman",
                color: "yellow-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: myread,
        source_code_link: "https://my-reads-puce.vercel.app/",
    },
    {
        name: "Data-Visualisation - Sustainability: Energy",
        description:
            "In the project we focused on visualisations related to Energy production and or use. I worked as a team leader in this project; I managed my team and divided the tasks among the team member. Furthermore, I also tested and supported my code team.",
        tags: [
            {
                name: "D3.js",
                color: "blue-text-gradient",
            },
            {
                name: "Data.CSV",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "yellow-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: energy,
        source_code_link: "https://github.com/JayT98/Data-VIsualisation-Group",
    },
];

export { services, technologies, experiences, testimonials, projects };
