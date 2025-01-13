'use client'

import { useCallback } from "react"
import Particles from "react-particles"
import type { Container, Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export function ParticleBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    // events: {
                    //     onHover: {
                    //         enable: true,
                    //         mode: ["repulse"],
                    //     },
                    // },
                    modes: {
                        grab: {
                            distance: 100,
                            links: {
                                opacity: 0.5,
                            },
                        },
                        slow: {
                            factor: 5,
                            radius: 100,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#60A5FA",
                    },
                    links: {
                        color: "#60A5FA",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

