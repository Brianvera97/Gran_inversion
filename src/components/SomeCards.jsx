const SomeCards = props => {

    return (
        <>

            <h1>{props.lastName}, {props.firstName} </h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>

        </>
    )
}

export default SomeCards