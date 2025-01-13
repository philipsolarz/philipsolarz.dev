'use client'

import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { projects } from "@/data/projects"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"

interface CodeBlockProps {
    title: string
    language: string
    code: string
}

function CodeBlock({ title, language, code }: CodeBlockProps) {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    )
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen w-screen font-mono">
            <Navbar />
            <ParticleBackground />

            <div className="container py-8">
                <div className="mx-auto max-w-4xl space-y-8">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/projects">
                                <ArrowLeft className="h-4 w-4" />
                                <span className="sr-only">Back to projects</span>
                            </Link>
                        </Button>
                        <motion.h1
                            className="text-4xl font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {project.title}
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted-foreground">
                                    {project.longDescription}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.githubUrl && (
                                        <Button variant="outline" asChild>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <Github className="h-4 w-4" />
                                                View Source
                                            </a>
                                        </Button>
                                    )}
                                    {project.externalUrl && (
                                        <Button variant="outline" asChild>
                                            <a
                                                href={project.externalUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                View Live
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Features</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-6 space-y-2">
                                    {project.documentation.features.map((feature, index) => (
                                        <li key={index} className="text-muted-foreground">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Technical Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {project.documentation.technical}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Code Examples</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {project.documentation.codeExamples.map((example, index) => (
                                    <CodeBlock
                                        key={index}
                                        title={example.title}
                                        language={example.language}
                                        code={example.code}
                                    />
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

