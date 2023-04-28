import React from "react";
import { IItem } from "../types/todo";

interface IProps {
	todos: IItem[];
	todoRemoveHandler: (id: string) => void;
}

const TodoList: React.FC<IProps> = ({ todos, todoRemoveHandler }) => {
	return (
		<ul>
			{todos.map((todo) => {
				return (
					<li key={todo.id}>
						<div>{todo.id}</div>
						<div>{todo.text}</div>
						<button
							onClick={() => {
								todoRemoveHandler(todo.id);
							}}
						>
							Delete
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default TodoList;
