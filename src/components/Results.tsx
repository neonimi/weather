//Results.tsx

//型定義
type ResultsPropsType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

const Results = (props: ResultsPropsType) => {
    return (
        //ここにHTMLタグを書き込む
        <div>
            {props.results.cityName && <div className="text">{props.results.cityName}</div>}
            {props.results.country && <div className="text">{props.results.country}</div>}
            {props.results.temperature && <div className="text">{props.results.temperature}<span>℃</span></div>}
            {props.results.conditionText && <div ><img src={props.results.icon} alt="icon"/><span className="tc text">{props.results.conditionText}</span></div>}
        </div>
    );
};

export default Results;