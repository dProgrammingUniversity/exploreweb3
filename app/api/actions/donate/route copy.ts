// /app/api/actions/donate/route.ts
import {
  ActionGetResponse,
  ACTIONS_CORS_HEADERS,
  ActionPostRequest,
  createPostResponse,
  ActionPostResponse,
} from "@solana/actions";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { BlinksightsClient } from 'blinksights-sdk';

// Initialize Blinksights client
const client = new BlinksightsClient(`${process.env.NEXT_PUBLIC_BLINKSIGHTS_API_KEY}`);

export const GET = async (req: Request) => {
  const payload: ActionGetResponse = {
    title: "ExploreWeb3 - Buy Me a Coffee",
    icon: new URL(
        "/images/blinks/ExploreWeb3-Quiz-Game-image-01b-WITH-LOGO.jpg",
        new URL(req.url).origin,
      ).toString(),
    label: "Donate",
    description:
      "Buy me a coffee with SOL using this super sweet blink of mine :)",
    links: {
      actions: [
        {
          href: "/api/actions/donate?amount=0.001",
          label: "0.001 SOL",
        },
        {
          href: "/api/actions/donate?amount=0.5",
          label: "0.5 SOL",
        },
        {
          href: "/api/actions/donate?amount=1.0",
          label: "1.0 SOL",
        },
        {
          href: "/api/actions/donate?amount={amount}",
          label: "Send SOL",
          parameters: [
            {
              name: "amount",
              label: "Enter a SOL amount",
            },
          ],
        },
      ],
    },
  };

  // Track Render/View Event with BlinkSights
  client.trackRenderV1(req.url, payload);

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

export const OPTIONS = GET;

export const POST = async (req: Request) => {
  try {
    const url = new URL(req.url);
    const body: ActionPostRequest = await req.json();

    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      throw "Invalid 'account' provided. It is not a real pubkey.";
    }

    let amount: number = 0;

    if (url.searchParams.has("amount")) {
      try {
        amount = parseFloat(url.searchParams.get("amount") || "0.000051") || amount;
      } catch (err) {
        throw "Invalid 'amount' input.";
      }
    }

    const connection = new Connection(clusterApiUrl("mainnet-beta"));

    const TO_PUBKEY = new PublicKey(
      "63t6dZ78VFW1yX7uFJV678qFbZweDpUDenjLYEsq2J7q",
    );

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: account,
        lamports: amount * LAMPORTS_PER_SOL,
        toPubkey: TO_PUBKEY,
      }),
    );
    transaction.feePayer = account;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: "Thanks for the coffee fren :)",
      },
    });

    // Track Interaction Event with BlinkSights
    client.trackActionV1(req.headers, body.account, req.url);

    return Response.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    let message = "An unknown error occurred.";
    if (typeof err === "string") message = err;

    return Response.json(
      {
        message,
      },
      {
        headers: ACTIONS_CORS_HEADERS,
      },
    );
  }
};

