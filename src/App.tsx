import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import { IItem } from "./types/todo";

const App: React.FC = () => {
	const [todos, setTodos] = useState<IItem[]>([]);

	function todoAddHandler(todo: IItem) {
		setTodos((prevTodos) => {
			return [...prevTodos, { id: (Math.random() * 100000).toFixed(0), text: todo.text }];
		});
	}
	function todoRemoveHandler(id: string): void {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => {
				return todo.id !== id;
			});
		});
	}

	return (
		<div className="app">
			<AddTodo todoAddHandler={todoAddHandler} />
			<TodoList todoRemoveHandler={todoRemoveHandler} todos={todos} />
		</div>
	);
};

export default App;
