import React from 'react'

export default class BooksDescription extends React.Component {

    render() {
        return (
            <div>
                <h2>jksasakj{this.props.match.params.id}</h2>
            </div>
        );
    }
}
