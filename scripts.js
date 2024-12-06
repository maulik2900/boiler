// Define the dummy API endpoint
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Function to make the API call
async function fetchData() {
  try {
    // Make the API call
    const response = await fetch(apiUrl, {
      method: "GET", // HTTP method
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    // Log the data to the console (or use it in your application)
    console.log(data);
  } catch (error) {
    // Handle any errors
    console.error("Error fetching data:", error);
  }
}

// Call the function to make the API call
fetchData();
