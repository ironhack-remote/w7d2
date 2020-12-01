# React.js And State

Before we talk about state we need to remind ourselves and one thing: React controls the whole DOM right now. React is omnipresent and needs to be aware whenever specific values change. And values that are changeable in one application (dark mode vs light mode / number of times a button has been clicked / external data from, for example, an API ) needs to be handled differently than props.

Because we, as developers, don't have access to the that specific data whenever we write our components.

State usually is directly connected to user input. Whenever a user does an action that you want to change something in your application, you would record that data and interactions in `state`

## What is state?
state is a object in a class component that is persisted in a very important key: `state`
React is tremendously aware of that key and, like with props, is something that can cause a component to rerender
at first sight its not very different from an internal property in a class:

 this would work 👇
 ```jsx
class ClassComponent extends React.Component {
  myAge = 26

  render() {
    return (
      <h1>My age is {myAge}</h1>
    )
  }
}
```

The major difference between state and any internal property inside a class component or, for that matter, a `let` variable inside a functional component is that whenever React adds a component to the DOM it does it at a specific spot. Whenever an internal variable/ property and state is that React only rerenders a component whenever state updates, and not an internal value


Lets say we have a component that counts the number of times someone presses a button:

```jsx
class NumberOfTimesClicked extends React.Component {
   state = {
      clicked: 0
   }

   increaseClicked = () => {
      this.state.clicked++
   }

   render(){
      return (
         <div>
            <h1>This button has been clicked {this.state.clicked} times</h1>
            <button onClick={this.increaseClicked}>Increase</button>
         <div/>
      )
   }
}
```

In this situation what is happening in that every time we click on the button it will call the `increaseClicked` method and, theoretically it will be mutating the state directly

## THIS IS A BIG NO NO

Because React is not aware of the change like that. (It can notice the value change, but does not cause the rerender of the component)

In order for React to be aware of the change, you need to call a method of the class component (one that comes whenever you extend the `React.Component` class). That method is the `setState`


### setState - syntax and how to use it

```jsx
class UpdatingState extends React.Component {
   state = {
      clicked: 0
   }


   increaseClicked = ()  =>{
      // this.state.clicked++
      this.setState({clicked: this.state.clicked+1})
   }

   render() {
      return (
         <div>
            <h1>This button has been clicked {this.state.clicked} times</h1>
            <button onClick={this.increaseClicked}>Increase</button>
         </div>
      )
   }
}
```

What is happening there is that React has a `listener` on whenever the internal method of a class component - the `setState` get's called and then it will call the method `render` of the class component

### How to use is:
All of the following examples are correct syntax:

```jsx
this.setState({clicked: this.state.clicked+1})
this.setState(previousValue => ({...previousValue, clicked: previousValue.clicked+1}))
```

With `this.setState` you can either get the previous version of the state or just target a specific key in the state and update it there.

If we want to update more than one piece of state:

```jsx
state = {
   clicked: 0,
   isClicked: false
}

handleClick = () => {
   this.setState({clicked: this.state.clicked+1, isClicked: true})
}
```

We just need to write the properties inside the state that we wish to change and, internally, React will handle the change

### Caveats

Updating a state is asynchronous so:

```jsx
state = {
   clicked: 0,
   isClicked: false
}

handleClick = () => {
   this.setState({clicked: this.state.clicked+1, isClicked: true});
   console.log(this.state.isClicked) 
}

```

More often than not the `console.log` would still give us the previous version of the state. If,for some reason you want to do something after a piece of state has been updated, the `this.setState` method has an **optional** second argument - a callback function. That function only gets called whenever he state finished updating

```jsx
this.setState({isClicked: true}, () => {
// now you have access to the new state
})
```


### Why is state important?

```jsx
class Button extends React.Component {
   state = {
      isCool: false
   }

   toggleCoolFactor = () => {
      this.setState({isCool: !this.state.isCool})
   }


   render() {
      const amICool = this.state.isCool ? "" : " NOT"
      return (
         <div>
            <h1 onClick={this.toggleCoolFactor}>For sure that I am{amICool} cool</h1>
         </div>
      )
   }
}

```

In this case, depending on the state, the message that appears will be different.

And like we discussed earlier today, it can also cause a rerender of child components if the `state` is passed as a `prop`

```jsx
class Button extends React.Component {
   state = {
      isCool: false
   }

   toggleCoolFactor = () => {
      this.setState({isCool: !this.state.isCool})
   }


   render() {
      const amICool = this.state.isCool ? "" : " NOT"
      return (
         <div>
            <h1 onClick={this.toggleCoolFactor}>For sure that I am{amICool} cool</h1>

            <ShowEmoji isCool={this.state.isCool} />
         </div>
      )
   }
}

function ShowEmoji(props) {
   const emojiToShow = props.isCool ? "🎉 Yay! Let's party" : '🤢 I am just so lame'

return <h3>{emotjiToShow}</h3>
}

```