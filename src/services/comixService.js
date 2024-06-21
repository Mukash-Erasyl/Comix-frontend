import axios from 'axios';

const API_URL = '/api/comix'; // URL вашего API

export const getComixById = async (id) => {
  try {

    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comix by ID:', error);
    return null;
  }
};

const getComix = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching comix:', error);
    return [];
  }
};


export const searchComix = async (keyword)  => {
  try {
      const response = await axios.get(`${API_URL}/search?keyword=${keyword}`);
      return response.data;
  } catch (error) {
      console.error('Error searching for comix:', error);
      throw error;
  }
}

const getComixByPage = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`${API_URL}/page?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    return response.data.content; // Предполагается, что комиксы находятся в поле content
  } catch (error) {
    console.error('Error fetching comix by page:', error);
    throw error;
  }
};


export const updateComixViews = async (id, views) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}/views`, views, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating comix views:', error);
    throw error;
  }
};
export { getComix , getComixByPage};
