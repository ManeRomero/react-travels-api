import React, {Component} from 'react'
import Travel from './Travel'
import travelController from '../controllers/travels'
import axios from 'axios'

class Travels extends Component {
    constructor(props) {
        super()
        this.state = {
            places: [],
            formNames: [{destiny: ''}, {price: ''}, {discount: ''}, {dateInit: ''}, {dateTurn: ''}, {imgpath: ''}],
/*             destiny: '',             
            price : '',
            discount : '',
            dateInit : '',
            dateTurn : '',  
            imgpath : '' */
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
            {...this.state.formNames}
        ],
        destiny: '',
        price : '',
        discount : '',
        dateInit : '',
        dateTurn : '',  
        imgpath : ''
    })

        event.preventDefault();
    }
    
    // FORM FUNCTIONS

/*     keyDestiny (event) {
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
    } */

    inputChangeHandler(e) {
        let formNames = {...this.state.formNames};
        formNames[e.target.name] = e.target.value;
        console.log('FORMNAMES', formNames)
  /*    this.setState({
        formNames
        }); */
    }

    formHandler(form) {
        console.log(form, 'FORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRM')
        axios.post('http://localhost:3000/api/travels', form)
            .then(function(response){
            console.log(response);
            //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
            //Perform action based on error
        });
    }

    render() {
        return(
            <div>
                <h3>Introduce un Destino</h3>                
{                 <form onSubmit={this.formHandler(this.state.formNames)}>
                    <input name="destiny" placeholder="destiny" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.destiny}></input>
                    <input name="price" placeholder="price" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.price}></input>
                    <input name="discount" placeholder="discount" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.discount}></input>
                    <input name="dateInit" placeholder="dateInit" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.dateInit}></input>
                    <input name="dateTurn" placeholder="dateTurn" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.dateTurn}></input>
                    <input name="imgpath" placeholder="imgpath" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.imgpath}></input>
                    <input type="submit" value="guardar"></input>
                </form>}

                {this.state.places.map(item =><Travel {...item}></Travel>)}
            </div>
        )
    }
}

export default Travels