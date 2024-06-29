import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../page/partials/Header';
import Content from './Content';
import { Footer } from '../page/partials/Footer';
import { Aboutus } from '../parent/Aboutus';
import { Contactus } from '../parent/Contactus';
import { Mycompany } from '../parent/Mycompany';
import { Service } from '../parent/Service';
import { Home } from '../parent/Home';

class GridLayout extends Component {
    render() {
        return (
            <div>
               
                {/* <Home />
                <Service />
                <Aboutus />
                <Mycompany />
                <Contactus />
                <Footer /> */}

                 {/* <Header /> */}

                <Content />

                <Footer /> 

                {/* <Header />
                <div className="app-wrapper">
                    <div className="app-content">
                        <div className="container-fluid p-0">
                            {/* <Content /> * /}
                            <Aboutus/>
                            {/* <div className="no-print" style={{ marginTop: 400 }}>&nbsp;</div> * /}
                        </div>

                        {/* toast parent 
                        <ToastContainer />* /}
                    </div>
                </div>
                <Footer /> */}
            </div>

        );
    }
}

export default GridLayout;