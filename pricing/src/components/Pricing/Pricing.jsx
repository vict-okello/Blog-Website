import React from 'react'
import { motion, useInView } from "framer-motion"

function Pricing() {


  return (
    <div 
    className='bg-[#f3f3f3] w-full h-screen'>
    <div>
      <motion.div
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}}
      >
      <h1
      className="text-3xl font-bold text-center mb-12 }">
        <span className='text-zinc-800'>Welcome To </span> <span className='rounded-lg bg-[#E50914] 
                px-2 w-5 h-5 text-white'>T</span><span>rivos Safaris</span>
        <span>; Choose your ideal pricing</span>
        </h1>
        <p className='text-center justify-center mb-7 text-gray-700 font-semibold font-size-10'
        >Lorem ipsumSed eaque nisi vero dolor voluptate perferendis reprehenderit, maiores ab odio laboriosam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestiae totam reprehenderit aliquam accusantium ad blanditiis repudiandae iure iste soluta, repellendus voluptas. Corrupti adipisci sed molestias, amet aspernatur quam.
        </p>
        </motion.div>

        {/* pricing cards */}

      <motion.div
      whileInView={{y: [100, 50, 0], opacity: [0, 0, 1]}}
      whileFocus={{scale: 1.2}}
      transition={{duration: 0.5}}
      
      className="flex flex-wrap justify-center">
        <motion.div 
        whileHover={{scale: 1.2}}
        onHoverStart={e => e.target.style.cursor = 'pointer'}
        onHoverEnd={e => e.target.style.cursor = 'default'}
        className="w-full md:w-1/3 xl:w-1/3 p-6">
          <div className="bg-white rounded-lg shadow-md p-20">
            <h2 className="text-lg font-bold mb-4 flexjustify-center items-center">Basic</h2>
            <p className="text-gray-600 mb-4">$9.99/month</p>
            <ul className="list-none mb-4">
              <li className="text-gray-600 mb-2">✓ 1 user</li>
              <li className="text-gray-600 mb-2">✓ 1GB storage</li>
              <li className="text-gray-600 mb-2">✓ Basic support</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-700
             text-white font-bold py-2 w-full px-4 rounded mt-3">Sign up</button>
          </div>
        </motion.div>


        <motion.div 
        whileHover={{scale: 1.2}}
        onHoverStart={e => e.target.style.cursor = 'pointer'}
        onHoverEnd={e => e.target.style.cursor = 'default'}
        
        className="w-full md:w-1/3 xl:w-1/3 p-6">
          <div className="bg-white rounded-lg shadow-md p-20">
            <h2 className="text-lg font-bold mb-4">Premium</h2>
            <p className="text-gray-600 mb-4">$19.99/month</p>
            <ul className="list-none mb-4">
              <li className="text-gray-600 mb-2">✓ 5 users</li>
              <li className="text-gray-600 mb-2">✓ 5GB storage</li>
              <li className="text-gray-600 mb-2">✓ Priority support</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-700
             text-white font-bold py-2 px-4 w-full rounded mt-3">Sign up</button>
          </div>
        </motion.div>


        <motion.div 
        whileHover={{scale: 1.2}}
        onHoverStart={e => e.target.style.cursor = 'pointer'}
        onHoverEnd={e => e.target.style.cursor = 'default'}
        
        className="w-full md:w-1/3 xl:w-1/3 p-6">
          <div className="bg-white rounded-lg shadow-md p-20">
            <h2 className="text-lg font-bold mb-4">Enterprise</h2>
            <p className="text-gray-600 mb-4">Custom pricing</p>
            <ul className="list-none mb-4">
              <li className="text-gray-600 mb-2">✓ 10+ users</li>
              <li className="text-gray-600 mb-2">✓ 10+ GB storage</li>
              <li className="text-gray-600 mb-2">✓ Dedicated support</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-700
            w-full text-white font-bold py-2 px-4 rounded mt-3">Contact us</button>
          </div>
        </motion.div>


      </motion.div>
    </div>
    </div>
  )
}

export default Pricing