import Layout from '../components/Layout';
import Project from '../components/Project';

const Projects = () => {
  return (
    <Layout>
      <div>
        <h2>
          <strong>Work-Related Projects</strong>
        </h2>
        <Project
          title="AuditLog"
          description=""
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
          description="A Public Safety Communications Center is a fast-paced, high stress environment. A dispatcher acts as a liaison among various local, state, and sometimes federal agencies, and they must facilitate the flow of information in a timely and accurate manner. Most Comm Centers, however, are not fully digitized, and for this reason, a lot of this information is scattered among numerous binders and cheatsheets around the room. It is the successful dispatcher who can sift through the noise and quickly pick out the relevant information. When it comes to public safety, time is of the utmost importance. The purpose of this technical documentation is to provide a guide for some of the most important aspects of the job. By consolidating this information into a single document, I hope to help others succeed at their jobs, and in doing so, provide a better quality of service to their coworkers and their community as a whole."
          url="https://github.com/kls-89/comm-center-documentation-page"
          technologies={['HTML', 'CSS']}
        />
        <Project
          title="Detail Tracker"
          description="Currently on pause while I contemplate the best strategy for managing user permissions and authorization."
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
          title="MovieDB"
          description="Primative IMDB clone that allows users to search for movie titles and view specifics on each. This project was based upon an Express tutorial I followed, using their publically available API Key for access to the Open Movie Database (OMDB)."
          url="https://github.com/kls-89/movie-db"
          technologies={['EJS', 'Express', 'Javascript']}
        />
        <Project
          title="PizzaPartyBot"
          description="Twitter Bot Experiment: Tweet 3 random pizza toppings every 15 minutes."
          url="https://github.com/kls-89/pizza-party-bot"
          technologies={['Heroku', 'Javascript', 'Node', 'Twitter API']}
        />
        <Project
          title="Sidewalk Serenades"
          description="A landing page I created for 'Sidewalk Serenades,' a fictional company that provides users with on-demand street music performances. This page was created with HTML/CSS only. Down the road, I'd like to transition the page into an full SPA, where users can login, create profiles, and contact performers through the application."
          url="https://github.com/kls-89/product-landing-page"
          technologies={['CSS', 'HTML']}
        />
        <Project
          title="Strong Password Randomizer"
          description="Generate random passwords between 8 - 12 characters."
          url="https://github.com/kls-89/strong-password-randomizer"
          technologies={['Javascript', 'Node', 'React']}
        />
        <Project
          title="Quote Scraping Game"
          description="This program, written in Python 3, uses BeautifulSoup to parse the website http://quotes.toscrape.com/ and scrape every quotation, author, and link to their bio page. With this data, a terminal-based quiz game is built."
          url="https://github.com/kls-89/quote-scraping-game"
          technologies={['BeautifulSoup', 'Python3']}
        />
      </div>
    </Layout>
  );
};

export default Projects;
