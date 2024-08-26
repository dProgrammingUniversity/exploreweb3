import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      // Specifically indicate that /learn-earn-game is an Action API route
      {
        pathPattern: "/learn-earn-game",
        apiPath: "/learn-earn-game",
      },
      // Map all root-level routes to an action
      {
        pathPattern: "/*",
        apiPath: "/api/actions/*",
      },
      // Idempotent rule as the fallback
      {
        pathPattern: "/api/actions/**",
        apiPath: "/api/actions/**",
      },
    ],
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

// Include OPTIONS method for CORS support
export const OPTIONS = GET;
