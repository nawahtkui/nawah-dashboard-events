# Nawah Dashboard & Events Service **Real-time Dashboard & Events Service for Nawah Token (NWTK)** This repository provides a clean and independent setup for: 1. **Events Service** - Captures blockchain events (Transfers, Mints) for NWTK token. - Stores the data in PostgreSQL. - Broadcasts events in real-time via WebSocket & GraphQL subscriptions. 2. **Dashboard** - Interactive frontend displaying: - Token distribution - Featured NFTs - Women empowerment campaigns - Real-time blockchain events - Built with **Next.js, Tailwind CSS, Recharts, and SWR**. 3. **Docker Compose** - Easy local setup: PostgreSQL + Events Service + Dashboard. - Each service runs in its own container for easier development and testing. --- ## 🚀 Local Setup 1. Copy `.env.example` to `.env` for each service: ```bash cp services/events-service/.env.example services/events-service/.env cp services/dashboard/.env.example services/dashboard/.env 

Fill in required values (e.g., NWTK_ADDRESS).

Start services using Docker Compose:

docker-compose up --build 

Access the services:

Dashboard: http://localhost:3024

Events HTTP API: http://localhost:4000/health

WebSocket feed: ws://localhost:4004

GraphQL subscriptions: ws://localhost:4005

🧩 Recommended GitHub Topics blockchain, nft, web3, react, nextjs, tailwindcss, docker, postgresql, graphql, realtime, cryptocurrency, token-dashboard, women-empowerment, nawah-token 🏷️ Additional Tags saas, microservices, dapp, event-driven, analytics, financial-tech 📄 GitHub Bio Real-time Dashboard & Events Service for Nawah Token (NWTK) | NFT showcase, token analytics & women empowerment campaigns. 🛠️ Notes 

Each service can be developed or extended independently.

Ideal for local testing, CI/CD, and deployment to Docker or Kubernetes.

Supports future expansion for NFT management, notifications, and empowerment campaigns.

