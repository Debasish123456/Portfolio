const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Gandhi Engineering College',
                degree: 'MCA (Master of Computer Applications)',
                detail: "Pursuing MCA at Gandhi Engineering College under BPUT, focusing on web development, blockchain, and software engineering.",
                year: '2023-2025'
            },
            {
                id: 1,
                title: 'Chikiti Mahavidyalaya',
                degree: 'BCA (Bachelor of Computer Applications)',
                detail: "Completed BCA from Chikiti Mahavidyalaya under Berhampur University, gaining expertise in programming, database management, and software development.",
                year: '2020-2023'
            }
        ]        
    },
    {
        expCards: [
    {
        id: 1,
        title: 'PMIS Infosys Limited',
        role: 'Software Developer Internee',
        url: 'https://pminternship.mca.gov.in/',
        desc: 'A great opportunity to work with Infosys under the PMIS initiative, where I’m gaining real-world experience and industry-level skills from expert mentors.',
        year: '07/2025 - Present',
        location: 'Bhubaneswar, Odisha'
    },
    {
        id: 2,
        title: 'Plasmid Innovation',
        role: 'Web Developer Internee',
        url: 'https://plasmid.co.in/',
        desc: 'Built and improved websites using HTML, CSS, JavaScript, and React under mentorship in a remote environment.',
        year: '11/2024 - 04/2025',
        location: 'Bengaluru, Karnataka (remote)'
    },
    {
        id: 3,
        title: 'NPTEL Cloud Computing',
        role: 'Internee',
        url: 'https://onlinecourses.nptel.ac.in/',
        desc: 'Learned key cloud concepts like virtualization, IaaS, SaaS, and worked on mini-projects using cloud tools.',
        year: '01/2024 - 04/2024',
        location: 'Bhubaneswar, India'
    },
    {
        id: 4,
        title: 'NPTEL Programming in Java',
        role: 'Internee',
        url: 'https://onlinecourses.nptel.ac.in/',
        desc: 'Explored Java fundamentals, OOPs, data structures, and built small Java applications as part of coursework.',
        year: '07/2024 - 10/2024',
        location: 'Bhubaneswar, India'
    },
]

    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
