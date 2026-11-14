export const email = "alinoor3865@gmail.com";
export const github = "https://github.com/alinoor4";
export const linkedin = "https://www.linkedin.com/in/ali-noor04/";

export type Project = {
  name: string;
  context?: string;
  summary: string;
  // A project with results or bars gets a full-width panel; the rest share a grid
  results?: [value: string, label: string][];
  bars?: { caption: string; rows: [label: string, value: number, display: string, highlight?: boolean][] };
  tools: string;
  links: [label: string, href: string][];
};

export const sections: { title: string; intro: string; projects: Project[] }[] = [
  {
    title: "Machine learning and research",
    intro:
      "I implement algorithms from scratch and run controlled experiments, so I can say why a model behaves the way it does.",
    projects: [
      {
        name: "Search ranking research at FlyRank",
        context: "ML internship capstone, 8 weeks",
        summary:
          "I analyzed ranking signals for more than 10,000 URLs across 30 client domains, then trained models to score which pages are worth an editor's time. Trained on 22 domains and tested on 8 they never saw, gradient boosting reached 100% Precision@50, against 86% for the rule-based baseline.",
        results: [
          ["0.9608", "ROC-AUC"],
          ["9.3×", "More clicks per review hour"],
        ],
        // From the results table in the paper: 2,019 held-out items, 19.86% base rate
        bars: {
          caption: "Precision@50 on 8 unseen client domains",
          rows: [
            ["Gradient boosting", 1, "100%", true],
            ["Logistic regression", 1, "100%"],
            ["Random forest", 0.94, "94%"],
            ["Decision tree", 0.88, "88%"],
            ["Rule baseline", 0.86, "86%"],
            ["Base rate", 0.1986, "19.9%"],
          ],
        },
        tools: "Python and scikit-learn",
        links: [
          ["Read the paper", "https://alinoor4.github.io/flyrank-internship/"],
          [
            "Open the notebook",
            "https://colab.research.google.com/github/alinoor4/flyrank-internship/blob/main/work/notebooks/capstone.ipynb",
          ],
          ["View the code", "https://github.com/alinoor4/flyrank-internship"],
        ],
      },
      {
        name: "Why weight decay causes grokking",
        context: "Replication of Power et al. (2022)",
        summary:
          "I trained a 2-layer transformer on modular division and swept the weight decay. Too little and the model only memorizes. Too much and it can't fit the training set at all. At the right setting, the weight norm falls from about 87 to under 30 at the same steps where validation accuracy jumps from chance to 100%.",
        // Final validation accuracy per setting, from the sweep table in the repo's README
        bars: {
          caption: "Final validation accuracy by weight decay, after 6,000 steps",
          rows: [
            ["0.0", 0.017, "1.7%"],
            ["0.1", 0.024, "2.4%"],
            ["1.0", 1, "100%", true],
            ["3.0", 0.12, "12%"],
          ],
        },
        tools: "PyTorch",
        links: [["View the code", "https://github.com/alinoor4/grokking-repo"]],
      },
      {
        name: "Computer vision lab series",
        summary:
          "Seven notebooks on medical and industrial images: 8 pretrained CNN backbones compared on ISIC skin cancer, 18 filtering and edge detection experiments on HAM10000, lesion boundary segmentation, HOG steel defect detection, SIFT with RANSAC landmark localization, and genetic algorithm feature selection on PneumoniaMNIST.",
        tools: "OpenCV, torchvision, scikit-image, scikit-learn and XGBoost",
        links: [["View the code", "https://github.com/alinoor4/computer-vision"]],
      },
      {
        name: "Linear regression from scratch",
        summary:
          "Univariate and multivariate gradient descent, the MSE cost function and convergence checks, written without scikit-learn.",
        tools: "NumPy and Pandas",
        links: [["View the code", "https://github.com/alinoor4/linear_regression_model"]],
      },
    ],
  },
  {
    title: "Agents and LLM security",
    intro:
      "In these systems plain code enforces the math, the budgets and the security boundaries, and the LLM does the reasoning.",
    projects: [
      {
        name: "Project Learner AI",
        context: "Team project, core contributor",
        summary:
          "A project-based coding education platform. Learners write each step of a generated project themselves, and only then do four AI agents explain the approach, streaming in parallel. I built the Learner Brain, an event-sourced graph of what each learner has mastered, and the Examiner Bot, which runs a multiple-choice round and then a rubric-scored viva. I also built project intake and an isolated in-browser sandbox for Python and JavaScript checkpoints, backed by more than 970 unit tests.",
        results: [
          ["4", "AI agents"],
          ["970+", "Unit tests"],
          ["14", "Documented invariants"],
        ],
        tools: "Next.js, Supabase, Pyodide and d3-force",
        links: [
          ["Open the live app", "https://project-learner-ai-web.vercel.app"],
          ["View the code", "https://github.com/ahmedmustafakhan125-coder/Project-Learner-AI"],
        ],
      },
      {
        name: "SubKiller",
        context: "AWS Hackathon",
        summary:
          "A financial triage agent that finds subscriptions quietly getting more expensive. Plain Python does the math: merchant normalization, billing cadence clustering and price-hike detection. The agent then flags the subscriptions and drafts the cancellation emails, so no number ever comes from the model.",
        tools: "Strands Agents SDK, Pydantic, Pandas and Streamlit",
        links: [["View the code", "https://github.com/alinoor4/aws-hackathon"]],
      },
      {
        name: "Squeeze",
        context: "MLH hackathon, co-built",
        summary:
          "An offline runtime that routes each task between two local models, Qwen3-1.7B and Qwen3-0.6B. Under RAM pressure it falls back to the smaller model and resizes the context. It ships with a socket-level privacy guard, a terminal UI and a local web dashboard.",
        tools: "llama.cpp and Rich",
        links: [["View the code", "https://github.com/ahmedmustafakhan125-coder/MLH-Hackathon"]],
      },
      {
        name: "Secure LLM gateway",
        summary:
          "A 4-stage gateway that sits in front of an LLM. It scores prompt-injection attempts, detects personal data with custom recognizers for API keys and internal IDs, then allows, masks or blocks the request.",
        tools: "FastAPI, Microsoft Presidio and spaCy",
        links: [["View the code", "https://github.com/alinoor4/llm-security-gateway"]],
      },
    ],
  },
  {
    title: "Backend",
    intro: "REST APIs and full-stack web apps built with Django.",
    projects: [
      {
        name: "Little Lemon restaurant API",
        summary:
          "A REST backend with token authentication, separate roles for managers and delivery crew, carts that merge automatically, filtering, and JSON or XML responses.",
        tools: "Django, Django REST Framework and Djoser",
        links: [["View the code", "https://github.com/alinoor4/little-lemon-restaurant-api"]],
      },
      {
        name: "Movie inventory app",
        summary: "A full-stack Django 6 app with a REST API, deployed on Render.",
        tools: "Django, django-tastypie, Gunicorn and WhiteNoise",
        links: [
          ["Open the live app", "https://movie-app-rxre.onrender.com/"],
          ["View the code", "https://github.com/alinoor4/movie-app"],
        ],
      },
    ],
  },
];

