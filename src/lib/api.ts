export const fetchRandomUser = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // The API returns an array, so we extract the first user
    return data.results[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    // Re-throw the error so the component can handle it
    throw error;
  }
};
