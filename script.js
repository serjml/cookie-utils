const setCookie = (name, value, options = {}) => {
  let newEntryBody = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;

  const optionsAsString = Object.entries(options).map((entry) => entry.join('=')).join('; ');

  if (optionsAsString) {
    newEntryBody += `; ${optionsAsString}`;
  }

  document.cookie = newEntryBody;
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

const deleteCookie = (name) => {
  setCookie(name, '', { 'max-age': -1 })
}