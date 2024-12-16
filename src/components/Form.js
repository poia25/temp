import React from "react";

const Form = (props) => {
    return(
        <>
            <form onSubmit={props.weatherMethod}>
                <input type="text" placeholder="ГОРОД" name="city" />
                <button>Получить погоду</button>
            </form>
        </>
    )
}

export default Form;