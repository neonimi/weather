
// import logo from './logo.svg';
import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from './components/Loading';
import './App.css';

//型指定
type ResultStateType = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}

function App() {
    const [loading, setLoading] = useState<boolean>(false);
    const [city, setCity] = useState<string>("");//state作成（都市名）

    //state作成（気象データ）
    const [results, setResults] = useState<ResultStateType>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""
    });
    
    //weatherapi呼び出し
    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {//作成途中はe: any（なんでも）でOK
        //ボタン押下時リロードしない
        e.preventDefault();
        setLoading(true);
        fetch(`https://api.weatherapi.com/v1/current.json?key=9d40cbdfd2a34ce8a7251121211410&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
            setResults({
                country: data.location.country,
                cityName: data.location.name,
                temperature: data.current.temp_c,
                conditionText: data.current.condition.text,
                icon: data.current.condition.icon
            })
            setCity("");
            setLoading(false);
        }).catch(err => alert("エラー発生が発生しました。ページをリロードしてください。"))
    }
    return (
        <div id="wrap" className="wrapper timephoto">
            <div className="container">
                <Title />
                <Form setCity={setCity} getWeather={getWeather} city={city}/>
                {loading ? <Loading /> : <Results results={results} />}
            </div>
        </div>
    );
}

export default App;
