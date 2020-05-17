import React from 'react';

//exmplo1
const withClass = props => {
    <div className={props.classes}>{props.children}</div>
}
//exmp2
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
}

export default withClass;