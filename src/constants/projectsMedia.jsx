import disneyPlus from '../assets/projects/imgs/disneyPlus.png';
import imageArranger from '../assets/projects/imgs/imageArranger.png';
import mouseEffect from '../assets/projects/imgs/mouseEffect.jpeg';
import movieSearcher from '../assets/projects/imgs/movieSearcher.jpeg';
import rickAndMorty from '../assets/projects/imgs/rickAndMorty.png';
import surebetsBettor from '../assets/projects/imgs/surebetsBettor.jpeg';
import SW from '../assets/projects/imgs/SW.png';
import ticTacToe from '../assets/projects/imgs/ticTacToe.jpeg';
import netflixClone from '../assets/projects/imgs/netflixClone.png';
import memorableWebpage from '../assets/projects/imgs/memorableWebpage.png';
import reactNativeCalc from '../assets/projects/imgs/reactNativeCalc.png';
import newspaperApp from '../assets/projects/imgs/newspaperApp.png';
import reactTodoApp from '../assets/projects/imgs/reactTodoApp.png';

// videos
import disneyCloneVideo from "../assets/projects/videos/disneyCloneVideo_reducido.mp4"
import imgArrangerVideo from "../assets/projects/videos/imgArrangerVideo_reducido.mp4"
import movieSearcherVideo from "../assets/projects/videos/movieSearcherVideo_reducido.mp4"
import rickAndMortyVideo from "../assets/projects/videos/rickAndMortyVideo_reducido.mp4"
import surebetsBettorVideo from "../assets/projects/videos/surebetsBettorVideo_reducido.mp4"
import SWVideo from "../assets/projects/videos/SWVideo_reducido.mp4"
import ticTacToeVideo from "../assets/projects/videos/ticTacToeVideo_reducido.mp4"
import netflixCloneVideo from "../assets/projects/videos/netflixCloneVideo.mp4"
import memorableWebpageVideo from "../assets/projects/videos/memorableWebpageVideo.mp4"
import reactNativeCalcVideo from "../assets/projects/videos/reactNativeCalcVideo.mp4"
import newspaperAppVideo from "../assets/projects/videos/newspaperAppVideo.mp4"
import reactTodoAppVideo from "../assets/projects/videos/reactTodoApp.mp4"
//files
// import reactTodoAppFile from '../assets/files/reactNativeTodoApp.apk'
const reactTodoAppFile = "/reactNativeTodoApp.apk"

