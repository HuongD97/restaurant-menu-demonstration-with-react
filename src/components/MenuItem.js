import React, { Component } from 'react';

const styles = {
    container: {
        borderWidth: 0.5,
        borderStyle: 'solid',
        margin: '0px',
        marginBottom: '10px',
        padding: '20px',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    description: {
        fontSize: 15,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        marginBottom: '5px',
    }
};
class MenuItem extends Component {
    constructor(props) {
        super();
        this.state = {
            dish: props.dish
        }
    }

    render() {
        const { dish } = this.state;
        return (
            <div style={styles.container}>
                <div style={styles.imageContainer}>
                    <img style={styles.image}
                         src={dish.imageURL}
                         alt={dish.altTitle}/>
                </div>
                <div style={styles.title}>{dish.itemName}</div>
                <div style={styles.description}>{dish.itemDescription}</div>
            </div>
        );
    }
}

export default MenuItem;
