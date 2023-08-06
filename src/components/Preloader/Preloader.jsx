import React, {Component} from 'react';
import './preloaderStyle.css';


export default class Preloader extends Component {
    constructor(props) {
        super(props);
        this.viewRef = React.createRef();
    }

    render() {
        return (
            <div ref={this.viewRef} className="preloader">
                <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"/>
                </svg>
            </div>
        );
    }

    componentWillUnmount() {
        this.viewRef.current.style.opacity = 0;
    }
}