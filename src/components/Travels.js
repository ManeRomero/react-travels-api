import React, {Component} from 'react'
import Travel from './Travel'
import travelController from '../controllers/travels'
import axios from 'axios'

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
    
        this.formHandler = this.formHandler.bind(this);

        travelController.getTravels()        
        .then(res => {
            const places = res.data;
            this.setState({ places });
          })
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
        console.log(this.state.formNames);
        axios.post('http://localhost:3000/api/travels', this.state.formNames)
            .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });

        event.preventDefault();
    }

    render() {
        return(
            <div>
                <h3>Introduce un Destino</h3>                
{                 <form onSubmit={this.formHandler}>
                    <input name="destiny" placeholder="destiny" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.destiny}></input>
                    <input name="price" placeholder="price" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.price}></input>
                    <input name="discount" placeholder="discount" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.discount}></input>
                    <input name="dateInit" placeholder="dateInit" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.dateInit}></input>
                    <input name="dateTurn" placeholder="dateTurn" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.dateTurn}></input>
                    <input name="imgpath" placeholder="imgpath" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formNames.imgpath}></input>
                    <input type="submit" value="guardar"></input>
                </form>}

                {this.state.places.map((item, i) =><Travel key={i} {...item}></Travel>)}
            </div>
        )
    }
}

export default Travels