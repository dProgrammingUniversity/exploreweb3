// /components/Dashboard/CreateListings/Blinks/PlatformInfo.tsx

import React from 'react';
import Select from 'react-select';

const PlatformInfo = ({ formData, handlePlatformChange, platforms }) => {
    // Map platforms for react-select
    const platformOptions = platforms.map(platform => ({ value: platform.id, label: platform.name }));

    return (
        <div className="flex flex-col">
            <label htmlFor="platforms" className="mb-2 capitalize text-purple-500 text-xl">
                Platforms:
            </label>
            <span className="text-sm text-gray-400 mb-1">Select the platforms this blink is available on</span>
            <Select
                id="platforms"
                name="platforms"
                isMulti
                options={platformOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                value={platformOptions.filter(option => formData.platform_ids?.includes(option.value))}
                onChange={handlePlatformChange}
            />
        </div>
    );
};

export default PlatformInfo;


