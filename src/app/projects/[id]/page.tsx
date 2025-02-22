import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { TableOfContents } from "@/components/table-of-conents"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import { Metadata } from "next"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"


type Params = Promise<{ id: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id)

    if (!project) {
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
                            <CardTitle className="text-4xl">{project.title}</CardTitle>
                            <CardDescription className="text-xl text-muted-foreground">{project.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-2 pt-4">
                                {project.links.map((link) => (
                                    <Link href={link.url} key={link.url}>
                                        <Button variant="secondary" size="sm" className="flex items-center gap-1">
                                            {link.title}
                                            <ExternalLink />
                                        </Button>
                                    </Link>
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
                                    {project.content}
                                </ReactMarkdown>
                            </div>
                        </CardContent>

                    </Card>
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="fixed right-8 top-24 hidden w-[200px] lg:block max-h-[calc(100vh-4rem)] overflow-y-auto">
                    <TableOfContents />
                </div>
            </div>
        </div>

    )
}

