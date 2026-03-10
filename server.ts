import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API routes FIRST
  app.post("/api/track", async (req, res) => {
    try {
      const { eventName, eventUrl, userAgent, clientIp } = req.body;
      const metaApiToken = process.env.META_API_TOKEN;
      const pixelId = "1233317531801550"; // User's Pixel ID

      if (!metaApiToken) {
        console.warn("META_API_TOKEN is not set in environment variables. Tracking skipped.");
        return res.status(200).json({ status: "skipped", reason: "No API token" });
      }

      // Prepare payload for Facebook Conversions API
      const payload = {
        data: [
          {
            event_name: eventName || "PageView",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: eventUrl,
            user_data: {
              client_ip_address: clientIp || req.ip,
              client_user_agent: userAgent || req.headers["user-agent"],
            },
          },
        ],
      };

      // Send to Facebook Graph API
      const response = await fetch(
        `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${metaApiToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Facebook CAPI Error:", result);
        return res.status(400).json({ error: result });
      }

      res.json({ status: "success", result });
    } catch (error) {
      console.error("Tracking Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
