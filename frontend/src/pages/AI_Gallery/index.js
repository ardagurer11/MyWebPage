import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import '../../app/globals.css'
import Footer from '@/components/Footer';

const gallery = [
    {
        name: 'dediedied',
        url: './bg.png',
        description: 'eujfiuhf feiufiefieuf ei eiufheue edded frkf rkfrfr ilvtkvt',
        createdBy: 'Dalle 3',
        prompt: 'deideiudhe deded euhdieud eud ekudheud eudhe uehduhed'
    },
    {
        name: 'dediedied',
        url: './retro-5.png',
        description: 'eujfiuhf feiufiefieuf ei eiufheue edded',
        createdBy: 'Dalle 3',
        prompt: 'deideiudhe deded euhdieud eud ekudheud eudhe uehduhed'
    },
    {
        name: 'dediedied',
        url: './ardagurer.jpeg',
        description: 'eujfiuhf feiufiefieuf ei eiufheue edded',
        createdBy: 'Dalle 3',
        prompt: 'deideiudhe deded euhdieud eud ekudheud eudhe uehduhed'
    },
    {
        name: 'dediedied',
        url: './arda_pokemon.png',
        description: 'eujfiuhf feiufiefieuf ei eiufheue edded',
        createdBy: 'Dalle 3',
        prompt: 'deideiudhe deded euhdieud eud ekudheud eudhe uehduhed'
    },
    {
        name: 'dediedied',
        url: './retro-2.png',
        description: 'eujfiuhf feiufiefieuf ei eiufheue edded',
        createdBy: 'Dalle 3',
        prompt: 'deideiudhe deded euhdieud eud ekudheud eudhe uehduhed'
    },
    {
        name: 'dediedied',
        url: './retro-1.png',
        description: 'eujfiuhf feiufiefieuf ei eiufheue edded',
        createdBy: 'Dalle 3',
        prompt: 'deideiudhe deded euhdieud eud ekudheud eudhe uehduhed'
    },
    {
        name: 'dediedied',
        url: './ardagurer.jpeg',
        description: 'eujfiuhf feiufiefieuf ei eiufheue edded',
        createdBy: 'Dalle 3',
        prompt: 'deideiudhe deded euhdieud eud ekudheud eudhe uehduhed'
    },
    {
        name: 'dediedied',
        url: './retro-6.png',
        description: 'eujfiuhf feiufiefieuf ei eiufheue edded',
        createdBy: 'Dalle 3',
        prompt: 'deideiudhe deded euhdieud eud ekudheud eudhe uehduhed'
    },
    {
        name: 'dediedied',
        url: './retro-4.png',
        description: 'eujfiuhf feiufiefieuf ei eiufheue edded rfrfr gt g wewrrrwrw gtgtg erferfe tgtgtg',
        createdBy: 'Dalle 3',
        prompt: 'deideiudhe deded euhdieud eud ekudheud eudhe uehduhed'
    },
]

const AI_Gallery = () => {
    return (
        <main className="flex min-h-screen flex-col bg-soft-beige">
            <Header />
            <div className='flex mx-[8rem] my-[8rem]'>
                <div className='flex flex-col'>
                    <div className='text-4xl font-bold mb-[4rem]'>
                        My Galery
                    </div>
                    <div className="columns-5 gap-4">
  {gallery.map((image, index) => (
    <div key={index} className='group relative flex items-end justify-center mb-4 hover:scale-105 transition-all duration-300 ease-in-out'>
      <img
        src={image.url}
        alt={image.description || 'Image'}
        className='w-full rounded-[28px] bg-red-300 aspect-auto shadow-lg z-10'
      />
      <div className="absolute bottom-0 inset-0 flex items-end justify-center w-full z-20">
        {/* Use before pseudo-element for the background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black from-30% to-transparent rounded-b-[28px] opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out"></div>
        <p className="relative text-white text-center px-2 line-clamp-2 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-30">
          {image.description || 'No description'}
        </p>
      </div>
    </div>
  ))}
</div>


                </div>

            </div>
            <Footer />
        </main>
    );
}

export default AI_Gallery;