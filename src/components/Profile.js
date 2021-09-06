import imagem from '../assets/images/puppy.jpg';

function Card() {
    return (
        <div>
            <div className="card" styles="width: 16rem;">
                <img
                    src={imagem}
                    className="card-img-top"
                    alt="Imagens de um cachorrinho"
                />
                <div className="card-body">
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
