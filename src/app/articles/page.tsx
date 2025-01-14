'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from 'lucide-react'
import { articles } from "@/data/articles"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"

export default function ArticlesPage() {
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
                        Articles
                    </motion.h1>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/articles/${article.id}`}>
                                    <Card className="h-full hover:bg-muted/50 transition-colors bg-background">
                                        <CardHeader>
                                            <CardTitle>{article.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-muted-foreground">
                                                {article.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {article.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
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
