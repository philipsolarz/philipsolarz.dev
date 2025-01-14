'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import { projects } from "@/data/projects"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"

export default function ProjectsPage() {
    return (
        <div className="min-h-screen w-screen font-mono">
            <Navbar />
            {/* <ParticleBackground /> */}
            <div className="py-8">
                <div className="mx-auto max-w-6xl space-y-8">
                    <motion.h1
                        className="text-4xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Projects
                    </motion.h1>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/projects/${project.id}`}>
                                    <Card className="h-full hover:bg-muted/50 transition-colors bg-background">
                                        <CardHeader>
                                            <CardTitle>{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-muted-foreground">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        {/* <CardFooter className="flex justify-between">
                                            <div className="flex gap-2">
                                                Use projects.links which is [{title: .., url: ..., }]
                                                {project.links.map((link) => (
                                                    <Button key={link.title} size="icon" variant="ghost" asChild>
                                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-4 w-4" />
                                                            <span className="sr-only">{link.title}</span>

                                                        </a>
                                                    </Button>
                                                ))}
                                            </div>
                                        </CardFooter> */}
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

