import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    
    const HOST = process.env.BASE || "http://localhost:4000";

    const API = `${HOST}/a5/todos`;
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ title: "New Todo", completed: false });

    const [errorMessage, setErrorMessage] = useState(null);

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    const removeTodo = async (todo) => {
      console.log(`${API}/${todo.id}/delete`);
      const response = await axios
      .get(`${API}/${todo.id}/delete`);
      setTodos(response.data);
    }

    const deleteTodo = async (todo) => {
      try {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
      } catch (error) {
        console.log(error);
        setErrorMessage(error.response.data.messsage);
      }
    };  

    const postTodo = async () => {
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    };

    const createTodo = async () => {
      const response = await axios.get(`${API}/create`);
      setTodos(response.data);
    }

    const fetchTodoById = async (id) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    }

    const updateTitle = async () => {
      const response = await axios.get(
        `${API}/${todo.id}/title/${todo.title}`);
      setTodos(response.data);
    };

    const updateTodo = async () => {
      try {
        const response = await axios.put(
          `${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (
          t.id === todo.id ? todo : t)));
        setTodo({});
      } catch (error) {
        console.log(error);
        setErrorMessage(error.response.data.message);
      }  
    };
  

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
      <div>
        <h3>Working with Arrays</h3>
        <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"/>
        <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"/>
        <input
        value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}
        className="form-control mb-2"
        type="text"/>
        <input type="checkbox" onChange={(e) => setTodo({...todo,
        completed: e.currentTarget.checked})}/>
        <h3>Updating an Item in an Array</h3>
        <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary me-2" >
            Update Title to {todo.title}
        </a>
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}
            className="btn btn-primary me-2">
            Delete Todo with ID = {todo.id}
        </a>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            className="form-control"
            value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}/>
        <a href={`${API}/${todo.id}`}
            className="btn btn-primary me-2">
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
            className="btn btn-primary me-2" >
            Get Completed Todos
        </a>
        <h4>Creating new Items in an Array</h4>
        <a href={`${API}/create`}
            className="btn btn-primary me-2">
            Create Todo
        </a>

        <h3>Extra Credit 3.3.7</h3>
        <a
            href={`${API}/${todo.id}/completed/${todo.completed}`}
            className="btn btn-primary me-2" >
            Update Completed status to {String(todo.completed)}
        </a>
        <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary me-2" >
            Update Description to {todo.description}
        </a>
        <h3>3.5.1</h3>
        <textarea
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
        />
        <input
          onChange={(e) => setTodo({
            ...todo, due: e.target.value })}
          value={todo.due} type="date"
        />
        <label>
          <input
            onChange={(e) => setTodo({
              ...todo, completed: e.target.checked})}
            value={todo.completed} type="checkbox"
          />
          Completed
        </label>
        <button onClick={postTodo} >
          Post Todo
        </button>
        <h3>3.5.3</h3>
        <button onClick={updateTodo}>
          Update Todo
        </button>
        <h3>3.4.7 and 3.4.9</h3>
        <button
          onClick={createTodo}
          className="btn btn-primary mb-2 w-100">
            Create Todo
        </button>
        <button
          onClick={updateTitle}
          className="btn btn-success mb-2 w-100">
            Update Title
        </button>
        {errorMessage && (
          <div className="alert alert-danger mb-2 mt-2">
            {errorMessage}
          </div>
        )}
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id}
                className="list-group-item">
              <button
                onClick={() => fetchTodoById(todo.id)}
                className="btn btn-warning me-2 float-end">
                  Edit
              </button>
              <button
                onClick={() => removeTodo(todo)}
                className="btn btn-danger float-end">
                  Remove
              </button>
              <button
                onClick={() => deleteTodo(todo)}
                className="btn btn-danger float-end ms-2">
                Delete
              </button>
              <input
                checked={todo.completed}
                type="checkbox" readOnly/>
                  {todo.title}
              <p>{todo.description}</p>
              <p>{todo.due}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default WorkingWithArrays;