import React, { useState, useEffect } from "react";
import TreeView from "./components/TreeView";
import ItemDetail from "./components/ItemDetail";
import Login from "./components/Login";
import { buildTree } from "./utils/buildTree";
import './App.css';
import toggleIcon from './toggle-icon.png';

const API_ITEMS_URL = 'http://localhost:5000/api/items';
const API_LOCATIONS_URL = 'http://localhost:5000/api/locations';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemsData, setItemsData] = useState([]);
  const [locationsData, setLocationsData] = useState([]);
  const [error, setError] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (isNavbarOpen && isMobile) {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsResponse = await fetch(API_ITEMS_URL);
        if (!itemsResponse.ok) throw new Error('Failed to fetch items');
        const items = await itemsResponse.json();
        setItemsData(items);

        const locationsResponse = await fetch(API_LOCATIONS_URL);
        if (!locationsResponse.ok) throw new Error('Failed to fetch locations');
        const locations = await locationsResponse.json();
        const nestedLocations = buildTree(locations, items);
        setLocationsData(nestedLocations);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setSearchQuery(''); // Clear search to close the dropdown
    if (isMobile) {
      setIsNavbarOpen(false);
    }
  };

  const filteredItems = itemsData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "All" || item.category === filterType;
    return matchesSearch && matchesType;
  });

  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <div className="background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>

      <div className="container-fluid">
        <header className="App-header">
          <img
            src={toggleIcon}
            alt="Toggle Navbar"
            onClick={toggleNavbar}
            className="toggle-button"
          />
        </header>

        {/* Search and Filter UI */}
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Dropdown for Search Results */}
        {searchQuery && filteredItems.length > 0 && (
          <div className="search-results-dropdown">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="search-result-item"
                onClick={() => handleSelectItem(item)} // Select item when clicked
              >
                {item.name}
              </div>
            ))}
          </div>
        )}

        <div className="content">
          {isNavbarOpen && (
            <div className="navbar open">
              <TreeView 
                data={{ items: filteredItems, locations: locationsData }} 
                onSelectItem={handleSelectItem}
              />
            </div>
          )}
          </div>

          {/* Hide the title when an item is selected */}
          {!selectedItem && (
            <>
              <h1 className="page-title">Smart Warehouse</h1>
              <h1 className="page-title">Management System</h1>
            </>
          )}

          {/* Item Detail */}
          {selectedItem && (
            <div className={`item-detail ${isNavbarOpen && isMobile ? 'hidden' : ''}`}>
              <ItemDetail item={selectedItem} />
            </div>
          )}
        
      </div>
    </div>
  );
};

export default App;
