export const personalInfo = {
  name: "Rui Liu",
  title: "Postdoctoral Fellow",
  institution: "The Hong Kong Polytechnic University",
  department: "Department of Data Science and Artificial Intelligence",
  email: "ruiliu@polyu.edu.hk",
  googleScholar: "https://scholar.google.com/citations?user=EmmYJcYAAAAJ&hl=en",
  github: "https://github.com/ruiliu",
  linkedin: "https://linkedin.com/in/rui-liu",
  twitter: "https://twitter.com/rui_liu",
  location: "Hong Kong SAR, China",
  bio: `I am currently a Postdoctoral Fellow in the Department of Data Science and Artificial Intelligence at The Hong Kong Polytechnic University. I received my Ph.D. in Computer Science from City University of Hong Kong in 2023 under the supervision of Prof. Kay Chen Tan and Dr. Ka-Chun Wong. My research interests encompass machine learning and deep learning applications, with particular emphasis on medical image diagnosis, brain-computer interfaces, and multi-task/multi-modality learning.`,
};

export const researchInterests = [
  "Machine Learning",
  "Deep Learning",
  "Medical Image Diagnosis",
  "Brain-Computer Interfaces",
  "Multi-task Learning",
  "Multi-modality Learning",
  "Neuroimaging Analysis",
  "Spatio-Temporal Modeling",
];

export const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "City University of Hong Kong",
    location: "Hong Kong SAR, China",
    year: "Sep 2019 - Aug 2023",
    description: "GPA: 3.67/4.3. Supervisors: Prof. Kay Chen Tan, Prof. Ka-Chun Wong",
  },
  {
    degree: "Exchange Student",
    institution: "University of Washington",
    location: "Washington, USA",
    year: "June 2018 - Sep 2018",
    description: "GPA: 3.70/4.0",
  },
  {
    degree: "B.E. in Intelligence Science and Technology",
    institution: "Chongqing University of Posts and Telecommunications",
    location: "Chongqing, China",
    year: "Sep 2015 - Jun 2019",
    description: "GPA: 3.51/4.0 (Top 3)",
  },
];

export const publications = [
  {
    title: "MindMix: A Multimodal Foundation Model for Auditory Perception Decoding via Deep Neural-Acoustic Alignment",
    authors: "Rui Liu, Z. Chen, S. Peng, W. You, Z.-A. Huang, J. Wu, K. C. Tan",
    venue: "The Fourteenth International Conference on Learning Representations (ICLR)",
    year: "2026",
    type: "Conference",
    links: {
      paper: "#",
      arxiv: "#",
    },
    abstract: "A multimodal foundation model for decoding auditory perception using deep neural-acoustic alignment techniques.",
    tags: ["Foundation Model", "Multimodal", "ICLR"],
  },
  {
    title: "Dynamic Graph Representation Learning for Spatio-Temporal Neuroimaging Analysis",
    authors: "Rui Liu, Y. Hu, J. Wu, K.-C. Wong, Z.-A. Huang, Y.-A. Huang, K. C. Tan",
    venue: "IEEE Transactions on Cybernetics (TCYB)",
    year: "2025",
    type: "Journal",
    links: {
      paper: "#",
    },
    abstract: "A novel approach for dynamic graph representation learning in neuroimaging analysis, capturing spatio-temporal patterns in brain data.",
    tags: ["Graph Learning", "Neuroimaging", "Deep Learning"],
  },
  {
    title: "Spatio-Temporal Hybrid Attentive Graph Network for Diagnosis of Mental Disorders on fMRI Time-Series Data",
    authors: "Rui Liu, Z.-A. Huang, Y. Hu, L. Huang, K.-C. Wong, K.C. Tan",
    venue: "IEEE Transactions on Emerging Topics in Computational Intelligence (TETCI)",
    year: "2024",
    type: "Journal",
    links: {
      paper: "#",
    },
    abstract: "A hybrid attentive graph network that effectively captures spatio-temporal dependencies in fMRI time-series for mental disorder diagnosis.",
    tags: ["Graph Neural Networks", "fMRI", "Mental Disorder Diagnosis"],
  },
  {
    title: "Spatial-Temporal Co-Attention Learning for Diagnosis of Mental Disorders from Resting-State fMRI Data",
    authors: "Rui Liu, Z.-A. Huang, Z. Zhu, K.C. Tan",
    venue: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
    year: "2023",
    type: "Journal",
    links: {
      paper: "#",
    },
    abstract: "Co-attention mechanism for jointly modeling spatial and temporal features in resting-state fMRI for mental disorder diagnosis.",
    tags: ["Attention Mechanism", "fMRI", "Mental Health"],
  },
  {
    title: "Attention-like Multimodality Fusion with Data Augmentation for Diagnosis of Mental Disorders using MRI",
    authors: "Rui Liu, Z.-A. Huang, Y. Hu, Z. Zhu, K.-C. Wong, K. C. Tan",
    venue: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
    year: "2022",
    type: "Journal",
    links: {
      paper: "#",
    },
    abstract: "Multimodal fusion approach with attention mechanisms and data augmentation for robust mental disorder diagnosis.",
    tags: ["Multi-modality", "MRI", "Data Augmentation"],
  },
  {
    title: "Multitask Learning for Joint Diagnosis of Multiple Mental Disorders in Resting-State fMRI",
    authors: "Z.-A. Huang, Rui Liu*, Z. Zhu, K.C. Tan",
    venue: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
    year: "2022",
    type: "Journal",
    links: {
      paper: "#",
    },
    abstract: "Multi-task learning framework for simultaneous diagnosis of multiple mental disorders from resting-state fMRI data.",
    tags: ["Multi-task Learning", "fMRI", "Mental Disorders"],
  },
  {
    title: "Classifying ASD based on Time-Series fMRI Using Spatial-Temporal Transformer",
    authors: "X. Deng, J.H. Zhang, Rui Liu*, K. Liu",
    venue: "Computers in Biology and Medicine (CIBM)",
    year: "2022",
    type: "Journal",
    links: {
      paper: "#",
    },
    abstract: "Transformer-based approach for ASD classification using time-series fMRI data, capturing long-range dependencies.",
    tags: ["Transformer", "ASD", "fMRI"],
  },
  {
    title: "Multi-LSTM Networks for Accurate Classification of Attention Deficit Hyperactivity Disorder from Resting-State fMRI Data",
    authors: "Rui Liu, Z.-A. Huang, M. Jiang, K. C. Tan",
    venue: "International Conference on Industrial Artificial Intelligence (IAI)",
    year: "2020",
    type: "Conference",
    links: {
      paper: "#",
    },
    abstract: "Multi-LSTM architecture for ADHD classification using resting-state fMRI data.",
    tags: ["LSTM", "ADHD", "fMRI"],
  },
];

