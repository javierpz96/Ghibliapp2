import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import { store } from "./store";
import { FilmsPage, PersoPage, LocationPage } from "./pages";
import { Header, Section, PersoDetail, FilmDetail, Article, Footer } from "./components";
import LocationsDetail from "./components/Detail/LocationsDetail";

const App = () => {
    const location = useLocation();
    return (
        <Provider store={store}>
            <AnimatePresence>
                <div>
                    <Header />
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Section />}></Route>
                        <Route path="/films" element={<FilmsPage />}></Route>
                        <Route path="/perso" element={<PersoPage />}></Route>
                        <Route path="/locations" element={<LocationPage />}></Route>
                        <Route path="/perso/:persoId" element={<PersoDetail />}></Route>
                        <Route path="/films/:filmId" element={<FilmDetail />}></Route>
                        <Route path="/locations/:locaId" element ={<LocationsDetail/>}></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>

                    
                    <Footer />
                </div>
            </AnimatePresence>
        </Provider>
    );
};

export default App;
