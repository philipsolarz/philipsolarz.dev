'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timeline, TimelineItem } from "@/components/timeline/timeline"
import { Briefcase, GraduationCap, Terminal, Code2, Cloud, Database, PenToolIcon as Tools } from 'lucide-react';
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"

interface TimelineEntry {
    id: string
    date: string
    title: string
    description: string
    type: 'work' | 'education'
    icon: React.ReactNode
    details: {
        organization: string
        location: string
        achievements?: string[]
        technologies?: string[]
        description: string
    }
}

const timelineEntries: TimelineEntry[] = [
    {
        id: "platform-engineer",
        date: "October 2023 - December 2024",
        title: "Platform Engineer",
        description: "Developed and maintained big data analytics and hybrid cloud platforms",
        type: "work",
        icon: <Briefcase className="h-4 w-4" />,
        details: {
            organization: "Telia Company",
            location: "Sweden",
            achievements: [
                "Migrated PostgreSQL databases to Kubernetes clusters using CloudNativePG",
                "Set up Kubernetes clusters from scratch with RKE2, Ansible, and Bash",
                "Implemented GitOps practices using ArgoCD and GitHub Actions",
                "Developed CI/CD pipelines for platform and application teams",
                "Maintained and enhanced the big data stack, including Airflow, Spark, and Trino",
                "Built self-service portals for database and platform management"
            ],
            technologies: [
                "Kubernetes",
                "Docker",
                "Terraform",
                "Ansible",
                "Prometheus",
                "GitHub Actions",
                "ArgoCD",
                "CloudNativePG",
                "Trino",
                "Airflow"
            ],
            description: "Contributed to the development and maintenance of an on-premises big data platform, supporting infrastructure and applications for multiple teams. Focused on Kubernetes, CI/CD, and user-facing automation tools."
        }
    },
    {
        id: "consultant-telia",
        date: "February 2023 - October 2023",
        title: "Consultant - Platform Engineer",
        description: "Contributed to big data and platform engineering projects as a consultant",
        type: "work",
        icon: <Briefcase className="h-4 w-4" />,
        details: {
            organization: "Academic Work (Telia Company)",
            location: "Sweden",
            achievements: [
                "Supported the migration of Hadoop-based data lake to an in-house big data platform",
                "Collaborated with teams to manage Kubernetes clusters and CI/CD pipelines",
                "Developed and maintained Docker images for application teams",
                "Improved platform reliability and scalability through automation"
            ],
            technologies: [
                "Hadoop",
                "Kubernetes",
                "Docker",
                "Bash",
                "Python",
                "Helm",
                "GitHub"
            ],
            description: "Worked with a team on transitioning from legacy Hadoop infrastructure to a new Kubernetes-based big data platform, ensuring platform readiness and user support."
        }
    },
    {
        id: "systems-analyst",
        date: "March 2021 - February 2023",
        title: "Systems Analyst",
        description: "Built data pipelines and interactive reporting tools",
        type: "work",
        icon: <Terminal className="h-4 w-4" />,
        details: {
            organization: "Voicedesk",
            location: "Sweden",
            achievements: [
                "Developed infrastructure and pipelines for data retrieval and reporting",
                "Designed and implemented a MySQL database with a Dash-based frontend",
                "Integrated multiple APIs for seamless data flow",
                "Set up and maintained virtual machines running Linux environments"
            ],
            technologies: [
                "Python",
                "MySQL",
                "Dash",
                "Linux",
                "API Integration"
            ],
            description: "Focused on creating scalable data infrastructure and tools to support reporting needs, using Python and MySQL alongside interactive visualization frameworks."
        }
    },
    {
        id: "bachelors-degree",
        date: "August 2014 - June 2021",
        title: "Bachelor's Degree in Applied Mathematics",
        description: "Studied Applied Mathematics with focus on analysis and statistics",
        type: "education",
        icon: <GraduationCap className="h-4 w-4" />,
        details: {
            organization: "Linnaeus University",
            location: "Växjö, Sweden",
            achievements: [
                "Graduated with a Bachelor's degree in Applied Mathematics",
                "Completed advanced-level courses towards a Master’s degree",
                "Conducted a thesis project on the harmonic oscillator in quantum mechanics",
                "Learned foundational programming concepts in C++ and Java"
            ],
            technologies: [
                "C++",
                "Java",
                "Statistics",
                "Analysis",
                "Algebra"
            ],
            description: "A mathematics degree with coursework in programming and data analysis. The program emphasized problem-solving, theoretical understanding, and practical application."
        }
    },
    {
        id: "gymnasium",
        date: "August 2010 - June 2013",
        title: "Technical Gymnasium with IT Specialization",
        description: "Focused on foundational programming and IT systems",
        type: "education",
        icon: <GraduationCap className="h-4 w-4" />,
        details: {
            organization: "John Bauer-Gymnasiet",
            location: "Kalmar, Sweden",
            achievements: [
                "Completed courses in C++ and Java programming",
                "Built and configured PC hardware and systems",
                "Degree project: Developed a virtual synthesizer using VST (Virtual Studio Technology)"
            ],
            technologies: [
                "C++",
                "Java",
                "Linux",
                "Hardware Configuration"
            ],
            description: "Gained foundational knowledge in programming, IT systems, and hardware configuration, with a hands-on approach to technology."
        }
    }
];



