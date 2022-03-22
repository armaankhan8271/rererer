import "./App.css";
import Header from "./components/header";
import { useState, useEffect } from "react";
import Show from "./components/show";
import Axios from "axios";
import Map from "./components/map";

function App() {
  const [search, setsearch] = useState("chiken");
  const [recipies, setrecipies] = useState([]);

  const appid = "80043f68";
  const appkey = "938d7b62614bbc2dc4287da1fafa52fd	";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    getrecipies()
  })
  const getrecipies=async () => {
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${appid}&app_key=${appkey}`
    );
    console.log(result);

    setrecipies(result.data.hits);
  }
  return (
    <div>
      <Header search={search} setsearch={setsearch} />
      <div className="container mm mx-auto">

      <Show recipies={recipies} />
      </div>
      <div className=" container row my-5">
      {
        recipies.map((recipe) =>{
          return (
            <div className="card my-5 py-5 mm mx-auto" style={{width: "35rem"}}>
  <img className="rounded-circle" src={recipe.recipe.image}/>
  <div className="card-body  my-5 mx-auto">
    <h1 className="card-title   my-5 wraped-text">{recipe.recipe.label}</h1>
    <p className="card-text my-5">
      
    </p>
    <h5>Meal type:  {recipe.recipe.mealType }</h5>
    
    <h1>Ingrediant</h1><h6>{recipe.recipe.ingredientLines}</h6>
    <button className="fs-3 btn btn-primary"><a className="text-white" href={recipe.recipe.shareAs}>more information</a></button>
    

  </div>
 
</div>
     
     
     )
    })
}
    <Map/>
    </div>
    </div>
  );
}

export default App;

