// Define the async function to fetch and display user data
async function fetchUserData() {
  // Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the container element for displaying the data
  const dataContainer = document.getElementById("api-data");

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Convert the response to JSON
    const users = await response.json();

    // Clear the existing content
    dataContainer.innerHTML = "";

    // Create a <ul> element to hold the user list
    const userList = document.createElement("ul");

    // Loop through the user data and create list items
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the user list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors by clearing content and displaying an error message
    dataContainer.innerHTML = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

// Ensure the function runs after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
