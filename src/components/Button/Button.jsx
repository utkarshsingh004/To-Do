import './Button.css';

function Button({ name, click, col }) {
    return (
        <button style={{ cursor: 'pointer', backgroundColor: col }} onClick={click}>
            {name}
        </button>
    );
}

export default Button;
