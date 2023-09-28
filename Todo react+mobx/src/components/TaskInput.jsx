import React from "react";
import {observer} from "mobx-react-lite";
import classes from "./Todo.module.scss";

const TaskInput = observer((task) => {
    return (
        <div>
            {task.task.inputToggle ? (
                <input
                    onKeyDown={(e) => {
                        if (e.code == "Enter" && e.target.value !== "") {
                            task.task.toggleInput();
                        }
                    }}
                    type="text"
                    onChange={(e) => {
                        task.task.setText(e.target.value);
                    }}
                    onBlur={(e) => {
                        if (e.target.value !== "") {
                            task.task.toggleInput();
                            e.target.style.backgroundColor = "white";
                        }
                    }}
                    onFocus={(e) => {
                        e.target.style.backgroundColor = "#bcdbf7";
                    }}
                    value={task.task.text}
                    placeholder="Task description"
                />
            ) : (
                <div
                    onClick={() => {
                        task.task.toggleInput();
                    }}
                    className={classes.taskText}
                >
                    {task.task.text}
                </div>
            )}
        </div>
    );
});

export default TaskInput;