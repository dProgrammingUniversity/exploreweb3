// /app/learn-earn-game/route.ts
import {
  ActionGetResponse,
  ACTIONS_CORS_HEADERS,
  ActionPostRequest,
  createPostResponse,
  ActionPostResponse,
  MEMO_PROGRAM_ID,
} from "@solana/actions";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { BlinksightsClient } from "blinksights-sdk";

// Initialize Blinksights client
const client = new BlinksightsClient(
  `${process.env.NEXT_PUBLIC_BLINKSIGHTS_API_KEY}`,
);

export const GET = async (req: Request) => {
  const headers = req.headers;
  const acceptHeader = headers.get("Accept");

  if (acceptHeader && acceptHeader.includes("text/html")) {
    // Serve a user-friendly HTML page if the request is from a browser
    return Response.redirect(
      "https://dial.to/?action=solana-action:https://exploreweb3.xyz/learn-earn-game",
      302,
    );
  }

  // Serve the JSON response for Blinks or other API consumers
  const payload: ActionGetResponse = {
    title: "Learn+Earn Game Ep6: Explore Web3 Daily Quiz Game",
    icon: new URL(
      "/images/blinks/ExploreWeb3-Quiz-Game-image-01b-WITH-LOGO.jpg",
      new URL(req.url).origin,
    ).toString(),
    description: `
      ExploreWeb3.xyz platform is a PUBLIC GOOD project that Showcases and Promotes Amazing Web3 Ecosystems Projects and Their Opportunities for FREE!

      Quiz Focus (Project): AssetDash

      Test your knowledge about AssetDash and earn rewards!
      Select the correct answer combination in sequence.

      HINT: Read about AssetDash at https://ExploreWeb3.xyz/projects/assetdash first before attempting the quiz.

      Q1: AssetDash is known for its versatile all-in-one portfolio tracker. Which year did AssetDash rebrand from Stonks App?
      - A: 2020
      - B: 2021
      - C: 2022

      Q2: AssetDash incorporates an all-in-one approach. What does it allow users to track?
      - D: Only crypto assets
      - E: NFTs, crypto, DeFi, and traditional assets
      - F: Just NFTs and DeFi

      Q3: What feature in AssetDash allows easy swapping of assets with rewards?
      - G: Super Swap
      - H: Asset Auctions
      - I: Portfolio Management

      Q4: What can AssetDash Coins be used for?
      - J: Unlocking additional blockchain layers
      - K: Spending on NFTs, whitelist spots, and gift cards
      - L: Access to free crypto classes

      Q5: What platform is AssetDash available on?
      - M: Mobile only
      - N: Web only
      - O: iOS, Android, and Web

      INSTRUCTIONS:
      Select the correct answer combination in order (e.g., AFHLO means Q1 answer is A, Q2 is F, etc.).

      All answers are recorded on-chain!

      WARNING: Only one attempt is allowed per wallet. Multiple attempts will invalidate all your entry.
  `,
    label: "Submit Answer",
    links: {
      actions: [
        {
          href: `${req.url}?amount=0&answer=BFGKO`, // option 1
          label: "BFGKO",
        },
        {
          href: `${req.url}?amount=0&answer=ADGLN`, // option 2
          label: "ADGLN",
        },
        {
          href: `${req.url}?amount=0&answer=CEGKO`, // option 3
          label: "CEGKO",
        },
        {
          href: `${req.url}?amount=0&answer=BFGJM`, // option 4
          label: "BFGJM",
        },
        {
          href: `${req.url}?amount=0&answer=CDGKO`, // option 5
          label: "CDGKO",
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

// Blinks OPTIONS Request
export const OPTIONS = GET;

// Blinks POST Request
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
    let answer: string = "No-Answer-Provided";

    if (url.searchParams.has("amount")) {
      try {
        amount = parseFloat(url.searchParams.get("amount") || "0") || amount;
      } catch (err) {
        throw "Invalid 'amount' input.";
      }
    }

    if (url.searchParams.has("answer")) {
      answer = url.searchParams.get("answer") || answer;
    }

    const connection = new Connection(clusterApiUrl("mainnet-beta"));

    const TO_PUBKEY = new PublicKey(
      "ESemxjctXHob9GrnAAEjD9g4znVnaAgdWu5r7fGsp1Tp",
    );

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: account,
        lamports: amount * LAMPORTS_PER_SOL,
        toPubkey: TO_PUBKEY,
      }),
      new TransactionInstruction({
        keys: [],
        data: Buffer.from(
          `Ep6: My ExploreWeb3.xyz Learn+Earn Daily Quiz Game Ep6 (AssetDash) ANSWER Is: ${answer}`,
          "utf-8",
        ),
        programId: new PublicKey(MEMO_PROGRAM_ID),
      }),
    );
    transaction.feePayer = account;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message:
          "Your answer has been successfully submitted and recorded on-chain!",
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
