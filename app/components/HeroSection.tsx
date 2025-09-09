'use client';

import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';
import { FaArrowDown } from 'react-icons/fa'; // react-icons


export default function HeroSection() {
	return (
		<section className="relative w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8  z-20 bg-black overflow-hidden">
			<ParticlesBackground/>
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/bhanu.jpeg" alt="Profile Picture" width={120} height={120} quality={100} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Bhanu Rakshita Paul</h1>
				<p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">Cybersecurity Enthusiant & Full Stack Developer 🛡️💻</p>
				<p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base px-4 mb-4">
					Third-year Computer Security student at York University, passionate about building secure, reliable systems while bridging software development and cybersecurity.
				</p>
				<p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base px-4">
					When I’m not building secure systems, you’ll find me exploring new cities, hunting for hidden art gems, or attempting to sketch something that looks more like a stick figure O-&gt;-&lt;
				</p>
			</div>
			 {/* Bottom Arrow */}
      <a href="#skills" className="absolute bottom-8 animate-bounce text-white text-2xl">
        <FaArrowDown />
      </a>
		</section>
	);
}
