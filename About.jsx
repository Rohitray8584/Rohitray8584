import React from 'react'
import Image from '../assets/rohit.jpg'


const About = () => {
    return (
        <div className=' bg-black text-white py-20 ' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className=' text-4xl font-bold text-center mb-12 '>  About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12' >
                    <img src={Image} alt="" className='w-72 h-80 object-cover mb-8 md:mb-0' />
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>
                            I am a passionate BCA student with a strong interest in frontend development. I enjoy creating visually appealing and user-friendly websites by blending creativity with technical skills. Proficient in HTML, CSS, and JavaScript, I am continually enhancing my knowledge of modern frontend frameworks like React Js My goal is to build seamless and responsive web applications that provide an excellent user experience.
                        </p>

                        <div className='mt-12  flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    Student
                                </h3>
                                <p>BCA 3rd Year</p>
                            </div>

                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    10+
                                </h3>
                                <p>Project Completed</p>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
