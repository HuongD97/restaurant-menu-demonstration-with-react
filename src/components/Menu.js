import React, { Component } from 'react';
import FlexView from 'react-flexview';
import MenuItem from './MenuItem';

const styles = {
    menu: {
        borderStyle: 'solid',
        margin: '10%',
        padding: '0px',
    },
    menuList: {
        margin: '0px',
        padding: '0px',
        marginTop: '10%',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%',
    },
    menuTitle: {
        fontSize: '5vw',
        padding: '5%',
        borderBottom: 'solid',
        fontWeight: 'bold',
    }
};

class Menu extends Component {
    constructor(props) {
        super();
        this.state = {
            dishes: props.dishes
        }
    }

    render() {
        const listItems = this.state.dishes.map((dish) => <MenuItem key={dish.itemName} dish={dish}/>)
        return (
            <FlexView column style={styles.menu}>
                <FlexView style={styles.menuTitle}>
                    An Imaginative Restaurant
                </FlexView>
                <FlexView>
                    <ul style={styles.menuList}>
                        {listItems}
                    </ul>
                </FlexView>
            </FlexView>
        );
    }
}

export default Menu;
