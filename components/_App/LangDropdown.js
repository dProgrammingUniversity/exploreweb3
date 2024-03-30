import React, { useState } from 'react';

const LangDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Lang');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <div className="lang-dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedLanguage}
      </div>
      
      {isDropdownOpen && (
        <ul className="dropdown-list">
          <li>
            <a href="/" onClick={() => selectLanguage('EN')}>
              EN
            </a>
          </li>
          <li>
            <a href="/ar" onClick={() => selectLanguage('AR')}>
              AR
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangDropdown;
