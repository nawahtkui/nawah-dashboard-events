# Nawah Dashboard & Events Service

**Real-time Dashboard & Events Service for Nawah Token (NWTK)**

This repository provides a clean and independent setup for:

1. **Events Service**
   - Captures blockchain events (Transfers, Mints) for NWTK token.
   - Stores the data in PostgreSQL.
   - Broadcasts events in real-time via WebSocket & GraphQL subscriptions.

2. **Dashboard**
   - Interactive frontend displaying:
     - Token distribution
     - Featured NFTs
     - Women empowerment campaigns
     - Real-time blockchain events
   - Built with **Next.js, Tailwind CSS, Recharts, and SWR**.

3. **Docker Compose**
   - Easy local setup: PostgreSQL + Events Service + Dashboard.
   - Each service runs in its own container for easier development and testing.

---

## 🚀 Local Setup

1. Copy `.env.example` to `.env` for each service:
```bash
cp services/events-service/.env.example services/events-service/.env
cp services/dashboard/.env.example services/dashboard/.env
