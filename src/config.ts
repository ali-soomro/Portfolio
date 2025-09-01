export const siteConfig = {
  name: "Ali Soomro",
  title: "Software Engineer",
  description: "Portfolio website of Ali Soomro",
  accentColor: "#1d4ed8",
  social: {
    email: "ali.career@proton.me",
    linkedin: "https://linkedin.com/in/ali-soomro", // Update this with your LinkedIn URL
    github: "https://github.com/ali-soomro", // Update this with your GitHub URL
  },
  aboutMe:
    "I am a Software Engineer with a strong background in mathematical computation, having worked on low-latency trading simulators and large-scale system architectures. I have experience with C++, Python, and various frameworks, and I focus on developing scalable, efficient, and robust systems. I also lead research projects to improve the robustness of AI models using transfer learning and adversarial testing.",
  skills: ["C++", "Python", "SQL", "GoogleTest", "TypeScript", "React", "TensorFlow", "Docker", "AWS", "Linux"],
  projects: [
    {
      name: "Low-Latency Trading Simulator",
      description:
        "Developed a UDP market-data publisher and multi-threaded engine for simulating trades and orders with high performance and accuracy.",
      link: "https://github.com/yourprofile/low-latency-trading-simulator", // Update this with the link to your project
      skills: ["C++", "TCP/UDP Sockets", "GoogleTest", "CMake", "TypeScript", "React"],
    },
    {
      name: "Transfer Learning for Robustness of LLMs",
      description:
        "Led research projects using transfer learning to improve the robustness of language models on sentiment analysis tasks. Implemented cross-validation strategies for robust model evaluation.",
      link: "https://github.com/yourprofile/transfer-learning-llms", // Update this with the link to your project
      skills: ["Python", "NumPy", "PyTorch", "Matplotlib", "nohub"],
    },
    {
      name: "Benchmarking Fuzzers for API Misuses",
      description:
        "Developed a fuzzer to detect API misuse using open-source libraries. Evaluated the performance of fuzzers using FuzzBench and correlated with misusage metrics.",
      link: "https://github.com/yourprofile/fuzzbench-api-misuse", // Update this with the link to your project
      skills: ["C", "C++", "FuzzBench", "GitHub Codespaces", "Python", "Bash", "libxml2"],
    },
  ],
  experience: [
    {
      company: "Afiniti",
      title: "Software Engineer (part-time)",
      dateRange: "Jun 2021 - Feb 2024",
      location: "London, United Kingdom",
      bullets: [
        "Developed and maintained multiple C++ microservices within a shared memory architecture.",
        "Integrated watchdog, oversight, and telemetry into microservices, improving monitoring coverage by 90%.",
        "Optimized and developed core business logic, including sequential tie breaking and bucketing algorithms.",
        "Increased code coverage for a legacy service from 2% to 75%.",
      ],
    },
  ],
  education: [
    {
      school: "University College London",
      degree: "MEng Mathematical Computation",
      dateRange: "Graduating November 2024",
      achievements: [
        "Invited to publish research paper on software engineering under supervision of SSE and SOLAR.",
        "Master’s level average: 80.2%",
      ],
    },
  ],
};
