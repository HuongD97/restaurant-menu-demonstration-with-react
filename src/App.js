import React, {Component} from 'react';
import Menu from "./components/Menu";

class App extends Component {
    render() {
        const dishes = [
            {
                itemName: `Noodle Bowl`,
                itemDescription: `Try wok-fried coconut tofu, soy beans, sugar snap peas, bok choy and shiitake 
                mushrooms in a red curry broth at the place to
                 “see and be seen” at Disney’s Hollywood Studios.`,
                altTitle: `Noodle bowl image`,
                imageURL: `https://loinhacviet.info/images/pasta-clipart-food-tech.jpg`

            },
            {
                itemName: `Vegetable and Tofu Sambusas`,
                itemDescription: `These tasty sambusas are served with mint-coconut chutney, 
                coriander-tamarind yogurt and saffron-cashew rice.`,
                altTitle: `Sambusas image`,
                imageURL: `https://image.shutterstock.com/image-photo/indian-delicious-deep-fried-breakfast-260nw-695781277.jpg`
            }];
        return (
            <Menu dishes={dishes}/>
        );
    }
}

export default App;
