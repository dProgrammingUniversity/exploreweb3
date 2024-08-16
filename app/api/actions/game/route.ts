// /app/api/actions/game/route.ts
import {
  ActionPostResponse,
  ACTIONS_CORS_HEADERS,
  createPostResponse,
  MEMO_PROGRAM_ID,
  ActionGetResponse,
  ActionPostRequest,
} from "@solana/actions";
import {
  clusterApiUrl,
  ComputeBudgetProgram,
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

export const GET = async (req: Request) => {
  const payload: ActionGetResponse = {
    title: "Explore Web3 Daily Quiz Game Ep1",
    icon: new URL(
      "/images/blinks/ExploreWeb3-Quiz-Game-image-01b-WITH-LOGO.jpg",
      new URL(req.url).origin,
    ).toString(),
    description: `
      Quiz Focus (Project): Phantom Wallet

      Test your knowledge about Phantom Wallet and earn rewards!
      Select the correct answer combination in sequence.
      HINT: Read about Phantom Wallet on ExploreWeb3.xyz first before attempting the quiz.
      
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
          label: "BFGJM", // Option 1
          href: `${req.url}?answer=BFGJM`,
        },
        {
          label: "ADGKN", // Option 2
          href: `${req.url}?answer=ADGKN`,
        },
        {
          label: "BDGLM", // Option 3
          href: `${req.url}?answer=BDGLM`,
        },
        {
          label: "ADGCM", // Option 4
          href: `${req.url}?answer=ADGCM`,
        },
        {
          label: "BDGKN", // Option 5
          href: `${req.url}?answer=BDGKN`,
        },
      ],
    },
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

export const OPTIONS = GET;

export const POST = async (req: Request) => {
  try {
    const url = new URL(req.url);
    const answer = url.searchParams.get("answer") || "No answer provided";
    const body: ActionPostRequest = await req.json();

    // Validate the user public key
    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      return new Response('Invalid "account" provided', {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      });
    }

    // Create a Solana transaction
    const connection = new Connection(
      process.env.SOLANA_RPC! || clusterApiUrl("mainnet-beta"),
    );

    const transaction = new Transaction().add(
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 1000,
      }),
      new TransactionInstruction({
        programId: new PublicKey(MEMO_PROGRAM_ID),
        data: Buffer.from(`My Explore Web3 Daily Quiz Game Ep1 (Phantom Wallet) Answer Is: ${answer}`, "utf8"),
        keys: [],
      }),
    );

    transaction.feePayer = account;

    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    // Create a response payload
    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,  // Pass the unsigned transaction here
        message: `Your answer has been successfully submitted and recorded on-chain!`,
      },
    });

    return Response.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    console.log(err);
    return new Response("An unknown error occurred", {
      status: 400,
      headers: ACTIONS_CORS_HEADERS,
    });
  }
};
