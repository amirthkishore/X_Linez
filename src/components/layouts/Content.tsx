import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Aboutus } from '../parent/Aboutus';
import { Service } from '../parent/Service';
import { Mycompany } from '../parent/Mycompany';
import Contactus from '../parent/Contactus';
import { Home } from '../parent/Home';

let Content = () => {
        let navigate = useNavigate()
        let param = useParams()

        return (
            <div>
                <Routes>
                    {/* <Route path="/" element={<Dashboard navigate={navigate} params={param}/>} /> 
                    <Route path="/" element={<DashboardFn/>} />
                    <Route path="/reports" element={<ReportsMain/>} />
                    <Route path="/statement/invoices" element={<InvoiceList/>} /> */}

                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/service' element={<Service />}></Route>
                    <Route path='/ourcompany' element={<Mycompany />}></Route>
                    <Route path='/contactus' element={<Contactus />}></Route>                   
                    <Route path='/aboutus' element={<Aboutus/>} ></Route>

                </Routes>
            </div>
        );
    }

export default Content;