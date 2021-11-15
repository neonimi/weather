//Form.tsx

import React from "react";

//定義
type FormPropsType = {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props: FormPropsType) => {
    return (
    //ここにHTMLタグを書き込む
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City Name" onChange={e => props.setCity(e.target.value)} value={props.city}/>
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;