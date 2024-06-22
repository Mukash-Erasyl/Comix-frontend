
import axios from 'axios';
const API_URL = 'https://comix-backend-jabai-a42c72cb39c0.herokuapp.com';;

const AdminPanelService = async (comixData) => {
    try {
        const response = await axios.post(`${API_URL}/createComix`, comixData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default AdminPanelService ;
