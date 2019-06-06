import React, {Component} from 'react'
import Travel from './Travel';
import travelController from '../controllers/travels'

class Travels extends Component {
    constructor(props) {
        super()
        this.state = {
            places: [],
             
    imgpath : '',
    price : '',
    discount : '',
    dateInit : '',
    dateTurn : '' 
    
        }
    
        this.addFilm = this.addFilm.bind(this);


        travelController.getTravels()        
        .then(res => {
            const places = res.data;
            this.setState({ places });
          })
    }

    addFilm(event){
        
        this.setState({
            places: [
                {destiny: travelController.postTravel()}
                /*                 
                
                {destiny: this.state.destiny},
                {price: this.state.price},
                {discount: this.state.discount},
                {dateInit: this.state.dateInit},
                {dateTurn: this.state.dateTurn},
                {imgpath: this.state.imgpath}
            ],

            title: '',
            imgpath: '',
            price: '',
            discount: '',
            dateInit: '',
            dateTurn: ''  */
        ]
        })

        event.preventDefault();
    }
    
    // FORM FUNCTIONS

    keyDestiny (event) {
        this.setState({
            destiny: event.target.value
        })        
    }

    keyImgpath (event) {
          this.setState({
            imgpath: event.target.value
        })        
    }

    keyPrice (event) {
        this.setState({
            price: event.target.value
        })        
    }

    keyDiscount (event) {
        this.setState({
            discount: event.target.value
        })        
    }

    keyDateInit (event) {
        this.setState({
            dateInit: event.target.value
        })        
    }

    keydateTurn (event) {
        this.setState({
            dateTurn: event.target.value
        })        
    }

    render() {
        return(
            <div>
                {this.state.places.map(item =><Travel {...item}></Travel>)}
                <h3>Introduce un Destino</h3>
                
{                 <form onSubmit={this.addFilm}>
                    <input name="destiny" placeholder="destiny" value={this.state.destiny} onChange={(event) => this.keyDestiny(event)}></input>
                    <input name="price" placeholder="price" value={this.state.price} onChange={(event) => this.keyPrice(event)}></input>
                    <input name="discount" placeholder="discount" value={this.state.discount} onChange={(event) => this.keyDiscount(event)}></input>
                    <input name="dateInit" placeholder="dateInit" value={this.state.dateInit} onChange={(event) => this.keyDateInit(event)}></input>
                    <input name="dateTurn" placeholder="dateTurn" value={this.state.dateTurn} onChange={(event) => this.keydateTurn((event))}></input>
                    <input name="imgpath" placeholder="imgpath" value={this.state.imgpath} onChange={(event) => this.keyImgpath(event)}></input>
                    <input type="submit" value="guardar"></input>
                </form>}
            </div>
        )
    }
}

export default Travels