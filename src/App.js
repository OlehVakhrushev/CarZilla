import Offers from "./Offers";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./pages/Navigation";
import Main from "./pages/Main";
import background from './logo/background.jpg'
import background_style from './background_style.css'

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