interface SkillCategory {
    name: string
    icon: React.ReactNode
    description: string
    skills: {
        name: string
        emphasis: 'high' | 'medium' | 'regular'
    }[]
}

const skillCategories: SkillCategory[] = [
    {
        name: "Cloud & Infrastructure",
        icon: <Cloud className="h-5 w-5" />,
        description: "Technologies and practices for managing cloud-native infrastructure and platforms",
        skills: [
            { name: "Kubernetes", emphasis: "high" },
            { name: "Docker", emphasis: "high" },
            { name: "Terraform", emphasis: "high" },
            { name: "GitOps", emphasis: "high" },
            { name: "Helm", emphasis: "medium" },
            { name: "RKE2", emphasis: "medium" },
            { name: "Prometheus", emphasis: "medium" },
            { name: "ArgoCD", emphasis: "medium" },
            { name: "CloudNativePG", emphasis: "medium" },
        ]
    },
    {
        name: "Development",
        icon: <Code2 className="h-5 w-5" />,
        description: "Programming languages, frameworks, and tools for software development",
        skills: [
            { name: "Python", emphasis: "high" },
            { name: "Rust", emphasis: "high" },
            { name: "TypeScript", emphasis: "medium" },
            { name: "Next.js", emphasis: "medium" },
            { name: "Bash", emphasis: "high" },
            { name: "Ansible", emphasis: "medium" },
            { name: "APIs (REST & GraphQL)", emphasis: "medium" },
            { name: "Dash", emphasis: "regular" },
        ]
    },
    {
        name: "Data & Backend",
        icon: <Database className="h-5 w-5" />,
        description: "Database management and backend systems for scalable applications",
        skills: [
            { name: "PostgreSQL", emphasis: "high" },
            { name: "MySQL", emphasis: "medium" },
            { name: "MinIO", emphasis: "medium" },
            { name: "Apache Airflow", emphasis: "medium" },
            { name: "Trino", emphasis: "medium" },
            { name: "Spark", emphasis: "regular" },
            { name: "Redis", emphasis: "regular" },
        ]
    },
    {
        name: "Tools & Practices",
        icon: <Tools className="h-5 w-5" />,
        description: "Development tools, methodologies, and best practices",
        skills: [
            { name: "Git", emphasis: "high" },
            { name: "CI/CD Pipelines", emphasis: "high" },
            { name: "Monitoring & Logging", emphasis: "high" },
            { name: "Testing", emphasis: "medium" },
            { name: "Agile Practices", emphasis: "medium" },
            { name: "Documentation", emphasis: "medium" },
            { name: "Version Control", emphasis: "high" },
        ]
    }
];


