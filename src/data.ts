import type { Education, Project, ProjectCategory, SkillCategory, SkillLayer, TimelineItem } from './types';

export const CONTACT = {
  email: 'barathvijay2209@gmail.com',
  phone: '+918148290307',
  phoneDisplay: '(+91) 8148290307',
  linkedin: 'https://www.linkedin.com/in/barathkumar-ai-ds/',
  linkedinDisplay: 'linkedin.com/in/barathkumar-ai-ds',
  github: 'https://github.com/barath220904',
  githubDisplay: 'github.com/barath220904',
  resume: '/Barathkumar_resume.pdf',
};

export const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  ai: 'Artificial intelligence',
  web: 'Web application',
  tools: 'Accessibility & utilities',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "SQL"],
  },
  {
    title: "Frontend Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Native",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Data Science & Visualizations",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Data Preprocessing",
      "Feature Engineering",
    ],
  },
  {
    title: "AI, ML, and Computer Vision",
    skills: [
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "OpenCV",
      "Natural Language Processing (NLP)",
      "TF-IDF Vectorization",
    ],
  },
  {
    title: "Backend & Deployment Services",
    skills: ["FastAPI", "Flask", "Express.js", "Node.js", "Streamlit", "Git & GitHub"],
  },
  {
    title: "Areas of Scientific Interest",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Neural Networks",
      "Conversational AI",
      "Interactive Accessibility Tools",
    ],
  },
];

/**
 * The same skills as SKILL_CATEGORIES, regrouped into the three layers of an application.
 * "primary" is ordered by how much of the project work relies on it; nothing here is a rating.
 */
export const SKILL_LAYERS: SkillLayer[] = [
  {
    id: 'model',
    name: 'Model',
    summary: 'Cleaning data, training and evaluating models.',
    primary: ['Python', 'Scikit-Learn', 'Natural Language Processing (NLP)', 'TF-IDF Vectorization', 'OpenCV', 'Pandas', 'NumPy'],
    supporting: ['TensorFlow', 'Keras', 'Matplotlib', 'Seaborn', 'Data Preprocessing', 'Feature Engineering'],
  },
  {
    id: 'software',
    name: 'Software',
    summary: 'Services and tools that put a model to work.',
    primary: ['Flask', 'Streamlit', 'FastAPI', 'Java', 'SQL'],
    supporting: ['Express.js', 'Node.js', 'C', 'Git & GitHub'],
  },
  {
    id: 'interface',
    name: 'Interface',
    summary: 'Responsive front ends people actually use.',
    primary: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    supporting: ['React Native', 'Vite'],
  },
];

export const INTERESTS = SKILL_CATEGORIES[5].skills;

