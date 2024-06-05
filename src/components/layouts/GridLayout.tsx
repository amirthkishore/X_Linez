import { Component } from 'react';
//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../page/partials/Header';
import Content from './Content';
import { Footer } from '../page/partials/Footer';

class GridLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="app-wrapper">
                    <div className="app-content">
                        <div className="container-fluid p-0">
                            <Content />
                            <div className="no-print" style={{ marginTop: 400 }}>&nbsp;</div>
                        </div>

                        {/* toast parent 
                        <ToastContainer />*/}
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default GridLayout;