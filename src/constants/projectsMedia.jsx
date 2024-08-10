import disneyPlus from '/projects/imgs/disneyPlus.png';
// import imageArranger from '/projects/imgs/imageArranger.png';
// import mouseEffect from '/projects/imgs/mouseEffect.jpeg';
import movieSearcher from '/projects/imgs/movieSearcher.jpeg';
import rickAndMorty from '/projects/imgs/rickAndMorty.png';
import surebetsBettor from '/projects/imgs/surebetsBettor.jpeg';
import SW from '/projects/imgs/SW.png';
// import ticTacToe from '/projects/imgs/ticTacToe.jpeg';
import netflixClone from '/projects/imgs/netflixClone.png';
import memorableWebpage from '/projects/imgs/memorableWebpage.png';
// import reactNativeCalc from '/projects/imgs/reactNativeCalc.png';
import newspaperApp from '/projects/imgs/newspaperApp.png';
import reactTodoApp from '/projects/imgs/reactTodoApp.png';
import chattus from '/projects/imgs/chattus.png';
import memorable3 from '/projects/imgs/memorable.gif';
import memorable_instabot_flowchar from '/projects/imgs/memorable_instabot_flowchar.png';

// videos
import disneyCloneVideo from "/projects/videos/disneyCloneVideo_reducido.mp4"
// import imgArrangerVideo from "/projects/videos/imgArrangerVideo_reducido.mp4"
import movieSearcherVideo from "/projects/videos/movieSearcherVideo_reducido.mp4"
import rickAndMortyVideo from "/projects/videos/rickAndMortyVideo_reducido.mp4"
import surebetsBettorVideo from "/projects/videos/surebetsBettorVideo_reducido.mp4"
import SWVideo from "/projects/videos/SWVideo_reducido.mp4"
// import ticTacToeVideo from "/projects/videos/ticTacToeVideo_reducido.mp4"
import netflixCloneVideo from "/projects/videos/netflixCloneVideo.mp4"
import memorableWebpageVideo from "/projects/videos/memorableWebpageVideo.mp4"
// import reactNativeCalcVideo from "/projects/videos/reactNativeCalcVideo.mp4"
import newspaperAppVideo from "/projects/videos/newspaperAppVideo.mp4"
import reactTodoAppVideo from "/projects/videos/reactTodoApp.mp4"
import memorable3Video from "/projects/videos/memorable_complete_video.mp4"

// apks
const reactTodoAppApk = "/apks/reactNativeTodo.rar"


// prompt used to generate the objs
/*
@workspace segun los objetos de proyectos anteriores creados y lista de tecnologias en este proyecto, genera el objeto con este formato:
{
    title: "",
    description: {
      en: ""
      es: "",
    },
    tags: [
      "",
    ],
    img: ,
    video: ,
    links: [
      {
        name: "Github",
        link: "",
      },
      {
        name: "Web",
        link: "",
      },
    ],
    importance: 3
  },
para este proyecto:
*/

