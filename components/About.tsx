import Head from 'next/head';
import { items } from '@/lib/constant';
import CompanyOverview from './CompanyOverview';



export default function About() {

    return (
        <section id='about' className="min-h-screen w-full mx-auto flex flex-col pt-20">
            <Head>
                <title>About Us | Novanectar Solutions</title>
                <meta name="description" content="Learn about Novanectar Solutions - Innovative tech solutions for businesses." />
            </Head>

            <div className='space-y-3 flex flex-col items-center w-full'>
                <h1 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
                    About Novanectar Solutions
                </h1>

                {items.map(item => (
                    <CompanyOverview key={item.id} title={item.title} image={item.image} description={item.description} className={item.className} />
                ))}

            </div>
        </section >
    );
}