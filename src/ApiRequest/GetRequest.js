import axios from "axios";

export const getRequest = async (API_URl, currentPage,limitElement) => {
  try {
      const response = await axios.get( `${API_URl}?_page=${currentPage}&_limit=${limitElement}`);
      const data = response.data;
      return data;
  } catch(err) {
      throw err;
  }
};

export const getRequestQuantityElements = async (API_URl) => {
  try {
      const response = await axios.get( `${API_URl}`);
      const data = response.data;
      return data;
  } catch(err) {
      throw err;
  }
};

