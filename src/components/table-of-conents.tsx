'use client'

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface TocItem {
    id: string
    text: string
    level: number
}

export function TableOfContents() {
    const [activeId, setActiveId] = useState<string>("")
    const [headings, setHeadings] = useState<TocItem[]>([])

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h1, h2, h3"))
        const items = elements.map((element) => ({
            id: element.id || element.textContent?.toLowerCase().replace(/\W+/g, '-') || Math.random().toString(36).substr(2, 9),
            text: element.textContent ?? "",
            level: Number(element.tagName.charAt(1))
        }))

        // Set IDs for elements that don't have them
        elements.forEach((element, index) => {
            if (!element.id) {
                element.id = items[index].id
            }
        })

        setHeadings(items)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "0% 0% -80% 0%" }
        )

        elements.forEach((element) => observer.observe(element))
        return () => observer.disconnect()
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
            // Update URL without scroll
            window.history.pushState({}, '', `#${id}`)
        }
    }

    return (
        <div className="space-y-2">
            {/* If click on the Table of Contents <p> header it should scroll to the top */}
            <a href="#top" onClick={(e) => handleClick(e, "top")} className="font-medium">Table of Contents</a>
            <div className="space-y-2">
                {headings.map((heading) => (
                    <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        onClick={(e) => handleClick(e, heading.id)}
                        className={cn(
                            "block text-sm transition-colors hover:text-foreground",
                            heading.level === 1 ? "pl-0" : `pl-${(heading.level - 1) * 4}`,
                            activeId === heading.id
                                ? "text-foreground"
                                : "text-muted-foreground"
                        )}
                    >
                        {heading.text}
                    </a>
                ))}
            </div>
        </div>
    )
}

