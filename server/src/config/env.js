import dotenv from "dotenv";

dotenv.config();

const rawClientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";
const clientOrigins = rawClientOrigin
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 5000,
  clientOrigin: rawClientOrigin,
  clientOrigins,
  jwtSecret: process.env.JWT_SECRET || "dev_only_secret_change_me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h"
};
