import React, { Component } from 'react';
import FlexView from 'react-flexview';

const styles = {
    container: {
        borderWidth: 0.5,
        borderStyle: 'solid',
        margin: '0px',
        marginBottom: '5%',
        padding: '7%',
    },
    title: {
        fontSize: '2.5vw',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    description: {
        fontSize: '2vw',
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
            <FlexView hAlignContent={'center'} column style={styles.container}>
                <FlexView shrink={1} style={styles.imageContainer}>
                    <img style={styles.image}
                         src={dish.imageURL}
                         alt={dish.altTitle}/>
                </FlexView>
                <FlexView shrink={1} style={styles.title}>{dish.itemName}</FlexView>
                <FlexView shrink={1} style={styles.description}>{dish.itemDescription}</FlexView>
            </FlexView>
        );
    }
}

export default MenuItem;
