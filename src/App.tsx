import Button from './components/Button';

function App() {
  return (
    <div>
      <Button onClick={() => console.log('Click')}>
        Click me&nbsp;
        <b>
          to see <u>magic!</u>
        </b>
      </Button>
    </div>
  );
}

export default App;
