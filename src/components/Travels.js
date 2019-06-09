import React, {Component} from 'react'
import Travel from './Travel'
import travelController from '../controllers/travels'
import axios from 'axios'
import style from '../styles/styles'

class Travels extends Component {
    constructor(props) {
        super()
        this.state = {
            places: [],
            formNames: {
                destiny: '' ,
                price: '',
                discount: '',
                dateInit: '',
                dateTurn: '',
                imgpath: ''
            }
        }
    
        travelController.getTravels()
        .then(res => {
            const places = res.data;
            this.setState({ places });
        })

        this.formHandler = this.formHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }
    
    // FORM FUNCTIONS

    inputChangeHandler(e) {
        
        let formNames = {...this.state.formNames};
        formNames[e.target.name] = e.target.value;
        this.setState(
            {formNames}
        ); 
    }

    formHandler(event) {
        let formNames = this.state.formNames
        axios.post('http://localhost:3000/api/travels', formNames)
            .then((response) => {
                
            this.setState({
                places: [
                    ...this.state.places,
                    response.data
                ],
                formNames: {
                    destiny: '' ,
                    price: '',
                    discount: '',
                    dateInit: '',
                    dateTurn: '',
                    imgpath: ''
                }
            })         

            })
            .catch((error) => {})
        event.preventDefault()
    }

    render() {
        return(
            <div>
                {<form onSubmit={this.formHandler} style={style.form}>
                    <input name="destiny" placeholder="destiny" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.destiny} style={style.input}></input>
                    <input name="price" placeholder="price" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.price} style={style.input}></input>
                    <input name="discount" placeholder="discount" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.discount} style={style.input}></input>
                    <input name="dateInit" placeholder="dateInit" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.dateInit} style={style.input}></input>
                    <input name="dateTurn" placeholder="dateTurn" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.dateTurn} style={style.input}></input>
                    <input name="imgpath" placeholder="imgpath" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.imgpath} style={style.input}></input>
                    <input type="submit" value="guardar"></input>
                </form>}

                <div style={style.container}>
                {this.state.places.map((item, i) =><Travel key={i} {...item}></Travel>)}
                </div>
            </div>
        )
    }
}

export default Travels