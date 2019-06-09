let card = {
    position: 'relative',
    display: 'block',
    minWidth: 0,
    backgroundColor: '#8000805c',
    backgroundClip: 'border-box',
    width: '30%',
    margin: '10px auto',
    padding: '5px',
    alignItems: 'center'
}

let imgSizer = {
    width: '100%',
    height: 'auto',
}

let container = {
    width: '95vw',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'wrap'
}

let form = {
    display: 'flex',
    margin: 'auto',
    position: 'sticky',
    justifyContent: 'space-around',
    top: 0,
    backgroundColor: 'rgba(228, 211, 128)',
    zIndex: 1000,
    padding: '2vw'
}

let input = {
    outlineStyle: 'none',
    backgroundColor: 'transparent',
    border: 0,
    borderBottom: '4px solid #8000805c'
}

export default {
    card,
    imgSizer,
    container,
    form,
    input
}