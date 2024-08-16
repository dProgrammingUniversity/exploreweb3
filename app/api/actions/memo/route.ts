// /app/api/actions/memo/route.ts
/**
 * Solana Blinks Actions Example 1: Memo
 */

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
    title: "dPU Blinks Example 1 (Memo Blinks)",
    icon: new URL(
      "/images/blinks/dPU-Ultimate-Guide-To-Solana-Blinks-For-Developers-01a-Memo.jpg",
      new URL(req.url).origin,
    ).toString(),
    description:
      "Simple On-chain Memo Blinks: Send a message on-chain using Solana Memo program via Blinks - Join the 'Ultimate Guide To Solana Blinks For Developers' series at dProgrammingUniversity.com/solana-blinks-guides",
    label: "Send Memo",
    links: {
      actions: [
        {
          label: "Send Memo1",
          href: req.url,
        },

        {
          label: "Send Memo2",
          href: "https://dprogramminguniversity.com/solana-blinks-guides",
        },

        // {
        //   label: "Submit", // button text
        //   href: "/api/quiz?answer={answer}",
        //   parameters: [
        //     {
        //       name: "amount", // field name
        //       label: "Enter your answer", // text input placeholder
        //     },
        //   ],
        // },
      ],
    },
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

// DO NOT FORGET TO INCLUDE THE `OPTIONS` HTTP METHOD
// THIS WILL ENSURE CORS WORKS FOR BLINKS
export const OPTIONS = GET;

export const POST = async (req: Request) => {
  try {
    const body: ActionPostRequest = await req.json();

    // Validate to confirm the user publickey received is valid before use
    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      return new Response('Invalid "account" provided', {
        status: 400,
        headers: ACTIONS_CORS_HEADERS, //Must include CORS HEADERS
      });
    }

    // Solana Blockchain Cluster (Set Mainnet "mainnet-beta" or Devnet "devnet")
    // If your RPC not present, it will use default devnet RPC provided to us via web3.js "clusterApiUrl("devnet")"
    // NOTE: "clusterApiUrl("devnet")" is not for mainnet use - for mainnet production launched Blinks, get your own RPC
    // For testing on mainnet - use "mainnet-beta"
    const connection = new Connection(
      process.env.SOLANA_RPC! || clusterApiUrl("mainnet-beta"),
    );

    const transaction = new Transaction().add(
      // note: `createPostResponse` requires at least 1 non-memo instruction
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 1000,
      }),
      new TransactionInstruction({
        programId: new PublicKey(MEMO_PROGRAM_ID),
        data: Buffer.from(
          "This is an answer to Explore Web3 Projects Quiz Game Blinks",
          "utf8",
        ),
        keys: [],
      }),
    );

    // set the end user as the fee payer
    transaction.feePayer = account;

    // Get the latest Block Hash
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: "Your Answer Successfully Submitted!!!",
      },
      // no additional signers are required for this transaction
      // signers: [],
    });

    return Response.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    console.log(err);
    let message = "An unknown error occurred";
    if (typeof err == "string") message = err;
    return new Response(message, {
      status: 400,
      headers: ACTIONS_CORS_HEADERS, //Must include CORS HEADERS
    });
  }
};
