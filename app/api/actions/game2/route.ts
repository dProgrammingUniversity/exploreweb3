// /app/api/actions/game2/route.ts
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
  const payload: ActionGetResponse = {
    title: "Learn&Earn Game Ep1: Explore Web3 Daily Quiz Game",
    icon: new URL(
      "/images/blinks/ExploreWeb3-Quiz-Game-image-01b-WITH-LOGO.jpg",
      new URL(req.url).origin,
    ).toString(),
    description: `
    ExploreWeb3.xyz platform is a PUBLIC GOOD project that Showcases and Promotes Amazing Web3 Ecosystems Projects and Their Opportunities for FREE!
      
    Quiz Focus (Project): Phantom Wallet
      
      Test your knowledge about Phantom Wallet and earn rewards!
      Select the correct answer combination in sequence.
      
      HINT: Read about Phantom Wallet at https://ExploreWeb3.xyz/projects/phantom first before attempting the quiz.
      
      Q1: What year was Phantom Wallet founded?
      - A: 2020
      - B: 2021
      - C: 2019
      
      Q2: Which of these blockchains does Phantom recently announced it will support in addition to already supporting Solana, ETH, BTC, Polygon?
      - D: Avalanche
      - E: Solana L2
      - F: Monad
      
      Q3: What is one of the unique features of Phantom Wallet?
      - G: In-wallet token swaps 
      - H: Multi-signature support
      - I: Cold storage capability
      
      Q4: What type of wallet is Phantom?
      - J: Non-custodial
      - K: Custodial
      - L: Paper Wallet
      
      Q5: Which of these is NOT a feature of Phantom Wallet?
      - M: Fiat currency wallet
      - N: Crypto wallet
      - O: Built-in staking support
      
      INSTRUCTIONS:
      Select the correct answer combination in order (e.g., ADGBN means Q1 answer is A, Q2 is D, etc.). 
      
      All answers are recorded on-chain!
      
      WARNING: Only one attempt is allowed per wallet. Multiple attempts will invalidate all your entry.
    `,
    label: "Submit Answer",
    links: {
      actions: [
        {
          href: `${req.url}?amount=0&answer=BFGJM"`,
          label: "BFGJM",
        },
        {
          href: `${req.url}?amount=0&answer=ADGKN"`,
          label: "ADGKN",
        },
        {
          href: `${req.url}?amount=0&answer=BDGLM"`,
          label: "BDGLM",
        },
        {
          href: `${req.url}?amount=0&answer=ADGCM"`,
          label: "ADGCM",
        },
        {
          href: `${req.url}?amount=0&answer=BDGKN"`,
          label: "BDGKN",
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
      "63t6dZ78VFW1yX7uFJV678qFbZweDpUDenjLYEsq2J7q",
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
          `My Explore Web3 Daily Quiz Game Ep1 ANSWER For Phantom Wallet Is: ${answer}`,
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
