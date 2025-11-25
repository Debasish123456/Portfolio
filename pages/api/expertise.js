const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I specialize in MERN stack development using MongoDB, Express.js, React.js, and Node.js. I’ve built dynamic, full-featured web apps with JWT authentication, API integration, admin dashboards, and MongoDB Atlas. From frontend design to backend logic, I ensure responsive UI, secure data flow, and clean code. My goal is always to build scalable, real-world solutions tailored to business or user needs.',
    },
    {
        id: 1,
        title: 'Java Programming',
        desc: "Java is one of my core programming languages. I’ve built multiple Java applications focusing on OOP concepts, exception handling, file operations, collections, and multithreading. I frequently solve coding challenges. My Java knowledge supports both academic and real-world backend logic development, and prepares me for working with frameworks like Spring Boot.",
    },
    {
        id: 2,
        title: 'Blockchain & Smart Contracts',
        desc: 'I’ve built decentralized apps (dApps) using Ethereum, Ganache, and Solidity. My E-Voting System project uses secure smart contracts with OTP and face authentication for voter verification. I manage blockchain logic using Web3.js and Truffle, ensuring immutability and transparency. This experience has deepened my understanding of secure, trustless systems beyond traditional applications.',
    },
    {
        id: 3,
        title: 'Authentication & Security',
        desc: "I’ve implemented secure authentication systems using JWT, OTP verification, and multi-factor face recognition. My projects include role-based access control, token validation, and secure routing. I prioritize user data protection and follow best practices in auth design, both in frontend and backend.",
    },
    {
        id: 4,
        title: 'API Development & Integration',
        desc: "I design and integrate RESTful APIs to connect frontend interfaces with backend logic. Using Express.js and Node.js, I’ve built secure APIs for user authentication, data retrieval, and admin controls. I also consume third-party APIs and handle request/response cycles efficiently to deliver smooth, real-time user experiences.",
    },
    {
        id: 5,
        title: 'GitHub & Version Control',
        desc: "I rely on GitHub for version control and collaboration. I regularly manage code through branching, pull requests, and issue tracking. I follow best practices like semantic commits, clean README files, and organized project structures. It's an essential part of my development workflow and teamwork.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
