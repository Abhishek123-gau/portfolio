import { Code2, Cpu, Brain, Database, Globe, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Skill {
    category: string;
    icon: LucideIcon;
    items: string[];
}

export const personalInfo = {
    name: "Abhishek Kushwah",
    role: "AI/ML Engineer | Computer Vision | LLM Systems",
    tagline: "Building Intelligent Systems that Solve Real-World Problems",
    intro: "From **IIT Bombay** to building AI systems that actually solve real-world problems.",
    about: {
        story: "Preparing for JEE Advanced changed the way I think. It taught me how to break down hard problems, stay patient, and keep pushing until something makes sense. That journey led me to IIT Bombay, where I was surrounded by people constantly building, experimenting, and thinking bigger.\n\nThat’s where AI really clicked for me.\n\nAt first, I was just excited to train models. But over time, I became more curious about what’s happening underneath — why a model works, why it fails, and how to make it better. I started going deeper into the math, the architecture, and the system design behind it.\n\nNow, I focus on building AI systems that actually work outside notebooks — from computer vision models to scalable LLM pipelines. I care about making things not just accurate, but usable and deployable.",
        currentWork: [
            "Designing agentic AI systems with reinforcement learning and automatic feedback-driven correction",
            "Studying real-world AI deployments to bridge the gap between research and scalable industry solutions",
            "Optimizing computer vision pipelines for high-speed, high-precision object detection"
        ],
        goal: "AI Research Engineer that builds systems to survive outside the lab"
    },
    contact: {
        email: "abhishek.katiitb@gmail.com",
        linkedin: "https://www.linkedin.com/in/abhishek-kushwah-291255228/",
        github: "https://github.com/Abhishek123-gau",
        resume: "/ML_1pg_Abhishek_Kushwah.pdf"
    }
};

export const skills: Skill[] = [
    {
        category: "Programming",
        icon: Code2,
        items: ["Python", "C++", "JavaScript", "SQL"]
    },
    {
        category: "ML/DL",
        icon: Brain,
        items: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras"]
    },
    {
        category: "Computer Vision",
        icon: Cpu,
        items: ["OpenCV", "YOLO", "Transfer Learning", "Image Segmentation"]
    },
    {
        category: "LLM & NLP",
        icon: Globe,
        items: ["Transformers", "RAG", "Vector Embeddings", "LangChain"]
    },
    {
        category: "Tech & Deployment",
        icon: Database,
        items: ["React", "Node", "REST APIs", "Docker", "AWS"]
    },
    {
        category: "Core Concepts",
        icon: BookOpen,
        items: ["Optimization", "Regularization", "Backprop", "Attention Mechanisms"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Market-Analysis-prediction-LSTM",
        description: "LSTM-based multivariate time-series model for 6-month spice demand forecasting using historical sales, pricing trends, and macroeconomic indicators.",
        tech: ["NLTK", "Gensim", "Sentence-Transformers (SBERT)", "LSTM", "LDA"],
        github: "https://github.com/Abhishek123-gau/Market-Analysis-prediction-LSTM",
        demo: "#",
        image: "/src/assets/market3.png",
        details: "An end-to-end Market Intelligence ecosystem that synchronizes Deep Learning for demand forecasting with advanced Natural Language Processing for competitive benchmarking. The system processes historical sales trends alongside multi-source competitor data to predict future market needs and identify strategic pricing and positioning opportunities.",
        features: [
            "Predictive Demand Modeling: Multivariate LSTM neural network achieving high-precision 6-month forecasts by correlating volume with complex pricing and macro-export indices.",
            "Competitor Semantic Mapping: Automated LDA topic modeling and TF-IDF extraction to benchmark product positioning and uncover high-impact market-gap keywords.",
            "Customer Sentiment Engine: Deep semantic clustering using Sentence-BERT (SBERT) embeddings and K-Means to transform thousands of reviews into actionable business intent clusters.",
            "Automated BI Workflows: Rapid generation of business-ready artifacts, including PowerPoint Executive Summaries and multi-sheet dynamic Excel data packs."
        ],
        challenges: "Integrating heterogeneous data streams (time-series vs. unstructured text), optimizing SBERT embedding density for small-sample semantic clustering, and mitigating recursive multi-step forecast drift in highly seasonal market environments."
    },
    {
        id: 2,
        title: "Finance Data Retrieval System",
        description: "A high-performance neural retrieval ecosystem designed to synchronize sparse keyword search with deep semantic ranking for complex financial document intelligence.",
        tech: ["Python", "PyTorch", "Sentence-Transformers", "BM25", "NLTK", "HuggingFace"],
        github: "https://github.com/Abhishek123-gau/Finance_Data_Retriever",
        demo: "#",
        image: "/src/assets/finance1.jpg",
        details: "An end-to-end document intelligence pipeline that leverages a multi-stage hybrid retrieval architecture. The system processes high-volume financial data streams—such as employment agreements and fiscal reports—by combining the speed of BM25 sparse retrieval with the precision of Neural Cross-Encoders to identify and rank the most contextually relevant information.",
        "features": [
            "Hybrid Multi-Stage Retrieval: Engineered a tiered pipeline orchestrating BM25, SBERT dense embeddings, and transformer-based re-ranking to achieve maximum recall and precision.",
            "Neural Semantic Vector Mapping: Utilized deep semantic clustering and high-dimensional SBERT embeddings (all-MiniLM-L6-v2) to transform raw text into actionable, context-aware vector sets.",
            "Cross-Encoder Re-ranking Engine: Implemented fine-grained neural scoring (ms-marco-MiniLM-L-6-v2) to eliminate signal noise and capture complex semantic relationships often missed by keyword search.",
            "Contextual Segementation Framework: Developed an optimized sliding-window chunking and normalization engine to maintain semantic density across long-form, heterogeneous financial documents."
        ],
        challenges: "Optimizing sub-second latency for pairwise Cross-Encoder scoring across high-volume candidate sets, and mitigating semantic drift within specialized financial/legal vocabularies to ensure linguistic precision."
    },
    {
        id: 3,
        title: "Hierarchical Multi-Agent Travel Orchestration Ecosystem",
        description: "A high-performance, plugin-based multi-agent framework engineered for automated end-to-end travel lifecycle management and proactive user assistance.",
        tech: ["OpenAI GPT-4", "PostgreSQL (pgvector)", "Redis (State Orchestration)", "Docker", "LangGraph (Dynamic Directed Acyclic Graphs)"],
        github: "https://github.com/Abhishek123-gau/Travel-Assistant",
        demo: "#",
        image: "/src/assets/travel.png",
        details: "The architecture utilizes a sophisticated supervisor-orchestrator pattern with dynamic runtime workflow generation via LangGraph. It leverages a decoupled plugin registry for O(1) scalability of heterogeneous service providers and integrates an asynchronous proactive intelligence layer for context-aware event monitoring and predictive user engagement",
        features: [
            "Orchestrated Dynamic Capability Routing: Leveraged LangGraph to synthesize adaptive runtime execution paths, transitioning from rigid, hard-coded logic to a fluid, hierarchical agentic ecosystem capable of complex multi-domain orchestration.",
            "Leveraged Transformer-based Architectures: Integrated state-of-the-art Large Language Models (GPT-4, Llama-3) to perform high-fidelity semantic intent extraction and precise capability mapping across diverse travel domains.",
            "Mitigated Semantic Drift via Persistent Memory: Engineered a long-term memory (LTM) framework using pgvector to ensure coherent intent preservation and sub-millisecond retrieval of user preferences across complex, multi-stage booking sequences.",
            "Optimized Distributed Supplier Integration: Implemented a registry-centric plugin architecture that facilitates the seamless horizontal scaling of 100+ travel service vendors, minimizing architectural overhead and accelerating ecosystem expansion."
        ],
        challenges: "Overcame critical state fragmentation across asynchronous multi-vendor pipelines by centralizing context management via Redis-backed state orchestration, and mitigated inference latency by implementing modular supervisor routing to prune high-dimensional decision graphs."
    },
    {
        id: 4,
        title: "FinREASON: Orchestrated low-VRAM GRPO for High-Fidelity Financial Intelligence",
        description: "Leveraging transformer-based architectures and Group Relative Policy Optimization to drive unprecedented structural reasoning and mathematical precision in financial data interpretation.",
        tech: [
            "Qwen2.5-1.5B-Instruct",
            "Group Relative Policy Optimization (GRPO)",
            "PyTorch",
            "PEFT/QLoRA",
            "BitsAndBytes (4-bit NF4)",
            "FinQA Dataset"
        ],
        github: "https://github.com/Abhishek123-gau/FInetuning_using_GRPO_RL",
        demo: "#",
        image: "/src/assets/GRPO.png",
        details: "Architected a decentralized reinforcement learning pipeline via a 'from-scratch' GRPO engine, specifically optimized for extreme memory efficiency on commodity 4GB VRAM hardware. The system implements a multi-dimensional reward-driven alignment schema to synchronize complex Chain-of-Thought (CoT) reasoning with deterministic financial accuracy",
        features: [
            "Deployed an optimized QLoRA-based training architecture, leveraging 4-bit NormalFloat (NF4) quantization and gradient checkpointing to unlock large-scale model optimization on edge-tier hardware nodes.",
            "Engineered a proprietary GRPO sampling engine that orchestrates multi-completion group dynamics to calculate relative advantages, effectively eliminating the compute overhead of separate reward models.",
            "Implemented a sophisticated reward heuristic that mitigates semantic drift by enforcing rigid structural protocols (<thought>/<answer> tags) and mathematical operand validation within the reasoning stream.",
            "Leveraged transformer-based CoT finetuning on the FinQA dataset to significantly enhance the system's ability to synthesize high-fidelity insights from fragmented tabular and textual financial reports."
        ],
        challenges: "Successfully mitigated volatile Gradient Descent trajectories through the calibration of a clipped surrogate objective function; navigated hardware-level memory bottlenecks by dynamically scaling group sizes and orchestrating localized gradient checkpointing."
    },
    {
        id: 5,
        title: "Spectral-Spatial Intelligence Core (SSIC)",
        description: "Enterprise-grade hyperspectral image classification engine leveraging volumetric deep learning for high-precision autonomous land-cover mapping.",
        tech: ["PyTorch", "3D-Convolutional Neural Networks (3D-CNN)", "3D-Residual Networks (3D-ResNet)", "DropBlock Structured Regularization", "Rasterio", "EarthPy"],
        github: "https://github.com/Abhishek123-gau/Statellite_Hyper-spectral_image_classification",
        demo: "#",
        image: "/src/assets/satelite1.jpg", // Reusing a placeholder
        details: "The system orchestrates a sophisticated dual-pathway feature extraction pipeline, simultaneously capturing spectral signatures and spatial dependencies within high-dimensional HSI data cubes. By integrating 3D architectural variants, it mitigates information loss inherent in traditional dimensionality reduction techniques.",
        features: [
            "Orchestrated 3D-ResNet3D pipelines for deep volumetric feature extraction, enabling superior land-cover classification accuracy.",
            "Leveraged DropBlock structured regularization to effectively mitigate semantic drift and enhance model generalization across contiguous feature regions.",
            "Engineered automated ETL workflows for seamless processing of georeferenced sensor data from major environmental repositories including AVIRIS and Sentinel-2.",
            "Optimized resource-intensive inference pathways for tactical remote sensing applications, facilitating near real-time spectral distillation."
        ],
        challenges: "Successfully mitigated the 'Curse of Dimensionality' within hyperspectral cubes through volumetric encoding and resolved potential gradient stagnation in deep 3D architectures via residual skip-connections."
    }
];

export const experience = [
    {
        company: "L&T Finance",
        role: "Data Scientist",
        period: "July'2025 - Present",
        description: "Built scalable AI-driven automation systems across multiple enterprise services, streamlining data analysis, communication workflows, and decision-support processes.",
        points: [
            "Designed and deployed AI-driven automation systems to streamline internal workflows and reduce operational costs across departments.",
            "Built intelligent conversational analytics tools enabling non-technical teams to query and analyze large-scale financial data using natural language.",
            "Developed machine learning pipelines for large-scale customer communication management, automating email classification, response generation, and task routing.",
            "Improved enterprise AI capabilities by fine-tuning domain-specific language models for financial data retrieval, decision support, and chatbot interactions."
        ]
    },
    {
        company: "OXFIN TECHNOLOGIES Pvt. Ltd.",
        role: "Generative AI intern",
        period: "July'2024 - September'2024",
        description: "AI-powered system that brings together multiple travel services to help users easily plan trips in one place",
        points: [
            "Created an AI travel assistant that plans trips by breaking user requests into smaller tasks.",
            "Connected 25+ travel APIs (Flights, Hotels, Trains) so everything can be searched and used from one system.",
            "Used LangGraph/LangChain to manage the agents and make the system fast and flexible."
        ]
    },
    {
        company: "Pharmallama",
        role: "Computer Vision intern",
        period: "May'2024 - July'2024",
        description: "Built AI-powered medicine detection systems using deep learning, enabling accurate recognition of pharmaceutical products from images.",
        points: [
            "Built a computer vision pipeline for automated medicine detection, enabling accurate identification of pharmaceutical products from images.",
            "Created and annotated a large-scale dataset of 0.4M images with bounding boxes, improving model training and detection reliability.",
            "Trained and evaluated state-of-the-art object detection models (Faster-RCNN, YOLOv8), achieving 95.5%+ detection accuracy with optimized inference speed."
        ]
    }

];

export const achievements = [
    {
        title: "2nd Place AI Hackathon",
        level: "Institute Level (150+ Teams)",
        description: "Developed a Hand control Desktop system using Computer vision ."
    },
    {
        title: "Hackathon top rankers",
        level: "National Level",
        description: "Participated in SIH hackathon and selected by intitute from 250+ to participate in AI problem statement."
    }
];
