import './App.css';
import Card from './components/Card/Card';
import { Button, Spinner } from 'react-bootstrap';

const items = [
  { name: 'Sohid Minar', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img: 'https://thefinancialexpress.com.bd/uploads/1582387861.jpg' },
  
  { name: 'Sohid Minar', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img: 'https://thefinancialexpress.com.bd/uploads/1582387861.jpg' },
  
  { name: 'Sohid Minar', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img: 'https://thefinancialexpress.com.bd/uploads/1582387861.jpg' },
  
  { name: 'Sohid Minar', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img: 'https://thefinancialexpress.com.bd/uploads/1582387861.jpg' },
  
  { name: 'Sohid Minar', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img: 'https://thefinancialexpress.com.bd/uploads/1582387861.jpg' },
  
  { name: 'Sohid Minar', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img: 'https://thefinancialexpress.com.bd/uploads/1582387861.jpg' },
  
  { name:'Sohid Minar',description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',img:'https://thefinancialexpress.com.bd/uploads/1582387861.jpg'}
]

function App() {
  return (
    // <div className="row row-cols-1 row-cols-md-3 g-4">
    //   {
    //     items.map(item => <Card
    //       item={item}
    //     ></Card>)
    //   }
    // </div>
    <div className='App'>
      <Button variant='primary'>Primary</Button>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default App;
