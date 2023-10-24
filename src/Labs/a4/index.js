import React from "react";
import ReduxExamples from "./ReduxExamples";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DataStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
function Assignment4() {
    function sayHello() {
        alert("Hello");
      }
  return (
    <div>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
        <ReduxExamples />
      ...
    </div>
  );
}
export default Assignment4;