'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='block md:flex md:flex-row items-center justify-center px-20 mt-52 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                
                <span className='bungee-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Welcome in Babylon </span>
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='poppins-regular text-lg text-gray-400 my-4 max-w-[600px]'
            >
                Searching for high-potential tokens on Solana
            </motion.p>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='poppins-regular text-lg text-gray-400 my-1 max-w-[600px]'
            >
                We combine fundamental analysis with tracking current trends
            </motion.p>

            <motion.a
            href='https://discord.gg/Ds5pPSJZev'
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
            Join our Discord
            </motion.a>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
        >
        <Image
        //TODO
          src="/violetLogo.png"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent