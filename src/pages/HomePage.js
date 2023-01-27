import BookList from '../components/Books/BookList';
import AddBook from '../components/Books/AddBook';
import Card from '../components/Interface/Card';

const dummyBooks = [
  {
    id: '1',
    title: 'Room 43',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: '2',
    title: 'Intro to web Development',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: '4',
    title: 'Peter Pan',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

const HomePage = () => {
  const removeBookHandler = () => {

  };

  return (
    <section>
      <Card>
        <BookList onRemoveBook={removeBookHandler} books={dummyBooks} />
        <AddBook />
      </Card>
    </section>
  );
};

export default HomePage;
