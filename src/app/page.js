'use client';
import dynamic from 'next/dynamic';
const Lanyard = dynamic(() => import('./components/Lanyard'), { ssr: false });

export default function Home() {
  return (
    <>
      
  {/*  Body content starts  */}
  <div>

    {/*  Skip to main content link for accessibility  */}
    {/*  <a href="#main" className="skip-to-content" aria-label="Skip to main content">Skip to main content</a>  */}

    <div className="cursor"></div>

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
                    <span> Hey, I’m Pritam,</span>
                  </div>
                  a frontend developer <br />
                  who loves blending
                  <br />
                  <span className="white-space-nowrap"> logic with creativity ✨</span>
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

    {/*  Experience section starts  */}
    <div className="join-me-and-ex z-index-2"></div>

    <div className="grid-col1-md-col2  z-index-2" style={{backgroundColor: 'var(--body-color)'}}>

      <div className="min-width-400px-width-50per" id="Experience">

        <h2 className="section-h2 text-center sticky top-0 blur z-index-10">Experience</h2>


        <div className="ex-section" style={{padding: '1rem'}}>

          <div className="ex-vertical-line-box">
            <div className="ex-vertical-line-svg-box" style={{top: '0'}}>
              <span className="span-svg-circle" style={{display: 'block', height: '16px', aspectRatio: '1'}}></span>
            </div>
            <div className="ex-vertical-line"></div>
          </div>


          <div className="ex-cards" id="ex-cards">

            <div className="ex-card">
              <div className="join-card-company-container">
              </div>
              <div className="company-container">
                <div className="company-box">
                  <img className="company-img" src="assets/images/company-thekey-logo.png" loading="lazy" decoding="async"
                    alt="TheKey company logo - Software development company" />
                  <h3 className="company-name"> <a href="https://www.linkedin.com/company/thekeysa/" target="_blank"
                      rel="noopener noreferrer" aria-label="Visit TheKey company LinkedIn page">
                      TheKey
                      <span className="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>
                    </a></h3>
                </div>
                <div className="company-role-box">
                  <div className="company-role">
                    <div className="svg-container">
                      <span className="span-svg-circle"></span>
                    </div>
                    <div className="role-box">
                      <h4 className="role-name">Full-Stack Developer</h4>
                      <p className="role-type">Full-time</p>
                      <p className="role-length">Dec 2024 - Mar 2026 • 1 yr 4 mos</p>
                    </div>
                  </div>
                </div>
                <div className="company-accured-skill-box flex-wrap">
                  <p className="white-space-nowrap">Acquired tech skills</p>

                  <div className="flex align-items-center flex-wrap">

                    <a className="skill-icon" href="https://react.dev/" target="_blank" rel="noopener noreferrer"
                      aria-label="React official website (opens in a new tab)">
                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-react"></span>
                    </a>

                    <a className="skill-icon" href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer"
                      aria-label="shadcn UI website (opens in a new tab)">
                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-shadcn"></span>
                    </a>

                    <a className="skill-icon" href="https://www.framer.com/" target="_blank" rel="noopener noreferrer"
                      aria-label="Framer website (opens in a new tab)">
                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-framer"></span>
                    </a>

                    <a className="skill-icon" href="https://zustand-demo.pmnd.rs/" target="_blank" rel="noopener noreferrer"
                      aria-label="Zustand documentation (opens in a new tab)">
                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-zustand"></span>
                    </a>

                    <a className="skill-icon" href="https://bun.sh/" target="_blank" rel="noopener noreferrer"
                      aria-label="Bun JavaScript runtime website (opens in a new tab)">
                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-bun"></span>
                    </a>

                    <a className="skill-icon" href="https://elysiajs.com/" target="_blank" rel="noopener noreferrer"
                      aria-label="ElysiaJS framework website (opens in a new tab)">
                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-elysia"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="ex-card">
              <div className="join-card-company-container">
              </div>
              <div className="company-container">
                <div className="company-box">
                  <img className="company-img" src="assets/images/company-go-plus-logo.jpeg" loading="lazy" decoding="async"
                    alt="GoPlus company logo - Software development company" />
                  <h3 className="company-name">
                    <a href="https://www.linkedin.com/company/goplusio/about/" target="_blank" rel="noopener noreferrer"
                      aria-label="Visit GoPlus company LinkedIn page">
                      GoPlus
                      <span className="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>
                    </a>
                  </h3>
                </div>
                <div className="company-role-box">
                  <div className="company-role">
                    <div className="svg-container">
                      <span className="span-svg-circle"></span>
                      <span className="role-vertical-line first-role-vertical-line">
                      </span>
                    </div>
                    <div className="role-box">
                      <h4 className="role-name">Junior Frontend Developer</h4>
                      <p className="role-type">Full-time</p>
                      <p className="role-length">Feb 2024 - Nov 2024 • 10 mos</p>
                    </div>
                  </div>
                  <div className="company-role">
                    <div className="svg-container">
                      <span className="span-svg-circle"></span>
                      <span className="role-vertical-line last-role-vertical-line ">
                      </span>
                    </div>

                    <div className="role-box">
                      <h4 className="role-name">SDE - intern</h4>
                      <p className="role-type">Internship</p>
                      <p className="role-length">Mar 2023 - Feb 2024 • 1 yr</p>
                    </div>
                  </div>
                </div>
                <div className="company-accured-skill-box flex-wrap">
                  <p className="white-space-nowrap">Acquired tech skills</p>

                  <div className="flex align-items-center flex-wrap">

                    <a className="skill-icon" href="https://angular.dev/" target="_blank"
                      aria-label="Learn more about Angular">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-angular">
                      </span>

                    </a>

                    <a className="skill-icon" href="https://rxjs.dev/" target="_blank" aria-label="Learn more about RxJS">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-rxjs"> </span>

                    </a>

                    <a className="skill-icon" href="https://getbootstrap.com/" target="_blank"
                      aria-label="Learn more about Bootstrap">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-bootstrap">
                      </span>

                    </a>

                    <a className="skill-icon" href="https://karma-runner.github.io/" target="_blank"
                      aria-label="Learn more about Karma">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-karma"> </span>
                    </a>

                    <a className="skill-icon" href="https://jasmine.github.io/" target="_blank"
                      aria-label="Learn more about Jasmine">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-jasmine">
                      </span>

                    </a>
                    <a className="skill-icon" href="https://www.cypress.io/" target="_blank"
                      aria-label="Learn more about Cypress">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-cypress">
                      </span>

                    </a>


                    <a className="skill-icon" href="https://docs.djangoproject.com/en/4.0" target="_blank"
                      aria-label="Learn more about Django">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-django"> </span>

                    </a>

                  </div>
                </div>
              </div>
            </div>

            <div className="ex-card">
              <div className="join-card-company-container">
              </div>
              <div className="company-container">
                <div className="company-box">
                  <img className="company-img" src="assets/images/company-omicron-logo.jpg" loading="lazy" decoding="async"
                    alt="Omicron Technologies company logo - Technology solutions provider" />
                  <h3 className="company-name">

                    <a href="https://www.linkedin.com/company/omicron-technologies/about/" target="_blank"
                      rel="noopener noreferrer" aria-label="Visit Omicron Technologies company LinkedIn page">
                      Omicron Technologies
                      <span className="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>

                    </a>
                  </h3>
                </div>
                <div className="company-role-box">
                  <div className="company-role">
                    <div className="svg-container">
                      <span className="span-svg-circle"></span>
                    </div>
                    <div className="role-box">
                      <h4 className="role-name">Frontend Developer</h4>
                      <p className="role-type">Internship</p>
                      <p className="role-length">Nov 2022 - Jan 2023 • 3 mos</p>
                    </div>
                  </div>
                </div>
                <div className="company-accured-skill-box flex-wrap">
                  <p className="white-space-nowrap">Acquired tech skills</p>

                  <div className="flex align-items-center flex-wrap">

                    <a className="skill-icon" href="https://react.dev/" target="_blank">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-react"> </span>

                    </a>

                    <a className="skill-icon" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      target="_blank">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-js"> </span>

                    </a>

                    <a className="skill-icon" href="https://www.typescriptlang.org/docs/" target="_blank">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-ts"> </span>

                    </a>

                  </div>
                </div>
              </div>
            </div>

            <div className="ex-card">
              <div className="join-card-company-container">
              </div>
              <div className="company-container">
                <div className="company-box">
                  <img className="company-img" src="assets/images/company-hsv-digital-logo.jpeg" loading="lazy"
                    decoding="async" alt="GroRapid Labs company logo - Digital solutions company" />
                  <h3 className="company-name">
                    <a href="https://www.linkedin.com/company/grorapid/" target="_blank" rel="noopener noreferrer"
                      aria-label="Visit GroRapid Labs company LinkedIn page">
                      GroRapid Labs
                      <span className="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>
                    </a>
                  </h3>
                </div>
                <div className="company-role-box">
                  <div className="company-role">
                    <div className="svg-container">
                      <span className="span-svg-circle"></span>
                    </div>
                    <div className="role-box">
                      <h4 className="role-name">SDE - intern</h4>
                      <p className="role-type">Internship</p>
                      <p className="role-length">Jul 2022 - Oct 2022 • 4 mos</p>
                    </div>
                  </div>
                </div>
                <div className="company-accured-skill-box flex-wrap">
                  <p className="white-space-nowrap">Acquired tech skills</p>

                  <div className="flex align-items-center flex-wrap">

                    <a className="skill-icon" href="https://react.dev/" target="_blank">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-react"> </span>

                    </a>

                    <a className="skill-icon" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      target="_blank">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-js"> </span>

                    </a>

                    <a className="skill-icon" href="https://www.typescriptlang.org/docs/" target="_blank">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-ts"> </span>

                    </a>

                    <a className="skill-icon" href="https://redux.js.org/" target="_blank">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-redux"> </span>

                    </a>

                    <a className="skill-icon" href="https://www.tailwind.com/" target="_blank">

                      <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-tailwind">
                      </span>

                    </a>

                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="ex-vertical-line-box">
            <div className="ex-vertical-line-svg-box" style={{bottom: '0'}}>
              <span className="span-svg-circle" style={{display: 'block', height: '16px', aspectRatio: '1'}}></span>
            </div>
            <div className="ex-vertical-line"></div>
          </div>
        </div>
      </div>
      {/*  Experience section ends  */}

      {/*  Projects section starts  */}
      <div className="min-width-400px-width-50per" id="Projects" style={{background: 'var(--body-color)'}}>

        <h2 className="section-h2 sticky top-0 blur z-index-10">
          <span style={{padding: '0 1rem'}}>
            Notable Projects
          </span>
        </h2>

        <section id="project-section" className="project-section " style={{padding: '1rem'}}>
          <div className="project-card">
            <div className="project-card-img-box skeleton">
              <img src="assets/images/project-fylehq-homepage-clone.png"
                title="FyleHQ Expense Management Platform Clone - Angular Project"
                alt="Screenshot of FyleHQ expense management platform clone built with Angular and Ant Design, showing modern UI with expense tracking features"
                className="project-card-img show-img-skeleton" loading="lazy" decoding="async" />
            </div>
            <div className="project-card-body">
              <h3 className="text-primary project-name" title="FyleHQ - Clone">FyleHQ - Clone</h3>
              <p className="text-secondary project-desc"
                title="This project is a front-end replication of the popular expense management platform Fyle HQ, designed to provide a sleek and responsive user experience. The clone was built using Ant Design (ng-zorro), a powerful Angular UI library, to ensure modern and consistent styling throughout the application.">
                This project is a front-end replication of the popular expense management platform Fyle HQ, designed to
                provide a sleek and responsive user experience. The clone was built using Ant Design (ng-zorro), a
                powerful Angular UI library, to ensure modern and consistent styling throughout the application.
              </p>
            </div>
            <div className="project-card-footer">
              <div className="project-skills">
                <div className="skill-icon">
                  <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-angular"> </span>
                </div>
                <div className="skill-icon">
                  <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-ant-design"> </span>
                </div>
                <div className="skill-icon">
                  <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-netlify"> </span>
                </div>
              </div>
              <div className="project-card-action">
                <a href="https://github.com/PriDebnath/fylehq-clone" target="_blank" rel="noopener noreferrer"
                  className="project-redirect-link project-redirect-link-left text-primary"
                  aria-label="View FyleHQ Clone project source code on GitHub">
                  <span className="span-svg-code stroke-primary project-redirect-link-icon"></span>
                  <span>Code</span>
                </a>
                <a href="https://fylehq-clone-by-pritam.netlify.app" target="_blank" rel="noopener noreferrer"
                  className="project-redirect-link project-redirect-link-right text-primary"
                  aria-label="View FyleHQ Clone live demo">
                  <span>Live</span>
                  <span className="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-img-box  skeleton">
              <img src="assets/images/project-relu-consultancy-assignment.png"
                title="Relu Consultancy Frontend Development Assignment"
                alt="Screenshot of Relu Consultancy frontend development assignment project built with Angular, showcasing responsive web design"
                className="project-card-img show-img-skeleton" loading="lazy" decoding="async" />
            </div>
            <div className="project-card-body">
              <h3 className="text-primary project-name" title="Relu Consultancy - Assignment">Relu Consultancy - Assignment
              </h3>
              <p className="text-secondary project-desc"
                title="This project is about front-end development assignment I got from relu consultancy">
                This project is about front-end development assignment I got from relu consultancy
              </p>
            </div>
            <div className="project-card-footer">
              <div className="project-skills">
                <div className="skill-icon">
                  <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-angular"> </span>
                </div>
                <div className="skill-icon">
                  <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-netlify"> </span>
                </div>
              </div>
              <div className="project-card-action">
                <a href="https://github.com/PriDebnath/relu-consultancy-assignment" target="_blank"
                  rel="noopener noreferrer" className="project-redirect-link project-redirect-link-left text-primary"
                  aria-label="View Relu Consultancy Assignment project source code on GitHub">
                  <span className="span-svg-code stroke-primary project-redirect-link-icon"></span>
                  <span>Code</span>
                </a>
                <a href="https://relu-consultancy-assignment-by-pri.netlify.app/" target="_blank"
                  rel="noopener noreferrer" className="project-redirect-link project-redirect-link-right text-primary"
                  aria-label="View Relu Consultancy Assignment live demo">
                  <span>Live</span>
                  <span className="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-img-box  skeleton ">
              <img src="assets/images/project-tutedude.png" title="Tutedude Frontend Development Assignment"
                alt="Screenshot of Tutedude frontend development assignment project built with React, demonstrating modern UI/UX design"
                className="project-card-img show-img-skeleton" loading="lazy" decoding="async" />
            </div>
            <div className="project-card-body">
              <h3 className="text-primary project-name" title="Tutedude - Assignment">Tutedude - Assignment</h3>
              <p className="text-secondary project-desc"
                title="This project is about front-end development assignment I got from tutedude">
                This project is about front-end development assignment I got from tutedude
              </p>
            </div>
            <div className="project-card-footer">
              <div className="project-skills">
                <div className="skill-icon">
                  <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-react"> </span>
                </div>
                <div className="skill-icon">
                  <span style={{display: 'flex', alignItems: 'center', aspectRatio: '1'}} className="span-svg-netlify"> </span>
                </div>
              </div>
              <div className="project-card-action">
                <a href="https://github.com/PriDebnath/tutedude-assignment" target="_blank" rel="noopener noreferrer"
                  className="project-redirect-link project-redirect-link-left text-primary"
                  aria-label="View Tutedude Assignment project source code on GitHub">
                  <span className="span-svg-code stroke-primary project-redirect-link-icon"></span>
                  <span>Code</span>
                </a>
                <a href="https://tutedudeuibypri.netlify.app/" target="_blank" rel="noopener noreferrer"
                  className="project-redirect-link project-redirect-link-right text-primary"
                  aria-label="View Tutedude Assignment live demo">
                  <span>Live</span>
                  <span className="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <p style={{textAlign: 'center', color: 'snow'}}>
          <a href="https://github.com/PriDebnath?tab=repositories" target="_blank"
            style={{color: 'var(--body-text-color)'}}>See more projects ...</a>
        </p>
      </div>
      {/*  Projects section ends  */}

    </div>


  </div>

  {/*  Skills section starts  */}

  <div className="bg-black-blur" style={{padding: '1rem 1rem'}}>


    <div id="Skills">
      <div className="min-width-400px-width-50per">

        <h2 className="section-h2">Skills</h2>

        <section id="skill-section">
          <div className="skill-container">
            <h3>
              Frontend
            </h3>
            <div className="skills" id="frontend-skills">
              <a className="skill angular skill-active" title="Angular" aria-label="Learn more about Angular"
                href="https://angular.dev/" target="_blank">

                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-angular flex"></span>
                </span>
                <span className="px-1">
                  Angular
                </span>
              </a>
              <a className="skill" title="Next.js" aria-label="Learn more about Next.js" href="https://nextjs.org/docs"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-next flex"></span>
                </span>
                <span className="px-1">Next.js</span>
              </a>
              <a className="skill" title="React" aria-label="Learn more about React" href="https://react.dev/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-react flex"></span>
                </span>
                <span className="px-1">React</span>
              </a>
              <div className="break-skill"></div>
              <a className="skill" title="Zustand" aria-label="Learn more about Zustand"
                href="https://zustand-demo.pmnd.rs/" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-zustand flex"></span>
                </span>
                <span className="px-1">Zustand</span>
              </a>
              <a className="skill" title="Tanstack" aria-label="Learn more about Tanstack" href="https://tanstack.com/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-tanstack flex"></span>
                </span>
                <span className="px-1">Tanstack</span>
              </a>
              <a className="skill" title="RxJS" aria-label="Learn more about RxJS" href="https://rxjs.dev/" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-rxjs flex"></span>
                </span>
                <span className="px-1">RxJS</span>
              </a>
              <a className="skill" title="Redux" aria-label="Learn more about Redux" href="https://redux.js.org/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-redux flex"></span>
                </span>
                <span className="px-1">Redux</span>
              </a>
              <div className="break-skill"></div>
              <a className="skill" title="Shadcn" aria-label="Learn more about Shadcn" href="https://ui.shadcn.com/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-shadcn flex"></span>
                </span>
                <span className="px-1">Shadcn</span>
              </a>
              <a className="skill" title="Framer" aria-label="Learn more about Framer" href="https://www.framer.com/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-framer flex"></span>
                </span>
                <span className="px-1">Framer</span>
              </a>
              <a className="skill" title="Tailwind CSS" aria-label="Learn more about Tailwind CSS"
                href="https://tailwindcss.com/" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-tailwind flex"></span>
                </span>
                <span className="px-1">Tailwind CSS</span>
              </a>
              <a className="skill" title="Bootstrap" aria-label="Learn more about Bootstrap"
                href="https://getbootstrap.com/" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-bootstrap flex"></span>
                </span>
                <span className="px-1">Bootstrap</span>
              </a>
              <div className="break-skill"></div>
              <a className="skill" title="HTML" aria-label="Learn more about HTML"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-html flex"></span>
                </span>
                <span className="px-1">HTML</span>
              </a>
              <a className="skill" title="CSS" aria-label="Learn more about CSS"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-css flex"></span>
                </span>
                <span className="px-1">CSS</span>
              </a>
              <a className="skill" title="JavaScript" aria-label="Learn more about JavaScript"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-js flex"></span>
                </span>
                <span className="px-1">JavaScript</span>
              </a>
              <a className="skill" title="Typescript" aria-label="Learn more about Typescript"
                href="https://www.typescriptlang.org/" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-ts flex"></span>
                </span>
                <span className="px-1">Typescript</span>
              </a>

            </div>
          </div>
          <div className="skill-container">
            <h3>
              Backend
            </h3>
            <div className="skills" id="backend-skills">
              <a className="skill" title="Bun" aria-label="Learn more about Bun" href="https://bun.sh/" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-bun flex"></span>
                </span>
                <span className="px-1">Bun</span>
              </a>
              <a className="skill" title="Elysia" aria-label="Learn more about Elysia" href="https://elysiajs.com/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-elysia flex"></span>
                </span>
                <span className="px-1">Elysia</span>
              </a>
              <a className="skill" title="Node.js" aria-label="Learn more about Node.js" href="https://nodejs.org/en/docs/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-node flex"></span>
                </span>
                <span className="px-1">Node.js</span>
              </a>
              <a className="skill" title="Django" aria-label="Learn more about Django"
                href="https://docs.djangoproject.com/en/4.0/" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-django flex"></span>
                </span>
                <span className="px-1">Django</span>
              </a>
            </div>
          </div>
          <div className="skill-container">
            <h3>
              Testing
            </h3>
            <div className="skills" id="testing-skills">
              <a className="skill" title="Playwright" aria-label="Learn more about Playwright"
                href="https://playwright.dev/" target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-playwright flex"></span>
                </span>
                <span className="px-1">Playwright</span>
              </a>
              <a className="skill" title="Cypress" aria-label="Learn more about Cypress" href="https://www.cypress.io/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-cypress flex"></span>
                </span>
                <span className="px-1">Cypress</span>
              </a>
              <a className="skill" title="Jasmine" aria-label="Learn more about Jasmine" href="https://jasmine.github.io/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-jasmine flex"></span>
                </span>
                <span className="px-1">Jasmine</span>
              </a>
              <a className="skill" title="Karma" aria-label="Learn more about Karma" href="https://karma-runner.github.io/"
                target="_blank">
                <span style={{display: 'flex', alignItems: 'center', marginRight: 'var(--skill-padding-y)'}}>
                  <span className="span-svg-karma flex"></span>
                </span>
                <span className="px-1">Karma</span>
              </a>
            </div>
          </div>
        </section>
      </div>
      {/*  Skills section ends  */}
    </div>

    {/*  Testimonials section starts  */}
    <div id="Testimonials">

      <h2 className="section-h2">Testimonials</h2>
      <section id="testimonials-section"
        className="rc-card testimonials-section overflow-auto  align-items-end justify-content-start gap-4">

        <a className="testimonial-card" target="_blank" href="https://www.upwork.com/freelancers/~01400b0b989988e8cc"
          aria-label="View testimonial from Rajinder M. on Upwork">
          <div className="testimonial-card-feedback">
            <p className="text-xs">"I enjoyed working with Pritam and will likely have additional jobs for him in the
              future."
            </p>
            <div className="text-secondary  text-xxs" style={{textAlign: 'right'}}>Aug 19, 2025 - Sep 17, 2025</div>
          </div>
          <div className="testimonial-card-and-client-connector-container">
            <div className="testimonial-card-and-client-connector"></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="testimonial-card-client">
            <div className="testimonial-card-client-img-box  ">
              <img className="testimonial-card-client-border" src="./assets/images/testimonial/rajinder-n.jpg"
                alt="Sagar N." loading="lazy" title="Sagar N." />
              <span title="Fiverr Client" className="client-from span-svg-upwork-client" style={{backgroundColor: 'white'}}>
              </span>
            </div>
            <div className="testimonial-card-client-info-box">
              <div className="flex align-items-center text-primary white-space-nowrap font-gabriela">
                Rajinder M.
                <span className="flex span-svg-verified-client" title="Verified">
                </span>
                <span style={{padding: '0 0.5rem'}}
                  className="client-redirect span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>
              </div>
              <div className="testimonial-card-client-role text-secondary white-space-nowrap font-gabriela">ImpactQA</div>
            </div>

          </div>
        </a>
        <a className="testimonial-card" target="_blank" href="https://www.upwork.com/freelancers/~01400b0b989988e8cc"
          aria-label="View testimonial from Raghuivra R. on Upwork">
          <div className="testimonial-card-feedback">
            <p className="text-xs">"

              We engaged Pritham's services to support the testing of our software solution developed
              using the Cypress Testing automation framework.
              He quickly grasped our requirements and translated them into an actionable plan.
              His combined expertise in front-end development and automation testing played
              a pivotal role in executing our test cases efficiently and effectively.
              Based on this success, we've extended additional work to him to support our ongoing efforts."</p>
            <div className="text-secondary text-xxs" style={{textAlign: 'right'}}>Jun 16, 2025 - July 10, 2025</div>
          </div>
          <div className="testimonial-card-and-client-connector-container">
            <div className="testimonial-card-and-client-connector"></div>
            <div></div>
            <div></div>
            <div></div>

          </div>

          <div className="testimonial-card-client">
            <div className="testimonial-card-client-img-box testimonial-card-client-border">
              <p className="text-primary">RR</p>
              <span title="Upwork Client" className="client-from span-svg-upwork-client" style={{backgroundColor: 'white'}}>
              </span>
            </div>
            <div className="testimonial-card-client-info-box">
              <div className="flex align-items-center text-primary white-space-nowrap font-gabriela">Raghuivra R.

                <span className="flex span-svg-verified-client" title="Verified">
                </span>

                <span style={{padding: '0 0.5rem'}}
                  className="client-redirect span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>

              </div>
              <div className="testimonial-card-client-role text-secondary white-space-nowrap font-gabriela">CEO</div>
            </div>

          </div>
        </a>




        <a className="testimonial-card" target="_blank" href="https://www.fiverr.com/pridebnath#Reviews"
          aria-label="View testimonial from Raghuivra R. on Fiverr">
          <div className="testimonial-card-feedback">
            <p className="text-xs">"
              This was our first exposure to the Cypress Framework - Pritham was very instrumental
              in understanding our requirements -Helping us chart the next steps on using this
              framework and went beyond in getting our environment set up - The initial set of deliverables were of high
              quality and the documentation was very clear -We are pleased with the
              services and look forward for requesting his services for further work in this area
              ."</p>
            <div className="text-secondary text-xxs" style={{textAlign: 'right'}}>Jun 16, 2025 - July 10, 2025</div>
          </div>
          <div className="testimonial-card-and-client-connector-container">
            <div className="testimonial-card-and-client-connector"></div>
            <div></div>
            <div></div>
            <div></div>

          </div>

          <div className="testimonial-card-client">
            <div className="testimonial-card-client-img-box testimonial-card-client-border">

              <p className="text-primary">RR</p>
              <span title="Fiverr Client" className="client-from span-svg-fiverr-client" style={{backgroundColor: 'white'}}>
              </span>

            </div>
            <div className="testimonial-card-client-info-box">
              <div className="flex align-items-center text-primary white-space-nowrap font-gabriela">Raghuivra R.

                <span className="flex span-svg-verified-client" title="Verified">
                </span>
                <span style={{padding: '0 0.5rem'}}
                  className="client-redirect span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>

              </div>
              <div className="testimonial-card-client-role text-secondary white-space-nowrap font-gabriela">CEO</div>
            </div>

          </div>
        </a>

        <a className="testimonial-card" target="_blank" href="https://www.fiverr.com/pridebnath#Reviews"
          aria-label="View testimonial from Sagar N. on Fiverr">
          <div className="testimonial-card-feedback">
            <p className="text-xs">"
              Pritam is very sincere! He went above and beyond to solve the automation issue i was having.
              I really appreciate his efforts.
              Would love to work with him again! Thank you"</p>
            <div className="text-secondary text-xxs" style={{textAlign: 'right'}}>May 9, 2025</div>
          </div>
          <div className="testimonial-card-and-client-connector-container">
            <div className="testimonial-card-and-client-connector"></div>
            <div></div>
            <div></div>
            <div></div>

          </div>
          <div className="testimonial-card-client">
            <div className="testimonial-card-client-img-box">
              <img className="testimonial-card-client-border" src="./assets/images/testimonial/sagar-n.webp" loading="lazy"
                alt="Sagar N." title="Sagar N." />
              <span title="Fiverr Client" className="client-from span-svg-fiverr-client" style={{backgroundColor: 'white'}}>
              </span>

            </div>
            <div className="testimonial-card-client-info-box">
              <div className="flex align-items-center text-primary white-space-nowrap font-gabriela">Sagar N.

                <span className="flex span-svg-verified-client" title="Verified">
                </span>

                <span style={{padding: '0 0.5rem'}}
                  className="client-redirect span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>

              </div>
              <div className="testimonial-card-client-role text-secondary white-space-nowrap font-gabriela">QA Specialist
              </div>
            </div>

          </div>
        </a>
      </section>
    </div>
    {/*  Testimonials section ends  */}

    {/*  About me section starts  */}
    <div id="About-me" style={{ padding: '1rem 0' }}>
      <div>
        <h2 className="section-h2">About me</h2>
        <section id="about-me-section">
          {/*  I'm Pritam Debnath a Frontend Developer with over 3 years of work experience, specializing in web application
          development. I'm passionate about crafting engaging user experiences and leveraging cutting-edge technologies
          to bring ideas to life.  */}
          {/*  Format might break it  */}
          I’m Pritam Debnath, I build frontend systems that are designed to feel simple, even when the underlying logic isn’t. 
          / With around 3 + years of experience, I focus on handling edge cases properly and making thoughtful UI decisions that hold up in real-world usage.
          {/*  /n I’m especially interested in products where frontend plays a critical role in shaping the overall experience, not just the interface.  */}
        </section>
      </div>
    </div>
    {/*  About me section ends  */}




    {/*  Fun zone section starts  */}
    <div className="min-width-400px-width-50per" style={{display: 'flex', flexDirection: 'column'}}>

      <h2 className="section-h2" id="fun-zone">Fun zone</h2>
      <div className=" flex flex-wrap card cute-avatar-container" id=" " style={{gap: '0'}}>


        {/*  Cute avatar starts  */}
        <section id="cute-avatar-section" className="cute-avatar-section">
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
        <section className="flex cute-avatar-controller-section" style={{width: '100%'}}>
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





  </div>
  {/*  Body content ends  */}

  {/*  Modals section starts  */}
  <div className="modal-overlay" id="modalOverlay">
    <div className="modal" id="modal">
      <button className="close-btn" id="close-btn" aria-label="Close modal">X</button>


      <h3 style={{textAlign: 'center', paddingTop: '0'}} id="modalTitle"></h3>

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
