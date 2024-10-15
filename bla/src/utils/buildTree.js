// // src/utils/buildTree.js

// export const buildTree = (locations, items) => {
//     const map = {};
//     const roots = [];
  
//     // Initialize the map and add children array
//     locations.forEach((location) => {
//       map[location.id] = { ...location, children: [], items: [] };
//     });
  
//     // Build the tree structure
//     locations.forEach((location) => {
//       if (location.parent_godown) {
//         // If it has a parent, push it to that parent's children
//         if (map[location.parent_godown]) {
//           map[location.parent_godown].children.push(map[location.id]);
//         }
//       } else {
//         // If it has no parent, it's a root location
//         roots.push(map[location.id]);
//       }
//     });
  
//     // Associate items with their respective locations
//     items.forEach((item) => {
//       const location = map[item.godown_id];
//       if (location) {
//         location.items.push(item);
//       }
//     });
  
//     return roots; // Return the array of root locations
//   };
  // src/utils/buildTree.js

export const buildTree = (locations, items) => {
    const map = {};
    const roots = [];
  
    // Initialize the map and add children and items arrays
    locations.forEach((location) => {
      map[location.id] = { ...location, children: [], items: [] };
    });
  
    // Build the tree structure
    locations.forEach((location) => {
      if (location.parent_godown) {
        // If it has a parent, push it to that parent's children
        map[location.parent_godown].children.push(map[location.id]);
      } else {
        // If it has no parent, it's a root location
        roots.push(map[location.id]);
      }
    });
  
    // Associate items with their respective locations
    items.forEach((item) => {
      const location = map[item.godown_id];
      if (location) {
        location.items.push(item); // Push items to the correct location
      }
    });
  
    return roots; // Return the array of root locations
  };
  