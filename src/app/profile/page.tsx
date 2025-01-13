'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timeline, TimelineItem } from "@/components/timeline/timeline"
import { Briefcase, GraduationCap, Terminal } from 'lucide-react'
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
        id: "senior-platform",
        date: "2023 - Present",
        title: "Senior Platform Engineer",
        description: "Leading cloud infrastructure and platform development initiatives",
        type: "work",
        icon: <Briefcase className="h-4 w-4" />,
        details: {
            organization: "Tech Solutions Inc.",
            location: "San Francisco, CA",
            achievements: [
                "Led the migration of 50+ microservices to Kubernetes",
                "Reduced deployment time by 70% through automation",
                "Implemented GitOps practices across the organization",
                "Designed and implemented multi-cluster architecture"
            ],
            technologies: [
                "Kubernetes",
                "AWS",
                "Terraform",
                "ArgoCD",
                "Prometheus",
                "Grafana"
            ],
            description: "Leading the platform engineering team in designing and implementing cloud-native solutions. Responsible for the overall architecture and reliability of the platform, implementing best practices in DevOps and SRE principles."
        }
    },
    {
        id: "devops-engineer",
        date: "2021 - 2023",
        title: "DevOps Engineer",
        description: "Automated CI/CD pipelines and maintained cloud infrastructure",
        type: "work",
        icon: <Terminal className="h-4 w-4" />,
        details: {
            organization: "Cloud Systems Corp",
            location: "Seattle, WA",
            achievements: [
                "Implemented automated CI/CD pipelines",
                "Reduced infrastructure costs by 40%",
                "Established monitoring and alerting systems",
                "Created disaster recovery procedures"
            ],
            technologies: [
                "Docker",
                "Jenkins",
                "AWS",
                "Ansible",
                "ELK Stack"
            ],
            description: "Responsible for maintaining and improving the CI/CD pipeline, implementing infrastructure as code, and managing cloud resources. Worked closely with development teams to streamline deployment processes."
        }
    },
    {
        id: "cs-degree",
        date: "2015 - 2019",
        title: "Bachelor of Science in Computer Science",
        description: "University of Technology - Focus on Software Engineering",
        type: "education",
        icon: <GraduationCap className="h-4 w-4" />,
        details: {
            organization: "University of Technology",
            location: "Boston, MA",
            achievements: [
                "Graduated with Honors",
                "Dean's List all semesters",
                "Led the Computer Science Student Association",
                "Published research paper on cloud computing"
            ],
            technologies: [
                "Java",
                "Python",
                "Algorithms",
                "Database Systems",
                "Cloud Computing"
            ],
            description: "Completed a comprehensive computer science program with a focus on software engineering and cloud computing. Participated in various research projects and leadership activities."
        }
    }
]

const skills = {
    "Platform Engineering": [
        "Kubernetes",
        "Docker",
        "AWS",
        "Terraform",
        "CI/CD",
        "Monitoring"
    ],
    "Development": [
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "GraphQL",
        "REST APIs"
    ],
    "DevOps Practices": [
        "GitOps",
        "Infrastructure as Code",
        "Automation",
        "Site Reliability",
        "Cloud Native",
        "Observability"
    ]
}

export default function ProfilePage() {
    const [selectedEntry, setSelectedEntry] = useState<TimelineEntry>(timelineEntries[0])

    return (
        <div className="min-h-screen w-screen font-mono">
            <Navbar />
            <ParticleBackground />

            <div className="container py-8">
                <div className="mx-auto max-w-7xl space-y-8">
                    {/* Top Section */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Professional Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>Professional Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Platform Engineer and Software Developer with over 5 years of experience in cloud infrastructure,
                                        DevOps practices, and full-stack development. Specialized in designing and implementing scalable
                                        solutions using modern cloud-native technologies.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>Skills & Expertise</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {Object.entries(skills).map(([category, items]) => (
                                            <div key={category}>
                                                <h3 className="text-sm font-medium mb-2">{category}</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {items.map((skill) => (
                                                        <Badge key={skill} variant="secondary">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Timeline Section */}
                    <div className="grid gap-6 md:grid-cols-[1fr,1.5fr]">
                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>Timeline</CardTitle>
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
                            <Card className="h-full">
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
                                            <ul className="list-disc pl-4 space-y-1">
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
                </div>
            </div>
        </div>
    )
}

