

function AddCourse(props) {
    return (

        <form onSubmit={props.addCourse}>
            <input type="text" name='name' onChange={props.updateCourse} value={props.dataCurrent} />
            <button type="submit">Add Course</button>
        </form>

    );
}

export default AddCourse
