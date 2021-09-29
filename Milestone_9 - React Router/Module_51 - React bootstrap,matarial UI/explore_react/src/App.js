import './App.css';
import Card from './components/Card/Card';

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
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        items.map(item => <Card
          item={item}
        ></Card>)
      }
    </div>
  );
}

export default App;
