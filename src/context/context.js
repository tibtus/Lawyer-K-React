import React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component {
    state = {
        value: 0,
    };

    updateValue = newValue => {
        this.setState({value: newValue});
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    value: this.state.value,
                    updateValue: this.updateValue,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyContext;
export {MyProvider};


