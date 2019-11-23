const API_URL = `https://labyrinth-api.herokuapp.com`;

export const fetchMaze = async () => {
  try {
    const response = await fetch(`${API_URL}/maze/beginner`);
    const json = await response.json();
    return json;
  } catch (err) {
    alert('Cannot get maze : ' + err.message);
  }
};
