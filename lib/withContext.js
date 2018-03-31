import React from 'react';
import { Context } from './Provider';

function withContext(Component, navigationOptionsData) {
    return class ContextClass extends React.Component {
        static navigationOptions = navigationOptionsData;
        render() {
            return (
                <Context.Consumer>
                    { context => (
                        <React.Fragment>
                            <Component context={context} {...this.props}/>
                        </React.Fragment>
                    ) }
                </Context.Consumer>
            )
        }
    }
}

export default withContext;