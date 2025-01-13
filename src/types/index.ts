export interface Project {
    id: string
    title: string
    description: string
    longDescription: string
    tags: string[]
    githubUrl?: string
    externalUrl?: string
    documentation: {
        overview: string
        features: string[]
        technical: string
        codeExamples: {
            title: string
            language: string
            code: string
        }[]
    }
}

export interface TimelineElement {
    id: number
    date: string
    title: string
    description: string
    icon?: React.ReactNode
    status?: 'completed' | 'in-progress' | 'pending'
    color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'destructive'
    loading?: boolean
    error?: string
    size?: 'sm' | 'md' | 'lg'
}

export interface Article {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    date: string
    readingTime: string
    tags: string[]
    coverImage?: string
}

export interface Comment {
    id: string
    articleId: string
    author: string
    email: string
    content: string
    createdAt: string
    verified: boolean
}

export interface CommentVerification {
    commentId: string
    email: string
    verificationCode: string
    expiresAt: string
}

