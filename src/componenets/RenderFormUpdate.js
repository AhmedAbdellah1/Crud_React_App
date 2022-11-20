import React, { useRef } from "react";

export default function RenderFormUpdate(props) {

    // to get value in input
    const inputRef = useRef();

    const updateCourse = (e) => {
        e.preventDefault();
        props.editCourse(props.myindex, inputRef.current.value);
        props.toggle();
    };
    return (
        <>
            <form onSubmit={updateCourse}>
                <input type="text" ref={inputRef} defaultValue={props.valueDefult} />
                <button>Update Course</button>
            </form>
        </>
    )

}
