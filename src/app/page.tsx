"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/particle-background";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-background font-mono h-screen w-screen">
      {/* <ParticleBackground /> */}
      <main className="relative flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <ReactTyped
                strings={["Hello, I'm Philip Solarz"]}
                typeSpeed={20}
                showCursor={false}
              />
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              <ReactTyped
                strings={[
                  "Platform Engineer • Software Developer • Problem Solver",
                ]}
                typeSpeed={20}
                showCursor={false}
                startDelay={1000}
                onComplete={() => setIsTypingDone(true)}
              />
            </p>
          </motion.div>

          {isTypingDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            >
              <Link href="/profile">
                <Button
                  size="lg"
                  className="text-lg"
                >
                  Explore My Work
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
