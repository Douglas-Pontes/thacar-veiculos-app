import AsyncStorage from "@react-native-community/async-storage";

export const storage = {
  store: async (key, value) => {
      await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  get: async (key) => {
      return await AsyncStorage.getItem(key);
  },

  remove: async (key) => {
      await AsyncStorage.removeItem(key);
  }
};