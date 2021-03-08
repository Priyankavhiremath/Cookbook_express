import { BrowserRouter as Router ,Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import Meals from "./components/Meals";
import MealsDetails from "./components/MealsDetails";
import Postpage from "./components/postpage/Postpage";
import RecipeMeal from "./components/RecipeMeal"


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/meals/posts" component={Postpage} />
        <Route path="/meals/:mealtype/:mealId" component={RecipeMeal} />
        <Route path="/meals/:mealtype" component={MealsDetails} />
        <Route path="/meals/" component={Meals} />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
