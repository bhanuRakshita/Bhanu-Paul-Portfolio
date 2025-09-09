import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Bhanu Paul - Security Developer',
	description:
		'Welcome to my portfolio! I am a passionate developer who believes in simplicity and effectiveness. I focus on creating straightforward solutions that solve real problems, with clean code and intuitive user experiences.',
	keywords: [
		'Software Developer',
		'Web Developer',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Bhanu Rakshita Paul',
		'Bhanu Paul',
		'Cybersecurity',
		
	],
	authors: [{ name: 'Bhanu Paul' }],
	creator: 'Bhanu Paul',
	openGraph: {
		title: 'Bhanu Paul - Developer Portfolio',
		description: 'Aspiring cybersecurity professional and software developer focused on cloud, full-stack development, and protecting digital environments.',
		url: 'https://bhanurakshita.netlify.app/',
		siteName: 'Bhanu Paul - Portfolio',
		images: [
			{
				url: '/bhanu.jpeg',
				width: 1200,
				height: 630,
				alt: 'bhanu paul - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
