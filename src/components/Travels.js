import React, {Component} from 'react'
import Travel from './Travel';
import travelController from '../controllers/travels'

class Travels extends Component {
    constructor(props) {
        super()
        this.state = {
            places: []
        }
        travelController.getTravels()
        .then(res => {
            const places = res.data;
            this.setState({ places });
          })
    }

    render() {
        return(
            <div>
                {this.state.places.map(item =><Travel {...item}></Travel>)}
            </div>
        )
    }
}

export default Travels



/* 
    onAddFilm(event){
        console.log(this.state.title);
        this.setState({
            films: [
                ...this.state.films,
                {title: this.state.title}
            ],
            title: '',
        })
        event.preventDefault();
    }
*/