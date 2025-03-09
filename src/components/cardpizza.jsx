import { Card, Button } from "react-bootstrap";

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <Card className="text-center shadow-sm card-pizza">
            <Card.Img variant="top" src={img} className="card-img-fixed" />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Text className="flex-grow-1">
                    <strong>Ingredientes:</strong> {ingredients.join(", ")}
                </Card.Text>
                <Card.Text>
                    <strong>Precio:</strong> ${price.toLocaleString()}
                </Card.Text>
                <div className="mt-auto d-flex justify-content-around">
                    <Button variant="outline-secondary">Ver Más</Button>
                    <Button variant="dark">Añadir 🛒</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;
