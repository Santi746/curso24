'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // IMPORTANTE: sin este guard, Next.js tira hydration mismatch
    // porque el servidor no sabe qué tema tiene el cliente
    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    const isDark = theme === 'dark'

    return (   // el boton de la magia Uwu
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Cambiar tema"
            className="
                flex items-center gap-2 px-4 py-2 rounded-full
                font-semibold text-sm transition-all duration-300
                bg-white text-gray-800 border border-gray-300 shadow-md
                hover:scale-105 hover:shadow-lg
                dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
            "
        >
            <span className="text-lg">{isDark ? '☀️' : '🌙'}</span>
            <span>{isDark ? 'Modo claro' : 'Modo oscuro'}</span>
        </button>
    )
}