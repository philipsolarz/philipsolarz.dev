"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, FileText, User2, Mail } from 'lucide-react'
import { useState } from 'react'
import LandingPage from '@/components/landing-page'
import { Navbar } from '@/components/navbar'
import { ParticleBackground } from '@/components/particle-background'
import { articles } from '@/data/articles'
import { projects } from '@/data/projects'

const skills = [
  "Linux",
  "Bash",
  "Docker",
  "Kubernetes",
  "Git",
  "Python",
  "Rust",
  "React",
  "Terraform",
  "Ansible",
]

export default function MainPage() {
  const [showLandingPage, setShowLandingPage] = useState(true)

  if (showLandingPage) {
    return <LandingPage onEnter={() => setShowLandingPage(false)} />
  }

  // Get the latest project and article
  const featuredProject = projects[0]
  const featuredArticle = articles[0]

  return (
    <div className="min-h-screen w-screen font-mono">
      <Navbar />
      <ParticleBackground />

      <div className="container py-8">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Philip Solarz
            </h1>
            <p className="text-xl text-muted-foreground">
              Platform Engineer • Software Developer • Problem Solver
            </p>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Platform Engineer and Software Developer with over 5 years of experience specializing in cloud infrastructure,
                  DevOps practices, and full-stack development. Passionate about building scalable solutions and solving complex
                  technical challenges.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="/profile">
                    View Full Profile <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Featured Project</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">{featuredProject.title}</h3>
                <p className="text-muted-foreground">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="/projects">
                    View All Projects <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Featured Article</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">{featuredArticle.title}</h3>
                <p className="text-muted-foreground">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredArticle.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="/articles">
                    Read All Articles <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <Button variant="outline" size="lg" className="h-20" asChild>
              <Link href="/profile" className="flex flex-col items-center gap-2">
                <User2 className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-20" asChild>
              <Link href="/projects" className="flex flex-col items-center gap-2">
                <Code2 className="h-5 w-5" />
                <span>Projects</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-20" asChild>
              <Link href="/articles" className="flex flex-col items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Articles</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-20" asChild>
              <Link href="/contact" className="flex flex-col items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Contact</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

