import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-dark font-medium text-lg dark:text-light dark:border-light
        sm:text-base '>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Build With <span className='text-primary text-2xl px-1 dark:primaryDark'>&#9825;</span>
                    by&nbsp; <Link href="https://github.com/sidharthhhh" className='underline
             underline-offset-2' target={"_blank"}>Sidharth</Link>
                </div>
                <Link href="https://github.com/sidharthhhh" className='underline
                 underline-offset-2' target={"_blank"}>Say hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer