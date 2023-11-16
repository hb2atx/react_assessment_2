### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
Enable client-side routing
- What is a single page application?
its when you use client side routing and update the URL from a link click without making another request for another document from the server.
- What are some differences between client side and server side routing?
Server-Side-Routing- with server-side routing you download an entire new webpage whenever you click on a link
Client-Side-Routing- with client-side routing the webapp downloads, processes and displays new data for you
- What are two ways of handling redirects with React Router? When would you use each?
Imperative Redirects- Ideal for conditional redirects based on certain logic or actions like form submissions, authentication checks, or based on some application state changes. For instance, after a successful login, you might want to redirect the user to a dashboard page.
Declarative Redirects- are ideal for predefined, static redirects based on routes or paths. They are great for handling default routes or catching unknown paths.
- What are two different ways to handle page-not-found user experiences using React Router? 
Create a NotFound Component: Develop a custom component to represent the 404 page.
Route Configuration: Place a wildcard route at the end of your routes configuration to catch all unmatched routes and render the NotFound component.
Redirect to a NotFound Route:
Create a NotFound Route: Define a specific route for 404 errors and render the NotFound component within this route.
Redirect Unmatched Routes: Utilize a <Redirect> component or Redirect element within a Switch component to redirect unmatched routes to the NotFound route.
Custom 404 Component: Useful for creating a dedicated 404 page with customized content, potentially enhancing the user experience.
Redirect to a NotFound Route: Offers a way to redirect to a predefined NotFound route, which may be simpler to implement and manage, especially in larger applications with many routes.
Choose the method based on the level of customization needed for your 404 page and the overall structure of your application.
- How do you grab URL parameters from within a component using React Router?
useParams hook
- What is context in React? When would you use it?
 context provides a way to pass data through the component tree without needing to pass props manually at every level. It's a global data store that allows you to share specific data with components, regardless of how deep they are in the component tree.
- Describe some differences between class-based components and function
  components in React.
Syntax:

Defined using ES6 classes.
Extend React.Component.
Use render() to return JSX.
State:

Manage state using this.state.
Use this.setState() to update state.
Can initialize state in the constructor.
Lifecycle Methods:

Use lifecycle methods like componentDidMount, componentDidUpdate, componentWillUnmount, etc., for managing side effects and state.
this Binding:

Need to manually bind event handlers or use arrow functions to avoid binding issues.
For instance: this.handleClick = this.handleClick.bind(this).
Complexity:

Can become verbose with larger applications due to the necessity of managing state and lifecycle methods within the same class.
Function Components (with Hooks):
Syntax:

Use regular JavaScript functions.
Introduced hooks like useState, useEffect, etc., to manage state and lifecycle-like features.
State:

Manage state using the useState hook.
Update state using the returned state updater function (e.g., setState in class components).
Lifecycle Equivalent:

Use hooks like useEffect to perform side effects or mimic lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount.
Simplicity:

Generally simpler and more concise, especially with the introduction of hooks.
Easier to read and maintain.
this Binding Not Required:

No this keyword, hence no need for binding functions or using arrow functions to maintain the context.
Avoids confusion related to this in JavaScript.
- What are some of the problems that hooks were designed to solve?
Complexity of State Management:,Reusing Stateful Logic:Difficulty in Lifecycle and Side Effects:HOC and Render Prop Boilerplate:
Class Boilerplate and this Binding:Performance Optimizations: