// Add this script at the bottom of your HTML or in an external JS file
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav ul");
    const toggleMenu = document.createElement("button");
  
    // Create a toggle button for the navigation menu
    toggleMenu.innerText = "Menu";
    toggleMenu.style.display = "none"; // Hidden by default
    toggleMenu.style.backgroundColor = "rgb(204, 31, 190)";
    toggleMenu.style.color = "white";
    toggleMenu.style.border = "none";
    toggleMenu.style.padding = "10px 20px";
    toggleMenu.style.borderRadius = "5px";
    toggleMenu.style.cursor = "pointer";
  
    // Insert the button before the navigation menu
    nav.parentNode.insertBefore(toggleMenu, nav);
  
    // Function to toggle the navigation menu visibility
    toggleMenu.addEventListener("click", () => {
      if (nav.style.display === "none" || !nav.style.display) {
        nav.style.display = "flex";
      } else {
        nav.style.display = "none";
      }
    });
  
    // Handle responsiveness dynamically
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        nav.style.display = "none"; // Hide nav menu initially for smaller screens
        toggleMenu.style.display = "block"; // Show toggle button
        nav.style.flexDirection = "column"; // Stack menu items vertically
      } else {
        nav.style.display = "flex"; // Show nav menu for larger screens
        toggleMenu.style.display = "none"; // Hide toggle button
        nav.style.flexDirection = "row"; // Default menu layout
      }
    };
  
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
  
    // Initialize on page load
    handleResize();
  });
  