const projectsMedia = [
  // netflixClone
  {
    title: "NetflixClone Clone",
    tags: [
      "React",
      "Paypal",
      "Firebase",
      "Styled Components",
      "React Router",
      "AWS Cognito",
      "react-router-dom"
    ],
    description: {
      es: "Este es un clon de la pagina web de Netflix. La app simula el login y registro de usuarios utilizando AWS Cognito, permite el pago de la suscripción utilizando Paypal y almacena la información de los usuarios en Firebase.",
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
    ]
  },
  // memorableWebpage
  {
    title: "Memorable Webpage",
    tags: [
      "React",
      "Python",
      "Flask",
      "phpMyAdmin",
      "JWT",
      "CSS Modules",
      "Bootstrap",
      "react-router-dom",
    ],
    description: {
      es: "Este proyecto, se compone de un Backend desarrollado con Python y un Frontend desarrollado con React. Esta, es una página hecha para una empresa que vende vinos con diseños personalizados, por lo que la página, permite a clientes, visualizar los diseños, registrarse, guardar diseños en el carrito, crear ordenes de compra y ver el estado de las mismas en su dashboard. De lado del administrador, se puede manejar todos los datos como los vinos que se venden, los diseños, sus tags y demás.",
      en: "This project consists of a Backend developed with Python and a Frontend developed with React. This is a page made for a company that sells wines with personalized designs, so the page allows customers to view the designs, register, save designs in the cart, create purchase orders and see the status of them in their dashboard. On the administrator side, you can manage all the data such as the wines that are sold, the designs, their tags and more."
    },
    img: memorableWebpage,
    video: memorableWebpageVideo,
    links: [
      {
        name: "Github frontend",
        link: "https://github.com/jjhbotache/memorableWebStore"
      },
      {
        name: "Github backend",
        link: "https://github.com/jjhbotache/school_stage_back"
      },
      {
        name: "Web",
        link: "https://memorable-web-store.vercel.app/"
      }
    ]
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
      es: "Este proyecto se enfocó en hacer una réplica de la página de Disney+ utilizando las tecnologías más básicas (HTML y CSS).  Se evitó adrede el uso de cualquier tipo de librería u hojas de estilos existentes y se construyó bajo la metodología BEM para dar orden al nombramiento de clases CSS.",
      en: "This project focused on making a replica of the Disney+ page using the most basic technologies (HTML and CSS). The use of any type of library or existing style sheets was deliberately avoided and it was built under the BEM methodology to give order to the naming of CSS classes."
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
    ]
  },
  // SWapiProject
  {
    title: "Star Wars",
    tags: [
      "React",
      "Api consumption",
      "Styled Components",
      "react-router-dom"
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
    ]
  },
  // rickAndMorty
  {
    title: "Rick and Morty Characters",
    tags: [
      "Typescript",
      "React",
      "Api consumption",
      "Bootstrap",
      "react-router-dom"
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
    ]
  },
  // movieSearcher
  {
    title: "Movie Searcher",
    tags: [
      "React",
      "Typescript",
      "Api consumption",
      "Bootstrap",
      "CSS Modules"
    ],
    description: {
      es: "Este proyecto, utiliza la omDB api, TypeScript, modulos css, técnicas de debounce y mocks de respuestas .json. La estética de la pagina se vio apoyada en Bootstrap.",
      en: "This project uses the omDB api, TypeScript, css modules, debounce and .json response mocks techniques. The aesthetics of the page were supported by Bootstrap."
    },
    img: movieSearcher,
    video: movieSearcherVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/moviesSearcher"
      },
      {
        name: "Web",
        link: null
      }
    ]
  },
  // imageArranger
  {
    title: "Image Arranger",
    tags: [
      "HTML",
      "CSS",
      "JS",
      "BEM methodology"
    ],
    description: {
      es: "Este proyecto se limitó a usar las tecnologías básicas HTML-CSS-JS para crear una página que organiza imágenes en las columnas que se le pidan. La app consume la api de Pixabay buscar imágenes y agregar aleatoriamente una desde los resultados. El nombramiento de las clases CSS se hizo bajo la metodología BEM y se llegó a usar la etiqueta <dialog> de HTML que no es muy usada/conocida.",
      en: "This project was limited to using the basic technologies HTML-CSS-JS to create a page that organizes images in the columns that are requested. The app consumes the Pixabay api to search for images and add one randomly from the results. The naming of the CSS classes was done under the BEM methodology and the <dialog> tag of HTML was used, which is not very used/known."
    },
    img: imageArranger,
    video: imgArrangerVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/image_arranger"
      },
      {
        name: "Web",
        link: "https://jjhbotache.github.io/image_arranger/"
      }
    ]
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
      "react-router-dom"
    ],
    description: {
      es: "Este programa analiza mediante web scraping, 3 casas de apuestas y apartir de esa información, encuentra surebets: Apuestas seguras, que al apostar a todos eventos posibles, se obtendrá una ganancia. El programa se escribió en Python y usa, para la interfaz gráfica, usa react mediante la librería pywebview. Con respecto a Python, se usó request, beautiful soup para hacer web scraping y sqlite para almacenar información de las surebets registradas y con respecto a la UI se utilizo React y Recharts para hacer gráficos de la información guardada.",
      en: "This program analyzes through web scraping, 3 bookmakers and from that information, finds surebets: bets, that by betting on all possible events, a profit will be obtained. The program was written in Python and uses, for the graphical interface, react through the pywebview library. Regarding Python, request and beautiful soup were used to do web scraping and sqlite to store information from the surebets registered and regarding the UI, React and Recharts were used to make graphs of the stored information."
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
    ]
  },
  // ticTacToe
  {
    title: "Tic Tac Toe",
    tags: [
      "React",
      "Typescript",
      "LocalStorage",
    ],
    description: {
      es: "Este proyecto hace alusión al clásico juego 3 en raya, gato o tic tac toe. El programa permite guardar el juego, por lo que, si se cierra la ventana, se podrá continuar jugando en otro momento. Se programo en TypeScript y se uso LocalStorage para la permanencia de datos.",
      en: "This project alludes to the classic game 3 in a row or tic tac toe. The program allows you to save the game, so if the window is closed, you can continue playing at another time. It was programmed in TypeScript and LocalStorage was used for data persistence."
    },
    img: ticTacToe,
    video: ticTacToeVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/tictactoeReact"
      },
      {
        name: "Web",
        link: null
      }
    ]
  },
  // reactNativeCalc
  {
    title: "React Native Calculator",
    tags: [
      "React Native",
      "Javascript",
      "Expo",
    ],
    description: {
      en: "This application allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      es: "Esta aplicación permite a los usuarios realizar operaciones aritméticas básicas como suma, resta, multiplicación y división."
    },
    img: reactNativeCalc,
    video: reactNativeCalcVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/reactNativeCalculator"
      },
      {
        name: "Download",
        link: "https://expo.dev/accounts/jjhbotache/projects/reactNativeCalc/builds/41612a44-022d-4bbb-a310-b42c3bbf32da"
      }
    ]
  },
  // newspaperApp
  {
    title: "Newspaper App",
    tags: [
      "Javascript",
      "React Native",
      "Expo",
    ],
    description: {
      en: "This application allows users to read news and search them.",
      es: "Esta aplicación permite a los usuarios leer noticias y buscarlas."
    },
    img: newspaperApp,
    video: newspaperAppVideo,
    links: [
      {
        name: "Github",
        link: "https://github.com/jjhbotache/reactNativeNewspaperApp"
      },
      {
        name: "Download",
        link: null
      }
    ]
  },
  // reactTodoApp
  {
    title: "React native Todo App",
    tags: [
      "React native",
      "Javascript",
      "Expo SQLite",
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
        link: "https://github.com/jjhbotache/react_native_todo",
      },
      {
        name: "Download",
        link: reactTodoAppFile,
      },
    ],
  },
];

export default projectsMedia;




