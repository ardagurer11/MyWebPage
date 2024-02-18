"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ActionBox from "@/components/LandingPage/ActionBox";
import IntroBox from "@/components/LandingPage/introBox";
import Image from "next/image";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-soft-beige">
      <Header />
      <div className="m-20" />
      <div className="grid grid-cols-auto md:grid-cols-2 sm:grid-cols-1 mx-[4rem]">
        <IntroBox 
          introSequence={[
                // Same substring at the start will only be typed out once, initially
                'Hello,',
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                'Hello, my name is Arda Gürer.',
                1000
              ]}
          description={"In the heart of an ancient forest, where whispers of the past weave through the towering trees, a small, shimmering brook carves its way through the dense underbrush, its crystal-clear waters dancing under the dappled sunlight. Nearby, a curious fox, its coat a vibrant shade of russet, tiptoes through the undergrowth, its sharp eyes scanning the surroundings for any sign of movement. Above, a kaleidoscope of birds serenades the wilderness, their melodies intertwining to create a symphony of nature's tranquility. Amidst this natural splendor, a lone traveler, awestruck by the beauty surrounding them, pauses to take in the serenity, their heart filled with an unspoken peace that whispers of ancient secrets and the timeless dance of the earth's eternal cycle."}
        />
        <div className="flex flex-col md:items-end sm:items-center md:mr-[4rem]">
          <div className="text-4xl mb-3 font-bold md:mr-6">
            Latest Updates
          </div>
          <ActionBox
            name={'GardGPT'}
            description={'In the heart of an ancient forest, where whispers of the past weave through the towering trees, a small, shimmering brook carves its way through the dense underbrush, its crystal-clear waters dancing under the dappled sunlight.'}
            action={'Try It Out'}
            refName={'/GardGPT'}
          />
          <ActionBox
            name={'Gard-E'}
            description={'In the heart of an ancient forest, where whispers of the past weave through the towering trees, a small, shimmering brook carves its way through the dense underbrush, its crystal-clear waters dancing under the dappled sunlight.'}
            action={'Try It Out'}
            refName={'/GardE'}
          />
          
          
        </div>
      </div>
      <div className="my-12"></div>
      <Footer />
    </main>
  );
}
