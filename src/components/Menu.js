import React, { Component } from 'react';
import MenuItem from './MenuItem';

const styles = {
    menu: {
        borderStyle: 'solid',
        margin: '50px',
        padding: '0px',
    },
    menuList: {
        margin: '0px',
        padding: '0px',
        marginTop: '50px',
        marginBottom: '50px',
        marginLeft: '50px',
        marginRight: '50px',
        flex: 1,
        flexDirection: 'row',

    },
    menuTitle: {
        fontSize: '50px',
        padding: '20px',
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
            <div style={styles.menu}>
                <div style={styles.menuTitle}>An Imaginative Restaurant</div>
                <ul style={styles.menuList}>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default Menu;
