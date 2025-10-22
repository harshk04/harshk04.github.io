export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'generative-ai', label: 'Generative AI' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'automation', label: 'Automation' },
  { id: 'data', label: 'Data & Analytics' },
  { id: 'tools', label: 'Developer Tools' },
];

export const projects = [
  {
    id: 'sqlgenie',
    title: 'SQLGenie',
    description:
      'A friendly SQL assistant powered by LLaMA 3, OpenAI, and SQLCoder that helps craft queries, build data visuals, and offer guided training paths.',
    image: '/images/projects/sqlgenie.png',
    tags: ['Generative AI', 'Chatbot', 'SQL'],
    filter: ['ai-ml', 'generative-ai', 'fullstack'],
    links: {
      demo: 'https://github.com/harshk04/SQLGenie',
      github: 'https://github.com/harshk04/SQLGenie',
    },
  },
  {
    id: 'automobile-damage-detection',
    title: 'Automobile Damage Detection',
    description:
      'A computer-vision pipeline that evaluates vehicle images to detect and classify damage for faster assessments and fraud prevention.',
    image: '/images/projects/auto.png',
    tags: ['Computer Vision', 'TensorFlow', 'Streamlit'],
    filter: ['ai-ml', 'data'],
    links: {
      demo: 'https://automobile-damage-detection.streamlit.app/',
      github: 'https://github.com/harshk04/Automobile-Damage-Detection',
    },
  },
  {
    id: 'jalsamadhan',
    title: 'JalSamadhan',
    description:
      'A crisis-mapping app that enables communities to log water issues, helping administrators prioritise disaster-response efforts.',
    image: '/images/projects/jalsamadhan.png',
    tags: ['Mobile', 'Disaster Tech', 'Community'],
    filter: ['fullstack', 'tools'],
    links: {
      demo: 'https://drive.google.com/file/d/18uuwnxLwYMLg96BrnMD-hRKhjFruFz-H/view?usp=drive_link',
      github: 'https://github.com/harshk04/JalSamadhan',
    },
  },
  {
    id: 'bookfinder',
    title: 'BookFinder — LLM RAG',
    description:
      'Retrieval-augmented generation flow that blends GPT-2 with Qdrant to answer questions and surface insights from large PDF libraries.',
    image: '/images/projects/book.png',
    tags: ['RAG', 'NLP', 'Vector DB'],
    filter: ['ai-ml', 'generative-ai', 'data'],
    links: {
      demo: 'https://github.com/harshk04/BookFinder-LLM-Application',
      github: 'https://github.com/harshk04/BookFinder-LLM-Application',
    },
  },
  {
    id: 'streamdev',
    title: 'StreamDev',
    description:
      'Live-streaming education platform with collaborative coding, Web3 tipping, and real-time peer learning tools for creators.',
    image: '/images/projects/streamdev.png',
    tags: ['Live Streaming', 'Web3', 'Realtime'],
    filter: ['fullstack'],
    links: {
      demo: 'https://github.com/harshk04/StreamDev',
      github: 'https://github.com/harshk04/StreamDev',
    },
  },
  {
    id: 'linkfluencer',
    title: 'LinkFluencer',
    description:
      'A matchmaking platform that connects brands and influencers with event sponsorship workflows and insight dashboards.',
    image: '/images/projects/linkfluencer.png',
    tags: ['Matching Engine', 'Analytics'],
    filter: ['fullstack', 'data'],
    links: {
      demo: 'https://github.com/harshk04/',
      github: 'https://github.com/harshk04/',
    },
  },
  {
    id: 'efficientmail',
    title: 'EfficientMail',
    description:
      'Bulk email automation with Streamlit UI that imports mailing lists, connects to Gmail, and delivers personalised campaigns in minutes.',
    image: '/images/projects/efficientmail.png',
    tags: ['Automation', 'Productivity', 'Streamlit'],
    filter: ['automation', 'tools'],
    links: {
      demo: 'https://efficientmail.streamlit.app/',
      github: 'https://github.com/harshk04/EfficientMail',
    },
  },
  {
    id: 'sentimentscope',
    title: 'SentimentScope',
    description:
      'Streamlit app using Hugging Face transformers to analyse tone and sentiment of any free-form text input.',
    image: '/images/projects/sentiment.png',
    tags: ['NLP', 'Sentiment Analysis'],
    filter: ['ai-ml', 'tools'],
    links: {
      demo: 'https://sentiment-scope.streamlit.app/',
      github: 'https://github.com/harshk04/Sentiment-Scope',
    },
  },
  {
    id: 'movie-recommender',
    title: 'Movie Recommender',
    description:
      'A recommendation engine that suggests films based on user preferences, wrapped in a friendly Streamlit interface.',
    image: '/images/projects/movv.png',
    tags: ['Recommendation', 'Streamlit'],
    filter: ['ai-ml', 'data'],
    links: {
      demo: 'https://movie-recommender-system1.streamlit.app/',
      github: 'https://github.com/harshk04/Movie-Recommender-System',
    },
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Prediction',
    description:
      'Logistic regression model delivered via Streamlit to predict heart disease likelihood from clinical inputs.',
    image: '/images/projects/disease.png',
    tags: ['Healthcare', 'Logistic Regression'],
    filter: ['ai-ml', 'data'],
    links: {
      demo: 'https://heart-disease-prediction-m.streamlit.app/',
      github: 'https://github.com/harshk04/Heart-disease-Prediction',
    },
  },
  {
    id: 'insurance-pricing',
    title: 'Health Insurance Price Prediction',
    description:
      'Machine-learning model predicting insurance costs with an accessible interface for what-if pricing scenarios.',
    image: '/images/projects/health.png',
    tags: ['Pricing', 'Regression'],
    filter: ['data'],
    links: {
      demo: 'https://github.com/harshk04/insurance-price-prediction/blob/main/model.py',
      github: 'https://github.com/harshk04/insurance-price-prediction',
    },
  },
  {
    id: 'iris-classifier',
    title: 'Iris Classification',
    description:
      'Logistic regression based classification over the classic Iris dataset with experiments tracked in notebooks.',
    image: '/images/projects/iris.png',
    tags: ['Classification', 'Scikit-learn'],
    filter: ['ai-ml', 'data'],
    links: {
      demo: 'https://github.com/harshk04/iris-data/blob/main/model.ipynb',
      github: 'https://github.com/harshk04/iris-data',
    },
  },
  {
    id: 'qr-generator',
    title: 'QR Code Generator',
    description:
      'A Tkinter-powered Python utility that converts any URL into a downloadable QR code.',
    image: '/images/projects/qr.png',
    tags: ['Python', 'Automation'],
    filter: ['automation', 'tools'],
    links: {
      demo: 'https://github.com/harshk04/QR_Generator/blob/main/QR_Generator.ipynb',
      github: 'https://github.com/harshk04/QR_Generator',
    },
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      "The original single-page portfolio that sparked this redesign — still deployed at harshk.is-a.dev.",
    image: '/images/projects/portfolio.png',
    tags: ['Frontend', 'Personal'],
    filter: ['tools'],
    links: {
      demo: 'https://harshk.is-a.dev/',
      github: 'https://github.com/harshk04/harshk04.github.io',
    },
  },
  {
    id: 'weather-app',
    title: 'WeatherApp',
    description:
      'Weather dashboard using Ninja API that surfaces real-time conditions for any searched location.',
    image: '/images/projects/weather.png',
    tags: ['API', 'Frontend'],
    filter: ['tools'],
    links: {
      demo: 'https://harshk.is-a.dev/Weatherapp/',
      github: 'https://github.com/harshk04/Weatherapp',
    },
  },
  {
    id: 'temperature-converter',
    title: 'Temperature Converter',
    description:
      'Lightweight temperature conversion utility covering Celsius and Fahrenheit scales for quick checks.',
    image: '/images/projects/temperature.png',
    tags: ['Utility', 'Frontend'],
    filter: ['tools'],
    links: {
      demo: 'https://harshk.is-a.dev/TemperatureConverter/',
      github: 'https://github.com/harshk04/TemperatureConverter',
    },
  },
  {
    id: 'movie-ticket',
    title: 'Movie Ticket Booking System',
    description:
      'Console-based booking system written in C++ that manages screenings, seats, and ticket generation.',
    image: '/images/projects/movie.png',
    tags: ['C++', 'System Design'],
    filter: ['automation', 'tools'],
    links: {
      demo: 'https://github.com/harshk04/Movie_Ticket_Booking_System/blob/main/main.cpp',
      github: 'https://github.com/harshk04/Movie_Ticket_Booking_System',
    },
  },
];

export const featuredProjects = projects.slice(0, 3);
