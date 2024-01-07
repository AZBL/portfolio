const projects = [
  {
    id: 1,
    title: "PrimeCare",
    images: [
      "../images/primecare1.png",
      "../images/primecare2.png",
      "../images/primecare3.png",
    ],
    description:
      "PrimeCare is a fictional medical practice website. It features roles for both patients and staff. Users can register for accounts and upload medical information as well as message medical staff via a threaded messaging interface. ",

    techStack:
      "Python, Flask, PostgresSQL, SQLAlchemy, JavaScript, React, Vite, CSS. Hosting on Render (backend), Vercel (frontend), ElephantSQL (database).",
    disclaimer:
      "While this app was built with security in mind, please remember this is not a real medical practice and personal information should not be uploaded.",
    hostedLink: "https://primecare.vercel.app/",
    githubLink: "https://github.com/AZBL/capstone",
  },
  {
    id: 2,
    title: "Lil' Reddit",
    images: ["../images/lil_reddit1.png", "../images/lil_reddit2.png"],
    description:
      "Lil' Reddit is a custom built minimalist Reddit clone that uses the Reddit API. Features include an ad-free homepage that fetches the current top posts from r/popular, search functionality, ability to view subreddits, individual posts, and comments.",
    techStack: "JavaScript, React, CSS. Hosting on Netlify.",
    hostedLink: "https://lil-reddit.netlify.app/",
    githubLink: "https://github.com/AZBL/lil-reddit",
  },
  {
    id: 3,
    title: "Beer Fridge",
    images: [
      "../images/beer_fridge1.png",
      "../images/beer_fridge2.png",
      "../images/beer_fridge3.png",
      "../images/beer_fridge_loading.png",
    ],
    description:
      'Beer Fridge is an application that allows registered users to create their own "beer collection" and upload details about various beers. It features user authentication and authorization using Firebase.',
    techStack:
      "Python, Flask, PostgresSQL, SQLAlchemy, TypeScript, React, Vite, Firebase, CSS. Hosting on Render (frontend and backend) and ElephantSQL (database).",
    hostedLink: "https://beer-fridge.onrender.com/",
    githubLinkBackend: "https://github.com/AZBL/beer-backend",
    githubLinkFrontend: "https://github.com/AZBL/beer-frontend",
  },
  {
    id: 4,
    title: "Art Gallery",
    images: [
      "../images/chicago_art_gallery1.png",
      "../images/chicago_art_gallery2.png",
      "../images/chicago_art_gallery3.png",
    ],
    description:
      "This simple app connects to the Art Institute of Chicago API and displays selected paintings as well as information about them. It is built using Vanilla JavaScript and designed with a custom built mosaic layout using CSS Grid.",
    techStack: "JavaScript, CSS",
    githubLink: "https://github.com/AZBL/art-inst-chic",
  },
];

export default projects;
