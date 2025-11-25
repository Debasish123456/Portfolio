const portfolio = [
  {
    id: 1,
    projectName: "Decentralized E-Voting System",
    image: "projects/Decentralized_Voting.png",
    projectDetail:
      "A secure and transparent voting system using MERN stack & Blockchain. Implemented Face Recognition and OTP for multi-factor authentication. Used Ganache & Metamask for deploying smart contracts.",
    technologiesUsed: [
      { tech: "ReactJS" },
      { tech: "NodeJS" },
      { tech: "MongoDB" },
      { tech: "Blockchain" },
      { tech: "OpenCV (Python)" },
    ],
  },
  {
    id: 2,
    projectName: "OTSS (Online Tiffin Service System)",
    image: "projects/otss.png",
    projectDetail:
      "A web-based tiffin service platform with online ordering and admin panel. Built using PHP, MySQL for backend, and HTML/CSS/JS for frontend.",
    technologiesUsed: [
      { tech: "HTML" },
      { tech: "CSS" },
      { tech: "JavaScript" },
      { tech: "PHP" },
      { tech: "MySQL" },
    ],
  },
  {
    id: 3,
    projectName: "Java Cafe Management System",
    image: "projects/Cafe.png",
    projectDetail:
      "Developed using Java Swing, JDBC, and MySQL. Included inventory management, admin login, and reporting features with a user-friendly GUI.",
    technologiesUsed: [
      { tech: "Java" },
      { tech: "MySQL" },
      { tech: "Core Java" },
      { tech: "Advanced Java" },
      { tech: "Java Swing" },
    ],
  },
  {
id: 4,
projectName: "Bike Vault",
image: "projects/Bike Vault.png",
projectDetail:"Bike Vault is a motorcycle info platform where users can explore brands, check specs, compare models, and read reviews with a clean and fast UI.",
technologiesUsed: [
  { tech: "ReactJS" },
  { tech: "REST API's" },
  { tech: "TailwindCSS" },
  { tech: "Node.js" },
  { tech: "MongoDB Atlas" }
],
  },

];

export default function handler(req, res) {
  res.status(200).json(portfolio);
}
