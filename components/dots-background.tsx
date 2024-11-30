"use client"

import { useEffect, useState } from "react"

const NUM_DOTS = 100
const NUM_CONNECTIONS = 25

interface Dot {
    x: number
    y: number
}

interface Connection {
    start: number
    end: number
}

export default function DotsBackground() {
    const [dots, setDots] = useState<Dot[]>([])
    const [connections, setConnections] = useState<Connection[]>([])

    useEffect(() => {
        const generateDots = () => {
            const newDots: Dot[] = []
            for (let i = 0; i < NUM_DOTS; i++) {
                newDots.push({
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                })
            }
            return newDots
        }

        const generateConnections = () => {
            const newConnections: Connection[] = []
            for (let i = 0; i < NUM_CONNECTIONS; i++) {
                newConnections.push({
                    start: Math.floor(Math.random() * NUM_DOTS),
                    end: Math.floor(Math.random() * NUM_DOTS),
                })
            }
            return newConnections
        }

        const initialDots = generateDots()
        const initialConnections = generateConnections()

        setDots(initialDots)
        setConnections(initialConnections)
    }, [])

    return (
        <div className="fixed inset-0 z-0">
            <svg className="w-full h-full opacity-20">
                {dots.map((dot, index) => (
                    <circle
                        key={index}
                        cx={`${dot.x}%`}
                        cy={`${dot.y}%`}
                        r="1"
                        fill="cyan"
                    >
                        <animate
                            attributeName="opacity"
                            values="0;1;0"
                            dur="4s"
                            repeatCount="indefinite"
                            begin={`${index * (4 / NUM_DOTS)}s`}
                        />
                    </circle>
                ))}
                {connections.map((connection, index) => (
                    <line
                        key={index}
                        x1={`${dots[connection.start]?.x}%`}
                        y1={`${dots[connection.start]?.y}%`}
                        x2={`${dots[connection.end]?.x}%`}
                        y2={`${dots[connection.end]?.y}%`}
                        stroke="cyan"
                        strokeWidth="0.5"
                        opacity="0.3"
                    >
                        <animate
                            attributeName="opacity"
                            values="0;0.3;0"
                            dur="4s"
                            repeatCount="indefinite"
                            begin={`${index * (4 / NUM_CONNECTIONS)}s`}
                        />
                    </line>
                ))}
            </svg>
        </div>
    );
}