export default function ProfilePage() {
    const [selectedEntry, setSelectedEntry] = useState<TimelineEntry>(timelineEntries[0])

    return (
        <div className="min-h-screen font-mono">
            <Navbar />
            {/* <ParticleBackground /> */}

            <div className="py-8 px-8">
                <div className="space-y-8">
                    {/* Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="max-w-4xl mx-auto bg-background">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold">Profile</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 text-sm leading-relaxed">
                                <p>
                                    Philip Solarz is an analyst, developer and engineer experienced in Linux systems, containerization, Kubernetes, and programming, particularly in Rust and Python.
                                    With a Bachelor's degree in Applied Mathematics from Linnaeus University, he combines analytical knowledge with technical expertise to deliver practical solutions in DevOps, Platform Engineering, Software Development, and Data Engineering.
                                    Philip has worked in both independent and team settings, with a preference for roles focused on technical problem-solving and infrastructure development.
                                </p>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3">Focus Areas and Skills</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <span className="font-semibold">Core Competencies:</span> Linux
                                            (RHEL), Kubernetes (setup, management, and development),
                                            Containerization (Docker), DevOps, and GitOps methodologies.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Programming and Development:</span>{" "}
                                            Proficient in Python and Rust, with additional experience in
                                            building web applications using Next.js, shadcn, and Tailwind CSS.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Database Engineering:</span>{" "}
                                            Experience with PostgreSQL, including migration and management
                                            within Kubernetes clusters using CloudNativePG.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Automation and CI/CD:</span>{" "}
                                            Knowledge of tools like Bash, Ansible, Helm, Terraform, GitHub
                                            Actions, and ArgoCD for building and managing pipelines.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Big Data Technologies:</span>{" "}
                                            Familiarity with platforms and tools like Apache Airflow, Spark,
                                            Trino, and MinIO.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Project Ownership:</span> Experience
                                            designing and implementing scalable infrastructure, including a
                                            Kubernetes-based PostgreSQL platform with integrated self-service
                                            and GitOps functionality.
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold">Professional Experience</h3>
                                    <p>
                                        Philip began his career as a Systems Analyst, developing data
                                        pipelines and interactive reporting solutions using MySQL, Python,
                                        and Dash. In platform engineering roles, he contributed to
                                        maintaining and improving complex infrastructures for big data
                                        analytics, working with technologies such as Hadoop, Docker, and
                                        Kubernetes. At Telia Company, he was involved in migrating a common
                                        data lake to an in-house big data platform, working on server
                                        management, container orchestration, and CI/CD pipeline development.
                                    </p>
                                    <p>
                                        A notable achievement includes the development of a Kubernetes-based
                                        PostgreSQL platform as a solo project. This work involved creating a
                                        complete system, from infrastructure to a user-facing self-service
                                        portal, demonstrating the ability to manage complex projects
                                        effectively.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold">Learning and Adaptation</h3>
                                    <p>
                                        Philip uses a structured approach to learning, beginning with
                                        foundational exploration through resources such as books, tutorials,
                                        and courses. He follows this with hands-on experimentation and
                                        project work, which he finds to be the most effective method of
                                        learning. Recently, he has incorporated AI tools into his learning
                                        process, using them to accelerate problem-solving and skill
                                        development.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold">Soft Skills and Collaboration</h3>
                                    <p>
                                        Philip is comfortable working independently or in small teams, where
                                        he can focus on technical contributions while supporting others as
                                        needed. He tends to take a collaborative approach, stepping into
                                        leadership roles when appropriate. While technical work is his
                                        primary interest, he also recognizes the importance of
                                        documentation, planning, and stakeholder communication. He is
                                        actively seeking to enhance his collaboration skills and gain
                                        experience with larger-scale projects.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3">
                                        Personal Projects and Interests
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <span className="font-semibold">Rustique:</span> A Python library
                                            leveraging Rust's performance, providing alternatives to Python
                                            built-in types.
                                        </li>
                                        <li>
                                            <span className="font-semibold">HomeLab:</span> An
                                            Infrastructure-as-Code project for a Kubernetes cluster.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Web Development:</span> Development
                                            of portfolio websites using modern frameworks like Next.js.
                                        </li>
                                    </ul>
                                    <p className="mt-4">
                                        He is motivated by opportunities to learn, solve problems, and
                                        contribute to meaningful projects. Philip is open to roles in
                                        startups, large enterprises, or open-source initiatives, with a
                                        preference for collaborative environments focused on technical
                                        challenges and innovation.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="h-full bg-background">
                                <CardHeader>
                                    <CardTitle>History</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Timeline>
                                        {timelineEntries.map((entry) => (
                                            <TimelineItem
                                                key={entry.id}
                                                date={entry.date}
                                                title={entry.title}
                                                description={entry.description}
                                                icon={entry.icon}
                                                // iconColor={selectedEntry.id === entry.id ? "primary" : "muted"}
                                                className={`cursor-pointer transition-colors hover:bg-muted/50 p-2 rounded-md ${selectedEntry.id === entry.id ? "bg-muted" : ""
                                                    }`}
                                                onClick={() => setSelectedEntry(entry)}
                                            />
                                        ))}
                                    </Timeline>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Entry Details */}
                        <motion.div
                            key={selectedEntry.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="h-full bg-background">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        {selectedEntry.icon}
                                        {selectedEntry.title}
                                    </CardTitle>
                                    <div className="text-sm text-muted-foreground">
                                        {selectedEntry.details.organization} • {selectedEntry.details.location}
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="font-medium mb-2">Overview</h3>
                                        <p className="text-muted-foreground">
                                            {selectedEntry.details.description}
                                        </p>
                                    </div>

                                    {selectedEntry.details.achievements && (
                                        <div>
                                            <h3 className="font-medium mb-2">Key Achievements</h3>
                                            <ul className="list-disc pl-4 space-y-1 [&>li]:text-muted-foreground">
                                                {selectedEntry.details.achievements.map((achievement, index) => (
                                                    <li key={index} className="text-muted-foreground">
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {selectedEntry.details.technologies && (
                                        <div>
                                            <h3 className="font-medium mb-2">Technologies Used</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedEntry.details.technologies.map((tech) => (
                                                    <Badge key={tech} variant="outline">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className="opacity-75">
                            <CardHeader>
                                <CardTitle>Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-8 md:grid-cols-2">
                                    {skillCategories.map((category, categoryIndex) => (
                                        <motion.div
                                            key={category.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                        >
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2">
                                                    {category.icon}
                                                    <h3 className="font-semibold">{category.name}</h3>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {category.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.skills.map((skill) => (
                                                        <Badge
                                                            key={skill.name}
                                                            variant={skill.emphasis === 'high' ? 'default' : 'secondary'}
                                                            className={`
                                transition-all duration-300
                                ${skill.emphasis === 'high' ? 'text-primary-foreground' : ''}
                                ${skill.emphasis === 'medium' ? 'opacity-90' : ''}
                                ${skill.emphasis === 'regular' ? 'opacity-70' : ''}
                              `}
                                                        >
                                                            {skill.name}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

