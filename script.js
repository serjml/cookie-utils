const setCookie = (name, value) => {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;
};

const getCookie = (name) => {
  const cookies = document.cookie.split('; ');
  
  for (const entryString of cookies) {
    const [entryName, entryValue] = entryString.split('=');
    
    if (decodeURIComponent(entryName) === name) {
      return entryValue;
    }
  }
};
