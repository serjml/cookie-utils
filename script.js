const setCookie = (name, value) => {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`;
};
