import logo from './logo.svg';
import './App.css';
import Movies from './Movies';

function App() {
  const movieList =[{
		title:"The Godfather",
		year:"1972",
		genre:"Drama",
		director:"Francis Ford Capolla"
	},
	{
		title:"Superbad",
		year:"2007",
		genre:"Comedy",
		director:"Greg Mottola"
	},
	{
		title:"The Departed",
		year:"2006",
		genre:"Drama",
		director:"Martin Scorsese"
	},
	{
		title:"Saving Private Ryan",
		year:"1998",
		genre:"Action",
		director:"Steven Spielberg"
	},
	{
		title:"The Expendables",
		year:"2010",
		genre:"Action",
		director:"Sylvester Stallone"
	}];

  return (
    <div className="App">
      {movieList.map(
        (movieObj)=>{return(<Movies 
          title={movieObj.title} 
          year={movieObj.year} 
          genre={movieObj.genre} 
          director={movieObj.director}/>)}
      )}
    </div>
  );
}

export default App;
