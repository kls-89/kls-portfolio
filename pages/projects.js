import Layout from '../components/Layout';
import Project from '../components/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faGithub,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <Layout>
      <div style={{ marginTop: '2vh' }}>
        <p className="lead">
          A collection of some of my work-related and personal projects, many of
          which use the following technologies:
        </p>
        <div
          style={{
            display: 'flex',
            marginBottom: '2em',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <FontAwesomeIcon
            icon={faHtml5}
            color="#E44D26"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon
            icon={faCss3}
            color="#4682b4"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon icon={faJs} color="#F0DB4F" width="3em" size="3x" />
          <FontAwesomeIcon
            icon={faReact}
            color="#61DBFB"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon
            icon={faNode}
            color="#3c873a"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon
            icon={faGitAlt}
            color="#F1502F"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon icon={faGithub} color="#333" width="3em" size="3x" />
          <FontAwesomeIcon
            icon={faBootstrap}
            color="#563d7c"
            width="3em"
            size="3x"
          />
        </div>
        <h2>
          <strong>Work-Related Projects</strong>
        </h2>
        <Project
          title="AuditLog"
          description="One important task in a Public Safety Communications Center is keeping an accurate and complete log of each shift's activity. I'm developing this web-based application to allow a supervisor to randomly generate a list of log entries to audit for accuracy and completeness, and to send e-mail notifications to the responsible employee for review. Individual users can view their own audits, and supervisors can view all audits."
          url="https://github.com/kls-89/build-a-web-app/tree/master/dispatch-log-audit"
          technologies={[
            'bcrypt',
            'Express',
            'Javascript',
            'Node',
            'Nodemailer'
          ]}
        />
        <Project
          title="Comm Center Documentation Page"
          description="A Public Safety Communications Center is a fast-paced, high stress environment. Dispatchers act as liaisons among various local, state, and sometimes federal agencies, and they must facilitate the flow of information in a timely and accurate manner. Most Comm Centers, however, are not fully digitized, and for this reason, a lot of this information is scattered among numerous binders and cheatsheets around the room. It is the successful dispatcher who can sift through the noise and quickly pick out the relevant information. The purpose of this technical documentation is to provide a guide for some of the most important aspects of the job. By consolidating this information into a single document, I hope to help others succeed at their jobs, and in doing so, provide a better quality of service to their coworkers and their community as a whole."
          url="https://github.com/kls-89/comm-center-documentation-page"
          technologies={['HTML', 'CSS']}
        />
        <Project
          title="Detail Tracker"
          description="The filling of police detail assignments is a time consuming process that, in many agencies, is still done by hand. After years of doing it the same way, I grew tired of the monotony and loss of productivity this daily task generates.
          My goal with the project is to completely overhaul the process by creating a web-based platform where individual agencies can: create and track their own detail assignments, manage billing information, generate reports for individual officers looking to track their earnings,  easily view which other neighboring agencies have availability to fill a detail request, and more.
          NB: this project is currently on pause while I contemplate the best strategy for managing user permissions and authorization."
          url="https://github.com/kls-89/detail-tracker"
          technologies={[
            'Axios',
            'Bootstrap',
            'Express',
            'JWT',
            'MongoDB Atlas',
            'Mongoose',
            'React',
            'React Router'
          ]}
        />
      </div>
      <div className="mt-5">
        <h2>
          <strong>Personal Projects</strong>
        </h2>
        <Project
          title="Portfolio Page"
          description="I built this webpage you're viewing with Next.js...check out the code here!"
          url="https://github.com/kls-89/kls-portfolio"
          technologies={[
            'Bootstrap 4 (react-bootstrap)',
            'Javascript',
            'Next.js',
            'React'
          ]}
        />
        <Project
          title="MovieDB"
          description="Primative IMDB clone that allows users to search for movie titles and view specifics on each. This project was based upon a tutorial I followed, using their publically available API Key for access to the Open Movie Database (OMDB)."
          url="https://github.com/kls-89/movie-db"
          technologies={['EJS', 'Express', 'Javascript']}
        />
        <Project
          title="PizzaPartyBot 🍕 🎉"
          description="Twitter Bot Experiment: Tweet 3 random pizza toppings every 15 minutes. I love pizza but always end up ordering the same kind every time. This tool allowed me to think outside the box when calling in an order. Pepperoni, green pepper, and mushroom, anyone?"
          url="https://github.com/kls-89/pizza-party-bot"
          technologies={['Heroku', 'Javascript', 'Node', 'Twitter API']}
        />
        <Project
          title="Sidewalk Serenades"
          description="A landing page I created for 'Sidewalk Serenades,' a fictional company that provides users with on-demand street music performances. This page was created with HTML and CSS only. Down the road, I'd like to transition the page into a full SPA, where users can login, create profiles, and contact performers through the application."
          url="https://github.com/kls-89/product-landing-page"
          technologies={['CSS', 'HTML']}
        />
        <Project
          title="Strong Password Generator"
          description="I'm a proponent of having unique, strong passwords for each of my accounts. For times when my browser's strong password suggestion doesn't work, I can generate random passwords on the fly. Every password includes at least 1 capital letter, numbers, special characters, and will never be a dictionary word."
          url="https://github.com/kls-89/generate-strong-passwords"
          technologies={['Javascript', 'Node', 'React']}
        />
        <Project
          title="Quote Scraping Game"
          description="This program, written in Python 3, uses BeautifulSoup to parse the website quotes.toscrape.com and scrape every quotation, author, and link to their bio page. With this data, a terminal-based quiz game is built."
          url="https://github.com/kls-89/quote-scraping-game"
          technologies={['BeautifulSoup', 'Python3']}
        />
      </div>
    </Layout>
  );
};

export default Projects;
