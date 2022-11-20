import React, { useState } from 'react'
import RenderFormUpdate from './RenderFormUpdate';

function CourseList(props) {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => { setIsEdit(isEdit => !isEdit); };

    return (
        <>
            {isEdit ?

                <RenderFormUpdate
                    valueDefult={props.details.name}
                    editCourse={props.editCourse}
                    myindex={props.index}
                    toggle={toggleIsEdit}

                /> :

                <li>
                    <span>{props.details.name}</span>
                    <button onClick={toggleIsEdit}> Edit Course</button>
                    <button onClick={() => { props.deleteCourse(props.index) }}>Delete Course</button>
                </li>
            }
        </>
    )
}

export default CourseList
