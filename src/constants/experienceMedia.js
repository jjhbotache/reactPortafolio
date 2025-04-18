// prompt used to generate the objs
/*
@workspace segun los objetos de proyectos anteriores creados y lista de tecnologias en este proyecto, genera el objeto con este formato:
{
    title: {
      en: "",
      es: "",
    },
    enterprises: [
      {
        name: "",
        logo: "", // an icon
      }
    ],
    imgs:[""], // array of images
    technologies: [ "name", ],
    date: {
      start: {
        month: "mes",
        year: "año"
      },
      end: undefined,
    }
    description: {
      en: ""
      es: "",
    },
},
*/


export const months = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  es: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]
};

const myLogo = "/ico/jj.png";
const experienceMedia = [
  // dpagos
  {
    title: {
      en: "Dpagos platform",
      es: "Plataforma Dpagos",
    },
    enterprises: [
      {
        name: "Billuyo",
        logo: "https://billuyo.com.co/favicon.png", // Placeholder icon name
        link: "https://billuyo.com.co",
      },
      {
        name: "Dpagos",
        logo: "https://dpagos-platform-front.vercel.app/logo.svg", // Placeholder icon name
        link: "https://dpagos-platform-front.vercel.app",
      }
    ],
    imgs:[
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744923831/Captura_de_pantalla_2025-04-17_155832_l4oywu.png",
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744923831/Captura_de_pantalla_2025-04-17_155942_sw3cfo.png",
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744923831/Captura_de_pantalla_2025-04-17_160011_bxkqzo.png",
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744923831/Screenshot_23_ydrxt2.png",
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744923832/Screenshot_24_xiqgar.png",
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744923831/Screenshot_25_k190iv.png",
    ], // Example image paths
    technologies: [ "React", "TypeScript", "Fastapi", "Shadcn", "Recharts", "SQLAlchemy"],
    date: {
      start: {
        month: 3,
        year: "2025"
      },
      end: {
        month: 4,
        year: "2025"
      },
    },
    description: {
      es: "Desarrollé esta plataforma que permite a usuarios puntos de venta vender loteria utilizando el servicio de Billuyo y a un administrador, manejaar puntos de venta, su saldo, sus solicitudes de saldo y demás. Se creó utilizando React con TypeScript para el frontend y FastAPI con SQLAlchemy para el backend. Implementé interfaces modernas con Shadcn, Recharts y Tailwind.",
      en: "I developed this platform that allows users to sell lottery using the Billuyo service and an administrator to manage points of sale, their balance, their balance requests, and more. It was created using React with TypeScript for the frontend and FastAPI with SQLAlchemy for the backend. I implemented modern interfaces with Shadcn, Recharts, and Tailwind.",
    },
  },
  // venus ai
  {
    title: {
      es: "Venus AI",
      en: "Venus AI",
    },
    enterprises: [
      {
        name: "Juan Jose Huertas Botache",
        logo: myLogo, // Placeholder icon name
        link: "/",
      }
    ],
    imgs:[
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744944114/Screenshot_27_cgskb2.png",
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744944113/Screenshot_26_oynq8b.png"
    ], // Example image path
    technologies: [ "Shadcn", "Tailwind", "TypeScript", "Gemini API",],
    date: {
      start: {
        month: 12,
        year: "2024"
      },
      end: {
        month: 12,
        year: "2024"
      },
    },
    description: {
      es: "Este proyecto es un chatbot de IA hecho para responder preguntas sobre una institución educativa. Se desarrolló utilizando Shadcn y la API de Gemini.",
      en: "This project is an AI chatbot designed to answer questions about an educational institution. It was developed using Shadcn and the Gemini API.",
    },
  },
  // Intellibot
  {
    title: {
      es: "Intellibot",
      en: "Intellibot",
    },
    enterprises: [
      {
        name: "Juan Jose Huertas Botache",
        logo: myLogo, // Placeholder icon name
        link: "/",
      }
    ],
    imgs:[
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744991423/Screenshot_2025-04-18_10-42-01_ftuzp4.png",
      "https://res.cloudinary.com/db8fpml9m/image/upload/v1744991423/Screenshot_2025-04-18_10-40-49_lydfoj.png"
    ], // Example image path
    technologies: [ "React" ],
    date: {
      start: {
        month: 12,
        year: "2024"
      },
      end: {
        month: 12,
        year: "2024"
      },
    },
    description: {
      es: "Este es un software diseñado para manejar el whatsapp de una empresa. Permite responder preguntas frecuentes, enviar mensajes automáticos y manejar el flujo de conversación con los clientes. En este proyecto, colaboré para agregar nuevas funcionalidades UI y mejorar la experiencia del usuario.",
      en: "This is a software designed to manage a company's WhatsApp. It allows for answering frequently asked questions, sending automatic messages, and managing the flow of conversation with customers. In this project, I collaborated to add new UI functionalities and improve the user experience.",
    },
  },
]

export default experienceMedia;