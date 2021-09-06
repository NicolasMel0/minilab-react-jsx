const humor = 'Happy';

function Face() {
    return (
        <div>
            {humor === 'Sad' ? (
                <i class="fas fa-frown fa-10x"></i>
            ) : humor === 'Happy' ? (
                <i class="fas fa-smile-wink fa-10x"></i>
            ) : (
                'valor falso use Happy ou Sad'
            )}
        </div>
    );
}

export default Face;
