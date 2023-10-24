import JavaScript from "./JavaScript";
import PathParameters from "./PathParmeters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import { useSelector } from "react-redux";

function Assignment3() {
    console.log('Hello World!');
    const { todos } = useSelector((state) => state.todosReducer);
 return (
     <div>
        <h1>Assignment 3</h1>
        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters/>
        <JavaScript/>
     </div>
 );
}
export default Assignment3;