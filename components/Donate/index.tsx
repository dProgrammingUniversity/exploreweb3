// /components/Donate/index.tsx

import DonateBasic from "./DonateBasic";
import DonateNFT from "./DonateNFT";

const Donate = () => {
  
  return (
    <>
      <DonateBasic/>
      <DonateNFT/>

      <p className="text-md mb-4">
        Thank YOU!
        <br />
        {/* NOTE: All donation wallets will qualify for future appreciation
        (hint - WL😀)! */}
      </p>

    </>
  );
};

export default Donate;