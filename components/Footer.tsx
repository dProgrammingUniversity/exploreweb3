// ExploreSol/components/Footer.tsx


export default async function Footer() {


  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">

      {/* This ensures the footer is pushed to the bottom of the page */}
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3"></div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <div className="text-center mt-4  mx-auto">
          <p>
            Developed by{" "}
            <a
              href="https://dProgrammingUniversity.com/?utm_source=ExploreSol.xyz&utm_medium=ExploreSol.xyz&utm_term=ExploreSol.xyz"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              dProgrammingUniversity
            </a>
          </p>
          <p className="text-sm text-gray-600">
            🚀 <strong>DISCLOSURE:</strong>
            <br />
            We may hold, invest, trade or receive rewards/grants/bounty/tokens from reviewed/discussed web3 projects/affiliates 
            (before, during or after this content was published).
            <br />
          </p>
          <p className="text-sm text-gray-600">
            🚀 <strong>DISCLAIMER:</strong>
            <br />
            All our contents are for educational purposes only and do not constitute financial, trading, investment or development advice.
            <br />
            This is an EXPERIMENTAL (Educational purpose-only) initiative born
            from a passion for the Solana ecosystem and the desire to stay
            updated with its rapid growth.
            <br />- Please, Kindly Do Your Own Research (DYOR) 
            <br />
            By using or following the whole or part of this content, 
            you agree that we are not liable for any losses that you may suffer thereafter & 
            You will be responsible for your own actions because web3 is volatile and unpredictable!.
          </p>
        </div>
      </footer>
    </div>
  );
}
