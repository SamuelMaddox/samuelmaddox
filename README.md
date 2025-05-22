# Samuel Maddox

- 🏠 **Location**: Columbus, OH 43016
- 💼 **LinkedIn**: [linkedin.com/in/samuelrmaddox](https://linkedin.com/in/samuelrmaddox)
- 🌐 **Website**: [samuelmaddox.github.io](https://samuelmaddox.github.io)

## LEAD FULL STACK SOFTWARE ENGINEER

8+ years of experience leading teams in delivering business-critical applications. Adept at developing code that follows SOLID principles. Committed to encouraging high code quality using branch policies. Capable of building CI/CD pipelines to streamline testing and deployment of applications. Skilled at breaking down complex features and designs into detailed but manageable stories and tasks.

## SKILLS

- 🌎 **Languages**: JavaScript | TypeScript | HTML | CSS | JSON | YAML
- 📚 **Frameworks**: React | NEXT.js | Angular | Vue | Node.js | Express.js
- 🛠️ **Tools**: Jest | Testing Library | ESLint | Prettier | TailwindCSS | TurboRepo | Git | GitHub Copilot | NPM
- ☁️ **Cloud Technologies**: Azure | Azure DevOps | Amazon Web Services | GitHub Actions
- 🏛️ **Methodologies**: RESTful API | Monorepo | CI/CD | A11Y | Design Systems | Agile | SCRUM | Kanban | SOLID | TDD | Trunk Based Branching | GitFlow

## PROFESSIONAL EXPERIENCE

### Lead Software Engineer | Launch by NTT Data | Feb 2020 - Present

Launch offers agile software development teams that assist organizations in designing, developing, and optimizing digital products and platforms. This service aims to enhance user experiences and promote business growth.

#### Probe Product Management | Client – Bio-Techne

- ℹ️ **Problem**: Products and pricing catalogs are managed using excel sheets.
- 💡 **Solution**: Create simple CRUD applications allowing the client to update and store product and pricing data in a database.
- 👨‍💼 **Role**: JavaScript lead of an agile development team with 2 junior devs. Responsible for creating designs and breaking them down into stories. Mentored devs in code organization and use of code quality tools. Documented the ins of outs of TurboRepo. Defined YAML pipelines for code quality checks for PRs and automated deployment on merge.
- 🎯 **Challenges**: Researching how monorepos are set up (NX vs TurboRepo) and moving the partially built apps into a TurboRepo while development was still ongoing.
- 💻 **Technologies**: Vue, TypeScript, PrimeVue, TailwindCSS, Jest, Testing Library, ESLint, Prettier, TurboRepo, Trunk Based Branching, Azure DevOps, Branch Policies, Azure Pipelines, Azure Static Web Apps.

#### New Probe Request | Client – Bio-Techne

Video - [youtube.com/watch?v=CYCLvpgWqqs](https://youtube.com/watch?v=CYCLvpgWqqs)\
Screenshots - [samuelmaddox.github.io/projects/new-probe-request](https://samuelmaddox.github.io/projects/new-probe-request)

- ℹ️ **Problem**: Customers often submitted invalid or incomplete requests for new probes. Additionally, requesting many probes requires multiple submissions of the same form.
- 💡 **Solution**: New form guides customers through the probe design process. Values for later fields are enabled based on values from previous fields. The new form also allows bulk for bulk upload from CSV file.
- 👨‍💼 **Role**: JavaScript lead of an agile development team with 2 junior devs and 2 UI/UX designers. Responsible for breaking down designs into stories. Worked on defining a design system. Mentored dev in code organization and use of code quality tools. Defined YAML pipelines for code quality checks for PRs and automated deployment on merge.
- 🎯 **Challenges**: Managing cross-field and cross-field-set validation in a way that allowed for future changes. State management for when different sections of the form would appear. Validating csv bulk upload and allowing quick edits before submission.
- 💻 **Technologies**: Angular and TypeScript, A11Y guidelines, Jest, Testing Library, ESLint, Prettier, Trunk Based Branching, Azure DevOps, Branch Policies, Azure Pipelines, Azure Static Web Apps.
- 🥇 **Result**: 90% code coverage for unit tests. Received positive feedback from the client and customers. Saved thousands of hours of manual effort.

#### Patient Registration | Client – Large Healthcare Provider

- ℹ️ **Problem**: Registration into hospital required patients filling out physical forms that were then entered manually into a computer.
- 💡 **Solution**: Patients fill out information on a mobile app, and the registration specialist monitors their progress through a web application.
- 👨‍💼 **Role**: Onboarded near the end of the development as sole developer to wrap up development of the registration tracking application.
- 🎯 **Challenges**: The client’s QA team didn’t start until the end of development. Previous developers didn’t install code quality tools. No unit tests were implemented. Code didn’t follow SOLID principles. Many bugs and missed requirements were found by QA team.
- 💻 **Technologies**: React, Jest, Testing Library, ESLint, Prettier, GitHub.
- 🥇 **Result**: Ended the engagement with a working application. Code quality tools were added and enforced using git hooks. Refactoring and unit tests added to any of the code I touched while fixing bugs.

#### Jump Seat Booking | Client – UPS

- ℹ️ **Problem**: The application that was used to book pilots and other travelers onto an airplane’s jump seats was an outdated console app that only administrators could use.
- 💡 **Solution**: Rewrite application into a web application using modern technology. Users are permitted to book and modify their own flights. Administrators have the authority to alter any bookings, user information, and flight details.
- 👨‍💼 **Role**: Partnered with another developer to design and implement the UI portion of the application. We were also responsible for taking business requirements and converting them to stories.
- 🎯 **Challenges**: The table used to display flights was complicated, especially when displaying flights with multiple legs. It had expanding rows for more details about each flight, and a design that helped to indicate which flights had multiple legs. Material UI performance dwindled for large searches. This resulted in a refactoring of the table to a custom component, along with API contract changes. This improved performance significantly.
- 💻 **Technologies**: Angular, Angular Material, SonarQube, ESLint, Prettier, GitFlow, Azure DevOps

### Software Engineer | Nationwide | Aug 2017 – Jan 2020

#### Hackathon Judging

Screenshots - [samuelmaddox.github.io/projects/hackathon-judging](https://samuelmaddox.github.io/projects/hackathon-judging)

- ℹ️ **Problem**: The CIO and other executives desired to be judges for the final round of ranking; but their schedules were fixed. Previous hackathons had unpredictable timelines due to inefficiencies with the manual judging process.
- 💡 **Solution**: During judging, the app would display on the main stage what cluster a team was in, what stage the cluster would be presenting on, which clusters are currently presenting, and the winner of each cluster.
- 💡 **Solution**: Judges will use the app to enter their rankings, and the rankings will be tallied by the app to determine the winners. Ties will trigger a tie breaking round of scoring for the judges.
- 👨‍💼 **Role**: Determined the business requirements, broke down the stories, designed and implemented the front end, and coached 2 other part time developers with no web engineering experience on how to build the back end using model controller architecture, database schema design, and RESTful API contracts.
- 🎯 **Challenges**: Judges would NOT get a chance to test run the application before judgement day. The app needed to be intuitive to use, but no UI/UX designer was assigned to the project.
- 💻 **Technologies**: React, Express.js, Node.js, MongoDB, ESLint, Prettier, Jest, Testing Library, Amazon Web Services, EC2, S3, Route 53, CodePipeline, GitFlow.
- 🥇 **Result**: Judging was smoother and faster than any previous hackathon. The final round started right on time pleasing the executives.

#### Hackathon Registration

Screenshots - [samuelmaddox.github.io/projects/hackathon-registration](https://samuelmaddox.github.io/projects/hackathon-registration)

- ℹ️ **Problem**: Many interested participants registered for the previous hackathons without belonging to a team.
- 💡 **Solution**: Require team leaders to register a team, and each participant individually verify they are participating before the app marks their team as registered.
- 💡 **Solution**: Teams that lacked the required number of verified members were made public to help interested participants discover them and pair up.
- 👨‍💼 **Role**: Determined the business requirements, broke down the stories, designed and implemented the front end, and coached 2 other part time developers with no web engineering experience on how to build the back end using model controller architecture, database schema design, and RESTful API contracts.
- 🎯 **Challenges**: Managing registration state. Teams were NOT registered until they had enough confirmed members. Teams were put on warning if the lost members after being registered. Also management of a waitlist based on registration state changes.
- 💻 **Technologies**: React, Express.js, Node.js, MongoDB, ESLint, Prettier, Jest, Testing Library, Amazon Web Services, EC2, S3, Route 53, CodePipeline, GitFlow.
- 🥇 **Result**: Had more participants (fuller teams) than previous hackathons.

#### Fancy URL Shortener

Screenshots - [samuelmaddox.github.io/projects/fancy-url-shortner](https://samuelmaddox.github.io/projects/fancy-url-shortner)

- ℹ️ **Problem**: An internal url shortening app was built using SharePoint Framework. The product desired a rebuild of the application utilizing more widely adopted technologies.
- 💡 **Solution**: Sharepoint On-Premise was being migrated to SharePoint 365, providing an opportunity for a rewrite using MEAN stack technologies.
- 👨‍💼 **Role**: I was the sole developer/designer for this rewrite as a new hire fresh out of college.
- 🎯 **Challenges**: I had never built anything using MongoDB, Express.js, AngularJS, or Node.js. Senior devs were very busy with the migration of sharepoint, leaving me mostly on my own.
- 💻 **Technologies**: MongoDB, Express.js, AngularJS, or Node.js, Amazon Web Services, EC2, Route 53, CodePipeline, GitFlow
- 🥇 **Result**: Successfully rewrote and deployed the application with a modernized UI/UX, and a new link usage analytics feature for users and admins.

## EDUCATION & CERTIFICATIONS

- **B.S. Computer Science and Engineering** | The Ohio State University, Columbus, Ohio
- **GitHub Copilot Certified** | Feb 2025
- **AWS Certified Solutions Architect Associate** | Nov 2019
