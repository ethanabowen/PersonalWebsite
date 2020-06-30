export const personal = {
    name: "Ethan Bowen",
    phoneNumber: "903-574-5008",
    email: "ethan.a.bowen@gmail.com",
    whoAmI: "Passionate, driven, concept-focused technologist eager to create meaningful products that impact lifes."
}

export const technical = [
    {
        technology: "Java",
        skillLevel: 10
    },
    {
        technology: "Python",
        skillLevel: 6
    }

]

export const jobs = [
    {
        company: "CBORD",
        title: "Advisory Software Engineer",
        startDate: "03/2020",
        endDate: "Present",
        details: [
            "Technical lead on company wide Hub integration project.",
            "Familiarization with AWS services such as functions, storage, and authentication.",
            "Introduced and harnessed IaC with Serverless and Terraform",
        ],
        site: "https://www.cbord.com/"
    },
    {
        company: "CBORD",
        title: "Software Engineer",
        startDate: "04/2019",
        endDate: "03/2020",
        details: [
            "Led external team members daily on technical and domain-specific topics.",
            "Initiated several projects and proof of concepts in an effort to push the team forward.",
            "Developed React webpages for CSGold's web migration."
        ],
        site: "https://www.cbord.com/"
    },
    {
        company: "Lockheed Martin - Skunkworks",
        title: "Software Engineer III",
        startDate: "09/2018",
        endDate: "04/2019",
        details: [
            "Built a plugin-based dependency injection library using native Java.",
            "Refactored and heavily optimized entire CI/CD pipeline via Jenkins/Groovy.",
            "Initiated more through SCRUM practices (retrospectives, code reviews, better planning)."
        ],
        site: "https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics/skunkworks.html"
    },
    {
        company: "Pier 1 Imports",
        title: "Software Engineer II",
        startDate: "04/2016",
        endDate: "09/2018",
        details: [
            "Developing a micro service architecture ecosystem to provide reliable, tolerant, and extensible Supply Chain products.",
            "Adopted the open-source mindset by actively seeking and applying new opportunities to enhance the customer experience.",
            "Wrote Generic Class Generator in Java that would populated any Java object with random values (recursively if needed)."
        ],
        site: "https://www.cbord.com/"
    },
    {
        company: "BNSF Railway",
        title: "Software Developer II",
        startDate: "09/2012",
        endDate: "04/2016",
        details: [
            "Drive preventative mechanical derailment efforts on WebSphere, Java, UNIX, and TIBCO platforms.",
            "Conceived, designed, developed, and implemented “Train Matching” software that aggregates multiple real-time data feeds into a solitary result.",
            "Led several initiatives for system optimization and stability.",
            "Resolved numerous, rigorous on-call production issues."
        ],
        site: "https://www.bnsf.com/"
    },
    {
        company: "RTL Genomics",
        title: "Intern",
        startDate: "11/2011",
        endDate: "03/2012",
        details: [
            "Assist and create stream line automation of DNA analysis processes using C#,Python, and UNIX.",
            "Ground up creation of a multithreaded Server-Client application using C#’s TCP API."
        ],
        site: "https://rtlgenomics.com/"
    },
    {
        company: "Halliburton",
        title: "Intern",
        startDate: "06/2011",
        endDate: "08/2011",
        details: [
            "Creating in-house C# applications used to meta-manage data from a database.",
            "Familiarized selfwith FORTRANandVisualBasic andembeddedDLLs into otherlanguages."
        ],
        site: "https://www.halliburton.com/"
    },
    {
        company: "Motio Inc.",
        title: "Intern",
        startDate: "05/2010",
        endDate: "08/2010",
        details: [
            "Familiarized self with IBM Cognos BI environment while applying to it programming.",
            "Programmed on MotioPI, a java - based product used to accompany the IBMCognos platform."
        ],
        site: "https://motio.com/"
    }
]

export const education = [
    {
        school: "Texas Tech University",
        seal: "https://www.ttu.edu/traditions/images/SEAL.jpg",
        degree: "Bachelor's of Science in Computer Science",
        year: 2012
    },
    {
        school: "University of Texas at Arlington",
        seal: "https://www.uta.edu/ucomm/identity/pix/UTA-color-seal.jpg",
        degree: "Master’s of Science in Computer Science",        
        year: 2016
    }
]

export default {
    jobs, education
}