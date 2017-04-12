//  var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

// var GroceryListItem = (props) => (
//         <li onClick={onListItemClick}>{props.groceryItem}</li>
//     );

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        hover: false
    };
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOut={this.onListItemHover.bind(this)} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceryListItem}</li>
    );
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryList.map(groceryListItem =>
      <GroceryListItem groceryListItem={groceryListItem} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList groceryList={['Olives', 'Tomatoes']} />, document.getElementById("app"));


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}