'use client'

import { ThemeToggle } from '../atoms/ThemeToggle';
import ConversationList from '../molecules/ConversationList';


export default function Header() {
    return (
        <header className='flex flex-col items-center gap-4 px-4 pt-2 md:pt-4'>
            <div className='flex justify-end w-full max-w-4xl'>
                <ThemeToggle />
            </div>
            <ConversationList />
        </header>
    )
}
