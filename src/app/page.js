'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const Lanyard = dynamic(() => import('./components/Lanyard'), { ssr: false });
const ThreeDCarousel = dynamic(() => import('./components/ThreeDCarousel'), { ssr: false });
const Folder = dynamic(() => import('./components/Folder'), { ssr: false });

const frontendSkills = [
  { name: 'Angular', href: 'https://angular.dev/', iconClass: 'span-svg-angular' },
  { name: 'Next.js', href: 'https://nextjs.org/docs', iconClass: 'span-svg-next' },
  { name: 'React', href: 'https://react.dev/', iconClass: 'span-svg-react' },
  { name: 'Zustand', href: 'https://zustand-demo.pmnd.rs/', iconClass: 'span-svg-zustand' },
  { name: 'Tanstack', href: 'https://tanstack.com/', iconClass: 'span-svg-tanstack' },
  { name: 'RxJS', href: 'https://rxjs.dev/', iconClass: 'span-svg-rxjs' },
  { name: 'Redux', href: 'https://redux.js.org/', iconClass: 'span-svg-redux' },
  { name: 'Shadcn', href: 'https://ui.shadcn.com/', iconClass: 'span-svg-shadcn' },
  { name: 'Framer', href: 'https://www.framer.com/', iconClass: 'span-svg-framer' },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', iconClass: 'span-svg-tailwind' },
  { name: 'Bootstrap', href: 'https://getbootstrap.com/', iconClass: 'span-svg-bootstrap' },
  { name: 'HTML', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', iconClass: 'span-svg-html' },
  { name: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', iconClass: 'span-svg-css' },
  { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', iconClass: 'span-svg-js' },
  { name: 'Typescript', href: 'https://www.typescriptlang.org/', iconClass: 'span-svg-ts' }
];

const backendSkills = [
  { name: 'Bun', href: 'https://bun.sh/', iconClass: 'span-svg-bun' },
  { name: 'Elysia', href: 'https://elysiajs.com/', iconClass: 'span-svg-elysia' },
  { name: 'Node.js', href: 'https://nodejs.org/en/docs/', iconClass: 'span-svg-node' },
  { name: 'Django', href: 'https://docs.djangoproject.com/en/4.0/', iconClass: 'span-svg-django' }
];

const testingSkills = [
  { name: 'Playwright', href: 'https://playwright.dev/', iconClass: 'span-svg-playwright' },
  { name: 'Cypress', href: 'https://www.cypress.io/', iconClass: 'span-svg-cypress' },
  { name: 'Jasmine', href: 'https://jasmine.github.io/', iconClass: 'span-svg-jasmine' },
  { name: 'Karma', href: 'https://karma-runner.github.io/', iconClass: 'span-svg-karma' }
];

const chunkArray = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

const renderSkillGroup = (skillsArray) => {
  const rows = chunkArray(skillsArray, 4);
  return rows.map((row, rowIndex) => (
    <React.Fragment key={rowIndex}>
      {row.map((skill) => (
        <a
          key={skill.name}
          className={`skill ${skill.name.toLowerCase() === 'angular' ? 'angular' : ''} skill-active`}
          title={skill.name}
          aria-label={`Learn more about ${skill.name}`}
          href={skill.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)' }}>
            <span className={`${skill.iconClass} flex`}></span>
          </span>
          <span className="px-1">{skill.name}</span>
        </a>
      ))}
      {rowIndex < rows.length - 1 && <div className="break-skill"></div>}
    </React.Fragment>
  ));
};

const experiencesData = [
  {
    company: 'TheKey',
    logo: 'assets/images/company-thekey-logo.png',
    url: 'https://www.linkedin.com/company/thekeysa/',
    roles: [
      {
        title: 'Full-Stack Developer',
        type: 'Full-time',
        duration: 'Dec 2024 - Mar 2026 • 1 yr 4 mos'
      }
    ],
    skills: [
      { name: 'React', href: 'https://react.dev/', iconClass: 'span-svg-react' },
      { name: 'Shadcn', href: 'https://ui.shadcn.com/', iconClass: 'span-svg-shadcn' },
      { name: 'Framer', href: 'https://www.framer.com/', iconClass: 'span-svg-framer' },
      { name: 'Zustand', href: 'https://zustand-demo.pmnd.rs/', iconClass: 'span-svg-zustand' },
      { name: 'Bun', href: 'https://bun.sh/', iconClass: 'span-svg-bun' },
      { name: 'Elysia', href: 'https://elysiajs.com/', iconClass: 'span-svg-elysia' }
    ]
  },
  {
    company: 'GoPlus',
    logo: 'assets/images/company-go-plus-logo.jpeg',
    url: 'https://www.linkedin.com/company/goplusio/about/',
    roles: [
      {
        title: 'Junior Frontend Developer',
        type: 'Full-time',
        duration: 'Feb 2024 - Nov 2024 • 10 mos'
      },
      {
        title: 'SDE - intern',
        type: 'Internship',
        duration: 'Mar 2023 - Feb 2024 • 1 yr'
      }
    ],
    skills: [
      { name: 'Angular', href: 'https://angular.dev/', iconClass: 'span-svg-angular' },
      { name: 'RxJS', href: 'https://rxjs.dev/', iconClass: 'span-svg-rxjs' },
      { name: 'Bootstrap', href: 'https://getbootstrap.com/', iconClass: 'span-svg-bootstrap' },
      { name: 'Karma', href: 'https://karma-runner.github.io/', iconClass: 'span-svg-karma' },
      { name: 'Jasmine', href: 'https://jasmine.github.io/', iconClass: 'span-svg-jasmine' },
      { name: 'Cypress', href: 'https://www.cypress.io/', iconClass: 'span-svg-cypress' },
      { name: 'Django', href: 'https://docs.djangoproject.com/en/4.0', iconClass: 'span-svg-django' }
    ]
  },
  {
    company: 'Omicron Technologies',
    logo: 'assets/images/company-omicron-logo.jpg',
    url: 'https://www.linkedin.com/company/omicron-technologies/about/',
    roles: [
      {
        title: 'Frontend Developer',
        type: 'Internship',
        duration: 'Nov 2022 - Jan 2023 • 3 mos'
      }
    ],
    skills: [
      { name: 'React', href: 'https://react.dev/', iconClass: 'span-svg-react' },
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', iconClass: 'span-svg-js' },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/docs/', iconClass: 'span-svg-ts' }
    ]
  },
  {
    company: 'GroRapid Labs',
    logo: 'assets/images/company-hsv-digital-logo.jpeg',
    url: 'https://www.linkedin.com/company/grorapid/',
    roles: [
      {
        title: 'SDE - intern',
        type: 'Internship',
        duration: 'Jul 2022 - Oct 2022 • 4 mos'
      }
    ],
    skills: [
      { name: 'React', href: 'https://react.dev/', iconClass: 'span-svg-react' },
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', iconClass: 'span-svg-js' },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/docs/', iconClass: 'span-svg-ts' },
      { name: 'Redux', href: 'https://redux.js.org/', iconClass: 'span-svg-redux' },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', iconClass: 'span-svg-tailwind' }
    ]
  },
  {
    company: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
    url: 'https://www.google.com',
    roles: [
      {
        title: 'Software Engineer',
        type: 'Full-time',
        duration: '2019 - 2020 • Full-time'
      }
    ],
    skills: [
      { name: 'React', href: 'https://react.dev/', iconClass: 'span-svg-react' },
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', iconClass: 'span-svg-js' },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/docs/', iconClass: 'span-svg-ts' }
    ]
  },
  {
    company: 'Capgemini',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_2017_logo.svg',
    url: 'https://www.capgemini.com',
    roles: [
      {
        title: 'Senior Consultant',
        type: 'Full-time',
        duration: '2015 - 2016 • 1 yr'
      }
    ],
    skills: [
      { name: 'Angular', href: 'https://angular.dev/', iconClass: 'span-svg-angular' },
      { name: 'RxJS', href: 'https://rxjs.dev/', iconClass: 'span-svg-rxjs' },
      { name: 'Bootstrap', href: 'https://getbootstrap.com/', iconClass: 'span-svg-bootstrap' }
    ]
  },
  {
    company: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    url: 'https://www.microsoft.com',
    roles: [
      {
        title: 'Software Engineer',
        type: 'Full-time',
        duration: '2002 - 2005 • 3 yrs'
      }
    ],
    skills: [
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', iconClass: 'span-svg-ts' },
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', iconClass: 'span-svg-js' },
      { name: 'HTML', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', iconClass: 'span-svg-html' }
    ]
  }
];

const projectsData = [
  {
    name: 'FyleHQ - Clone',
    image: 'assets/images/project-fylehq-homepage-clone.png',
    title: 'FyleHQ Expense Management Platform Clone - Angular Project',
    desc: 'This project is a front-end replication of the popular expense management platform Fyle HQ, designed to provide a sleek and responsive user experience. The clone was built using Ant Design (ng-zorro), a powerful Angular UI library, to ensure modern and consistent styling throughout the application.',
    github: 'https://github.com/PriDebnath/fylehq-clone',
    live: 'https://fylehq-clone-by-pritam.netlify.app',
    skills: [
      { name: 'Angular', iconClass: 'span-svg-angular' },
      { name: 'Ant Design', iconClass: 'span-svg-ant-design' },
      { name: 'Netlify', iconClass: 'span-svg-netlify' }
    ]
  },
  {
    name: 'Relu Consultancy - Assignment',
    image: 'assets/images/project-relu-consultancy-assignment.png',
    title: 'Relu Consultancy Frontend Development Assignment',
    desc: 'This project is about front-end development assignment I got from relu consultancy',
    github: 'https://github.com/PriDebnath/relu-consultancy-assignment',
    live: 'https://relu-consultancy-assignment-by-pri.netlify.app/',
    skills: [
      { name: 'Angular', iconClass: 'span-svg-angular' },
      { name: 'Netlify', iconClass: 'span-svg-netlify' }
    ]
  },
  {
    name: 'Tutedude - Assignment',
    image: 'assets/images/project-tutedude.png',
    title: 'Tutedude Frontend Development Assignment',
    desc: 'This project is about front-end development assignment I got from tutedude',
    github: 'https://github.com/PriDebnath/tutedude-assignment',
    live: 'https://tutedudeuibypri.netlify.app/',
    skills: [
      { name: 'React', iconClass: 'span-svg-react' },
      { name: 'Netlify', iconClass: 'span-svg-netlify' }
    ]
  },
  {
    name: 'Created Gemini Chatbot',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    title: 'Created Gemini Chatbot',
    desc: 'An intelligent AI chatbot interface engineered using Google Gemini API to deliver natural, context-aware, and highly responsive conversational experiences with advanced natural language processing capabilities.',
    github: 'https://github.com/PriDebnath',
    live: 'https://github.com/PriDebnath',
    skills: [
      { name: 'React', iconClass: 'span-svg-react' },
      { name: 'JavaScript', iconClass: 'span-svg-js' },
      { name: 'Node.js', iconClass: 'span-svg-node' }
    ]
  },
  {
    name: 'Build a Claude AI using Gemini',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    title: 'Build a Claude AI using Gemini',
    desc: "A unique AI platform bridging Anthropic's Claude prompt patterns with Google's powerful Gemini model engine, providing custom system prompts, stream-based responses, and seamless token optimization.",
    github: 'https://github.com/PriDebnath',
    live: 'https://github.com/PriDebnath',
    skills: [
      { name: 'React', iconClass: 'span-svg-react' },
      { name: 'Python', iconClass: 'span-svg-python' },
      { name: 'CSS', iconClass: 'span-svg-css' }
    ]
  },
  {
    name: 'n8n Workflow Automation',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80',
    title: 'n8n Workflow Automation',
    desc: 'Designed and deployed robust, self-hosted n8n workflow automations that connect multi-channel APIs, databases, and LLM nodes, automating manual database syncs, marketing outreach, and customer support loops.',
    github: 'https://github.com/PriDebnath',
    live: 'https://github.com/PriDebnath',
    skills: [
      { name: 'JavaScript', iconClass: 'span-svg-js' },
      { name: 'PostgreSQL', iconClass: 'span-svg-postgresql' },
      { name: 'Docker', iconClass: 'span-svg-docker' }
    ]
  },
  {
    name: 'Ecommerce Platform',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    title: 'Ecommerce Platform',
    desc: 'A full-stack, high-conversion e-commerce platform boasting lightning-fast server-side rendering, secure Stripe payment gateway integration, structured admin dashboard, and intuitive multi-category shopping flows.',
    github: 'https://github.com/PriDebnath',
    live: 'https://github.com/PriDebnath',
    skills: [
      { name: 'MongoDB', iconClass: 'span-svg-mongodb' },
      { name: 'Express.js', iconClass: 'span-svg-express' },
      { name: 'React', iconClass: 'span-svg-react' },
      { name: 'Node.js', iconClass: 'span-svg-node' }
    ]
  }
];

export default function Home() {
  const aboutRef = React.useRef(null);

  const [currentProjPage, setCurrentProjPage] = React.useState(0);
  const itemsPerProjPage = 3;
  const totalProjPages = Math.ceil(projectsData.length / itemsPerProjPage);
  
  const activeProjects = projectsData.slice(
    currentProjPage * itemsPerProjPage,
    (currentProjPage + 1) * itemsPerProjPage
  );

  const nextProjPage = () => {
    if (currentProjPage < totalProjPages - 1) {
      setCurrentProjPage(currentProjPage + 1);
    }
  };

  const prevProjPage = () => {
    if (currentProjPage > 0) {
      setCurrentProjPage(currentProjPage - 1);
    }
  };

  const [currentExPage, setCurrentExPage] = React.useState(0);
  const itemsPerExPage = 4;
  const totalExPages = Math.ceil(experiencesData.length / itemsPerExPage);
  
  const activeExperiences = experiencesData.slice(
    currentExPage * itemsPerExPage,
    (currentExPage + 1) * itemsPerExPage
  );

  const nextExPage = () => {
    if (currentExPage < totalExPages - 1) {
      setCurrentExPage(currentExPage + 1);
    }
  };

  const prevExPage = () => {
    if (currentExPage > 0) {
      setCurrentExPage(currentExPage - 1);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const render = () => {
        window.executeRenderSvg?.();
      };

      render();

      // Poll every 100ms for 3 seconds to ensure SVGs are rendered even if the script loads late
      const interval = setInterval(() => {
        if (window.executeRenderSvg) {
          render();
        }
      }, 100);

      // Clean up after 3 seconds
      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 3000);

      // Re-observe company containers for entrance scale-up animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-company-container");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "50px 0px" });

      const containers = document.querySelectorAll(".company-container");
      containers.forEach((container) => {
        container.classList.remove("animate-company-container");
        observer.observe(container);
      });

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
        observer.disconnect();
      };
    }
  }, [currentExPage, currentProjPage]);

  React.useEffect(() => {
    const container = aboutRef.current;
    if (!container) return;

    const lens = container.querySelector('.fluid-glass-lens');
    const magText = container.querySelector('.magnified-text');
    if (!lens || !magText) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Position the 160px lens centered on the cursor
      lens.style.left = `${x - 80}px`;
      lens.style.top = `${y - 80}px`;
      lens.style.transform = 'translate3d(0, 0, 0) scale(1)';
      lens.style.opacity = '1';

      // Move the magnified text inside the lens (1.35x zoom)
      magText.style.left = `${80 - x * 1.35}px`;
      magText.style.top = `${80 - y * 1.35}px`;
    };

    const handleMouseEnter = () => {
      lens.style.opacity = '1';
      lens.style.transform = 'scale(1)';
    };

    const handleMouseLeave = () => {
      lens.style.opacity = '0';
      lens.style.transform = 'scale(0.8)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>

      {/*  Body content starts  */}
      <div>

        {/*  Skip to main content link for accessibility  */}
        {/*  <a href="#main" className="skip-to-content" aria-label="Skip to main content">Skip to main content</a>  */}

        {/*  Home section starts  */}
        <main id="main" className="overflow-hidden h-100vh" role="main" aria-label="Main content">
          <div id="header" className="your-aura  you-come" title="Your aura">
            <div className="you show-aura" title="You">
              <div className="cuteness cuteness-1" title="Your cuteness"></div>
              <div className="cuteness cuteness-2" title="Your cuteness"></div>
              <div className="cuteness cuteness-3" title="Your cuteness"></div>
            </div>
          </div>

          <div className="base " id="home">
            <div className="flex ">
              <div className="homes">
                <div className="home">
                  <div className="roof-1"></div>
                  <div className="roof-2"></div>
                  <div className="wall">
                    <div className="windows">
                      <div className="window"></div>
                      <div className="window"></div>
                      <div className="window"></div>
                    </div>
                  </div>
                </div>

                <div className="home-2">
                  <div className="home-2__roof-1"></div>
                  <div className="home-2__roof-2"></div>
                  <div className="home-2__wall">
                    <div className="window-circle"></div>

                  </div>
                  <div className="home-2__base"></div>
                </div>

                <div className="tree">
                  <div className="branches">
                    <div className="branch branch-1"></div>
                    <div className="branch branch-2"></div>
                    <div className="branch branch-3"></div>
                    <div className="branch branch-4"></div>
                  </div>
                  <div className="leaves" id="leaves">
                    <div id="leaf-box">
                      {/* 
                        Js will populate it
                      <div className="leaf">
                        
                      </div>
                      
                       */}
                    </div>
                  </div>
                </div>

                <div className="me">
                  <div className="message-box">
                    <h1 className="message" id="message">
                      <div className="flex align-items-baseline">
                        <span className="hand">👋 </span>
                        <span> Hey, I’m Rishi Aravindha,</span>
                      </div>
                      a full-stack developer <br />
                      who loves to build first,
                      <br />
                      <span className="white-space-nowrap"> then make things beautiful ✨</span>
                    </h1>
                  </div>

                  <div className="img-box">
                    <img src="./assets/images/pritam-6.png" title="Pritam Debnath - Software Developer"
                      alt="Pritam Debnath, Software Developer specializing in frontend and backend development, based in Kolkata, India"
                      fetchPriority="high" decoding="async" />
                  </div>
                </div>

              </div>
            </div>


            <div className="ground  ">
              <div className="ground__child">
                <div className="ground__child__child">
                  <div className="ground__child__child__child">
                    <div className="ground__child__child__child__child"></div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </main>
        {/*  Home section ends  */}

        <div className="join-me-and-ex z-index-2"></div>

        {/*  About me & Skills section starts  */}
        <div className="bg-black-blur" style={{ padding: '1rem 1rem' }}>
          {/*  About me section starts  */}
          <div id="About-me" className="about-clean-container">
            <div className="about-clean-wrapper">
              <h2 className="about-clean-heading">Behind the Developer</h2>
              <div className="about-clean-split-layout">

                {/* Left side: Content block with premium lens magnifier effect */}
                <div className="about-clean-content-box" ref={aboutRef}>

                  {/* Fluid Glass Refraction Magnifier Lens */}
                  <div className="fluid-glass-lens">
                    <div className="magnified-text-container">
                      <div className="magnified-text">
                        I am Rishi, a Full-Stack Developer specializing in architecting scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I engineer responsive frontends, RESTful APIs, and robust backend systems. I am also proficient in Python for backend development and automation workflows.
                      </div>
                    </div>
                  </div>

                  {/* Standard text (visible normally) */}
                  <div className="about-clean-text">
                    I am Rishi, a Full-Stack Developer specializing in architecting scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I engineer responsive frontends, RESTful APIs, and robust backend systems. I am also proficient in Python for backend development and automation workflows.
                  </div>
                </div>

                {/* Right side: Portrait profile image */}
                <div className="about-clean-image-box">
                  <div className="about-profile-image-frame">
                    <img
                      src="./assets/images/about/Rishi Proffess pic.png"
                      alt="Rishi Aravindha - Professional Portrait"
                      decoding="async"
                      title="Rishi Aravindha - Full Stack Developer"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/*  About me section ends  */}

          <div id="Skills">
            <h2 className="section-h2">Skills</h2>

            <div className="skills-split-layout">
              {/* Left Column: Skill grids grouped with 4 per row rule */}
              <div className="skills-left-column">
                <section id="skill-section">
                  <div className="skill-container">
                    <h3>
                      Frontend
                    </h3>
                    <div className="skills" id="frontend-skills">
                      {renderSkillGroup(frontendSkills)}
                    </div>
                  </div>
                  
                  <div className="skill-container">
                    <h3>
                      Backend
                    </h3>
                    <div className="skills" id="backend-skills">
                      {renderSkillGroup(backendSkills)}
                    </div>
                  </div>
                  
                  <div className="skill-container">
                    <h3>
                      Testing
                    </h3>
                    <div className="skills" id="testing-skills">
                      {renderSkillGroup(testingSkills)}
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Lanyard 3D component with Drag It! text */}
              <div className="skills-right-column">
                <div style={{ 
                  fontFamily: '"Delius", serif', 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: 'var(--body-text-color, snow)', 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  <span>👇</span> Drag it
                </div>
                <div id="lanyard-3d-root" style={{ width: '100%', height: '560px', minHeight: '560px', position: 'relative' }}>
                  <Lanyard transparent={true} />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        {/*  About me & Skills section ends  */}

        {/*  Experience section starts  */}

        <div className="grid-col1-md-col2  z-index-2" style={{ backgroundColor: 'var(--body-color)' }}>

          <div className="min-width-400px-width-50per" id="Experience">

            <h2 className="section-h2 text-center sticky top-0 blur z-index-10">Experience</h2>


            <div className="ex-section" style={{ padding: '1rem' }}>

              <div className="ex-vertical-line-box">
                <div className="ex-vertical-line-svg-box" style={{ top: '0' }}>
                  <span className="span-svg-circle" style={{ display: 'block', height: '16px', aspectRatio: '1' }}></span>
                </div>
                <div className="ex-vertical-line"></div>
              </div>


              <div className="ex-cards" id="ex-cards">
                {activeExperiences.map((exp, expIdx) => {
                  return (
                    <div className="ex-card" key={exp.company}>
                      <div className="join-card-company-container"></div>
                      <div className="company-container">
                        <div className="company-box">
                          <img 
                            className="company-img" 
                            src={exp.logo} 
                            loading="lazy" 
                            decoding="async"
                            alt={`${exp.company} company logo`} 
                          />
                          <h3 className="company-name">
                            <a 
                              href={exp.url} 
                              target="_blank"
                              rel="noopener noreferrer" 
                              aria-label={`Visit ${exp.company} company LinkedIn page`}
                            >
                              {exp.company}
                              <span className="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>
                            </a>
                          </h3>
                        </div>
                        
                        <div className="company-role-box">
                          {exp.roles.map((role, roleIdx) => {
                            const isMultiple = exp.roles.length > 1;
                            const isFirst = roleIdx === 0;
                            const isLast = roleIdx === exp.roles.length - 1;
                            
                            return (
                              <div className="company-role" key={roleIdx}>
                                <div className="svg-container">
                                  <span className="span-svg-circle"></span>
                                  {isMultiple && isFirst && (
                                    <span className="role-vertical-line first-role-vertical-line"></span>
                                  )}
                                  {isMultiple && isLast && (
                                    <span className="role-vertical-line last-role-vertical-line"></span>
                                  )}
                                </div>
                                <div className="role-box">
                                  <h4 className="role-name">{role.title}</h4>
                                  <p className="role-type">{role.type}</p>
                                  <p className="role-length">{role.duration}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="company-accured-skill-box flex-wrap">
                          <p className="white-space-nowrap">Acquired tech skills</p>
                          <div className="flex align-items-center flex-wrap">
                            {exp.skills.map((skill) => {
                              return (
                                <a 
                                  key={skill.name}
                                  className="skill-icon" 
                                  href={skill.href} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${skill.name} official website`}
                                >
                                  <span 
                                    style={{ display: 'flex', alignItems: 'center', aspectRatio: '1' }} 
                                    className={skill.iconClass}
                                  ></span>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="ex-vertical-line-box">
                <div className="ex-vertical-line-svg-box" style={{ bottom: '0', width: '100%', display: 'flex', justifyContent: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                  {experiencesData.length > 4 ? (
                    <div className="experience-pagination-controls" style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '1.5rem',
                      position: 'absolute',
                      bottom: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 20
                    }}>
                      <button 
                        onClick={prevExPage}
                        disabled={currentExPage === 0}
                        aria-label="Previous experiences page"
                        style={{
                          background: 'var(--body-color, #0f0f0f)',
                          border: '1.5px solid var(--ex-border-color, snow)',
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: currentExPage === 0 ? 'not-allowed' : 'pointer',
                          opacity: currentExPage === 0 ? 0.3 : 1,
                          color: 'var(--body-text-color, snow)',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          if (currentExPage > 0) {
                            e.currentTarget.style.transform = 'scale(1.1)';
                            e.currentTarget.style.background = 'var(--ex-border-color, snow)';
                            e.currentTarget.style.color = 'var(--ex-card-color, black)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.background = 'var(--body-color, #0f0f0f)';
                          e.currentTarget.style.color = 'var(--body-text-color, snow)';
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </button>
                      
                      <div style={{
                        background: 'var(--ex-border-color, snow)',
                        color: 'var(--ex-card-color, black)',
                        borderRadius: '50%',
                        width: '12px',
                        height: '12px',
                        boxShadow: '0 0 8px var(--ex-border-color, snow)'
                      }}></div>

                      <button 
                        onClick={nextExPage}
                        disabled={currentExPage === totalExPages - 1}
                        aria-label="Next experiences page"
                        style={{
                          background: 'var(--body-color, #0f0f0f)',
                          border: '1.5px solid var(--ex-border-color, snow)',
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: currentExPage === totalExPages - 1 ? 'not-allowed' : 'pointer',
                          opacity: currentExPage === totalExPages - 1 ? 0.3 : 1,
                          color: 'var(--body-text-color, snow)',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          if (currentExPage < totalExPages - 1) {
                            e.currentTarget.style.transform = 'scale(1.1)';
                            e.currentTarget.style.background = 'var(--ex-border-color, snow)';
                            e.currentTarget.style.color = 'var(--ex-card-color, black)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.background = 'var(--body-color, #0f0f0f)';
                          e.currentTarget.style.color = 'var(--body-text-color, snow)';
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <span className="span-svg-circle" style={{ display: 'block', height: '16px', aspectRatio: '1' }}></span>
                  )}
                </div>
                <div className="ex-vertical-line"></div>
              </div>
            </div>
          </div>
          {/*  Experience section ends  */}

          {/*  Projects section starts  */}
          <div className="min-width-400px-width-50per" id="Projects" style={{ background: 'var(--body-color)' }}>

            <h2 className="section-h2 sticky top-0 blur z-index-10">
              <span style={{ padding: '0 1rem' }}>
                Notable Projects
              </span>
            </h2>

            <section id="project-section" className="project-section " style={{ padding: '1rem' }}>
              {activeProjects.map((proj) => {
                return (
                  <div className="project-card" key={proj.name}>
                    <div className="project-card-img-box skeleton">
                      <img 
                        src={proj.image}
                        title={proj.title}
                        alt={proj.title}
                        className="project-card-img show-img-skeleton" 
                        loading="lazy" 
                        decoding="async" 
                      />
                    </div>
                    <div className="project-card-body">
                      <h3 className="text-primary project-name" title={proj.name}>{proj.name}</h3>
                      <p className="text-secondary project-desc" title={proj.desc}>{proj.desc}</p>
                    </div>
                    <div className="project-card-footer">
                      <div className="project-skills">
                        {proj.skills.map((skill) => (
                          <div className="skill-icon" key={skill.name}>
                            <span 
                              style={{ display: 'flex', alignItems: 'center', aspectRatio: '1' }} 
                              className={skill.iconClass}
                            > </span>
                          </div>
                        ))}
                      </div>
                      <div className="project-card-action">
                        <a 
                          href={proj.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-redirect-link project-redirect-link-left text-primary"
                          aria-label={`View ${proj.name} project source code on GitHub`}
                        >
                          <span className="span-svg-code stroke-primary project-redirect-link-icon"></span>
                          <span>Code</span>
                        </a>
                        <a 
                          href={proj.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-redirect-link project-redirect-link-right text-primary"
                          aria-label={`View ${proj.name} live demo`}
                        >
                          <span>Live</span>
                          <span className="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
            
            {projectsData.length > 3 && (
              <div className="projects-pagination-controls" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.5rem',
                margin: '1.5rem 0 2rem 0',
                zIndex: 20
              }}>
                <button 
                  onClick={prevProjPage}
                  disabled={currentProjPage === 0}
                  aria-label="Previous projects page"
                  style={{
                    background: 'var(--body-color, #0f0f0f)',
                    border: '1.5px solid var(--ex-border-color, snow)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: currentProjPage === 0 ? 'not-allowed' : 'pointer',
                    opacity: currentProjPage === 0 ? 0.3 : 1,
                    color: 'var(--body-text-color, snow)',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    if (currentProjPage > 0) {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.background = 'var(--ex-border-color, snow)';
                      e.currentTarget.style.color = 'var(--ex-card-color, black)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'var(--body-color, #0f0f0f)';
                    e.currentTarget.style.color = 'var(--body-text-color, snow)';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                
                <div style={{
                  background: 'var(--ex-border-color, snow)',
                  color: 'var(--ex-card-color, black)',
                  borderRadius: '50%',
                  width: '12px',
                  height: '12px',
                  boxShadow: '0 0 8px var(--ex-border-color, snow)'
                }}></div>

                <button 
                  onClick={nextProjPage}
                  disabled={currentProjPage === totalProjPages - 1}
                  aria-label="Next projects page"
                  style={{
                    background: 'var(--body-color, #0f0f0f)',
                    border: '1.5px solid var(--ex-border-color, snow)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: currentProjPage === totalProjPages - 1 ? 'not-allowed' : 'pointer',
                    opacity: currentProjPage === totalProjPages - 1 ? 0.3 : 1,
                    color: 'var(--body-text-color, snow)',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    if (currentProjPage < totalProjPages - 1) {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.background = 'var(--ex-border-color, snow)';
                      e.currentTarget.style.color = 'var(--ex-card-color, black)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'var(--body-color, #0f0f0f)';
                    e.currentTarget.style.color = 'var(--body-text-color, snow)';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </div>
          {/*  Projects section ends  */}

        </div>

      {/*  Skills section starts  */}

      <div className="bg-black-blur" style={{ padding: '1rem 1rem' }}>



        {/*  Testimonials section starts  */}
        <div id="Testimonials">

          <h2 className="section-h2">Testimonials</h2>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            width: '100%',
            flexWrap: 'wrap',
            margin: '2.5rem 0',
            position: 'relative',
            zIndex: 10
          }}>
            {/* Left Child: 3D Carousel Container */}
            <div style={{ 
              flex: '1 1 76%',
              maxWidth: '850px', 
              height: '560px', 
              background: 'var(--body-color, #0a0a0a)', 
              border: '1.5px solid var(--ex-border-color, rgba(255, 255, 255, 0.08))',
              borderRadius: '24px',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              overflow: 'hidden',
              boxShadow: 'none'
            }}>
              <ThreeDCarousel />
            </div>

            {/* Right Child: Folder Container */}
            <div style={{
              flex: '1 1 20%',
              minWidth: '220px',
              height: '560px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              position: 'relative'
            }}>
              <div style={{ 
                height: '140px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                <Folder size={1.6} color="#5227FF" />
              </div>
              <div style={{
                textAlign: 'center',
                fontFamily: 'var(--title-font-family, inherit)',
                fontSize: '18px',
                fontWeight: '600',
                color: 'var(--body-text-color, snow)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                opacity: 0.85
              }}>
                " Open file to close the deal "
              </div>
            </div>
          </div>
        </div>
        {/*  Testimonials section ends  */}






        {/*  Fun zone section starts  */}
        <div className="min-width-400px-width-50per" style={{ display: 'flex', flexDirection: 'column' }}>

          <h2 className="section-h2 fun-zone-title" id="fun-zone">Fun zone</h2>
          <div className=" flex flex-wrap card cute-avatar-container" id=" " style={{ gap: '0' }}>


            {/*  Cute avatar starts  */}
            <section id="cute-avatar-section" className="cute-avatar-section" style={{ position: 'relative', overflow: 'visible' }}>
              {/* Cute speech bubble for Riha */}
              <div className="riha-speech-bubble" style={{
                position: 'absolute',
                top: '-105px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 20,
                pointerEvents: 'none',
                animation: 'bounceBubble 3s infinite ease-in-out'
              }}>
                <div style={{
                  fontFamily: 'var(--body-font-family, inherit)',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: 'var(--body-text-color, #1a1a1a)',
                  background: 'var(--body-color, #ffffff)',
                  border: '1.5px solid var(--ex-border-color, #8b5cf6)',
                  padding: '10px 16px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                  whiteSpace: 'normal',
                  textAlign: 'center',
                  width: '240px',
                  lineHeight: '1.4',
                  position: 'relative'
                }}>
                  Hi, I’m Riha 🥹… I don’t really know how to be fashionable… will you guide me and make me modern, pretty please?👉🏻👈🏻
                  {/* Speech bubble triangle pointer */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0',
                    height: '0',
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '8px solid var(--ex-border-color, #8b5cf6)',
                    zIndex: 1
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0',
                    height: '0',
                    borderLeft: '7px solid transparent',
                    borderRight: '7px solid transparent',
                    borderTop: '7px solid var(--body-color, #ffffff)',
                    zIndex: 2
                  }} />
                </div>
              </div>
              <style>{`
                @keyframes bounceBubble {
                  0%, 100% { transform: translate(-50%, 0px); }
                  50% { transform: translate(-50%, -5px); }
                }
              `}</style>

              <div className="cute-avatar-box">
                <img aria-label="cute-avatar" loading="lazy" src="./assets/images/cute-avatar/cute-avatar.png" />
                <img aria-label="head-decorator-img" loading="lazy"
                  src="./assets/images/cute-avatar/head-decorator-1-heart-leaves.png" />
                <img aria-label="decorator-img" loading="lazy"
                  src="./assets/images/cute-avatar/decorator-1-leaves-pot.png" />
              </div>
            </section>
            {/*  Cute avatar ends  */}

            {/*  <section id="moveable-box-container">  */}
            <section className="flex cute-avatar-controller-section" style={{ width: '100%' }}>
              <div className="" aria-label="decorators">
                <h3>Decorators</h3>
                <div className="" aria-label="decorators-button-container">
                  <button aria-label="decorator-1-leaves-pot" className="change-decorator-button active">Plant</button>
                  <button aria-label="decorator-2-pink-flower-pot" className="change-decorator-button ">Flower</button>
                </div>
              </div>
              <div className="" aria-label="head-decorators">
                <h3>Head decorators</h3>
                <div className="" aria-label="head-decorators-button-container">
                  <button aria-label="head-decorator-3-pony-hair" className="change-decorator-button">Pony hair</button>
                  <button aria-label="head-decorator-2-aki-hair" className="change-decorator-button">Aki hair</button>
                  <button aria-label="head-decorator-1-heart-leaves" className="change-decorator-button active">Heart
                    leaves</button>
                  <button aria-label="head-decorator-4-headphone" className="change-decorator-button">Blue Headphone </button>
                  <button aria-label="head-decorator-5-blue-cap" className="change-decorator-button">
                    Cap
                    {/*  Crown 👑, Wizard hat 🧙, Horns (demon, dragon), Elf ears, Fire aura 🔥, Ice crown ❄️, Cat ears 🐱, Banana hat, Baseball cap, Headband, Sunglass  */}
                  </button>
                  <button aria-label="head-decorator-6-white-headphone" className="change-decorator-button">White Headphone
                  </button>

                </div>
              </div>
            </section>

          </div>
        </div>
        {/*  Fun zone section ends  */}

        {/*  Footer section starts  */}
        <footer style={{
          background: 'var(--body-color, #0a0a0a)',
          borderTop: '1.5px solid var(--ex-border-color, rgba(255, 255, 255, 0.08))',
          padding: '5rem 2rem 2.2rem 2rem',
          position: 'relative',
          width: '100%',
          zIndex: 10,
          marginTop: '6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '4.5rem',
          fontFamily: 'var(--body-font-family, inherit)',
          gridColumn: '1 / -1' // Span full page grid width
        }}>
          {/* Main Content Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '3rem',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            
            {/* Left Column: Folder & Let's Connect */}
            <div style={{
              flex: '1 1 300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              padding: '1rem 0'
            }}>
              <div style={{
                width: '140px',
                height: '110px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Folder size={1.3} color="#5227FF" />
              </div>
              <div style={{
                textAlign: 'center',
                fontFamily: 'var(--title-font-family, inherit)',
                fontSize: '20px',
                fontWeight: '800',
                color: 'var(--body-text-color, snow)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                opacity: 0.9,
                marginTop: '0.5rem'
              }}>
                " Let's Connect "
              </div>
            </div>

            {/* Right Columns Grid */}
            <div style={{
              flex: '1 1 600px',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '3rem'
            }}>
              
              {/* Column 1: Quick Links */}
              <div style={{
                flex: '1 1 150px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.8rem'
              }}>
                <h3 style={{
                  color: 'var(--body-text-color, snow)',
                  opacity: 0.6,
                  fontSize: '18px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  margin: '0'
                }}>
                  Quick Links
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {[
                    { name: 'Home', id: 'home' },
                    { name: 'About', id: 'About-me' },
                    { name: 'Skills', id: 'Skills' },
                    { name: 'Experience', id: 'Experience' },
                    { name: 'Projects', id: 'Projects' }
                  ].map((link) => (
                    <li key={link.name}>
                      <a 
                        href={`#${link.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(link.id);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        style={{
                          color: 'var(--body-text-color, snow)',
                          textDecoration: 'none',
                          fontSize: '18px',
                          fontWeight: '500',
                          opacity: 0.85,
                          transition: 'opacity 0.2s ease, transform 0.2s ease',
                          display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = '1';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '0.85';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Social Links */}
              <div style={{
                flex: '1 1 180px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.8rem'
              }}>
                <h3 style={{
                  color: 'var(--body-text-color, snow)',
                  opacity: 0.6,
                  fontSize: '18px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  margin: '0'
                }}>
                  Social Links
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem'
                }}>
                  {[
                    { 
                      label: 'LinkedIn', 
                      href: 'https://www.linkedin.com/in/rishiaravindha',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#0077b5" style={{ marginRight: '10px', flexShrink: 0 }}>
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )
                    },
                    { 
                      label: 'WhatsApp', 
                      href: 'https://wa.link/5apdqm',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#25d366" style={{ marginRight: '10px', flexShrink: 0 }}>
                          <path d="M12.004 0C5.372 0 0 5.373 0 12.001c0 2.118.553 4.184 1.597 6.009L.052 24l6.136-1.611a11.942 11.942 0 0 0 5.816 1.613c6.632 0 12.004-5.373 12.004-12.001C24.008 5.373 18.636 0 12.004 0zm6.817 17.027c-.279.789-1.395 1.45-1.921 1.503-.526.053-1.077.079-3.238-.79-2.761-1.11-4.516-3.921-4.654-4.108-.139-.187-1.121-1.493-1.121-2.851 0-1.358.706-2.022.957-2.285.25-.263.548-.329.73-.329s.365.003.523.01c.162.008.38-.063.593.454.219.533.75 1.826.813 1.958.063.132.105.286.018.462-.088.176-.132.286-.263.44-.132.154-.278.344-.396.462-.132.132-.271.275-.117.539.154.264.685 1.128 1.468 1.823.992.89 1.83 1.168 2.087 1.298.257.13.407.109.56-.067.153-.176.657-.768.831-1.028.174-.26.349-.22.589-.13.24.09 1.527.72 1.79.851.263.131.438.197.504.308.066.11.066.643-.213 1.432z"/>
                        </svg>
                      )
                    },
                    { 
                      label: 'Mail', 
                      href: 'mailto:rishiaravindhaoff@gmail.com',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ea4335" style={{ marginRight: '10px', flexShrink: 0 }}>
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      )
                    },
                    { 
                      label: 'GitHub', 
                      href: 'https://github.com/Rishidevlx',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '10px', flexShrink: 0 }}>
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )
                    },
                    { 
                      label: 'Phone No', 
                      href: 'tel:+918590605554', 
                      text: '+91 8590605554',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px', flexShrink: 0 }}>
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      )
                    }
                  ].map((social) => (
                    <li key={social.label}>
                      <a 
                        href={social.href}
                        target={social.label !== 'Mail' && social.label !== 'Phone No' ? '_blank' : undefined}
                        rel={social.label !== 'Mail' && social.label !== 'Phone No' ? 'noopener noreferrer' : undefined}
                        style={{
                          color: 'var(--body-text-color, snow)',
                          textDecoration: 'none',
                          fontSize: '18px',
                          fontWeight: '500',
                          opacity: 0.85,
                          transition: 'opacity 0.2s ease, transform 0.2s ease',
                          display: 'inline-flex',
                          alignItems: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = '1';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '0.85';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {social.icon}
                        <span>{social.text || social.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact */}
              <div style={{
                flex: '1 1 200px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.8rem'
              }}>
                <h3 style={{
                  color: 'var(--body-text-color, snow)',
                  opacity: 0.6,
                  fontSize: '18px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  margin: '0'
                }}>
                  Contact
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  fontSize: '18px',
                  color: 'var(--body-text-color, snow)',
                  opacity: 0.85,
                  lineHeight: '1.6'
                }}>
                  <a 
                    href="mailto:rishiaravindhaoff@gmail.com"
                    style={{
                      color: 'var(--body-text-color, snow)',
                      textDecoration: 'none',
                      opacity: 0.95,
                      transition: 'opacity 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.95'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px', flexShrink: 0 }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>rishiaravindhaoff@gmail.com</span>
                  </a>
                  <p style={{ margin: '0', fontSize: '17px', display: 'inline-flex', alignItems: 'flex-start' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px', marginTop: '4px', flexShrink: 0 }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>
                      138, mudhaliyaar patti street,<br />
                      srivilliputhur, virudhunagar,<br />
                      Tamilnadu, India
                    </span>
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Huge "RISHI.DEV" Text background element */}
          <div style={{
            width: '100%',
            textAlign: 'center',
            marginTop: '3.5rem',
            userSelect: 'none',
            pointerEvents: 'none'
          }}>
            <h1 className="footer-huge-text" style={{
              fontSize: 'clamp(3rem, 15vw, 11rem)',
              fontWeight: '900',
              fontFamily: 'var(--title-font-family, sans-serif)',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              margin: '0',
              lineHeight: '0.8',
              background: 'linear-gradient(to bottom, var(--body-text-color, snow), transparent)',
              opacity: 0.12, // Increased from 0.05 to 0.12 for great contrast
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              RISHI.DEV
            </h1>
          </div>

          {/* Tiny Copyright Bottom bar */}
          <div style={{
            borderTop: '1px solid var(--ex-border-color, rgba(255, 255, 255, 0.08))',
            paddingTop: '1.8rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '15px',
            color: 'var(--body-text-color, snow)',
            opacity: 0.65,
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div>
              © {new Date().getFullYear()} RISHI.DEV. All rights reserved.
            </div>
            <div>
              Designed & Developed with ❤️ by <span style={{ color: '#8b5cf6', fontWeight: '600' }}>Rishi Aravindha</span>
            </div>
          </div>

        </footer>





      </div>
      {/*  Body content ends  */}

      {/*  Modals section starts  */}
      <div className="modal-overlay" id="modalOverlay">
        <div className="modal" id="modal">
          <button className="close-btn" id="close-btn" aria-label="Close modal">X</button>


          <h3 style={{ textAlign: 'center', paddingTop: '0' }} id="modalTitle"></h3>

          <div id="rc-content-box"></div>
        </div>
      </div>
      {/*  Modals section ends  */}

      {/*  Service worker registration starts  */}
      {/*
  <script>
    if ('serviceWorker' in navigator) {
      const swVersion = new Date().getTime();
      navigator.serviceWorker.register('./service-worker.script.js?v=' + swVersion)
        .then(() => {})
        .catch(err => {})
    }
  </script>
  */}
      {/*  Service worker registration ends  */}

      {/*  JavaScript scripts start  */}
      {/* <script src="./scripts/reuseable.script.js"></script> */}
      {/* <script src="./scripts/home-and-ground.script.js" type="module"></script> */}
      {/* <script src="./scripts/fonts.script.js"></script> */}
      {/* <script src="./scripts/cursor.script.js" type="module"></script> */}
      {/* <script src="./scripts/my.script.js" type="module"></script> */}
      {/* <script src="./scripts/cloud.script.js" type="module"></script> */}
      {/* <script src="./scripts/star.script.js" type="module"></script> */}
      {/* <script src="./scripts/tree.script.js" type="module"></script> */}
      {/* <script src="./scripts/skill.script.js" type="module"></script> */}
      {/* <script src="./scripts/ex.script.js" type="module"></script> */}
      {/* <script src="./scripts/projects.script.js" type="module"></script> */}
      {/* <script src="./scripts/footer.script.js" type="module"></script> */}
      {/* <script src="./scripts/about-me.script.js" type="module"></script> */}
      {/* <script src="./scripts/your.script.js" type="module"></script> */}
      {/* <script src="./scripts/recent-activity.script.js" type="module"></script> */}
      {/* <script src="./scripts/cute-avatar.script.js" type="module"></script> */}
      {/* <script src="./scripts/moveable-box.script.js" type="module"></script> */}
      {/* <script src="./scripts/svg.script.js" type="module"></script> */}
      {/*  JavaScript scripts end  */}


    </>
  );
}
