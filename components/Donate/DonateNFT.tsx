// /components/Donate/DonateNFT.tsx
"use client";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

// Define feature categories and their items
const featureCategories = {
    "Earning Features": [
        {
            name: "Earn for submitted and approved project",
            basic: false,
            donor: true,
        },
        {
            name: "Earn for submitted and approved grants/bounty",
            basic: false,
            donor: true,
        },
        {
            name: "Activity Points (Review, Rating etc.)",
            basic: false,
            donor: true,
        },
    ],
    "Enhanced Project Discovery": [
        {
            name: "Basic project search and filtering",
            basic: true,
            donor: true,
        },
        {
            name: "Priority access to newly listed projects",
            basic: false,
            donor: true,
        },
        {
            name: "Advanced filtering capabilities",
            basic: true,
            donor: true,
        },
        {
            name: "Curated trending projects feed",
            basic: true,
            donor: true,
        },
    ],
    "Community Recognition": [
        {
            name: "Basic profile",
            basic: true,
            donor: true,
        },
        {
            name: "Donor NFT badge display",
            basic: false,
            donor: true,
        },
        {
            name: "Highlighted reviews, ratings and comments",
            basic: false,
            donor: true,
        },
        {
            name: "Priority project listing submissions (Submited project get approved and listed first)",
            basic: false,
            donor: true,
        },
    ],
    "Exclusive Access": [
        {
            name: "Basic newsletter subscription",
            basic: true,
            donor: true,
        },
        {
            name: "Early access to grants and bounties",
            basic: false,
            donor: true,
        },
        {
            name: "Exclusive Discord channel access",
            basic: false,
            donor: true,
        },
        {
            name: "Priority job listings alerts",
            basic: false,
            donor: true,
        },
    ],
    "Platform Features": [
        {
            name: "Basic bookmarking (Max 3)",
            basic: true,
            donor: true,
        },
        {
            name: "Advance bookmarking (Unlimited)",
            basic: false,
            donor: true,
        },
        {
            name: "Custom project collections",
            basic: false,
            donor: true,
        },
        {
            name: "Advanced analytics access",
            basic: false,
            donor: true,
        },
        {
            name: "Premium email notifications",
            basic: false,
            donor: true,
        },
    ],
    "Upcoming Features": [
        {
            name: "Beta Access",
            basic: false,
            donor: true,
        },
    ],
};

const DonateNFT = () => {
    return (
        <div className="mt-12 w-full">

            <h2 className="text-2xl font-bold text-center text-purple-500">
                Introducing the ExploreWeb3 Donor NFT
            </h2>
            <p className="text-md mb-4 text-center">
                Support our public good project by minting the ExploreWeb3 Donor NFT for $100USDC.
            </p>
            <p className="text-md mb-4 text-center">
                This NFT helps keep the platform UPDATED and FREE for all users but also unlocks exclusive perks for you as a donor.
            </p>

            <h2 className="mb-8 text-center text-2xl font-bold text-purple-400">
                Donor NFT Benefits Comparison
            </h2>

            {/* Responsive table container */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    {/* Table header */}
                    <thead>
                        <tr>
                            <th className="w-1/2 px-6 py-3 text-left text-sm font-semibold text-gray-300">
                                Features
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-300">
                                Basic Users
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-semibold text-purple-400">
                                Donor NFT Holders
                            </th>
                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody className="divide-y divide-gray-700">
                        {Object.entries(featureCategories).map(([category, features]) => (
                            <React.Fragment key={category}>
                                {/* Category header */}
                                <tr className="bg-gray-800">
                                    <td
                                        colSpan={3}
                                        className="px-6 py-4 text-sm font-semibold text-purple-400"
                                    >
                                        {category}
                                    </td>
                                </tr>
                                {/* Category features */}
                                {features.map((feature, index) => (
                                    <tr
                                        key={`${category}-${index}`}
                                        className="transition-colors hover:bg-gray-700"
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-300">
                                            {feature.name}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {feature.basic ? (
                                                <FaCheck className="mx-auto text-green-500" />
                                            ) : (
                                                <FaTimes className="mx-auto text-red-500" />
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {feature.donor ? (
                                                <FaCheck className="mx-auto text-green-500" />
                                            ) : (
                                                <FaTimes className="mx-auto text-red-500" />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Call to action */}
            <div className="mt-8 text-center">
                <p className="mb-4 text-gray-300">
                    Kindly Mint ExploreWeb3 Donor NFT today to unlock all APPRECIATION perks features and support this public good project to keep showcasing amazing web3/Solana projects and their opportunities!
                </p>
                <a
                    href="https://3.land/item/ppknfMRWztTEGfnt2Po5sh7xcQyeEU22Ndzy6VSpeNw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md bg-purple-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-600"
                >
                    Donate By Minting Donor NFT (100 USDC/NFT)
                </a>
            </div>
            <div className="mt-8 text-center">
                <p className="mb-4 text-gray-300">
                    ALERT: <br/>
                    Please, kindly note that most of the above perks features are not yet available because they require more resources to implement. 
                    They will kickstart when there is atleast 10 Donors NFT minted making funds available to ensure there implementation.
                </p>
            </div>
        </div>
    );
};

export default DonateNFT;