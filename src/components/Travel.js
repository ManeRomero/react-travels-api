import React, {Component} from 'react'
import style from '../styles/styles'

class Travel extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div style={style.card}>
                <h1>{this.props.destiny}</h1>
                <img style={style.imgSizer} alt={this.props.destiny + ' por ' + this.props.price} src={this.props.imgpath}/>
                <h3>{this.props.price}€.</h3>
                <h3>{this.props.discount ? `${this.props.discount}% de Descuento` : 'Descuento No Disponible'}</h3>
                <small>Del {this.props.dateInit} al {this.props.dateTurn}</small>
            </div>
        )
    }
}

export default Travel