export const earlier: [name: string, detail: string, href: string][] = [
  ["TLS chatbot client on raw sockets", "Python, standard library only", "https://github.com/alinoor4/python-socket-repo"],
  ["Little Lemon booking API", "Django REST Framework", "https://github.com/alinoor4/little-lemon-app"],
  ["Blood management system", "Java", "https://github.com/alinoor4/blood-management-system-repo"],
  ["Morgue management system", "Java", "https://github.com/alinoor4/morgue-management-repo"],
  ["Gym management system", "Python", "https://github.com/alinoor4/gym-management-repo"],
  ["Food ordering database", "T-SQL", "https://github.com/alinoor4/food-ordering-database-repo"],
];

// "A, B and C" -> ["A", "B", "C"]
export function splitTools(items: string): string[] {
  return items
    .split(/,\s+|\s+and\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export const tools: [group: string, items: string][] = [
  ["Languages", "Python, TypeScript, JavaScript, Java, C and C++"],
  ["Machine learning", "PyTorch, scikit-learn, OpenCV, NumPy and Pandas"],
  ["Web and APIs", "FastAPI, Django, Next.js, React, Node.js and Tailwind CSS"],
  ["Data", "Postgres, MySQL, SQLite, Supabase and MongoDB"],
  ["Infrastructure", "Docker, Git, Linux, AWS, GCP, Vercel and Cloudflare"],
];
