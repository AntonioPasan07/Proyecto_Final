export const useLocalStorage = () => {
    const setLocalStorage = (name, value) => {
      window.localStorage.setItem(name, value);
    };
  
    const getLocalStorage = (name) => {
      return window.localStorage.getItem(name);
    };
  
    return {
      setLocalStorage,
      getLocalStorage,
    };
  };