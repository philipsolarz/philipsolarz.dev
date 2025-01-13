'use client'
import { notFound } from "next/navigation"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react'
import { articles } from "@/data/articles"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { CommentForm } from "@/components/comment-form"

type Params = Promise<{ slug: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
    const { slug } = await params;
    const article = articles.find((p) => p.id === slug)

    if (!article) {
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
                            <Link href="/articles">
                                <ArrowLeft className="h-4 w-4" />
                                <span className="sr-only">Back to articles</span>
                            </Link>
                        </Button>
                    </div>

                    <article className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold">{article.title}</h1>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{article.readingTime}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <Card>
                            <CardContent className="prose prose-invert pt-6">
                                {/* <ReactMarkdown
                                    components={{
                                        code({ node, inline, className, children, ...props }) {
                                            const match = /language-(\w+)/.exec(className || '')
                                            return !inline && match ? (
                                                <SyntaxHighlighter
                                                    style={vscDarkPlus}
                                                    language={match[1]}
                                                    PreTag="div"
                                                    {...props}
                                                >
                                                    {String(children).replace(/\n$/, '')}
                                                </SyntaxHighlighter>
                                            ) : (
                                                <code className={className} {...props}>
                                                    {children}
                                                </code>
                                            )
                                        }
                                    }}
                                >
                                    {article.content}
                                </ReactMarkdown> */}
                            </CardContent>
                        </Card>

                        <CommentForm />
                    </article>
                </div >
            </div >
        </div >
    )
}
