import Offers from "./Offers";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./pages/Navigation";
import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
    return (
        <div className='bg'>
                <div>
                    <Navigation/>
                    <Header/>
                    <Main/>
                    <Offers/>
                    <Footer/>
                </div>
        </div>
    );
}

export default App;