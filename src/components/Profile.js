import imagem from "../assets/images/puppy.jpg"

function Profile(){
    return (
    <div class="card" style={{width: "20rem"}}>
    <img src={imagem} class="card-img-top" alt="filhote de cachorro" />
        <div className="card-body">
            <h5 className="card-title">Cute Puppy</h5>
            <p className="card-text"></p>
        </div>
    </div>
    )
}

export default Profile

