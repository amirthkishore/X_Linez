import { Route, Routes, useNavigate, useParams } from 'react-router-dom';


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
                    

                </Routes>
            </div>
        );
    }

export default Content;