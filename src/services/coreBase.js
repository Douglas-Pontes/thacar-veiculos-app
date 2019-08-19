import api from "./../config";

export const coreBase = {
  get: async (url) => {
    try {
      console.log(url)
      const response = await api.get(url);

      return response;
    } catch (error) {
        return "erro";
    }
  },

  post: async (url, headers, data) => {
    const response = await api.post(url, data, {
      headers: { ...headers }
    });

    return response;
  },
};
