'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/bhanu.png" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Bhanu Rakshita Paul</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Cybersecurity Enthusiant & Full Stack Developer 🛡️💻</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4 mb-4">
					Third-year Computer Security student at York University, passionate about building secure, reliable systems while bridging software development and cybersecurity.
				</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					When I’m not building secure systems, you’ll find me exploring new cities, hunting for hidden art gems, or attempting to sketch something that looks more like a stick figure O-&gt;-&lt;
				</p>
			</div>
		</section>
	);
}
