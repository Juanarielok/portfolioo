import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons';

export const RESUME_DATA = {
	name: 'Juan Ariel Ortiz Iacampo',
	initials: 'J A O I',
	location: 'Buenos Aires, Argentina',
	locationLink: '',
	about: 'Software Engineer.',
	summary: ` Hello! I’m Juan Ariel, a passionate software engineer with a degree in Systems Analysis, specializing in fullstack development. Are you looking for a dedicated, experienced professional eager for new challenges?

	That's me!`,
	avatar: '/assets/avatar.webp',

	contact: {
		email: {
			name: 'Email',
			at: 'juanarielok@gmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+542236853991'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/Juanarielok',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/juan-ariel-ortiz-/',
				icon: LinkedInIcon
			}
		]
	},
	education: [
		{
			school: 'Instituto superior de informatica Virasoro',
			degree: "Systems Analyst",
			start: 'March, 2021',
			end: 'Dec, 2023'
		}
	],
	work: [
		{
			company: 'SAUMA S.A',
			link: 'https://github.com/thefrontendlab',
			badges: ['Hybrid'],
			title: 'Fullstack Developer',
			start: 'Feb, 2022',
			end: 'March, 2024',
			description: `Worked as a fullstack developer, creating platforms, working on their maintenance and seeking for their scalability.`
		}
	],
	 
skills: [
	'TypeScript',
'JavaScript',
'Python',
'HTML5',
'CSS',
'SASS',
'C#',
'React',
'Angular',
'NextJS',
'Jest',
'React Testing Library',
'Cypress',
'Visual Studio',
'Atom',
'Postman',
'SQL Workbench',
'npm',
'git',
'IBM Cloud',
'Google Cloud',
'AWS'
	],
	
	
	projects: [
		{
			title: '██▓▒­░⡷⠂𝙵𝙸𝚂𝙷 𝙼𝙰𝙽𝙰𝙶𝙴𝚁⠐⢾░▒▓██',
			techStack: [
				'C#', 'XML'
			],
			description:
				'The ultimate fish manager! Control your stock, types of seafood, freezers, customers and more! BETA VERSION.',
			link: {
				label: 'https://github.com/Juanarielok/Fish-Manager-2021',
				href: 'https://github.com/Juanarielok/Fish-Manager-2021'
			}
		},
		{
			title: '｡.✰ PIZZERIA "BARRIO JARDIN" ✰.｡',
			techStack: [
				'React', 'Javascript', 'HTML', 'SCSS', 'Node.js'
			],
			description:
				'Presenting an innovative platform designed to optimize delivery management, promising not only enhanced efficiency but also significant cost savings. Currently a work in progress, stay tuned for its grand unveiling! - WIP.',
			link: {
				label: 'https://github.com/Juanarielok/BarrioJardin-Pizzeria',
				href: 'https://github.com/Juanarielok/BarrioJardin-Pizzeria'
			}
		},
		{
			title: '𝐄𝐚𝐬𝐲 𝐀𝐈',
			techStack: [
				'React', 'Javascript', 'HTML', 'SCSS', 'Node.js', 'SQL', 'Jira', 'Figma'
			],
			description:
				'Basically a "chatgpt" for students to summarize academic text, books and study material - WIP',
			link: {
				label: 'https://github.com/Juanarielok/easyai',
				href: 'https://github.com/Juanarielok/easyai'
			}
		},
		{
			title: '✵✵𝘾𝙊𝙈𝙐𝙉𝙄𝙏𝘼𝙍𝙄𝙊 𝓢𝓽𝓸𝓻𝓮✵✵',
			techStack: [
				'React', 'JavaScript', 'HTML', 'SCSS', 'Node.js'
			],
			description:
				'A platform that will help the producers and consumers avoid intermediaries and unnecessary taxes, this project it is going to bring a HUGE change - WIP',
			link: {
				label: 'https://github.com/Juanarielok/Comunitario-Store',
				href: 'https://github.com/Juanarielok/Comunitario-Store'
			}
		}
	]
};