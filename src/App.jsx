
import Sort from "./components/Sort";


const unsortedArrayString = ['ram', 'hari', 'syam', 'krishna', 'anu'];
const unsortedArray = [4, 2, 8, 3, 1];

 const App = () => (
  <>
    
    <Sort unsortedArray={unsortedArrayString} />
    <hr></hr>
    <Sort unsortedArray={ unsortedArray} />
  </>
);


export default App;