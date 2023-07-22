export const getQuery = (search = "origin") => {
  return new URL(document.location).searchParams.get(search);
};

export const getCurrentUrl = (base) => {
  const url = new URL(document.location);
  return `${base || url.pathname}${url.search}`;
};
