import React from 'react'
import Ai from '../assets/projects/Ai.png'
import Face from '../assets/projects/Face.png'
import Hostel from '../assets/projects/Hostel.png'
import Keeper from '../assets/projects/Keeper.png'
import Rentify from '../assets/projects/Rentify.png'
import Weather from '../assets/projects/Weather.png'
const Projects = () => {

  const Projects = () => [
    {
      id: 1,
      src: Ai,
      demo: "https://dipayansarkar47.github.io/AI-Newsletter/",
      code: "https://github.com/dipayansarkar47/AI-Newsletter"
    },
    {
      id: 2,
      src: Hostel
    },
    {
      id: 3,
      src: Keeper
    },
    {
      id: 4,
      src: Rentify
    },
    {
      id: 5,
      src: Weather
    },
    {
      id: 6,
      src: Face
    },
  ]


  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, demo, code }) => (

              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button onClick={demo} className='w-1/2 px-6 py-3 m-4 duration-200'>Demo</button>
                  <button onClick={code} className='w-1/2 px-6 py-3 m-4 duration-200'>Code</button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects