const technologies = {
  frontend: [
    {
      name: "HTML",
      svgUrl: "/SVG/html5.svg",
      technologyLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      importance: 1,
      knowlegePercentage: 100
    },
    {
      name: "CSS",
      svgUrl: "/SVG/css.svg",
      technologyLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      importance: 1,
      knowlegePercentage: 100
    },
    {
      name: "JavaScript",
      svgUrl: "/SVG/javascript.svg",
      technologyLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      importance: 2,
      knowlegePercentage: 90
    },
    {
      name: "React",
      svgUrl: "/SVG/react.svg",
      technologyLink: "https://reactjs.org/",
      importance: 5,
      knowlegePercentage: 80
    },
    {
      name: "React native",
      svgUrl: "/SVG/react native.svg",
      technologyLink: "https://reactnative.dev/",
      importance: 5,
      knowlegePercentage: 40
    },
    {
      name: "Redux",
      svgUrl: "/SVG/redux.svg",
      technologyLink: "https://redux.js.org/",
      importance: 4,
      knowlegePercentage: 65
    },
    {
      name: "Styled Components",
      svgUrl: "/SVG/styledcomponents.svg",
      technologyLink: "https://styled-components.com/",
      importance: 3,
      knowlegePercentage: 85
    },
    {
      name: "React Router",
      svgUrl: "/SVG/reactrouter.svg",
      technologyLink: "https://reactrouter.com/",
      importance: 3,
      knowlegePercentage: 80
    },
    {
      name: "Framer motion",
      svgUrl: "/SVG/framer.svg",
      technologyLink: "https://www.framer.com/motion/",
      importance: 3,
      knowlegePercentage: 70
    },
    {
      name: "Bootstrap",
      svgUrl: "/SVG/bootstrap.svg",
      technologyLink: "https://getbootstrap.com/",
      importance: 2,
      knowlegePercentage: 90
    },
    {
      name: "Expo",
      svgUrl: "/SVG/expo.svg",
      technologyLink: "https://expo.io/",
      importance: 3,
      knowlegePercentage: 70
    },
    {
      name: "Recharts",
      svgUrl: "/SVG/recharts.svg",
      technologyLink: "https://recharts.org/",
      importance: 3,
      knowlegePercentage: 60
    },
    {
      name: "Vite",
      svgUrl: "/SVG/vitejs.svg",
      technologyLink: "https://vitejs.dev/",
      importance: 3,
      knowlegePercentage: 85
    },
    {
      name: "TypeScript",
      svgUrl: "/SVG/typescript.svg",
      technologyLink: "https://www.typescriptlang.org/",
      importance: 4,
      knowlegePercentage: 70
    }
  ],
  backend: [
    {
      name: "Firebase",
      svgUrl: "/SVG/firebase.svg",
      technologyLink: "https://firebase.google.com/",
      importance: 4,
      knowlegePercentage: 80
    },
    {
      name: "Python",
      svgUrl: "/SVG/python.svg",
      technologyLink: "https://www.python.org/",
      importance: 5,
      knowlegePercentage: 90
    },
    {
      name: "Flask",
      svgUrl: "/SVG/flask-light.svg",
      technologyLink: "https://flask.palletsprojects.com/",
      importance: 3,
      knowlegePercentage: 75
    },
    {
      name: "FastAPI",
      svgUrl: "/SVG/fastapi.svg",
      technologyLink: "https://fastapi.tiangolo.com/",
      importance: 4,
      knowlegePercentage: 70
    },
    {
      name: "phpMyAdmin",
      svgUrl: "/SVG/phpMyAdmin.svg",
      technologyLink: "https://www.phpmyadmin.net/",
      importance: 1,
      knowlegePercentage: 60
    },
    {
      name: "SQLite",
      svgUrl: "/SVG/sqlite.svg",
      technologyLink: "https://www.sqlite.org/index.html",
      importance: 4,
      knowlegePercentage: 85
    },
    {
      name: "AWS Cognito",
      svgUrl: "/SVG/logos--aws-cognito.svg",
      technologyLink: "https://aws.amazon.com/cognito/",
      importance: 4,
      knowlegePercentage: 65
    },
    {
      name: "Beautiful Soup",
      svgUrl: "/SVG/beautiful soup.svg",
      technologyLink: "https://www.crummy.com/software/BeautifulSoup/",
      importance: 2,
      knowlegePercentage: 80
    },
    {
      name: "PyWebView",
      svgUrl: "/SVG/pywebview.svg",
      technologyLink: "https://pywebview.flowrl.com/",
      importance: 3,
      knowlegePercentage: 70
    },
    {
      name: "Selenium",
      svgUrl: "/SVG/selenium.svg",
      technologyLink: "https://selenium-python.readthedocs.io/",
      importance: 2,
      knowlegePercentage: 75
    }
  ],
  others: [
    {
      name: "Git",
      svgUrl: "/SVG/git.svg",
      technologyLink: "https://git-scm.com/",
      importance: 3,
      knowlegePercentage: 90
    },
    {
      name: "GitHub",
      svgUrl: "/SVG/github.svg",
      technologyLink: "https://github.com/",
      importance: 2,
      knowlegePercentage: 95
    },
    {
      name: "GCP",
      svgUrl: "/SVG/google.svg",
      technologyLink: "https://cloud.google.com/",
      importance: 1,
      knowlegePercentage: 100
    },
    {
      name: "JWT",
      svgUrl: "/SVG/jwt.svg",
      technologyLink: "https://jwt.io/",
      importance: 3,
      knowlegePercentage: 80
    },
    {
      name: "PayPal",
      svgUrl: "/SVG/logos--paypal.svg",
      technologyLink: "https://www.paypal.com/",
      importance: 2,
      knowlegePercentage: 70
    },
    {
      name: "Cloudinary",
      svgUrl: "/SVG/cloudinary.svg",
      technologyLink: "https://cloudinary.com/",
      importance: 3,
      knowlegePercentage: 75
    },
    {
      name: "Copilot",
      svgUrl: "/SVG/copilot.svg",
      technologyLink: "https://copilot.github.com/",
      importance: 4,
      knowlegePercentage: 85
    },
    {
      name: "Google gemini",
      svgUrl: "/SVG/gemini.svg",
      technologyLink: "https://ai.google.dev/gemini-api/docs?hl=es-419",
      importance: 5,
      knowlegePercentage: 60
    }
  ]
};

export default technologies;