export const projects = [
  {
    title: "MindMix: Auditory Perception Decoding",
    description: "A multimodal foundation model for auditory perception decoding via deep neural-acoustic alignment. Published at ICLR 2026.",
    image: "/project-mindmix.jpg",
    tags: ["Foundation Model", "PyTorch", "Multimodal Learning"],
    links: {
      github: "#",
      paper: "#",
    },
  },
  {
    title: "Spatio-Temporal Neuroimaging Analysis",
    description: "Dynamic graph representation learning framework for spatio-temporal neuroimaging analysis and mental disorder diagnosis.",
    image: "/project-neuro.jpg",
    tags: ["Graph Neural Networks", "Medical AI", "fMRI"],
    links: {
      github: "#",
      paper: "#",
    },
  },
  {
    title: "Brain-Computer Interface Systems",
    description: "Research on auditory attention decoding and EEG-based brain-computer interfaces with foundation models.",
    image: "/project-bci.jpg",
    tags: ["BCI", "EEG", "Deep Learning"],
    links: {
      github: "#",
      paper: "#",
    },
  },
];

export const awards = [
  {
    title: "Best Paper Award",
    organization: "IEEE Congress on Evolutionary Computation (CEC)",
    year: "2025",
    description: "Awarded for outstanding research contribution in evolutionary computation.",
  },
  {
    title: "Second Place",
    organization: "ISCSLP Chinese Auditory Attention Decoding Challenge",
    year: "2024",
    description: "International competition on auditory attention decoding.",
  },
  {
    title: "Postdoctoral Matching Fund Scheme",
    organization: "The Hong Kong Polytechnic University",
    year: "2024",
    description: "Competitive funding scheme for postdoctoral research.",
  },
  {
    title: "Outstanding Academic Performance Award",
    organization: "City University of Hong Kong",
    year: "2023",
    description: "Awarded to research degree students with outstanding academic performance.",
  },
  {
    title: "Research Tuition Grant",
    organization: "City University of Hong Kong",
    year: "2020 - 2023",
    description: "Full tuition coverage for doctoral studies.",
  },
  {
    title: "First Prize",
    organization: "China College Students' Intelligent Design Competition",
    year: "2018",
    description: "National-level intelligent design competition (National).",
  },
  {
    title: "Top 10",
    organization: "The 2018 University Fintech Competition",
    year: "2018",
    description: "National fintech competition (National).",
  },
  {
    title: "Rising Star in Big Data Challenge",
    organization: "Big Data Challenge",
    year: "2017",
    description: "Top 5% in national big data challenge.",
  },
];

export const skills = {
  languages: ["Python", "MATLAB", "LaTeX", "Shell"],
  frameworks: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn"],
  tools: ["Git", "Docker", "Linux", "fMRI Analysis Tools"],
  languages_spoken: ["English (Fluent)", "Chinese (Native)"],
};

export const services = {
  journalReviewer: [
    "IEEE Transactions on Medical Imaging (TMI)",
    "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
    "IEEE Transactions on Cybernetics (TCYB)",
    "IEEE Transactions on Emerging Topics in Computational Intelligence (TETCI)",
    "IEEE Transactions on Cognitive and Developmental Systems (TCDS)",
    "Scientific Reports",
    "International Journal of Machine Learning and Cybernetics (IJMLC)",
    "Journal of Supercomputing (JOS)",
    "BMC Medical Informatics and Decision Making",
  ],
  conferenceReviewer: [
    "IEEE Congress on Evolutionary Computation (CEC)",
    "International Joint Conference on Neural Networks (IJCNN)",
    "IEEE Conference on Artificial Intelligence (CAI)",
  ],
};