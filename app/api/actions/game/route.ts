// /app/api/actions/game/route.ts
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
    title: "Learn+Earn Game Ep8: Explore Web3 Daily Quiz Game",
    icon: new URL(
      "/images/blinks/ExploreWeb3-Quiz-Game-image-01b-WITH-LOGO.jpg",
      new URL(req.url).origin,
    ).toString(),
    description: `
      ExploreWeb3.xyz platform is a PUBLIC GOOD project that Showcases and Promotes Amazing Web3 Ecosystems Projects and Their Opportunities for FREE!

      Quiz Focus (Project): Anyw3ar

      Test your knowledge about Anyw3ar and earn rewards!
      Select the correct answer combination in sequence.

      HINT: Read about Anyw3ar at https://ExploreWeb3.xyz/projects/anyw3ar first before attempting the quiz.

      Q1: Which unique feature does Anyw3ar's clothing offer for Web3 enthusiasts?
      - A: Blockchain-Integrated Souvenir
      - B: Limited-Edition NFT Clothes
      - C: Customizable Wearable Patches

      Q2: What problem does Anyw3ar address for individuals in Web3?
      - D: Access to Exclusive NFTs
      - E: The need for multiple garments to represent digital assets
      - F: Direct Cryptocurrency Payments

      Q3: Which aspect of Anyw3ar enhances community engagement?
      - G: Easy swapping of patches to promote various Web3 projects
      - H: In-game Currency Rewards
      - I: Live Streaming Events

      Q4: What is a key benefit of using Anyw3ar patches for Web3 projects representation?
      - J: Automatic Staking Rewards
      - K: Flexibility in promoting multiple projects with one garment
      - L: Free Clothing for Every User

      Q5: Which category does Anyw3ar mainly fall under in the Solana ecosystem?
      - M: Gaming
      - N: Fashion
      - O: DeFi

      INSTRUCTIONS:
      Select the correct answer combination in order (e.g., AFHLO means Q1 answer is A, Q2 is F, etc.).

      All answers are recorded on-chain!

      WARNING: Only one attempt is allowed per wallet. Multiple attempts will invalidate all your entries.
    `,
    label: "Submit Answer",
    links: {
      actions: [
        {
          href: `${req.url}?amount=0&answer=BEGJO`, // option 1
          label: "BEGJO",
        },
        {
          href: `${req.url}?amount=0&answer=AFGKN`, // option 2
          label: "AFGKN",
        },
        {
          href: `${req.url}?amount=0&answer=CEGKN`, // option 3
          label: "CEGKN",
        },
        {
          href: `${req.url}?amount=0&answer=ADGLM`, // option 4
          label: "ADGLM",
        },
        {
          href: `${req.url}?amount=0&answer=CEGJN`, // option 5
          label: "CEGJN",
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
          `Ep8: My ExploreWeb3.xyz Learn+Earn Daily Quiz Game Ep8 (Anyw3ar) ANSWER Is: ${answer}`,
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
