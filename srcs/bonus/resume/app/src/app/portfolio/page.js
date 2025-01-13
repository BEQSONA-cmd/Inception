"use client";

import { FaLaptopCode, FaReact } from "react-icons/fa";
import { MdOutlineTerminal } from "react-icons/md";
import { SiOpenai } from "react-icons/si";
import { IoPersonCircle, IoPeopleCircle } from "react-icons/io5";
import { motion } from "framer-motion";

export default function work() {
    const data = [
        {
            title: "Social Skills",
            description: (
                <p>
                    I can speak four different languages:{" "}
                    <strong>English, Polish, Russian, and Georgian.</strong>
                </p>
            ),
            icon: <IoPersonCircle className="mx-auto" />,
            color: "text-blue-400 bg-blue-900",
        },
        {
            title: "General Info",
            description: (
                <p>
                    I am <strong>23</strong> years old from{" "}
                    <strong>Georgia</strong>, currently studying at{" "}
                    <strong>42 Wolfsburg</strong> in Germany.
                </p>
            ),
            icon: <IoPeopleCircle className="mx-auto" />,
            color: "text-purple-400 bg-purple-900",
        },
        {
            title: "Software Engineering",
            description: (
                <p>
                    Proficient in system-level programming and software
                    engineering using: <strong>C, C++, Python.</strong>
                </p>
            ),
            icon: <FaLaptopCode className="mx-auto" />,
            color: "text-orange-400 bg-orange-900",
        },
        {
            title: "Web Development",
            description: (
                <p>
                    specializing in both backend using:{" "}
                    <strong>Python, JavaScript (Flask and HTTP Server).</strong> and
                    frontend: <strong>JavaScript, HTML, CSS, Next.js</strong>
                </p>
            ),
            icon: <FaReact className="mx-auto" />,
            color: "text-blue-400 bg-blue-600",
        },
        {
            title: "Scripting Languages",
            description: (
                <p>
                    Simulating Bash using<strong> C </strong>programming language.
                    and scripting for network protocols and interpreted programs
                    using: <strong>Bash, Python, JavaScript.</strong> 
                </p>
            ),
            icon: <MdOutlineTerminal className="mx-auto" />,
            color: "text-green-400 bg-green-900",
        },
        {
            title: "AI Integration",
            description: (
                <p>
                    Built AI-driven platforms and Custom LLM Applications with:{" "}
                    <strong>Python, JavaScript, FastAPI </strong>
                    using:{" "}
                    <strong>OpenAI, Gemini AI.</strong>
                </p>
            ),
            icon: <SiOpenai className="mx-auto" />,
            color: "text-teal-400 bg-teal-800",
        },
    ];

    return (
        <article
            id="work"
            className="text-center wrapper style2 py-16 bg-gray-900"
        >
            <div
                className="container mx-auto max-w-4xl overflow-hidden"
            >
                <header>
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Here's small info about me
                    </h2>
                    <p className="text-lg text-gray-400 mb-8">
                        General information and skills that define me.
                    </p>
                </header>
                <div className="flex flex-wrap justify-center">
                    {data.map((e, index) => {
                        return (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.1 * index,
                                }}
                                key={index}
                                className="w-full md:w-1/3 p-4"
                            >
                                <section className="box style2 bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full transition transform duration-300 hover:scale-105">
                                    <span
                                        className={`text-5xl p-4 rounded-full mb-4 ${e.color}`}
                                    >
                                        {e.icon}
                                    </span>
                                    <h3 className="text-2xl font-semibold text-white">
                                        {e.title}
                                    </h3>
                                    <div className="text-gray-400">
                                        {e.description}
                                    </div>
                                </section>
                            </motion.div>
                        );
                    })}
                </div>
                <footer className="text-center mt-8">
                    <p className="mb-6">
                    I've always liked to code and 42 Wolfsburg turned out to be a great way to learn
                    </p>
                    <a href="work">
                        <button
                            className="text-lg shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 font-black py-3 px-6 rounded-lg hover:scale-105 duration-300"
                        >
                            See some of my recent projects
                        </button>
                    </a>
                </footer>
            </div>
        </article>
    );
}
