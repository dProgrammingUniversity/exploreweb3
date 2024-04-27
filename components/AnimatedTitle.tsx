// Exploresol/components/AnimatedTitle.tsx
import React, { useState, useEffect } from 'react';

const AnimatedTitle = () => {
  const [currentWord, setCurrentWord] = useState('dApps');
  const words = ['dApps', 'Tools', 'Contents'];
  const largestWordLength = Math.max(...words.map(word => word.length));
  const widthOfLargestWord = `${largestWordLength}ch`;

  useEffect(() => {
    const wordIndex = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);

    return () => clearInterval(wordIndex);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        <div className="flex justify-center items-center gap-1">
          <span>Search 1/1,000+ Solana</span>
          <span>-</span>
          <span
            className="text-purple-400 inline-block text-center"
            style={{ minWidth: widthOfLargestWord, padding: '0 0.5rem' }}
          >
            {currentWord}
          </span>
        </div>
      </h1>
    </div>
  );
};

export default AnimatedTitle;