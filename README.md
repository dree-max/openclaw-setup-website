# 🦞 OpenClaw Setup — MoonlightAI Solutions

> **Get your personal OpenClaw AI assistant running in one session.**  
> We handle every step — from Docker to live agents — so you skip straight to results.

Live site: [openclaw-setup.moonlightaisolutions.com](https://openclaw-setup.moonlightaisolutions.com)

---

## What This Is

This is the marketing and booking site for **MoonlightAI Solutions' OpenClaw setup service**.

[OpenClaw](https://github.com/openclaw/openclaw) is a powerful personal AI assistant that runs on your own infrastructure — answering you across WhatsApp, Telegram, Slack, Discord, iMessage, and 20+ other channels. But setting it up from scratch — Docker, NemoClaw CLI, Node.js, sandbox configuration, agent design, model routing — is genuinely complex.

**We do it for you.** This site explains what we offer, shows real deployment evidence, and lets people book a session.

---

## What's on the Site

### Hero
Terminal animation showing a real NemoClaw install sequence — from `curl` install to `Sandbox ready. Your agent is live. 🟢` — with live stats and two CTAs.

### Services
Four things we handle end-to-end:

| Service | What it covers |
|---|---|
| **OpenClaw Setup & Deployment** | Full NemoClaw install, Docker config, Node.js environment, first sandbox live |
| **Multi-Agent Orchestration** | Content agents, code agents, comms agents working in concert |
| **Tool & Platform Integration** | Zoho Mail, Gmail, Vercel, n8n, Notion, Slack, webhooks, MCP servers |
| **Model Configuration** | Inference gateway, provider routing, cost optimisation — runs under $10/month |

### How It Works — 4 Steps
1. **Audit Your Stack** — we review your tools, workflows, and team size
2. **Environment Setup** — Docker, Node.js, NemoClaw CLI installed live on the call
3. **Agent Design** — each agent's role, model, instructions, and integrations defined
4. **Deploy & Onboard** — agents go live on Telegram/Discord; live Sunday sessions so you own every system

### Evidence
Real screenshots from actual OpenClaw deployments we've run — not mockups.

### Pricing

| Package | Price | What's included |
|---|---|---|
| **Starter Setup** | $500 one-time | Full NemoClaw/OpenClaw install, 1 configured agent, Telegram or Discord integration, 1 live onboarding session |
| **Growth Stack** | $1,500 one-time | Everything in Starter + up to 5 named agents, multi-platform deployment, model optimisation, 2 onboarding sessions + docs |
| **Full Ecosystem** | $3,000+ per project | Custom multi-agent architecture, full tool integrations, ongoing optimisation, priority support, monthly check-ins |

> All packages include a live onboarding session. Operating costs run under $10/month with our optimised model setup.

### Contact
📧 [info@moonlightaisolutions.com](mailto:info@moonlightaisolutions.com)  
🌐 [MoonlightAI Solutions](https://moonlightaisolutions.com)  
📅 Live Sunday onboarding sessions

---

## Tech Stack

| Layer | What |
|---|---|
| **Site** | Single-file HTML — no build step, no dependencies |
| **Frontend** | Vanilla JS + CSS (Space Mono + Syne fonts) |
| **Hosting** | Vercel (auto-deploys from `main`) |
| **Repo** | `dree-max/openclaw-setup-website` |

### Design
- Dark theme (`#080c0a` background, `#39ff14` neon green accent)
- Space Mono for monospace/terminal elements
- Syne for display headings
- Cursor glow effect, grid background, terminal animation in hero
- Fully responsive

---

## Deployment

This repo is connected to Vercel. Any push to `main` auto-deploys.

**To update the site:**
1. Edit `index.html` directly on GitHub (pencil icon) — or upload a new version
2. Commit to `main`
3. Vercel deploys in ~30 seconds

**File structure:**
```
openclaw-setup-website/
├── index.html      ← the entire site
├── vercel.json     ← routing config (serves index.html at /)
└── README.md       ← this file
```

---

## About MoonlightAI Solutions

We specialise in OpenClaw setup and agent orchestration for individuals and teams who want a personal AI assistant that actually works — across the channels they already use, with the models that make sense for their budget.

🌐 [moonlightaisolutions.com](https://moonlightaisolutions.com)
