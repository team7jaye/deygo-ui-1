import axios from "axios";

export const BASE_URL2 =
  "http://deygo-deyg-fdjpkxzbpdvr.eba-mk53ixvk.us-east-1.elasticbeanstalk.com";

export const BASE_URL =
  "https://5dcul9h4qe.execute-api.us-east-1.amazonaws.com/beta";

const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getBusinessesByCategory = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/businesses?categoryId=${id}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching businesses: ${error.message}`);
  }
};

const getBusinessById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/businesses/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching business: ${error.message}`);
  }
};

export { fetchCategories, getBusinessesByCategory, getBusinessById };
