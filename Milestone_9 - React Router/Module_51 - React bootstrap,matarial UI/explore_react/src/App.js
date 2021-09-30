import './App.css';

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
