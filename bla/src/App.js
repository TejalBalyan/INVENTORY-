import React, { useState, useEffect } from "react";
import TreeView from "./components/TreeView";
import ItemDetail from "./components/ItemDetail";
import Login from "./components/Login";
import { buildTree } from "./utils/buildTree";
import './App.css';
import toggleIcon from './toggle-icon.png';

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

  // Hard-coded items and locations data
  const items = [
    {
      _id: "670a06c2b0a5787da5ad5f36",
      item_id: "4ce59062eadd4d4ca5e105f30a9f7256",
      name: "Black&DeckerScrewdriveR",
      quantity: 339,
      category: "Tools",
      price: 448.43,
      status: "in_stock",
      godown_id: "7579aa5649484332ab86c0b52f2b3222",
      brand: "Black&Decker",
      attributes: {
        image_url: "https://m.media-amazon.com/images/I/41-T3GBGYUL.jpg"
      }
    },
    {
      _id: "670a06c2b0a5787da5ad5f37",
      item_id: "663a9d18f1894f6e874f7cedd135e248",
      name: "Samsungphone",
      quantity: 111,
      category: "Electronics",
      price: 102.4,
      status: "in_stock",
      godown_id: "e06d51d013ab47d791d90f0ea097cc66",
      brand: "Samsung",
      attributes: {
        image_url: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f62.jpg"
      }
    }
  ];

  const locations = [
    {
      _id: "670a12c1b0a5787da5ad5f4a",
      id: "d72518e97c3f4a68979153f2b8e9308e",
      name: "TorresWarehouse",
      parent_godown: null
    },
    {
      _id: "670a12c1b0a5787da5ad5f4b",
      id: "a6565c19ccbb4bb8a2a04130a14988db",
      name: "WesternCenter",
      parent_godown: "d72518e97c3f4a68979153f2b8e9308e"
    },
    {
      _id: "670a12c1b0a5787da5ad5f4c",
      id: "4ce59062eadd4d4ca5e105f30a9f7256",
      name: "Sector60",
      parent_godown: "a6565c19ccbb4bb8a2a04130a14988db"
    },
    {
      _id: "670a12c1b0a5787da5ad5f4d",
      id: "e06d51d013ab47d791d90f0ea097cc66",
      name: "Sector77",
      parent_godown: "a6565c19ccbb4bb8a2a04130a14988db"
    },
    {
      _id: "670a12c1b0a5787da5ad5f4e",
      id: "7579aa5649484332ab86c0b52f2b3222",
      name: "WesternStockpile",
      parent_godown: "d72518e97c3f4a68979153f2b8e9308e"
    }
  ];

  useEffect(() => {
    // Set hard-coded data to state
    setItemsData(items);
    const nestedLocations = buildTree(locations, items);
    setLocationsData(nestedLocations);
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
                key={item.item_id} 
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
