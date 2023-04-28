import React, { useState } from "react";

import { IItem } from "../types/todo";

interface IProps {
	todoAddHandler: (todo: IItem) => void;
}

type OnlyTodoText = Pick<IItem, "text">;

const AddTodo: React.FC<IProps> = (props) => {
	const [todo, setTodo] = useState<Partial<OnlyTodoText>>({});

	function TodoTextHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setTodo({
			text: e.target.value,
		});
	}

	function submitHandler(e: React.FormEvent) {
		e.preventDefault();
		if (!todo.text) {
			return;
		}
		props.todoAddHandler(todo as IItem);
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label>
					Add todo text
					<input type="text" id="add-todo" onChange={TodoTextHandler} />
				</label>
			</div>
			<button type="submit">Add todo</button>
		</form>
	);
};
export default AddTodo;
