import Header from './header';
import CardPizza from './cardpizza';
import napolitana from "../assets/img/napolitana.png";
import espanola from "../assets/img/espanola.png";
import peperoni from "../assets/img/peperoni.png";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <CardPizza
                            name="Napolitana"
                            price={5950}
                            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                            img={napolitana}
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardPizza
                            name="Española"
                            price={6950}
                            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                            img={espanola}
                        />
                    </div>
                    <div className="col-md-4 mb-4">
                        <CardPizza
                            name="Pepperoni"
                            price={6950}
                            ingredients={["mozzarella", "pepperoni", "orégano"]}
                            img={peperoni}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
