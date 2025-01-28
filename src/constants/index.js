import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  amazon,
  tcs,
  spurcroft,
  rice,
  chatapp,
  clip,
  portfolio,
  ricebook,
  signlanguage,
  videocaptioning

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Amazon",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#161329",
    date: "Aug 2023 - Present",
    points: [
      "Developed a self-serve blueprint configuration tool using Java, DynamoDB, and Coral endpoints on Amazon EC2, automating live event updates and saving $5M+ in manpower costs.",
      "Collaborated with cross-functional teams to build infrastructure for automated live event broadcasts, contributing to a $100M sports broadcast partnership.",
      "Introduced a shadow testing strategy, enhancing system resiliency by 25% and adopted by 30+ Amazon teams for improved stability and risk mitigation.",
      "Launched 15+ risk messaging systems in the Galileo framework, tailored for localized Prime experiences, resulting in measurable user engagement gains.",
      "Resolved high-severity on-call tickets, reducing operational workload and maintaining team efficiency with fewer than 10 active tickets."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Spurcroft Inc",
    icon: spurcroft,
    iconBg: "#161329",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Developed controllers, interfaces, and implementation classes using the Spring MVC framework at Spurcroft Inc.",
      "Leveraged a microservices architecture with Spring Boot-based services and REST for seamless data exchange.",
      "Integrated RESTful and GraphQL APIs using JavaScript, reducing data retrieval times by 15%."
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    company_name: "Rice University",
    icon: rice,
    iconBg: "#161329",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Conducted weekly office hours to clarify concepts, guide problem-solving approaches, and assist with coursework for a class of 60 students.",
      "Curated challenging and engaging assignments and exams to enhance students' understanding of advanced algorithmic concepts."
    ],
  },
];

export const projects = [
  {
    name: "Chat App - Object-oriented programming",
    description:
      "Built a browser-based chat app for my Grad class COMP 504: Graduate Object-Oriented Programming and Design. The system allows users to join rooms and send messages, backed by cloud-based data storage and subscription management services for seamless operation and scalability.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Java", color: "pink-text-gradient" },
    ],
    image: chatapp,
    source_code_link: "https://github.com/harshithsesham/chat-api-direwolves-frontend-harshith",
  },
  {
    name: "My Portfolio Website",
    description:
      "Developed a dynamic, responsive personal portfolio using React to showcase skills, projects, and professional journey. The portfolio features a modern design with interactive animations and a fully responsive layout for optimal cross-device experience. Built with React’s component-based architecture for scalability and efficient updates.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/harshithsesham/harshithsesham",
  },
  {
    name: "Video Captioning System using Tensorflow",
    description:
      "Implemented a video captioning system using VGG16 for feature extraction and a sequence-to-sequence RNN/LSTM architecture in TensorFlow. Optimized real-time text prediction with greedy and beam search, achieving a 75%+ validation score using BLEU, ROUGE-L, and CIDEr metrics.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    image: videocaptioning,
    source_code_link:
      "https://drive.google.com/file/d/1H73MAzIUoOt-tPnQKFCfdHKUqVbI0BCu/view?usp=drive_link",
  },
  {
    name: "Social media app(Ricebook)",
    description:
      "Developed a full-stack Facebook-like web application with a React.js frontend and a Node.js backend, hosted on Heroku for reliable deployment. Designed a modern, cohesive interface using CSS and Semantic UI for a visually appealing user experience. The project highlights my ability to build scalable, functional, and aesthetically pleasing web applications.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: ricebook,
    source_code_link: "https://github.com/harshithsesham/chat-api-direwolves-frontend-harshith",
  },
  {
    name: "Real Time Fingerspelled Sign Language Recognition App",
    description:
      "Developed a Sign Language Recognition app using deep learning to translate hand gestures into text or speech, bridging communication gaps for individuals with hearing or speech impairments. The app leverages a CNN with transfer learning on pre-trained ImageNet models for high-accuracy gesture recognition. It processes live or pre-captured images in real-time, providing a user-friendly, accessible tool for inclusive communication.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tensorflow", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
      { name: "AI", color: "pink-text-gradient" }
    ],
    image: signlanguage,
    source_code_link: "",
  },
  {
    name: "A multi-modal vision and language model to detect harmful social media memes",
    description:
      "Proposed the use of CLIP (Contrastive Language–Image Pre-training), OpenAI’s multimodal model, to analyze multimodal hate speech and benchmark its performance against state-of-the-art models by Facebook AI. Testing on 500 validation samples yielded a surprising 57.8% accuracy without any training, demonstrating performance comparable to Facebook’s research findings.",
    tags: [
      { name: "Tensorflow", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
    ],

    image: clip,
    source_code_link: "",
  },
];
