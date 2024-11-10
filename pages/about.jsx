import React from 'react';

const AboutPage = ({ title }) => {
  return (
    <div className="about-page">
      <header>
        <h1>{title}</h1>
        <h2>Yohans Hailu Kasaw</h2>
        <p className="contact-info">
          <a href="mailto:yohanshailukasaw@gmail.com">yohanshailukasaw@gmail.com</a> |{' '}
          <a
            href="https://www.linkedin.com/in/yohans-hailu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/yohans-kasaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </header>

      <section className="essay-section">
        <h3>A Little About Me</h3>
        <p>
          My name is <em>Yohans Hailu Kasaw</em>, and I am an <strong>energetic Software Engineer</strong> with over four
          years of experience in designing and implementing dynamic web applications. My journey in the tech world
          began with a <strong>profound passion for solving complex problems</strong>, a passion that has driven me to
          excel and innovate continuously.
        </p>

        <p>
          I earned my <strong>Bachelor of Science in Computer Engineering</strong> from Addis Ababa University,
          graduating in June 2021 with a GPA of <strong>3.79</strong>, placing me in the top <strong>4%</strong> of my
          class. My academic pursuits were complemented by my participation in the{' '}
          <strong>Competitive Programming</strong> program at Africa to Silicon Valley (A2SV) from October 2021 to
          September 2022. During this time, I mastered <strong>advanced data structures and algorithms</strong>,
          including trees, graphs, and Dijkstra’s algorithm. My proficiency in <strong>Python, Go, and C++</strong>
          enabled me to solve over <strong>1,000 algorithmic challenges</strong>, earning me a ranking in the top{' '}
          <strong>2.5%</strong> on platforms like LeetCode and Codeforces. These accomplishments not only honed my
          technical skills but also instilled in me a <strong>relentless drive to achieve excellence</strong>.
        </p>

        <h3>Professional Experience</h3>
        <p>
          Professionally, I have had the privilege of working with esteemed organizations that have significantly
          shaped my career. As a <strong>Software Engineer at OwlBox AI</strong> in Boston, MA, since April 2023, I have
          led the development of a <strong>scalable AI-driven video annotation platform</strong> using technologies such as{' '}
          <strong>React, Next.js, Redux, and TypeScript</strong>. My role involved implementing{' '}
          <strong>server-side rendering, dynamic routing</strong>, and engineering a robust{' '}
          <strong>microservices backend</strong> with Flask and Node.js. Additionally, I managed{' '}
          <strong>CI/CD pipelines with GitHub Actions</strong>, ensuring seamless AWS deployments and optimizing{' '}
          <strong>database schemas</strong> to enhance data integrity and access speeds by over <strong>23%</strong>.
        </p>

        <p>
          Prior to this, I served as the <strong>Head of Education and Software Engineer</strong> at Africa to Silicon
          Valley in Palo Alto, CA, from June 2021 to April 2023. In this role, I led the{' '}
          <strong>frontend development of HakimHub</strong>, integrating social media feeds, real-time notifications,
          and video calling features using React and Next.js. I also directed the backend team for{' '}
          <strong>RateEat</strong>, architecting scalable Node.js and Nest.js applications on{' '}
          <strong>Google Cloud Platform</strong>. My efforts in implementing{' '}
          <strong>microservices architecture</strong> with <strong>MongoDB, Redis, Docker, and Kubernetes</strong>{' '}
          were pivotal in managing full-stack development for projects like <strong>EzyPay</strong>, a mobile payment
          solution tailored for Ethiopia.
        </p>

        <p>
          My professional journey began with an internship at <strong>Eskalate</strong> in Menlo Park, CA, from
          December 2020 to July 2021. There, I designed and deployed <strong>RESTful APIs</strong>, focusing on
          modularity and security enhancements. I also enhanced application stability by implementing robust{' '}
          <strong>QA frameworks and CI/CD tools</strong>, which significantly decreased bug rates and elevated user
          satisfaction through dependable software quality.
        </p>

        <h3>Projects</h3>
        <p>
          Beyond my professional roles, I have spearheaded projects that address real-world problems. <strong>EzyPay</strong>,
          for instance, is a mobile payment solution inspired by seamless and smooth payment experiences, tailored
          specifically for the Ethiopian market. <strong>RateEat</strong> is a comprehensive food listing and delivery
          system application that simplifies the process of ordering food, offering a robust platform for both users and
          service providers.
        </p>

        <h3>Technical Expertise</h3>
        <p>
          My technical expertise spans a wide array of <strong>programming languages and frameworks</strong>, including
          Python, Go, JavaScript, TypeScript, React, Vue.js, Node.js, Django, Flask, and many others. I am proficient in{' '}
          <strong>cloud technologies, DevOps practices, API development, microservices architecture</strong>, and{' '}
          <strong>CI/CD pipelines</strong>. My skills are complemented by my experience with{' '}
          <strong>AWS services, Docker, Kubernetes, Jenkins</strong>, and various database systems like{' '}
          <strong>MySQL, PostgreSQL, MongoDB, and Redis</strong>.
        </p>

        <h3>Achievements</h3>
        <p>
          <strong>Achievements</strong> throughout my career reflect my dedication and capability. Ranking in the top{' '}
          <strong>2.5%</strong> on LeetCode and solving over <strong>1,000 algorithmic challenges</strong> demonstrate my
          problem-solving prowess and technical acumen. Securing multiple competition titles with <strong>A2SV</strong>{' '}
          further underscores my commitment to excellence and continuous improvement.
        </p>

        <h3>Summary</h3>
        <p>
          In summary, my journey as a <strong>Software Engineer</strong> is characterized by a blend of{' '}
          <strong>academic excellence, professional achievements</strong>, and a{' '}
          <strong>relentless pursuit of knowledge and innovation</strong>. I am passionate about leveraging technology to
          create impactful solutions and am always eager to embrace new challenges that push the boundaries of what is
          possible.
        </p>

        <hr />

        <h3>Contact Information:</h3>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:yohanshailukasaw@gmail.com">yohanshailukasaw@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/yohans-hailu/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/yohans-hailu
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/yohans-kasaw" target="_blank" rel="noopener noreferrer">
              github.com/yohans-kasaw
            </a>
          </li>
        </ul>
      </section>

      <style jsx>{`
        .about-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Fira Code', monospace;
          background-color: #1e1e1e; /* VSCode Dark Theme Background */
          color: #d4d4d4; /* VSCode Dark Theme Text */
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        header {
          text-align: center;
          margin-bottom: 2rem;
        }

        header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        header h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #569cd6; /* VSCode Blue */
        }

        .contact-info a {
          color: #4ec9b0; /* VSCode Green */
          text-decoration: none;
          word-break: break-all;
        }

        .essay-section {
          background-color: #1e1e1e;
          padding: 1rem;
          border-radius: 5px;
          overflow-wrap: break-word;
        }

        .essay-section h3 {
          color: #c586c0; /* Highlighted color for headings */
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }

        .essay-section p {
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .essay-section a {
          color: #4ec9b0; /* VSCode Green */
          text-decoration: none;
        }

        .essay-section a:hover {
          text-decoration: underline;
        }

        .essay-section ul {
          list-style-type: none;
          padding: 0;
        }

        .essay-section li {
          margin-bottom: 0.5rem;
        }

        hr {
          border: 0;
          height: 1px;
          background: #3c3c3c;
          margin: 2rem 0;
        }

        @media (max-width: 600px) {
          .about-page {
            padding: 1rem;
          }

          header h1 {
            font-size: 2rem;
          }

          header h2 {
            font-size: 1.5rem;
          }

          .essay-section h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
