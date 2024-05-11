// Exploresol/utils/FormatText.ts
import React from 'react';

// Utility helper function to convert newline characters to paragraph tags
export const renderMultilineText = (text: string) => {
  return text.split('\n').map((line, index) => (
    <p key={index} className="text-gray-300 mt-2">
      {line}
    </p>
  ));
};