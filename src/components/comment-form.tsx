'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CommentForm() {
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showVerificationMessage, setShowVerificationMessage] = useState(false)

    const handleSubmitComment = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setShowVerificationMessage(true)
        setComment('')
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmitComment} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p className="text-xs text-muted-foreground">
                            Your email is required for comment verification and won't be displayed publicly.
                        </p>
                    </div>

                    <Textarea
                        placeholder="Write your comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />

                    {showVerificationMessage ? (
                        <p className="text-sm text-muted-foreground">
                            Please check your email to verify your comment. The comment will be visible after verification.
                        </p>
                    ) : (
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                                "Submitting..."
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4" />
                                    Submit Comment
                                </>
                            )}
                        </Button>
                    )}
                </form>
            </CardContent>
        </Card>
    )
}

