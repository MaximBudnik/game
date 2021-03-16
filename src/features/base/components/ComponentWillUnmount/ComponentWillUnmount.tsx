import React from "react";

type propsType = {
    componentWillUnmount: () => void
};

class ComponentWillUnmount extends React.Component<propsType> {

    componentWillUnmount() {
        this.props.componentWillUnmount()
    }

    render() {
        return null
    }
}

export default ComponentWillUnmount;
