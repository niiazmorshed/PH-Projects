const getStoredBooks = (keyname) => {
  const storedBooks = localStorage.getItem(`${keyname}`);
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveBooks = (i, keyname) => {
  const storedBooks = getStoredBooks(`${keyname}`);
  const exist = storedBooks.find((id) => id.id === i.id);
  if (!exist) {
    storedBooks.push(i);
    localStorage.setItem(`${keyname}`, JSON.stringify(storedBooks));
  }
};

export { getStoredBooks, saveBooks };
