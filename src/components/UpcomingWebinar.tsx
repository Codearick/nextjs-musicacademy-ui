import Link from 'next/link';
import React from 'react'
import { Button } from './ui/moving-border';
import { HoverEffect } from './ui/card-hover-effect';

function UpcomingWebinar() {
    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Instrument',
            description:
                'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Music Production Essentials',
            description:
                'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
        },
        // Added two more webinars
        {
            title: 'Live Performance Techniques',
            description:
                'Enhance your live performance skills with expert tips and strategies.',
            slug: 'live-performance-techniques',
            isFeatured: true,
        },
        {
            title: 'Digital Music Marketing',
            description:
                'Learn how to promote your music effectively in the digital age.',
            slug: 'digital-music-marketing',
            isFeatured: true,
        },
    ];
    return (
        <div className='bg-slate-950 p-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className='text-base sm:text-3xl font-semibold text-teal-500 font-semi-bold tracking-wide'>Featured Webinars</h2>
                    <p className='mt-2 sm:text-4xl text-base leading-8 font-extrabold tracking-tight text-white'>Enhance Your Musical Journey</p>
                </div>
                {/* second section */}

                <div className='mt-10'>
                    <HoverEffect
                    items={featuredWebinars.map(item => (
                    {
                        title: item.title,
                        description: item.description,
                        link: item.slug
                    }
                    ))} 
                    />
                </div>

                {/* third section starts */}
                <div className='mt-10 text-center'>
                    <Link href={"/courses"}>
                        <Button className='bg-grey 2xl:text-base font-semibold'>View All Courses</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default UpcomingWebinar
