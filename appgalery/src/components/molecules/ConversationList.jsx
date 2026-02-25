'use client'

import Link from 'next/link';

export default function ConversationList() {
    return (
        <main className='flex flex-col items-center justify-start min-h-[50vh] gap-4 px-4 pt-2 md:pt-4 transition-colors duration-300'>

            {/* Título principal */}
            <section className='flex place-content-center rounded-lg border-2 shadow-2xl h-auto w-full max-w-4xl p-4 bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700'>
                <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-emerald-900 dark:text-emerald-100'>
                    Simulacion de Chat en tiempo real (RTS)
                </p>
            </section>

            {/* Listado de conversaciones */}
            <section className='flex justify-center w-full max-w-6xl py-6 flex-col rounded-lg border-2 shadow-2xl gap-4 p-4 md:p-6 bg-green-100 border-green-300 dark:bg-green-950 dark:border-green-800'>
                <div className='flex justify-center m-2 gap-4 md:gap-8 p-2'>
                    <p className='font-bold text-lg md:text-2xl lg:text-3xl text-center text-emerald-900 dark:text-emerald-100'>
                        Listado de conversaciones <span className='whitespace-nowrap'>Emisor-Receptor</span>
                    </p>
                </div>

                <div className='flex flex-col md:flex-row justify-center gap-4'>

                    {/* Conversación Juan-Angi */}
                    <div className='flex justify-center flex-col m-2 gap-4 md:gap-8 p-3 w-full md:w-fit rounded-lg border-2 shadow-2xl bg-green-200 border-green-400 dark:bg-green-900 dark:border-green-700'>
                        <p className='text-emerald-900 dark:text-emerald-100 font-bold text-sm md:text-lg text-center'>
                            Conversacion: "Juan-Angi"
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4'>
                            <Link href='http://localhost:3000/messenger2?userId=Juan&otherUserId=Angi&conversationId=id_final_123' className='text-sm sm:text-base md:text-xl font-bold text-emerald-900 hover:underline border-green-900 bg-amber-100 border-2 rounded-2xl p-2 md:px-6 dark:text-emerald-100 dark:border-green-600 dark:bg-amber-900'>Juan</Link>
                            <Link href='http://localhost:3000/messenger2?userId=Angi&otherUserId=Juan&conversationId=id_final_123' className='text-sm sm:text-base md:text-xl font-bold text-emerald-900 hover:underline border-green-900 bg-amber-100 border-2 rounded-2xl p-2 md:px-6 dark:text-emerald-100 dark:border-green-600 dark:bg-amber-900'>Angi</Link>
                        </div>
                    </div>

                    {/* Conversación Santi-Bryan */}
                    <div className='flex justify-center flex-col m-2 gap-4 md:gap-8 p-3 w-full md:w-fit rounded-lg border-2 shadow-2xl bg-green-200 border-green-400 dark:bg-green-900 dark:border-green-700'>
                        <p className='text-emerald-900 dark:text-emerald-100 font-bold text-sm md:text-lg text-center'>
                            Conversacion: "Santi-Bryan"
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4'>
                            <Link href='http://localhost:3000/messenger2?userId=Santi&otherUserId=Bryan&conversationId=id_final_222' className='text-sm sm:text-base md:text-xl font-bold text-emerald-900 hover:underline border-green-900 bg-amber-100 border-2 rounded-2xl p-2 md:px-6 dark:text-emerald-100 dark:border-green-600 dark:bg-amber-900'>Santi</Link>
                            <Link href='http://localhost:3000/messenger2?userId=Bryan&otherUserId=Santi&conversationId=id_final_222' className='text-sm sm:text-base md:text-xl font-bold text-emerald-900 hover:underline border-green-900 bg-amber-100 border-2 rounded-2xl p-2 md:px-6 dark:text-emerald-100 dark:border-green-600 dark:bg-amber-900'>Bryan</Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}
