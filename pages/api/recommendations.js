// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const TechStack = [
  {
    id: 0,
    name: "C",
    image: "/images/c_logo.png",
    description: "A general-purpose programming language known for its efficiency and control.",
    documentationURL: "https://en.cppreference.com/w/c",
  },
  {
    id: 1,
    name: "C++",
    image: "/images/c++_logo.png",
    description: "An extension of C with object-oriented programming capabilities.",
    documentationURL: "https://en.cppreference.com/w/cpp",
  },
  {
    id: 2,
    name: "Java",
    image: "/images/java_logo.png",
    description: "A versatile, platform-independent programming language.",
    documentationURL: "https://dev.java/",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/images/jss-logo.png",
    description: "A lightweight, interpreted programming language for the web.",
    documentationURL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 4,
    name: "React.js",
    image: "/images/react-logo.png",
    description: "A JavaScript library for building user interfaces efficiently.",
    documentationURL: "https://react.dev/",
  },
  {
    id: 5,
    name: "Next.js",
    image: "/images/nextjs-logo.png",
    description: "A React-based framework for server-side rendering, static site generation, and building scalable web applications.",
    documentationURL: "https://nextjs.org/",
  },
  {
    id: 6,
    name: "Node.js",
    image: "/images/nodejs_logo.png",
    description: "A runtime for JavaScript that runs outside the browser.",
    documentationURL: "https://nodejs.org/",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    image: "/images/Tailwind_CSS_Logo.png",
    description: "A utility-first CSS framework for fast UI development.",
    documentationURL: "https://tailwindcss.com/",
  },
  {
    id: 8,
    name: "MongoDB",
    image: "/images/MongoDB_Logo.png",
    description: "A NoSQL database for scalable and flexible data storage.",
    documentationURL: "https://www.mongodb.com/",
  },
  {
    id: 9,
    name: "MySQL",
    image: "/images/mysql_logo.png",
    description: "A relational database management system for structured data storage.",
    documentationURL: "https://www.mysql.com/",
  },
  {
    id: 10,
    name: "PHP",
    image: "/images/php_logo.png",
    description: "A server-side scripting language for web development.",
    documentationURL: "https://www.php.net/",
  },
  {
    id: 11,
    name: "GitHub",
    image: "/images/github_logo.png",
    description: "A code hosting platform for version control and collaboration.",
    documentationURL: "https://github.com/",
  },
  {
    id: 12,
    name: "AWS",
    image: "/images/aws_logo.png",
    description: "A cloud platform offering a variety of services for computing, storage, and networking, enabling scalable and reliable cloud infrastructure.",
    documentationURL: "https://aws.amazon.com/",
  },
  {
    id: 13,
    name: "Blockchain (Ethereum)",
    image: "/images/blockchain_logo.png",
    description: "A decentralized and distributed ledger technology for secure transactions, particularly using Ethereum smart contracts.",
    documentationURL: "https://ethereum.org/en/developers/docs/",
  }
];

export default function handler(req, res) {
  res.status(200).json(TechStack);
}
