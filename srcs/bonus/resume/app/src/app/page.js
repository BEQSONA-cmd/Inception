"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <article id="work" className="wrapper style3 py-16">
            <div className="container mx-auto flex flex-wrap max-w-[900px]">
                <div
                    className="relative mx-auto !h-[300px] !w-[300px] md:w-1/2 p-4"
                >
                    <Image
                        className="object-cover rounded-full !w-[300px] !h-[300px]"
                        src="/images/me.jpg"
                        alt="Beqa Tvildiani"
                        fill={true}
                    />
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <header>
                        <h1 className="text-4xl mb-4 text-center font-bold">
                            Hi. I'm <strong>Beqa Tvildiani</strong>.
                        </h1>
                    </header>
                    <div className="text-center">
                        <p className="mb-4 text-lg  font-medium">
                            <strong>
                                I am a Software Engineer proficient 👨‍💻.
                            </strong>{" "}
                            Passionate about crafting efficient code, building
                            dynamic web applications, and automating tasks.
                        </p>
                        <a href="portfolio">
                            <button className="text-lg shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 font-black py-3 px-6 rounded-lg hover:scale-105 duration-300">
                                Get in touch with me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
