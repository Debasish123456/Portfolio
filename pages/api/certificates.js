// pages/api/certificates.js

const certificates = [
{
  id: 1,
  title: "Programming in JAVA",
  issuer: "NPTEL",
  year: "2023",
  image: "/certificates/nptel java.png",
  detail:
    "Completed an 8-week NPTEL course covering core Java and basic GUI programming."
},

  {
    id: 2,
    title: "Web Developer Internship",
    issuer: "PLASMID Pvt. Ltd.",
    year: "2024",
    image: "/certificates/PLASMID.jpeg",
    detail:
      "Completed a 3-month internship focusing on building dynamic Web Applications."
  },
  {
    id: 3,
    title: "Programming Using JAVA",
    issuer: "Lex INFOSYS",
    year: "2025",
    image: "/certificates/Infy java.png",
    detail:
      "Learned Core Java concepts, like OOP, Error Handling, Observer Design Pattern."
  },
  {
    id: 4,
    title: "Data Structure & Algorithm",
    issuer: "Lex INFOSYS",
    year: "2025",
    image: "/certificates/Infy dsa.png",
    detail:
  "Covered arrays, linked lists, stacks, queues, trees, graphs, and time–space complexity."

  },
    {
    id: 5,
    title: "Database Management System",
    issuer: "Lex INFOSYS",
    year: "2025",
    image: "/certificates/Infy dbms.png",
    detail:
  "Covered database fundamentals including SQL queries, normalization,relational schemas."

  },

];

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     res.status(200).json(certificates);
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }

export default function handler(req, res) {
    res.status(200).json(certificates)
}
