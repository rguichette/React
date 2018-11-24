//code goes here

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};
class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return React.createElement("div", {
      onClick: this.handleTitleClick
    }, [
      React.createElement("h1", null, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "unknown"
      }),
      React.createElement(Pet, {
        name: "kasy",
        animal: "dog",
        breed: "spcific-type"
      }),
      React.createElement(Pet, {
        name: "chassy",
        animal: "dog",
        breed: "mixed"
      })
    ]);
  }
}

// const App = ()=>{
//   return React.createElement("div",null,[React.createElement('h1',null,"Adopt Me!"),
//   React.createElement(Pet,{name:"Luna",animal:"dog",breed:"unknown"}),
//   React.createElement(Pet,{name:"kasy",animal:"dog",breed:"spcific-type"}),
//   React.createElement(Pet,{name:"chassy",animal:"dog",breed:"mixed"})
// ])
// }

ReactDOM.render(React.createElement(App), document.getElementById("root"));
