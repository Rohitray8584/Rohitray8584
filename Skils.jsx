import React from 'react'

const Skils = () => {
  return (
    <div className=' bg-black text-white py-20 ' id='skills'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className=' text-4xl font-bold text-center mb-12 '>Skills</h2>
         <div className='space-y-4'>
                            <div className='flex items-center' >
                                <label htmlFor="html" className='w-2/12'>HTML</label>
                                <div className='grow bh-gry-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                       transform transition-transform duration-300 hover:scale-105 w-10/12'></div>

                                </div>


                            </div>

                            <div className='flex items-center' >
                                <label htmlFor="html" className='w-2/12'>CSS</label>
                                <div className='grow bh-gry-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                       transform transition-transform duration-300 hover:scale-105 w-10/12'></div>

                                </div>


                            </div>

                            <div className='flex items-center' >
                                <label htmlFor="html" className='w-2/12'>Java Script</label>
                                <div className='grow bh-gry-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                       transform transition-transform duration-300 hover:scale-105 w-11/12'></div>

                                </div>


                            </div>

                            <div className='flex items-center' >
                                <label htmlFor="html" className='w-2/12'>Tailwind Css</label>
                                <div className='grow bh-gry-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                       transform transition-transform duration-300 hover:scale-105 w-9/12'></div>

                                </div>


                            </div>
                            <div className='flex items-center' >
                                <label htmlFor="html" className='w-2/12'>React.js</label>
                                <div className='grow bh-gry-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                       transform transition-transform duration-300 hover:scale-105 w-10/12'></div>

                                </div>


                            </div>
                            

                        </div>
    </div>
    </div>
  )
}

export default Skils
