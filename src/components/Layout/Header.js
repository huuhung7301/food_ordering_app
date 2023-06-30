import classes from './Header.module.css';
import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Food Ordering Application</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Table full of food'/>
        </div>
    </Fragment>
};

export default Header;