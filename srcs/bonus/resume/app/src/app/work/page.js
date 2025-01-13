"use client";

import { motion } from "framer-motion";

const works = [
    {
        title: "Cabinette",
        link: "https://github.com/BEQSONA-cmd/Cabinette",
        image: "images/01.png",
        description: "Tests for 42 projects.",
        languages: "C, C++, Python, Shell, Makefile",
    },
    {
        title: "ReallyShell",
        link: "https://github.com/BEQSONA-cmd/Reallyshell",
        image: "images/02.png",
        description: "Program for connection between two terminals remotely.",
        languages: "Shell, C++",
    },
    {
        title: "ChxikviGPT3.5",
        link: "https://github.com/BEQSONA-cmd/ChxikviGPT3.5",
        image: "images/03.png",
        description: "Web app for private chat rooms and AI companion.",
        languages: "Python, JavaScript, CSS, HTML",
    },
    {
        title: "Cpp Tricks",
        link: "https://github.com/BEQSONA-cmd/Cpp_Tricks",
        image: "images/04.png",
        description: "Explanation of hard concepts in C++.",
        languages: "C++",
    },
    {
        title: "Minishell Tester",
        link: "https://github.com/BEQSONA-cmd/Minishell_Tester",
        image: "images/05.png",
        description: "A tool to simplify testing minishell.",
        languages: "Shell, Python, C++",
    },
    {
        title: "Debug Leaks",
        link: "https://github.com/BEQSONA-cmd/Debug_Leaks",
        image: "images/06.png",
        description: "A tool for simplifying leak detection in projects.",
        languages: "Python, C++",
    },
];

const Project = ({ work, index }) => {
    return (
        <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 * index,
            }}
            href={work.link}
            target="_blank"
            className=""
        >
            <div className="box style2 bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full w-full duration-300 hover:scale-105">
                <img
                    src={work.image}
                    alt={work.title}
                    className="image featured"
                />
                <h3 className="font-black mt-4 text-center">{work.title}</h3>
                <div className="text-center mb">
                    <p className="text-xs">{work.description}</p>
                    <p className="text-sm">
                        <span className="font-bold text-blue-300">
                            Languages:
                        </span>{" "}
                        <strong>{work.languages}</strong>
                    </p>
                </div>
            </div>
        </motion.a>
    );
};

export default function work() {
    return (
        <article id="work" className="wrapper style3 py-8 bg-gray-900">
            <div className="container mx-auto">
                <header className="text-center">
                    <h2 className="text-3xl font-semibold mb-2">
                        Here's some stuff I made recently.
                    </h2>
                    <p className="text-lg mb-6">
                        All of these are my side projects.
                    </p>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-5 mx-12">
                    {works.map((work, index) => (
                        <Project key={index} work={work} index={index} />
                    ))}
                </div>
                <footer className="text-center mt-8">
                    <p className="mb-10">
                        Have any questions? Feel free to ask! I'm open to
                        collaboration. Let's innovate together! 💡
                    </p>
                    <a href="contact">
                        <button
                            className="text-lg shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 font-black py-3 px-6 rounded-lg hover:scale-105 duration-300"
                        >
                            Get in touch with me
                        </button>
                    </a>
                </footer>
            </div>
        </article>
    );
}
