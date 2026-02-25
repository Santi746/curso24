'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

// Hook para leer y cambiar el tema desde cualquier componente
export function useDark() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return { theme, setTheme, mounted }
}