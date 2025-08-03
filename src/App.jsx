import { useState } from 'react';

import './index.css';
import ContactForm from './ContactForm';
import linkedinLogo from './assets/linkedinLogo.svg';
import messengerLogo from './assets/messengerLogo.png';
import movingboat from './assets/movingboat.gif';
import ProjectPreview1 from './assets/Project1_Preview.png';
import ProjectPreview2 from './assets/Project2_Preview.png';
import Modal from './modal.jsx';

import bootstrapLogo from './assets/Bootstraplogo.png';
import unityLogo from './assets/unitylogo.png';
import godotLogo from './assets/godotlogo.png';
import csharpLogo from './assets/csharplogo.png';
import javaLogo from './assets/javalogo.png';
import mysqllogo from './assets/mysqllogo.png';
import pythonlogo from './assets/pythonlogo.png';
import tailwindlogo from './assets/tailwindlogo.png';
import htmlcsslogos from './assets/html-csslogos.png';




const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Java', image: javaLogo },
      { name: 'C#', image: csharpLogo },
      { name: 'Python', image: pythonlogo },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'HTML & CSS', image: htmlcsslogos },
      { name: 'Bootstrap', image: bootstrapLogo },
      { name: 'Tailwind CSS', image: tailwindlogo },
    ],
  },
  {
    category: 'Game Engines',
    items: [
      { name: 'Unity', image: unityLogo },
      { name: 'Godot', image: godotLogo },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', image: mysqllogo },
    ],
  },
];





function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const projectData = [
    {
      id: 'snake',
      title: 'Snake Game',
      category: 'Game Development',
      backgroundImage: ProjectPreview1,
      content: (
        <>
          <h2 className="text-xl font-bold mb-2 ">Snake Game</h2>
          <p className="mb-2 ">
            A classic Snake Game built using HTML, CSS, and JavaScript with some added twists.
          </p>
          <a
            href="https://erronpauldelfin.github.io/SnakeGame/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            See Project
          </a>
        </>
      ),
    },
    {
      id: 'ToDo',
      title: 'Gamified To-Do List',
      category: 'Web/Game Development',
      backgroundImage: ProjectPreview2,
      content: (
        <>
          <h2 className="text-xl font-bold mb-2 ">Gamified To-Do List</h2>
          <p className="mb-2 ">
            A To-Do List application that allows users to manage tasks. Each time a task is completed, the user earns exp points which unlocks the main story of a visual novel.
            It's still in development, I'm not sure when I will work on it again.
          </p>
          <a
            href="https://github.com/erronpauldelfin/Gamified-ToDo-List"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            See Project
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      <title>Erron Paul Delfin</title>


      <section className="w-full">
        <div className="bg-[#011320] w-auto p-4 fixed top-0 left-0 right-0 z-50">
          <nav className="w-full max-w-6xl mx-auto mr-16">
            <ul className="w-full flex space-x-12 m-0 text-xl">
              <li><a href="#home" className="!text-white">Home</a></li>
              <li><a href="#overview" className="!text-white">Overview</a></li>
              <li><a href="#projects" className="!text-white">Projects</a></li>
              <li><a href="#contact" className="!text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
      </section>

   
      <section id="home" className="bg wave z-10">
        <section className="w-full h-auto flex items-start justify-start text-white mx-24">
          <div className="w-auto max-w-6xl p-4 mt-40">
            <h1>Hi, Erron here!</h1>
          </div>
        </section>

        <span className="flex mx-28">
          <div className="font text-4xl mr-2 text-white">I'm a </div>
          <section className="animation">
            <div className="first text-5xl text-left"><div>WEB DESIGNER</div></div>
            <div className="second text-5xl text-left"><div>GAME ENTHUSIAST</div></div>
            <div className="third text-5xl text-left"><div>SOFTWARE DEVELOPER</div></div>
          </section>
        </span>

        <div className="flex">
          <img src={movingboat} alt="boat" className="mx-auto mr-7 mt-23 w-80" />
        </div>
      </section>

    <section className="bg wave2 -mt-4">
  <div id="overview" className="text-center text-white pt-80 text-6xl">OVERVIEW</div>

  <div className="flex flex-col lg:flex-row justify-center items-start gap-16 px-8 py-12">
    <div className="flex flex-wrap gap-12 justify-center">
      <div className="flex flex-col items-center space-y-4">
        <img src={javaLogo} alt="Java" className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110" />
        <img src={csharpLogo} alt="C#" className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110" />
        <img src={pythonlogo} alt="Python" className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img src={htmlcsslogos} alt="HTML/CSS" className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110" />
        <img src={bootstrapLogo} alt="Bootstrap" className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110" />
        <img src={tailwindlogo} alt="Tailwind CSS" className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img src={unityLogo} alt="Unity" className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110" />
        <img src={godotLogo} alt="Godot" className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img src={mysqllogo} alt="MySQL" className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110" />
      </div>
    </div>

    <div className="flex flex-col space-y-4 max-w-xl text-xl text-white">
      <div className="flex items-start gap-2">
        <span>🎓</span>
        <span>
          Graduated with honors in Bachelor of Science in Computer Science and consistent Dean's Lister.
        </span>
      </div>
      <div className="flex items-start gap-2">
        <span>🛠️</span>
        <span>Led multiple projects in Software and Game Development.</span>
      </div>
      <div className="flex items-start gap-2">
        <span>🖥️</span>
        <span>
          Specializes in front-end development for both websites and games, creating interactive and visually engaging user experiences.
        </span>
      </div>
      <div className="flex items-start gap-2">
        <span>🗝️</span>
        <span>I enjoy finding problems, creating solutions, and making them efficient.</span>
      </div>
      <div className="flex items-start gap-2">
        <span>💡</span>
        <span>I am constantly learning and enjoy discovering new things.</span>
      </div>
    </div>
  </div>
</section>

      <section className="projects-section">
        <div id="projects" className="text-center text-white pt-24 text-6xl mb-8">PROJECTS</div>
        <section className="hero-section">
          <div className="card-grid">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="card cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedCard(project)}
              >
                <div
  className="card-background "
  style={{ backgroundImage: `url(${project.backgroundImage})` }}
></div>

                <div className="card-content overflow-hidden">
                  <p className="card-category font-bold">{project.category}</p>
                  <h3 className="card-heading mt-72">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

    
        <Modal
  isOpen={selectedCard !== null}
  onClose={() => setSelectedCard(null)}
>
  {selectedCard?.content}
</Modal>

      </section>

   
      <section>
        <div id="contact" className="text-center text-white pt-24 text-6xl">CONTACT</div>
        <p className="text-center mt-3">Get in touch with me!</p>
        <div className="relative left-0 flex">
          <section className="bg wave3 absolute inset-0 -z-10"></section>
          <ContactForm />

          <section className="inline-block mt-24 ml-32">
            <a href="https://www.linkedin.com/in/erron-paul-delfin/" className="inline-block">
              <img
                src={linkedinLogo}
                alt="Linkedin Logo"
                className="logo-float w-16 h-16 rounded-full border-4 border-[#00bfff] p-1"
              />
            </a>
          </section>

          <section className="inline-block mt-60 ml-32">
            <a href="https://m.me/erron.paul.delfin/" className="inline-block">
              <img
                src={messengerLogo}
                alt="Messenger Logo"
                className="logo-float w-10 h-10 object-contain rounded-full border-4 border-[#00bfff] p-1"
              />
            </a>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
