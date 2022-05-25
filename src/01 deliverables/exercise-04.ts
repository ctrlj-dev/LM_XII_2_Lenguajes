console.log("************** DELIVERABLE 04 *********************");

interface IBooks {
  title: string;
  isRead: boolean;
}

const booksList: IBooks[] = [
  {
    title: "El señor de los anillos",
    isRead: true,
  },
  {
    title: "La sangre de los elfos",
    isRead: false,
  },
  {
    title: "Estación de tormentas",
    isRead: false,
  },
  {
    title: "El elfo oscuro: El Refugio",
    isRead: true,
  },
];

const isBookRead= (books: IBooks[], titleToSearch: string) : boolean  => {
  const findBook = books.find(
    (book) => book.title.toLowerCase() === titleToSearch.toLowerCase()
  );
  return findBook ? findBook.isRead : false;
};

console.log('¿Se ha leído el libro?: ',isBookRead(booksList, "el señor de los anilloS"));

