'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"

export default function ContactPage() {
    return (
        <div className="min-h-screen w-screen font-mono">
            <Navbar />
            {/* <ParticleBackground /> */}

            <div className="py-8">
                <div className="mx-auto max-w-2xl space-y-8">
                    <motion.h1
                        className="text-4xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get in Touch
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start gap-2"
                                    asChild
                                >
                                    <a
                                        href="mailto:philipsolarz@outlook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Mail className="h-4 w-4" />
                                        <span>philipsolarz@outlook.com</span>
                                        <ExternalLink className="ml-auto h-4 w-4 opacity-50" />
                                    </a>
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full justify-start gap-2"
                                    asChild
                                >
                                    <a
                                        href="https://github.com/philipsolarz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="h-4 w-4" />
                                        <span>github.com/philipsolarz</span>
                                        <ExternalLink className="ml-auto h-4 w-4 opacity-50" />
                                    </a>
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full justify-start gap-2"
                                    asChild
                                >
                                    <a
                                        href="https://www.linkedin.com/in/philip-solarz-89240b249"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                        <span>linkedin.com/in/philip-solarz-89240b249</span>
                                        <ExternalLink className="ml-auto h-4 w-4 opacity-50" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center text-muted-foreground"
                    >
                        Feel free to reach out through any of these platforms.
                        I'm always open to discussing new opportunities and collaborations.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

