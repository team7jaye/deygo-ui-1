import axios from 'axios';

export const BASE_URL =
  'http://deygo-deyg-fdjpkxzbpdvr.eba-mk53ixvk.us-east-1.elasticbeanstalk.com';

const getCategories = ({
  page = 0,
  size = 20,
}: {
  page?: number;
  size?: number;
}) => {
  return axios.get(`${BASE_URL}/api/categories?page=${page}&size=${size}`);
};

const getBusinessesByCategory = (id: string): any => {
  return axios.get(`${BASE_URL}/businesses/${id}`);
};

export { getCategories, getBusinessesByCategory };
