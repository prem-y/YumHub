import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file for styling

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Perform search-related actions here (e.g., API requests, navigation, etc.)
    console.log("Search query:", searchQuery);
    // Clear the search query after performing the search
    setSearchQuery("");
  };

  return (
    <div className="navbar bg-info">
      <div className="search-box">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Navbar;
