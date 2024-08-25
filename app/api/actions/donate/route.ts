// /app/api/actions/donate/route.ts
import {
  ActionGetResponse,
  ACTIONS_CORS_HEADERS,
  ActionPostRequest,
  createPostResponse,
  ActionPostResponse,
  MEMO_PROGRAM_ID
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
import { BlinksightsClient } from 'blinksights-sdk';

// Initialize Blinksights client
const client = new BlinksightsClient(`${process.env.NEXT_PUBLIC_BLINKSIGHTS_API_KEY}`);

export const GET = async (req: Request) => {
  const payload: ActionGetResponse = {
    title: "Support Explore Web3 - Kindly DONATE To Keep This Project Going!",
    icon: "https://res.cloudinary.com/difhad1rl/image/upload/v1720684490/ExploreSolana-Banner-03a5a-Website-Banner-Light-Transparent-bg-Animated-1024x1024.gif",
    label: "Donate",
    description: `Explore Web3 platform is a PUBLIC GOOD project that Showcases and Promotes Amazing Web3 Ecosystems Projects for FREE!

Featuring SOLANA Ecosystem Projects and Blinks for FREE for easy discovery by new/existing Solana ecosystem users/the world.

However, it may not last long due to the lack of funding. Thus, Kindly consider DONATING to keep it on and promoting Web3 Projects for FREE!

NOTE:- All donation wallets will qualify for future appreciation (hint - WL😀)!!!`,
    links: {
      actions: [
        {
          href: `/api/actions/donate?amount=0.1&note=${encodeURIComponent("SmallCoffee")}`,
          label: "0.1 SOL",
        },
        {
          href: `/api/actions/donate?amount=0.5&note=${encodeURIComponent("BigCoffee")}`,
          label: "0.5 SOL",
        },
        {
          href: `/api/actions/donate?amount=1.0&note=${encodeURIComponent("CoffeeFor1Week")}`,
          label: "1.0 SOL",
        },
        {
          href: `/api/actions/donate?amount=3.0&note=${encodeURIComponent("CoffeeFor2Week")}`,
          label: "3 SOL",
        },
        {
          href: `/api/actions/donate?amount=5.0&note=${encodeURIComponent("CoffeeFor3Week")}`,
          label: "5 SOL",
        },
        {
          href: `/api/actions/donate?amount=10.0&note=${encodeURIComponent("CoffeeFor1Month")}`,
          label: "10 SOL",
        },
        {
          href: `/api/actions/donate?amount={amount}&note=${encodeURIComponent("CustomAmountCoffee")}`,
          label: "Donate",
          parameters: [
            {
              name: "amount",
              label: "Enter a custom SOL amount",
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

    let amount: number = 2;
    let note: string = "No Note Provided";

    if (url.searchParams.has("amount")) {
      try {
        amount = parseFloat(url.searchParams.get("amount") || "1.5") || amount;
      } catch (err) {
        throw "Invalid 'amount' input.";
      }
    }

    if (url.searchParams.has("note")) {
      note = url.searchParams.get("note") || note;
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
        data: Buffer.from(note, "utf-8"),
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
        message: "Thanks for the support donation and the note!!! :)",
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

