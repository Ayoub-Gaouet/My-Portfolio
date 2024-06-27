'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
    const { ref } = useSectionInView('Accueil', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="accueil"
            className="flex flex-col-reverse sm:flex-row items-center justify-between mb-28 max-w-7xl mx-auto sm:mb-0 scroll-mt-[100rem]"
        >
            <motion.div
                className="w-full sm:w-1/1.5 px-4 text-left"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <motion.h1
                    className="mb-10 mt-4 text-2xl font-medium sm:text-2xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <strong>Bonjour</strong>, je suis <strong>Ayoub Gaouet</strong>, développeur web et mobile qualifiée, spécialisée en <strong>design UI/UX</strong>.
                    Avec une solide expérience en <strong>PHP, Laravel et Flutter</strong>, je suis passionnée par la création de solutions numériques innovantes.
                    J'aspire à transformer les idées en réalités numériques.
                </motion.h1>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="#contact"
                        className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full transition ease-in-out duration-150 hover:scale-105 hover:bg-gray-700"
                        onClick={() => {
                            setActiveSection('Contact');
                            setTimeOfLastClick(Date.now());
                        }}
                    >
                        Contactez-moi ici <BsArrowRight className="ml-2" />
                    </a>

                    <a
                        className="bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full border border-gray-300 transition ease-in-out duration-150 hover:scale-105"
                        href="/Ayoub Gaouet CV.pdf"
                        download
                    >
                        Télécharger CV <HiDownload className="ml-2" />
                    </a>
                </div>
                {/* Social Icons */}
                <div className="mt-4 flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/ayoub-gaouet/"
                        target="_blank"
                        className="bg-white p-4 text-gray-700 hover:text-gray-900 rounded-full transition ease-in-out duration-150 hover:scale-105"
                        rel="noopener noreferrer"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        href="https://github.com/Ayoub-Gaouet"
                        target="_blank"
                        className="bg-white p-4 text-gray-700 hover:text-gray-900 rounded-full transition ease-in-out duration-150 hover:scale-105"
                        rel="noopener noreferrer"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>

            <div className="w-full sm:w-1/2 flex justify-end px-4">
                <motion.div
                    className="relative inline-block"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'tween', duration: 0.2 }}
                >
                    <Image
                        src="/profile-photo.jpg"
                        alt="Ayoub Gaouet"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}
