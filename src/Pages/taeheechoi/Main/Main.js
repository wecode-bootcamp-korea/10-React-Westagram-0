import React from 'react';
import Header from './Header/Header';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';
import './Main.scss';

class Main extends React.Component {
    render() {
        return (
            // React Fragment
            <>
                <Header />
                <div className="main">
                    <MainLeft />
                    <MainRight />
                </div>
            </>
        );
    }
}
export default Main;