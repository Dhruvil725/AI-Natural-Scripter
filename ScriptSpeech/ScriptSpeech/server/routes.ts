import type { Express } from "express";
import { createServer, type Server } from "http";
import { scriptConversionSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  app.post("/api/convert", async (req, res) => {
    try {
      const data = scriptConversionSchema.parse(req.body);
      
      const response = await fetch('https://magicloops.dev/api/loop/cad34b49-7cd3-4612-b00e-4f4a67b5b6c7/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          script: data.script,
          tone: data.tone,
          pace: data.pace,
          emotion: data.emotion,
          slang: data.slang
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const result = await response.json();
      res.json(result);
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({ message: "Invalid input", errors: err.errors });
      } else {
        res.status(500).json({ message: "Server error during conversion" });
      }
    }
  });

  return httpServer;
}
