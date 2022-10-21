import getData from './api/data'
import {useEffect, useState} from "react";
import BasicTable from "./components/Table";
import './App.css';


function App() {
    const [data, setData] = useState(null);
    useEffect(() => {

        getData().then((res) => {
            if (res.status === 200) {
                setData(res.data)
            }
        })
    }, [])

    return data && (
        <div className="App">
            <div className="container">
                <BasicTable data={data}/>
            </div>
        </div>
    );
}

export default App;
