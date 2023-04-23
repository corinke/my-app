import cocktails from './components/data.js';

export default function list() {
    const rum = cocktails.filter(menu.ingredients === 'rum');
    const listItems = rum.map(cocktails =>
        <li>
        <img src={cocktails.image} className="App-logo" alt={cocktails.name} />
        <h1>{cocktails.name}</h1>
        <p><em>{cocktails.ingredients}</em></p>
        <p>{cocktails.recipe}</p>
    
        </li>
 
    
    );
  
    return <ul>{listItems}</ul>
  }

