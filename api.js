// api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users. Please try again later.');
  }
};

// Add a user
export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw new Error('Failed to add user. Please try again later.');
  }
};

// Edit a user
export const editUser = async (id, user) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  } catch (error) {
    console.error('Error editing user:', error);
    throw new Error('Failed to update user. Please try again later.');
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('Failed to delete user. Please try again later.');
  }
};
