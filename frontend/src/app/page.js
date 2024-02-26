"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Carousel from "@/components/LandingPage/carousel";
import IntroBox from "@/components/LandingPage/introBox";
import ActionBox from "@/components/LandingPage/actionBox";
import QuoteBox from "@/components/LandingPage/quoteBox";
import ThreeGrid from "@/components/LandingPage/threeGrid";
import TwoGrid from "@/components/LandingPage/twoGrid";
import Image from "next/image";



export default function Home() {

  const descriptionParts = [
    "I graduated from ",
    { text: "Saint Joseph High School", link: "https://sj.k12.tr" },
    " and later earned my Computer Science degree from ",
    { text: "Purdue University", link: "https://www.purdue.edu" },
    ". My work involves building mobile applications, websites, artificial intelligence models, and managing database systems. Currently, I'm a data scientist at ",
    { text: "Ford Otosan", link: "https://www.fordotosan.com.tr" },
    ", where I apply my skills to analyze and interpret complex data sets. Beyond my professional life, I have a strong passion for adventure and curiosity, constantly seeking new experiences and knowledge."
  ];

  return (
    <main className="flex min-h-screen flex-col bg-soft-beige">
      <Header />
      <div className="m-[3rem]" />
      <TwoGrid>
        <IntroBox
          introSequence={[
            // Same substring at the start will only be typed out once, initially
            'Hello,',
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            'Hello, my name is Arda Gürer.',
            1000
          ]}
          descriptionParts={descriptionParts}
        />
        <div className="flex flex-col items-center justify-center mx-[4rem] my-[4rem]">
          <Image
            src={'./retro-1.png'}
            width={512}
            height={512}
            alt="retro"
          />
        </div>
      </TwoGrid>

      <div className="flex flex-col items-center justify-center">
        <Image
          src={'./separator-1.png'}
          width={650}
          height={50}
          alt="retro"
        />
      </div>

      <div className="my-[3rem]"></div>
      <TwoGrid>
        <div className="flex flex-col items-center justify-center mx-[4rem] my-[4rem]">
          <Image
            src={'./retro-4.png'}
            width={500}
            height={500}
            alt="retro"
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-[4rem] my-[4rem]">
          <div className="text-4xl mb-6 font-bold ">
            Latest Applications
          </div>
          <ActionBox
            name={'GardGPT'}
            description={'In the heart of an ancient forest, where whispers of the past weave through the towering trees, a small, shimmering brook carves its way through the dense underbrush, its crystal-clear waters dancing under the dappled sunlight.'}
            action={'Try It Out'}
            refName={'/Projects/GardGPT'}
          />
          <ActionBox
            name={'Gard-E'}
            description={'In the heart of an ancient forest, where whispers of the past weave through the towering trees, a small, shimmering brook carves its way through the dense underbrush, its crystal-clear waters dancing under the dappled sunlight.'}
            action={'Try It Out'}
            refName={'/Projects/GardE'}
          />
        </div>
      </TwoGrid>
      
      <div className="flex flex-col items-center justify-center my-12">
        <Image
          src={'./separator-2.png'}
          width={500}
          height={50}
          alt="retro"
        />
      </div>

      <div className="my-6"></div>
      <ThreeGrid>
        <QuoteBox name={'Richard Feynman'} quote={'"What I cannot create, I do not understand."'} />
        <QuoteBox name={'Oscar Wilde'} quote={'"Give a man a mask and he\'ll tell you the truth."'} />
        <QuoteBox name={'Raymond Loewy'} quote={'"Design is too important to be left to designers."'} />
      </ThreeGrid>
      <div className="my-12"></div>
      <Footer />
    </main>
  );
}
