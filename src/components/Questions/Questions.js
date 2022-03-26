import React from "react";
import "./Suestions.css";

const Questions = () => {
  return (
    <div>
      <h1>this is the question part</h1>
      <div className="question">
        <div className="question-part">
          <h2>How reacts work?</h2>
          <p>
            React basically puts all the components into a virtual DOM. Because
            when something new changes in a component, it starts to compare the
            old virtual DOM with the newest one and detect what changes happen,
            After that it updates in the component. then it behaves like a
            single page application(SPA) Each component is pure JavaScript code.
            React dynamically converts pure JavaScript code to Html code via
            React package. Then the DOM injects those HTML codes into the Main
            Index HTML file to show.
          </p>
        </div>
        <div className="question-part">
          <h2>Difference between Props and State?</h2>
          <p>
            Props are read-only components where the State changes
            asynchronously. Props allow us to pass data from one component to
            other components as an argument. But the state holds information
            about the components. Props can be approached by its child component
            where State cannot. Props can not change their value inside the
            Component but the state can. We can use Props without stateless
            components where the state can not be used.
          </p>
        </div>
        <div className="question-part">
          <h2>How useState works?</h2>
          <p>
            In react, useState is one kind of Hook that allows us to have state
            variables in functional factors. we can pass the original state to
            that function and it returns a variable with the current state
            value. useState gives us the scope to add state to serve factors.
            Calling React.useState inside a function element generates a single
            piece of state associated with that element. Each piece of state
            holds a single value, Whereas the state in a class is always can be
            an object, an array, a boolean, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
