import React, {Suspense} from "react";
import ReactDOM from 'react-dom/client';
import './style.css';
import WebContent from './app';
import Preloader from "./components/Preloader/Preloader";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Suspense fallback={<Preloader/>}>

            <WebContent/>

        </Suspense>
    </React.StrictMode>
);


