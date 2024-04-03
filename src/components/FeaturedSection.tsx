'use client'
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import { Button } from './ui/moving-border'

interface Course {
    id: number,
    title: string,
    slug: string,
    descripion: string,
    price: number,
    instrucor: string,
    isFeatued: boolean
}

function FeaturedSection() {

    const featuredCourse = courseData.courses.filter((item: Course) => item.isFeatured)
    console.log(featuredCourse)

    return (
        <div className='py-12 bg-slate-950'>
            <div>
                <div className="text-center">
                    <h2 className='text-base sm:text-xl font-semibold text-teal-500 font-semi-bold tracking-wide uppercase'>Featured Courses</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
                </div>
            </div>

            <div className='mt-10 mx-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 justify-center'>
                    {
                        featuredCourse.map((course) => (
                            <div key={course.id} className="flex justify-center">
                                <BackgroundGradient
                                    className="flex flex-col rounded-[22px] bg-white dark:hover:bg-black dark:bg-zinc-900 duration-200 overflow-hidden h-full max-w-sm">
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                        <p className="text-lg font-bold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                        <p className="sm:text-m text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                        <Link href={`/courses/${course.slug}`}>
                                            <button className="rounded-full px-5 py-4 text-white flex items-center space-x-1 mt-4 text-xs font-bold dark:bg-black dark:hover:bg-zinc-800">
                                                Learn More
                                            </button>
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='third mt-20 text-center rounded'>
                <Link href={"/courses"}>
                    <Button className='bg-grey 2xl:text-base font-semibold'>View All Courses</Button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedSection
