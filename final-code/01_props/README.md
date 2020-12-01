# React.js and Props

Props are properties that are external to a component but are used in order to define internal mechanics of behaviours inside a component.

Remember React follows a uni directional information flow!

Consider the following:

```jsx
function Button(props) {
   const buttonStyle = {
      color: props.color,
      borderStyle: props.color === "red" ? "dotted" : "solid",
      borderWidth: props.color === "green" ? "1px" : "3px"
   }
   return <button style={buttonStyle}>This is my button, but the styles change a lot</button>
}
```

Now whenever we render the component, the appearance of the button will be quite different

```jsx
function App() {
   return (
      <div>
         This is my button, v1
         <br />
         <Button color="red" />
         This is my button, v2
         <br />
         <Button color="green" />
      </div>
   )
}

```

Props can be any data type - Numbers, Arrays, Objects, Dates, Functions, Booleans - anything

You might see code that looks like the following:

```jsx
<Button isCool>Noice</Button>
```

This, internally gets translated into:
```jsx
function Button(props) {
   console.log(props) // {isCool: true}
   // rest of component
}
```


## Props are responsible for a lot more than just styling changes. We will see more of it this afternoon when we talk and handle the topic of `state`. But React rerenders components EVERY time that either `state` or `props` change.

## How to access `props` in different kinds of components (Class vs Functional Components)

```jsx
// Version of Class COmponent
class WithProps extends React.Component {
   render() {
       const buttonStyle = {
      color: this.props.color,
      borderStyle: this.props.color === "red" ? "dotted" : "solid",
      borderWidth: this.props.color === "green" ? "1px" : "3px"
   }

   return (
        <button style={buttonStyle}>
      This is my button, but the styles change a lot
    </button>
   )
   }
}
```


Props are not *ONLY* used for styling purposes but a lot, and I mean a **LOT** of UI libraries tend to use props as a way to handle styling.
Examples:
- Bootstrap
- React Boostrap
- Material-UI -> This is the google style design
- Theme-UI
- Chakra-UI


### Ways of passing props:
```jsx
  <ProjectData project={firstProject} />
   <ProjectData order={firstProject.order} hoursSpent={firstProject.hoursSpent} isSuccessful={firstProject.isSuccessful} projectType={firstProject.type} />
   <ProjectData {...firstProject} />
```

We havent seen this component yet, but lets focus only on the syntax for now.

All options are correct, the way we access that data on the component will be different.
Assuming an object of `firstProject` that looks like this:
```js
  const firstProject = {
      type:"game",
      hoursSpent:10467,
      isSuccessful: true,
      order:1
   }
```

Inside the `ProjectData` component, on the first option, every piece of information would be inside a `project` key inside the props.
So: 
```js
// inside a functional component
props.project
// inside a class component
this.props.project
```

On the second version, each of the properties would be available, by their names. Because we are adding each individual prop manually.

```js
// inside a functional component
props.order
// inside a class component
this.props.order
```

On the third version you are doing exactly the same thing as in the second, however in a less manual way of passing that data.

```js
// inside a functional component
props.order
// inside a class component
this.props.order
```

## When to use which option of passing props?
That will depend on you, on your team and on the readability. If your component expects multiple props, you might go the third route. But be sure to have good naming practices, otherwise it can become a mess of unreadable code.

An example I have seen, **and used**

```jsx
<Component {...props} {...rest} {...o}>
```

☝️ This component at the time that I wrote it, made a whole lot of sense. But every time I encounter it again I always have to just figure out what exactly those object are and it sometimes means I have to go around multiple files just to get reorganized


Props are also organized in order to `pass` data around from one larger component down to other components:

```jsx

function App() {

   const user = {
      username: "itstheandre",
      age: 84,
      isTruthyInAge: false
   }

   const firstProject = {
      type:"game",
      hoursSpent:10467,
      isSuccessful: true,
      order:1
   }

   return (
      <div>
      <Greeting user={user} />
      <ProjectData project={firstProject} />
      <ProjectData {...firstProject} />
      <ProjectData order={firstProject.order} hoursSpent={firstProject.hoursSpent} isSuccessful={firstProject.isSuccessful} projectType={firstProject.type} />
      </div>
   )
}

function Greeting(props) { // you will see often also function Greeting({user}) {
   const myAge = props.user.isTruthyInAge ? "." : ", but I wouldn't trust myself, just saying"

   return (
      <h1>Hey there, I am {props.user.username} and I am {props.user.age}{myAge}</h1>
   )
}

class ProjectData extends React.Component {
   render() {
      let addOrdinal = "th"
      if (this.props.order === 1) {
         addOrdinal = "st"
      }
      else if (this.props.order === 2) {
        addOrdinal = "nd"
      } else if (this.props.order === 3) {
         addOrdinal = "rd"
      }

      const successMessage = this.props.isSuccessful ? "OBVZ" : "And I learned a lot, but could have done better"
      return (

      <div>
      <h3>Report</h3>
      <h6>Project type: {this.props.projectType}</h6>
      <p>I spent {this.props.hoursSpent} in my {this.props.order}{addOrdinal}. Was I tremendously successful? {successMessage}</p>
      </div>
      )

   }
}

```