const projectsMedia = [
  // netflixClone
  {
    title: "NetflixClone Clone",
    tags: [
      "React",
      "Paypal",
      "Firebase",
      "GCP",
      "Styled Components",
      "React Router DOM",
      "AWS Cognito",
    ],
    description: {
      es: "Este es un clon de la pagina web de Netflix. La app simula el login y registro de usuarios utilizando AWS Cognito o Google, permite el pago de la suscripción utilizando Paypal y almacena la información de los usuarios en Firebase.",
      en: "This is a clone of the Netflix web page. The app simulates user login and registration using AWS Cognito, allows payment of the subscription using Paypal and stores user information in Firebase."
    },
    img: netflixClone,
    video: netflixCloneVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/netflixClone"
      },
      {
        name: "Web",
        link: "https://netflix-clone-beta-seven-55.vercel.app/"
      }
    ],
    importance: 3
  },
  // disneyPlus
  {
    title: "Disney+ Clone",
    tags: [
      "HTML",
      "CSS",
      "BEM methodology",
    ],
    description: {
      es: `Este proyecto se enfocó en hacer una réplica de la página de Disney+ exactamente igual (pixel perfect) utilizando las tecnologías más básicas (HTML y CSS).
      Se evitó adrede el uso de cualquier tipo de librería u hojas de estilos existentes y se construyó bajo la metodología BEM para dar orden al nombramiento de clases CSS.`,
    },
    img: disneyPlus,
    video: disneyCloneVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/disney_page"
      },
      {
        name: "Web",
        link: "https://jjhbotache.github.io/disney_page/"
      }
    ],
    importance: 2
  },
  // SWapiProject
  {
    title: "Star Wars",
    tags: [
      "React",
      "Api consumption",
      "Styled Components",
      "React Router DOM"
    ],
    description: {
      es: "Este proyecto, utiliza la api SWapi,la api de Pixabay y StyledComponents. Se utiliza la información de la api SWapi para pasar props a componentes y hacer un pequeño avatar con altura, color y recuadro variable con base a esta información. La api SWapi no proporciona imágenes de los personajes, por lo que se recurrió a utilizar la api de Pixabay para buscar el nombre y seleccionar una imagen aleatoria de los resultados.",
      en: "This project uses the SWapi api, the Pixabay api and StyledComponents. The information from the SWapi api is used to pass props to components and make a small avatar with variable height, color and box, based on this information. The SWapi api doesn't provide images of the characters, so the Pixabay api was used to search for the name and select a random image from the results."
    },
    img: SW,
    video: SWVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/SWApi_project"
      },
      {
        name: "Web",
        link: "https://starwars-plum-seven.vercel.app/"
      }
    ],
    importance: 2
  },
  // rickAndMorty
  {
    title: "Rick and Morty Characters",
    tags: [
      "Typescript",
      "React",
      "Api consumption",
      "Bootstrap",
      "React Router DOM"
    ],
    description: {
      es: "Este proyecto se centró en el efectivo consumo de la api de Rick y Morty y uso de TypeScript, agregando funciones como el scroll infinito, búsqueda de caracteres y filtro de los mismos. La estética de la pagina se vio apoyada en Bootstrap.",
      en: "This project focused on the effective consumption of the Rick and Morty api and the use of TypeScript, adding functions such as infinite scroll, character search and filter. The aesthetics of the page were supported by Bootstrap."
      
    },
    img: rickAndMorty,
    video: rickAndMortyVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/rickAndMorty"
      },
      {
        name: "Web",
        link: "https://rick-and-morty-indol.vercel.app/"
      }
    ],
    importance: 2
  },
  // surebetsBettor
  {
    title: "Surebets Bettor",
    tags: [
      "Python",
      "React",
      "requests",
      "beautiful soup",
      "sqlite",
      "pywebview",
      "Recharts",
      "React Router DOM"
    ],
    description: {
      es: `Esta aplicacion de escritorio, analiza mediante web scraping, 3 casas de apuestas y apartir de esa información, encuentra surebets: Apuestas seguras, que al apostar a todos eventos posibles, se obtendrá igual, una ganancia.
      El programa se escribió en Python y usa, para la interfaz gráfica, React mediante la librería pywebview, para con Recharts, mostrar gráficos de la información.
      Con respecto a Python, se usó request, beautiful soup para hacer web scraping y sqlite para almacenar información de las surebets registradas.
      La preview que puedes ver abajo, es solo la interfaz desplegada, asi que no escrapeará información.`,
      en:`This desktop application, analyzes by web scraping, 3 bookmakers and from that information, finds surebets: sure bets, that when betting on all possible events, you will get the same, a profit.
      The program was written in Python and uses, for the graphical interface, React through the pywebview library, to display graphs of the information with Recharts.
      With respect to Python, we used request, beautiful soup for web scraping and sqlite to store information of the registered surebets.
      The preview you can see below, is only the displayed interface, so it will not scrape information.`
    },
    img: surebetsBettor,
    video: surebetsBettorVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/bets_gettor"
      },
      {
        name: "Web",
        link: "https://bets-gettor.vercel.app/"
      }
    ],
    importance: 2
  },
  // reactTodoApp
  {
    title: "React native Todo App",
    tags: [
      "React native",
      "Javascript",
      "SQLite",
    ],
    description: {
      es: "Esta aplicación permite a los usuarios gestionar y reorganizar tareas. Utiliza Expo SQLite para almacenar las tareas y funcionalidades de reorganización mediante drag and drop.",
      en: "This application allows users to manage and rearrange tasks. It uses Expo SQLite to store tasks and drag and drop reorganization features."
    },
    img: reactTodoApp,
    video: reactTodoAppVideo,
    links: [
      {
        name: "Github",
        link: null,
      },
      {
        name: "Download",
        link: reactTodoAppApk,
      },
    ],
    importance: 2
  },
  // chattus
  {
    title: "Chattus",
    tags: [
      "React",
      "Typescript",
      "Python",
      "fastAPI",
      "Styled Components",
      "Redux Toolkit",
      "React Router DOM",
      "WebSockets",
      "Vite"
    ],
    description: {
      es: `Esta página web permite crear un chat temporal rápido y sencillo.
      La web se puede usar sin necesidad de registrarse y con funcionalidades como enviar mensajes, fotos, videos, audios y archivos.
      También permite crear salas de chat con funcionalidades como mínimo tiempo de actividad o exigencia de foco en el chat.
      La construcción de la página se hizo con React y Typescript y el backend con Fastapi.`,
      en: `This website allows you to create a quick and easy temporary chat.
      The website can be used without registration and with functionalities such as sending messages, photos, videos, audios and files.
      It also allows to create chat rooms with functionalities such as minimum uptime or focus requirement on the chat.
      The site was built with React and Typescript and the backend with Fastapi.`
    },
    img: chattus,
    video: "https://res.cloudinary.com/db8fpml9m/video/upload/v1723254371/chattus_iv1lbg.mp4",
    links: [
      {
        name: "Github Frontend",
        link: "https://github.com/jjhbotache/chattus_front",
      },
      {
        name: "Github Backend",
        link: "https://github.com/jjhbotache/chattus_back",
      },
      {
        name: "Web",
        link: "https://chattus.netlify.app",
      },
    ],
    importance: 3
  },
  // memorable 3
  {
    title: "Memorable3",
    description: {
      es: `Este es Memorable, realizado por 3ra vez. Este proyecto utiliza react.js, fastAPI y postgres SQL.
      Permite a los usuarios buscar el diseño que buscan, con facilidad, ya que se dispone de filtro por etiquetas, buscador por palabras y mas interesante, sugerencias generadas por IA.
      Los usuarios pueden registrarse y guardar los diseños que les gusten, para luego verlos en sus favoritos.
      En cuanto a la administración, se puede gestionar los diseños, los tags y en general, la info de la página.`,
      en: `This is Memorable, done for the 3rd time. This project uses react.js, fastAPI and postgresSQL.
      It allows users to search for the design they are looking for, with ease, since it has filter by tags, search by words and more interesting, suggestions generated by AI.
      Users can register and save the designs they like, and then view them in their favorites.
      As for the administration, you can manage the designs, tags and in general, the page info.`
    },
    tags: [
      "React",
      "Typescript",
      "Redux Toolkit",
      "Framer motion",
      "GCP",
      "Python",
      "FastAPI",
      "Cloudinary",
      "Postgres SQL",
    ],
    img: memorable3,
    video: memorable3Video,
    links: [
      {
        name: "Github Frontend",
        link: "https://github.com/jjhbotache/memorable_3_front"
      },
      {
        name: "Github Backend",
        link: "https://github.com/jjhbotache/memorable_3_back"
      },
      {
        name: "Web",
        link: "https://vinos-memorable.vercel.app/"
      }
    ],
    importance: 4
  },
  // Instagram follower bot
  {
    title: "Instagram follower bot",
    description: {
      es: `Este es un proyecto muy interesante, ya que se trata de un bot que sigue a los seguidores de una cuenta de Instagram.
      Dadas unas cuentas objetivo, el bot sigue a los seguidores de estas cuentas, con un criterio que se puede configurar.
      Ya que Instagram tiene ciertas restricciones, el bot, aleatoriamente revisa el feed de instagram y tambien la mira con criterio, ignorando
      el contenido que no cumpla con el criterio.
      Los criterios son evaluados mediante IA, para tener un feed personalizado y seguir cuentas idoneas. 
      `,
      en: `This is a very interesting project, as it is a bot that follows the followers of an Instagram account.
      Given some target accounts, the bot follows the followers of these accounts, with a criteria that can be configured.
      Since Instagram has certain restrictions, the bot randomly goes through the instagram feed and also looks at it with criteria, ignoring
      content that does not meet the criteria.
      The criteria are evaluated by AI, to have a personalized feed and follow suitable accounts.`
    },
    tags: [
      "GCP",
      "Python",
      "Selenium",
      "Google gemini",
    ],
    img: memorable_instabot_flowchar,
    video: "https://res.cloudinary.com/db8fpml9m/video/upload/v1723244275/memorable_instabot_flowchar_n7tiqo.mp4",
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/memorable_insta_bot"
      },
    ],
    importance: 4
  },


];

export default projectsMedia;




