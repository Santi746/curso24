'use client'

import { ThemeProvider } from 'next-themes'

// Providers envuelve toda la app desde layout.js
// Vive en src/lib/ porque NO es un componente visual,
// es infraestructura/configuración global
export function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}
