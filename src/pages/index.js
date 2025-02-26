import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/sid.jpg'

import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sidharth</title>
        <meta name="description" content="Hi, I'm Sidharth Shukla, a full stack developer and passionate learner. I specialize in web development and Devops, creating robust and efficient applications. Explore my portfolio to see my projects and skills
        . Let's collaborate on your next web development venture." />


      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='sid' className='w-[80%] h-auto lg:hidden md:inline-block md:w-full bg-light'
                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className='w-1/2  flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Bringing Ideas to Life with MERN Stack and DevOps Solutions" className='!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl ' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs '> As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in Devops, cloud and MERN.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/sid.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  
                  hover:dark:border-light md:p-2 md:px-4 md:text-base'

                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="https://github.com/sidharthhhh" target={"_blank"}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base '
                >Contact</Link>

                {/* <HireMe /> */}

                <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
                  <Image src={lightBulb} alt='sidharth' className='w-full h-auto' />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
