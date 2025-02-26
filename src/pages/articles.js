import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue } from 'framer-motion';
import article1 from "../../public/images/articles/aar.png";
import article2 from "../../public/images/articles/mono.webp";
import article3 from "../../public/images/articles/love.webp";
import article4 from "../../public/images/articles/age.webp";
import article5 from "../../public/images/articles/burn.jpg";
import article6 from "../../public/images/articles/k8s1.avif";
import article7 from "../../public/images/articles/k8s2.avif";
import { useRef } from 'react';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);


const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  
  

  return (
    <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration: 0.2}}}
       ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0,transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
    className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
    dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
    
    className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
      </Link>

      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Sidharth | Article page</title>
        <meta name="description" content="Stay informed with the latest articles on world affairs and technology by Sidharth Shukla. Explore thought-provoking insights and analysis on global events, emerging technologies, and their impact on society. Stay ahead of the curve and engage in discussions that shape our world." />

      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl  xs:!text-4xl' />
          <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
            <FeaturedArticle
              title="CTank Battle~ Russia-Ukraine(NATO) war"
              summary="If i say , the war between Russia and Ukraine is no more Russia-Ukraine war, then nothing will be wrong here. Indirectly NATO countries start helping a lot not even in supply by money, goods, food but also in terms a weapons."
              time="2 min read"
              link="https://medium.com/@swayam1044/tank-battle-russia-ukraine-nato-war-f86d2888ae6f"
              img={article1}
            />
            <FeaturedArticle
              title="Monopoly Of Tech Giants"
              summary="Well here i am going to discuss the Monopoly of tech giants in the field of science and technology. How these Tech Giant restrict the Growth of new startups and make their complete dominance in the field of Technology."
              time="9 min read"
              link="https://medium.com/@swayam1044/monopoly-of-tech-giants-623b0a375031"
              img={article2}
            />
          </ul>

          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
          <ul>
            <Article
              title="Introduction to Kubernetes"
              date="October 3, 2023"
              link="https://sidharthhhh.hashnode.dev/introduction-to-kubernetes"
              img={article6}
            />
            <Article
              title="Architecture of Kubernetes"
              date="October 4, 2023"
              link="https://sidharthhhh.hashnode.dev/architecture-of-kubernetes"
              img={article7}
            />
            <Article
              title="Ageing: The Curse"
              date="April 23, 2023"
              link="https://medium.com/@swayam1044/ageing-the-curse-b41f3ca8e7b1"
              img={article4}
            />
            <Article
              title="Tank Battle~ Russia-Ukraine(NATO) war"
              date="January 26, 2023"
              link="https://medium.com/@swayam1044/tank-battle-russia-ukraine-nato-war-f86d2888ae6f"
              img={article1}
            />
            <Article
              title="Quran burning incident in Sweden:- Its Geopolitical consequences"
              date="January 25, 2023"
              link="https://medium.com/@swayam1044/quran-burning-incident-in-sweden-its-geopolitical-consequences-adbcd27ab0b5"
              img={article5}
            />
              <Article
              title="Why India is Neutral in Russia — Ukraine war"
              date="January 23, 2023"
              link="https://medium.com/@swayam1044/why-india-is-neutral-in-russia-ukraine-war-aaefb6a4f63"
              img={article1}
            />
              <Article
              title="Monopoly Of Tech Giants"
              date="January 22, 2023"
              link="https://medium.com/@swayam1044/monopoly-of-tech-giants-623b0a375031"
              img={article2}
            />
              <Article
              title="Difference Between Love And Attachment"
              date="January 22, 2023"
              link="https://medium.com/@swayam1044/difference-between-love-and-attachment-693484fcdfb2"
              img={article3}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
