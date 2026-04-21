import {
  BrainCircuit, Trophy, TerminalSquare,
  Clapperboard, Bot, ShieldAlert, HardDrive
} from 'lucide-react'

export const CHAPTERS = [
  {
    id: "intro",
    label: "intro.sys",
    title: "What AI Actually Is",
    subtitle: "A Human Guide to the Most Exciting Technology of Our Time",
    Icon: BrainCircuit,
    accent: "#89b4fa",
    defaultPos: { x: 80, y: 60, w: 860, h: 620 },
    intro: `There is something strange happening right now, and it is happening fast. 
AI is no longer a futuristic idea living in movies or TED Talks. It is here, 
in the tabs we open every day, in the tools students use to study, in the apps 
creators use to design. The change is not theoretical anymore — it is personal.`,
    sections: [
      {
        heading: "The LLM Explained Simply",
        body: `At its core, today's mainstream AI is powered by Large Language Models — LLMs. 
These models are trained on enormous amounts of text and learn patterns in language 
so they can predict what comes next. The human explanation is simpler: modern AI 
is a machine that has read so much of the internet that it can now respond in a 
way that feels startlingly conversational.`
      },
      {
        heading: "Different From All Prior Software",
        body: `Traditional software behaves like a calculator: input something specific, 
get something specific back. AI behaves more like an improviser. It can adapt, 
rephrase, brainstorm, and generate. The wonder of AI and the risk of AI come 
from the same place — it is flexible, not fixed.`,
        highlight: "AI is a tool. Like every powerful tool in history, it can deepen human creativity or flatten it — depending entirely on how we use it."
      }
    ],
    media: [
      { type:"image", src:"/assets/Intro/Person using LLM.jpg",         variant:"hero",   title:"The everyday AI user", alt:"Person using an LLM" },
      { type:"image", src:"/assets/Intro/Multimodal LLM Diagram.png",   variant:"wide",   title:"Multimodal LLM Architecture", alt:"Multimodal LLM Diagram" },
      { type:"videoEmbed", provider:"youtube", videoId:"Ii99RU3mOJM", title:"Claude can now show you" },
      { type:"link", href:"https://claude.com/", title:"Claude" },
      { type:"link", href:"https://arena.ai/", title:"LLM Arena" }
    ]
  },
  {
    id: "chap2",
    label: "models.db",
    title: "Who Is Best?",
    subtitle: "The Model Wars — Claude, GPT, Gemini & Beyond",
    Icon: Trophy,
    accent: "#f9e2af",
    defaultPos: { x: 140, y: 80, w: 900, h: 640 },
    intro: `One of the most common questions: which AI model is actually the best? 
The honest answer is that there is no universal champion. The AI race is less 
like a single winner crossing a finish line and more like a decathlon where 
different competitors dominate different events.`,
    sections: [
      {
        heading: "The Big Three",
        body: `Claude has become especially respected for coding, long-form writing, and 
careful reasoning. GPT remains the most culturally recognizable — it helped turn AI 
from a niche topic into a global daily habit. Gemini stands out because Google 
positioned it not only as a chatbot brain but as part of a broader ecosystem 
reaching the terminal, design tools, and connected workflows.`
      },
      {
        heading: "The Story Is Much Bigger",
        body: `DeepSeek describes its newer line as reasoning-first models built for agents. 
MiniMax presents multimodal and coding-oriented models with long context. GLM-5, 
released by Zhipu, was reported as one of the strongest open models of early 2026. 
The future of AI is not being written by one lab or one country alone.`,
        highlight: "The best AI is the one that matches your intention."
      }
    ],
    media: [
      { type:"image", src:"/assets/Chap2/LLM leaderboard.png",         variant:"hero",   title:"LLM Leaderboard 2025", alt:"LLM leaderboard" },
      { type:"image", src:"/assets/Chap2/Resaults Opus VS Qwen.png",   variant:"inline", title:"Opus vs Qwen Results",  alt:"Benchmark results" },
      { type:"videoEmbed", provider:"youtube", videoId:"y27m5gYREGE", title:"Claude Opus 4.5 vs Google Gemini 3" },
      { type:"link", href:"https://gemini.google.com/app", title:"Google Gemini" },
      { type:"link", href:"https://z.ai", title:"GLM 5.1" },
      { type:"link", href:"https://www.deepseek.com/en/", title:"DeepSeek" },
      { type:"link", href:"https://www.minimax.io/", title:"MiniMax" },
      { type:"link", href:"https://arena.ai/", title:"LLM Arena" }
    ]
  },
  {
    id: "chap3",
    label: "agents.cli",
    title: "Claude Code & Gemini CLI",
    subtitle: "The First AI That Works Beside You",
    Icon: TerminalSquare,
    accent: "#cba6f7",
    defaultPos: { x: 200, y: 100, w: 920, h: 660 },
    intro: `If regular chatbots feel like smart assistants who give advice, tools like 
Claude Code and Gemini CLI feel like the first glimpse of AI that can actually 
work beside you. A normal chatbot tells you how to do something. An agentic 
tool can inspect files, write code, run commands, and take action across a workflow.`,
    sections: [
      {
        heading: "Claude Code",
        body: `Claude Code reads your codebase, edits files, runs commands, and integrates 
with terminal, IDE, desktop, and browser environments. It is built to get inside 
a project and help move it forward — flexible, scriptable, and low-level. 
It makes software creation feel less like entering a gated profession and more 
like entering a conversation with a machine that can build with you.`
      },
      {
        heading: "Gemini CLI & MCP",
        body: `Gemini CLI is a free, open-source AI agent that brings Gemini 2.5 Pro 
directly into the terminal — open source under Apache 2.0. Then there is MCP: 
Anthropic's Model Context Protocol, an open standard for connecting AI applications 
to external systems. AI is learning to stop being trapped inside one chat window.`,
        highlight: "Once MCP clicks, the future feels less like 'a chatbot on a website' and more like 'a layer of intelligence across everything.'"
      }
    ],
    media: [
      { type:"image", src:"/assets/Chap3/Claude Code Gemini Cli Codex Side by side .png", variant:"hero",   title:"Three Agents Side by Side", alt:"Side by side comparison" },
      { type:"image", src:"/assets/Chap3/Claude Code.png",                                 variant:"inline", title:"Claude Code Interface",     alt:"Claude Code" },
      { type:"image", src:"/assets/Chap3/Gemini Cli.png",                                  variant:"inline", title:"Gemini CLI Interface",       alt:"Gemini CLI" },
      { type:"image", src:"/assets/Chap3/MCP Diagram.webp",                                variant:"wide",   title:"MCP Architecture Diagram",   alt:"MCP Diagram" },
      { type:"videoEmbed", provider:"youtube", videoId:"7fQcsPOm8ys", title:"Gemini CLI vs Claude Code vs Codex" },
      { type:"link", href:"https://claude.com/product/claude-code", title:"Claude Code" },
      { type:"link", href:"https://geminicli.com/", title:"Gemini CLI" }
    ]
  },
  {
    id: "chap4",
    label: "creative.lab",
    title: "AI for Design & Video",
    subtitle: "When the Machine Learns to Express",
    Icon: Clapperboard,
    accent: "#f5c2e7",
    defaultPos: { x: 160, y: 90, w: 880, h: 630 },
    intro: `AI is not only changing how people write or code. It is also changing how 
people imagine, sketch, design, animate, and edit. This is where the technology 
becomes especially emotional — design and video live closer to identity. When AI 
enters that space, people do not just ask whether it works. They ask whether it 
still feels human.`,
    sections: [
      {
        heading: "Google Stitch",
        body: `Google Stitch is one of the clearest examples of AI entering design — 
a tool that helps design app and web frontends by generating UI elements and code 
from text prompts or images. It evolved into an AI-native platform for creating, 
iterating, and collaborating on high-fidelity UI. A student with an app idea no 
longer needs to stare at a blank design canvas and feel defeated.`
      },
      {
        heading: "Runway & Video",
        body: `Runway has become a standout name in AI video — text-to-video, background 
removal, motion tracking, generative effects, and a user-friendly workflow aimed 
at creators. Video has traditionally been a high-friction medium. AI tools are 
reducing that barrier. Creation itself is becoming conversational.`,
        highlight: "People are no longer required to translate every idea manually into code, frames, and timelines. They can describe the outcome and refine through iteration."
      }
    ],
    media: [
      { type:"image", src:"/assets/Chap4/GoogleStitchShowcase.png",  variant:"hero", title:"Google Stitch UI Design Tool", alt:"Stitch showcase" },
      { type:"videoEmbed", provider:"youtube", videoId:"qkKzGx8qoI4", title:"Claude Opus 4.7 vs Gemini 3.1 vs GPT-5" },
      { type:"videoEmbed", provider:"youtube", videoId:"AwKSrJFvdps", title:"Runway Image to Video" },
      { type:"link", href:"https://stitch.withgoogle.com/", title:"Google Stitch" },
      { type:"link", href:"https://runwayml.com/", title:"Runway" }
    ]
  },
  {
    id: "chap5",
    label: "agents.local",
    title: "Personal Agents",
    subtitle: "OpenClaw & the Rise of AI That Belongs to You",
    Icon: Bot,
    accent: "#a6e3a1",
    defaultPos: { x: 120, y: 70, w: 860, h: 610 },
    intro: `One of the most fascinating turns in AI is the rise of personal agents — 
systems that do not just answer one prompt and disappear, but persist, remember, 
automate, and act. This is where AI starts to feel less like a product and 
more like infrastructure.`,
    sections: [
      {
        heading: "OpenClaw",
        body: `OpenClaw is an open-source AI automation framework built for developers and 
technical teams, designed to be self-hosted, extensible, and free from vendor lock-in. 
It can read and write files, run scripts, control browsers through a sandbox, 
maintain persistent memory, and connect with many third-party integrations. 
A person can build a deeply customized assistant that lives inside their own 
environment.`
      },
      {
        heading: "The Philosophy of Ownership",
        body: `In a digital world dominated by subscriptions, locked ecosystems, and data 
extraction, an open framework that can be deployed on your own infrastructure 
carries a different philosophy. People are beginning to want AI that belongs 
to them — not AI they merely borrow.`,
        highlight: "The future of AI does not have to mean giving more control away. It could mean reclaiming it — with systems you can inspect, adapt, and trust on your own terms."
      }
    ],
    media: [
      { type:"image", src:"/assets/Chap5/PersonalVs general Agent.png", variant:"hero",   title:"Personal vs General Agent",   alt:"Agent comparison" },
      { type:"image", src:"/assets/Chap5/OpenClaw-telegram.png",        variant:"inline", title:"OpenClaw in Telegram",         alt:"OpenClaw Telegram" }
    ]
  },
  {
    id: "chap6",
    label: "privacy.log",
    title: "Fear, Risk & Privacy",
    subtitle: "The Honest Conversation We Need to Have",
    Icon: ShieldAlert,
    accent: "#f38ba8",
    defaultPos: { x: 180, y: 95, w: 860, h: 610 },
    intro: `No paper about AI would be complete without confronting the fear around it. 
Some fear is lazy fear — the kind generated by headlines and vague doom. 
But some fear is completely justified. People worry because they sense that AI 
is moving faster than institutions, faster than schools, faster than law.`,
    sections: [
      {
        heading: "Cloud vs Local — A Real Privacy Tradeoff",
        body: `Cloud AI tools often involve sending prompts and files to external services. 
Self-hosted frameworks like OpenClaw emphasize keeping infrastructure and data 
under the user's control. LM Studio is a local-first desktop application for 
discovering, downloading, and running LLMs on your own computer — no cloud 
subscription needed. Ollama notes that 7B models run with just 8 GB of RAM.`
      },
      {
        heading: "Disciplined Curiosity",
        body: `AI can be wrong, manipulative, biased, or overconfident. A beautifully 
phrased answer can still contain a factual error. A coding agent can still break 
things. This is why the right posture toward AI is neither worship nor dismissal. 
The goal is not to trust the machine blindly, but to learn where it is strong, 
where it is weak, and where human judgment still matters most.`,
        highlight: "The right posture toward AI is disciplined curiosity — not worship, not fear."
      }
    ],
    media: [
      { type:"image", src:"/assets/Chap6/Local vs cloud ai.jpg",  variant:"hero",   title:"Local vs Cloud AI",     alt:"Local vs Cloud" },
      { type:"image", src:"/assets/Chap6/Risk And benfits.png",   variant:"wide",   title:"Risks and Benefits",    alt:"Risk benefit analysis" },
      { type:"videoEmbed", provider:"youtube", videoId:"ZUDcPATcTz4", title:"Claude Code vs Local AI" },
      { type:"link", href:"https://lmstudio.ai/", title:"LM Studio" },
      { type:"link", href:"https://ollama.com/", title:"Ollama" }
    ]
  },
  {
    id: "chap7",
    label: "local-ai.run",
    title: "Running AI Locally",
    subtitle: "Ollama, LM Studio & the Personal Compute Revolution",
    Icon: HardDrive,
    accent: "#89dceb",
    defaultPos: { x: 100, y: 65, w: 860, h: 620 },
    intro: `One of the most empowering parts of the current AI landscape is that not 
everything has to happen in the cloud. Tools like Ollama and LM Studio make 
local AI accessible to regular people, and that changes the emotional texture 
of the technology. When AI runs on your own machine, it stops feeling like a 
distant service and starts feeling like a personal capability.`,
    sections: [
      {
        heading: "Ollama",
        body: `Ollama has become one of the easiest ways to run local models from the 
terminal. Smaller models run on ordinary consumer hardware — about 8 GB of RAM 
for 7B models, 16 GB for 13B models, and 32 GB for 33B models. Local AI is no 
longer a fantasy reserved for people with giant servers. It is increasingly 
reachable for students, hobbyists, and independent builders.`
      },
      {
        heading: "LM Studio",
        body: `LM Studio serves a similar dream with a friendlier desktop experience — 
a user-friendly application for discovering, downloading, and running local models 
without needing a cloud subscription. The deeper importance is privacy, control, 
and resilience. These tools represent a version of AI that feels more personal, 
more sovereign, and maybe a little more honest.`,
        highlight: "Local AI is not just a technical preference — it is a philosophical one."
      }
    ],
    media: [
      { type:"image", src:"/assets/Chap7/Google Gemma.jpg",  variant:"hero",   title:"Google Gemma Local Model",  alt:"Google Gemma" },
      { type:"image", src:"/assets/Chap7/LmStudio.gif",      variant:"wide",   title:"LM Studio in Action",       alt:"LM Studio demo" },
      { type:"videoEmbed", provider:"youtube", videoId:"_UEvlmNx0cs", title:"Running 80B Model on 16GB GPU" },
      { type:"link", href:"https://ollama.com/", title:"Ollama" },
      { type:"link", href:"https://lmstudio.ai/", title:"LM Studio" },
      { type:"link", href:"https://deepmind.google/models/gemma/gemma-4/", title:"Google Gemma" }
    ]
  }
]
