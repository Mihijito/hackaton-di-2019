const API_URL = `https://labyrinth-api.herokuapp.com`;

export const fetchMaze = async mode => {
  try {
    const response = await fetch(`${API_URL}/maze/${mode}`);
    const json = await response.json();
    return json;
  } catch (err) {
    alert('Cannot get maze : ' + err.message);
  }
};
