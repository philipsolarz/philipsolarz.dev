// 'use client'
import { notFound } from "next/navigation"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react'
import { articles } from "@/data/articles"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { TableOfContents } from "@/components/table-of-conents"

type Params = Promise<{ id: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
    const { id } = await params;
    const article = articles.find((p) => p.id === id)

    if (!article) {
        notFound()
    }

    return (
        <div className="min-h-screen font-mono" id="top">
            <Navbar />
            {/* <ParticleBackground /> */}
            <div className="py-8">
                <div className="mx-auto max-w-6xl space-y-8">
                    <Card className="bg-background">
                        <CardHeader>
                            <CardTitle className="text-4xl">{article.title}</CardTitle>
                            <CardDescription className="text-xl text-muted-foreground">{article.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="prose prose-gray max-w-none dark:prose-invert">
                                <ReactMarkdown
                                    components={{
                                        code({ node, className, children, ...props }: any) {
                                            const match = /language-(\w+)/.exec(className || "");
                                            return match ? (
                                                <SyntaxHighlighter
                                                    style={nord}
                                                    language={match[1]}
                                                    PreTag="div"
                                                    {...props}
                                                >
                                                    {String(children).replace(/\n$/, "")}
                                                </SyntaxHighlighter>
                                            ) : (
                                                <code className={className} {...props}>
                                                    {children}
                                                </code>
                                            );
                                        },
                                    }}
                                >
                                    {article.content}
                                </ReactMarkdown>
                            </div>
                        </CardContent>
                    </Card>

                </div >
            </div >
            <div className="hidden lg:block">
                <div className="fixed right-8 top-24 hidden w-[200px] lg:block max-h-[calc(100vh-4rem)] overflow-y-auto">
                    <TableOfContents />
                </div>
            </div>
        </div >
    )
}