export const EDUCATION: Education[] = [
  {
    id: "edu-1",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institute: "PA College of Engineering and Technology (PACET)",
    location: "Pollachi, India",
    year: "2022 – 2026",
    stats: "CGPA: 7.75",
    bulletPoints: [
      "Specializing in algorithmic optimizations of machine learning neural networks and advanced numerical computing.",
      "Active participant in technical paper presentations and intercollegiate hackathons.",
      "Focused on applying Artificial Intelligence models to real-world software accessibility and sentiment classification.",
    ],
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Education (12th Grade)",
    institute: "BBMHSS",
    location: "Palladam, India",
    year: "Graduated 2022",
    stats: "Score: 76.1%",
    bulletPoints: [
      "Core concentration in Mathematics, Physics, Chemistry, and Computer Science.",
      "Developed foundational coding projects using C++ and numerical problem-solving techniques.",
    ],
  },
  {
    id: "edu-3",
    degree: "Secondary School Leaving Certificate (10th Grade)",
    institute: "BBMHSS",
    location: "Palladam, India",
    year: "Graduated 2020",
    stats: "Score: 88.4%",
    bulletPoints: [
      "Graduated with high honors, showcasing strong analytical and logical reasoning skills early on.",
    ],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'exp-3',
    type: 'Internship',
    short: 'Jyesta',
    title: 'Artificial Intelligence Intern',
    subtitle: 'JYESTA',
    accentTag: 'Internship',
    stats: 'Aug - Oct 2025',
    location: 'India',
    date: 'Aug 2025 – Oct 2025',
    description:
      'Completed comprehensive internship in Artificial Intelligence, focusing on modern cognitive applications, practical model implementations, and advanced technical solutions.',
    bulletPoints: [
      'Completed internship in Artificial Intelligence and neural processing layouts.',
      'Worked on AI concepts and practical applications for operational workflows.',
      'Improved problem-solving and technical skills through challenging algorithmic scenarios.',
      'Gained hands-on experience in AI technologies to optimize intelligence pipelines.',
    ],
  },
  {
    id: 'exp-1',
    type: 'Internship',
    short: 'CLOB Groups',
    title: 'Web Development Intern',
    subtitle: 'CLOB Groups',
    accentTag: 'Internship',
    stats: 'Dec 2024',
    location: 'Coimbatore, India',
    date: 'Dec 2024',
    description:
      'Developed responsive and user-friendly websites utilizing modern frontend technologies and collaborated closely with design experts to optimize UI/UX flows.',
    bulletPoints: [
      'Developed responsive, touch-friendly, and mobile-first layouts using HTML5, CSS3, and JavaScript.',
      'Collaborated with creative designers to translate Figma design elements into micro-designed fluid web animations.',
      'Implemented client-side logic representing basic REST integration, forms validation, and API-based data displays.',
      'Deployed highly responsive static platforms on GitHub Pages, ensuring cross-browser styling parity.',
      'Leveraged Git/GitHub for efficient source-code version control and development iteration.',
    ],
  },
  {
    id: 'exp-2',
    type: 'Internship',
    short: 'Livestream',
    title: 'Python in Data Science Intern',
    subtitle: 'Livestream Technologies',
    accentTag: 'Internship',
    stats: 'June 2024',
    location: 'Coimbatore, India',
    date: 'June 2024',
    description:
      'Gained significant hands-on technical insights using core Python data modules, resolving practical statistical tasks, and building clear visualization layers.',
    bulletPoints: [
      'Conducted extensive data modeling, preprocessing, and statistical sanitization using Python libraries such as NumPy and Pandas.',
      'Created highly expressive analytical visualizations (scatter plots, heatmaps, frequency matrices) with Matplotlib and Seaborn.',
      'Gained robust understanding of basic linear, polynomial, and logistic regression algorithms for predictive modeling.',
      'Integrated machine learning pipelines including missing-value imputation, outlier detection, and feature scalar adjustments.',
    ],
  },
  {
    id: 'edu-1',
    type: 'Education',
    short: 'PACET',
    title: 'B.Tech in Artificial Intelligence and Data Science',
    subtitle: 'PA College of Engineering and Technology (PACET)',
    accentTag: 'Graduated',
    stats: 'CGPA: 7.75',
    location: 'Pollachi, India',
    date: '2022 – 2026',
    description:
      'Specializing in machine learning neural networks, natural language processing models, and entry-level full-stack applications.',
    bulletPoints: [
      'Specializing in algorithmic optimizations of machine learning neural networks and advanced numerical computing.',
      'Active participant in technical paper presentations and intercollegiate hackathons.',
      'Focused on applying Artificial Intelligence models to real-world software accessibility and sentiment classification.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "AI Chatbot for User Support",
    subtitle: "Conversational Intelligent Agent using NLP",
    category: "ai",
    featured: true,
    year: "2025",
    description: "An intelligent support system engineered in Python to parse queries, resolve user intent, and classify input keywords using TF-IDF and NLP pipelines.",
    longDescription: "This advanced NLP-powered chatbot is designed to provide responsive human-like user support. It processes natural language queries by scrubbing stopwords, performing tokenization/stemming, and then classifying intent via lightweight vectorized neural networks and TF-IDF classifiers. The system allows businesses to automate repetitive user resolution steps while allowing smooth human-in-the-loop overrides.",
    tags: ["Python", "NLP", "TF-IDF", "Machine Learning", "Flask"],
    features: [
      "Preprocesses noise-free user text inputs using tokenization, stemming, and custom stopword list exclusions.",
      "Employs vectorized TF-IDF modeling paired with an optimized Intent Classification algorithm.",
      "Engineered with a stateful feedback loop setup to collect and flag misclassified queries for manual labeling.",
      "Exposes RESTful APIs through a lightweight Flask daemon for easy visual frontend integration.",
    ],
    implementation: "The backend is structured on a modular Python architecture. Input strings are parsed using NLTK patterns, mapped into multidimensional matrices using Scikit-Learn TF-IDF, and evaluated against trained intent arrays. A lightweight dashboard tracks dialogue duration and user success metrics.",
    figure: {
      caption: "Intent classification pipeline, with misclassified queries fed back for labelling.",
      steps: [
        { label: "User query" },
        { label: "Tokenise, stem, drop stopwords", tool: "NLTK" },
        { label: "TF-IDF vectors", tool: "Scikit-Learn" },
        { label: "Intent classifier", model: true },
        { label: "REST response", tool: "Flask" },
      ],
      loop: { from: 3, to: 1, label: "Flagged for labelling" },
    },
    repoUrl: "https://github.com/barath220904/chatbot",
    liveUrl: "",
  },
  {
    id: "proj-3",
    title: "Product Sentiment Classifier",
    subtitle: "High Accuracy SVM Reviews NLP Classifier",
    category: "ai",
    featured: true,
    year: "2025",
    description: "A text-classification system designed with SVM and TF-IDF vectors categorizing customer reviews into sentiment groups.",
    longDescription: "An automated sentiment analysis pipeline which classifies thousands of product reviews into positive, neutral, and negative markers. Developed for brands looking to track active consumer satisfaction, it leverages Support Vector Machines (SVM) due to their robust high-dimensional text-boundary classification performance.",
    tags: [
      "Python",
      "NLP",
      "Support Vector Machines (SVM)",
      "Scikit-Learn",
      "Streamlit",
    ],
    features: [
      "Scrubs and tokenizes structural text inputs including stemming and custom dictionary exclusions.",
      "Maps review features using balanced TF-IDF token weighting to highlight premium semantic keywords.",
      "Achieved high training and testing verification accuracies, outperforming simple Naive Bayes classifications.",
      "Deployed as a real-time responsive web API and terminal application for brand review evaluations.",
    ],
    implementation: "Using NLTK's corpus, the reviews are cleaned, converted into numeric matrices, and fitted to an SVM model with linear kernels. The predictions return categorical confidence indexes, served instantly to the client.",
    figure: {
      caption: "Review text to sentiment label with a linear-kernel SVM.",
      steps: [
        { label: "Product review" },
        { label: "Clean, tokenise, stem", tool: "NLTK" },
        { label: "TF-IDF weighting", tool: "Scikit-Learn" },
        { label: "Linear SVM", model: true },
        { label: "Positive · neutral · negative", tool: "Streamlit" },
      ],
    },
    repoUrl: "https://github.com/barath220904/Sentiment-analysis",
    liveUrl: "",
  },
  {
    id: "proj-4",
    title: "Hands-Free Virtual Mouse",
    subtitle: "Computer Vision Gestural Accessibility System",
    category: "tools",
    featured: true,
    year: "2025",
    description: "An innovative human-computer interface application employing OpenCV contour models to command desktop cursors via hand gestures.",
    longDescription: "An accessibility-centric application aimed at enabling individuals with physical challenges to command mouse controls hands-free. Using computer vision models, it tracks custom predefined hand postures over active webcams and maps spatial finger moves and overlaps directly to system-level event hooks like mouse cursors and mouse clicks.",
    tags: ["Python", "OpenCV", "Computer Vision", "PyAutoGUI", "AI/ML"],
    features: [
      "Captures camera data buffers instantly, applying custom HSV ranges to filter and isolate skin contours.",
      "Implements geometric convex hull and contour defect calculations to precisely recognize specific finger counts.",
      "Coordinates PyAutoGUI handlers dynamically with low-latency smoothing, translating coordinates into drag or move motions.",
      "Includes configurable webcam calibration controls to adjust to different lighting conditions.",
    ],
    implementation: "Runs entirely on localized webcam pipelines. OpenCV applies image blurs, threshold matrices, and morphing actions to identify contours. Finger tips are found through distance mapping, sending cursor operations in millisecond loops.",
    figure: {
      caption: "Webcam frames to OS cursor events, entirely on the local machine.",
      steps: [
        { label: "Webcam frame" },
        { label: "Blur and HSV skin mask", tool: "OpenCV" },
        { label: "Contours and convex hull", tool: "OpenCV", model: true },
        { label: "Fingertips and defects" },
        { label: "Smoothed move, click, drag", tool: "PyAutoGUI" },
      ],
    },
    repoUrl: "https://github.com/barath220904/Virtual-Mouse",
    liveUrl: "",
  },
  {
    id: "proj-2",
    title: "ML Real Estate Price Estimator",
    subtitle: "Regression Engine with Streamlit Frontend",
    category: "ai",
    featured: true,
    year: "2024",
    description: "A Python machine learning regression model built using Scikit-Learn to accurately forecast properties price valuations based on features.",
    longDescription: "A fully optimized house valuation software that analyzes multiple geographic and physical features of properties. It processes data variables such as room counts, age of construction, target proximity, and square footage. Utilizing regression algorithms, it optimizes hyperparameters using Grid Search cross-validation to provide highly accurate real estate cost estimates.",
    tags: ["Python", "Scikit-Learn", "Regression", "Pandas", "Streamlit"],
    features: [
      "Involves detailed exploratory data analysis (EDA) modeling, addressing missing values, and hot-encoding categorical labels.",
      "Trains and benchmark compares Multiple Linear Regression and Random Forest Regressor models.",
      "Uses GridSearchCV algorithms to automatically prune hyperparameters, preventing model overfitting.",
      "Houses an interactive user control dashboard compiled via Streamlit, allowing instant value adjustments.",
    ],
    implementation: "The system reads cleaned CSV dataset variables, imputes missing data using media scalars, maps high-variance coordinates into normalized numeric fields, and runs predictions through the model file serialized as a Joblib binary.",
    figure: {
      caption: "From a housing dataset to an interactive price estimate.",
      steps: [
        { label: "Housing CSV", tool: "Pandas" },
        { label: "EDA, imputation, encoding" },
        { label: "Linear vs Random Forest", tool: "GridSearchCV", model: true },
        { label: "Serialised model", tool: "Joblib" },
        { label: "Price estimate", tool: "Streamlit" },
      ],
    },
    repoUrl: "https://github.com/barath220904/House-Price-Prediction",
    liveUrl: "",
  },
  {
    id: "proj-5",
    title: "Weather Forecast Dashboard",
    subtitle: "Real-time API Weather Aggregator",
    category: "web",
    featured: false,
    year: "2024",
    description: "A fast, modern responsive web dashboard integrating the OpenWeatherMap REST API to render weather queries with premium visual themes.",
    longDescription: "A feature-rich weather dashboard focused on rendering pristine weather forecasts and location trends. Users can query any city globally, fetching structured current metrics, 5-day forecasts, humidity data, air quality reports, and sunset calendars in real-time.",
    tags: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API", "REST Integration"],
    features: [
      "Accesses RESTful JSON payloads smoothly in real-time using modern native async/await Fetch pipelines.",
      "Renders dynamic layout themes matching local weather parameters (ambient rains, sunny glows, frosty snow).",
      "Features quick location lookup searches with automatic client-side caching of recently checked queries.",
      "Fully responsive mobile-first layouts using custom CSS flexgrids and glass card widgets.",
    ],
    implementation: "The frontend captures input values, queries OpenWeatherMap's remote server, maps responses to CSS custom icons and properties, and triggers fade animations for seamless layout changes.",
    figure: {
      caption: "City search to a themed forecast, with recent searches cached in the browser.",
      steps: [
        { label: "City search" },
        { label: "Async fetch", tool: "OpenWeatherMap API" },
        { label: "Current and 5-day data" },
        { label: "Theme from conditions", model: true },
        { label: "Responsive dashboard", tool: "HTML · CSS · JS" },
      ],
    },
    // TODO(owner): add the repository and live demo URLs when they are public.
    // barath007.netlify.app serves the portfolio itself, not this dashboard.
    repoUrl: "",
    liveUrl: "",
  },
  {
    id: "proj-6",
    title: "Image Format Conversion Tool",
    subtitle: "Tkinter GUI Multi-Format Drag-and-Drop Tool",
    category: "tools",
    featured: false,
    description: "A desktop utility built on Python PIL and Tkinter enabling non-technical users to drag, preview, and batch format convert image files.",
    longDescription: "A lightweight but powerful desktop application that solves a major problem for content creators: image file size and extension conversions. Built on Python's robust PIL (Pillow) image backend, it supports converting heavy formats (TIFF, BMP, PNG) into optimized web layouts like JPEG or WEBP.",
    tags: [
      "Python",
      "Tkinter",
      "Pillow (PIL)",
      "Image Processing",
      "Desktop Utility",
    ],
    features: [
      "Drag-and-drop file inputs powered by seamless Tkinter canvas overlays.",
      "Real-time preview frame displaying aspect ratios, file weight, and output estimations.",
      "Supports batch conversions of multiple image structures simultaneously to cut down on user time.",
      "Strong client error handling that monitors truncated and corrupted image headers.",
    ],
    implementation: "PIL reads binary image streams, rescales them internally for display ratios, and writes output bytes safely onto target directory structures when clicking the launch trigger.",
    figure: {
      caption: "Drag, check, preview and batch-convert, on the desktop.",
      steps: [
        { label: "Dropped files", tool: "Tkinter" },
        { label: "Decode, check headers", tool: "Pillow" },
        { label: "Preview size and ratio" },
        { label: "Batch convert", tool: "Pillow", model: true },
        { label: "JPEG · WEBP · PNG out" },
      ],
    },
    repoUrl: "https://github.com/barath220904/Image-format-Converter",
    liveUrl: "",
  },
];

export const CERTIFICATIONS: string[] = [
  "Certified in Responsive AI (Simplilearn)",
  "Certified in Prompt Engineering (Solo Learn)",
  "Certified in Numpy (Great Learning)",
  "Completed Python for Beginners (Simplilearn)",
  "Completed TensorFlow for Beginners (Simplilearn)",
];

export const ACHIEVEMENTS: string[] = [
  "Solved over 20+ problems with multi-star scores on HackerRank, showcasing analytical algorithms precision.",
  "Won First Prize in Paper Presentation on 'Art of Paper' at Sengundar College of Engineering and Technology, Erode.",
  "Successfully completed multiple specialized workshops in emerging technologies and collaborative engineering.",
  "Represented PA College in guest lectures and paper presentations on machine learning topics.",
];

export const PERSONAL_DETAILS = {
  nationality: "Indian",
  languages: ["English", "Tamil (Native)"],
  hobbies: [
    "Playing Kabaddi (Represented high school)",
    "Swimming",
    "Reading technical books and blogs",
  ],
  location: "Palladam, Tiruppur, India",
};
