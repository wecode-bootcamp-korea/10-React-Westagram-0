import React from 'react';
import './Main.scss';

import Header from './Header.Header';
import MainLeft from './MainLeft.MainLeft';
import MainRight from './MainRight.MainRight';
import { Redirect } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main">
                    <MainLeft />
                    <MainRight />
                </div>
            </div>
        );
    }
}
export default Main;