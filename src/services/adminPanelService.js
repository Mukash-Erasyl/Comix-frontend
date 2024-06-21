
import axios from 'axios';
const API_URL = '/api/comix';

const AdminPanelService = async (comixData) => {
    try {
        const response = await axios.post(`${API_URL}/createComix`, comixData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default AdminPanelService ;
