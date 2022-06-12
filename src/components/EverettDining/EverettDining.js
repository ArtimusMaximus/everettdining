import React, { Component } from 'react';
import DiningSingle from './DiningSingle';
import Header from '../Header';
import EverettSearch from './EverettSearch';
import './diningsingle.css';

class EverettDining extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dining: [],
            website: [],
            phone: [],
            searchQuery: '',
            displayResults: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.resetQuery = this.resetQuery.bind(this)
    }
    

    componentDidMount() {
        const url1 = `https://data.everettwa.gov/resource/m267-sbt9.json`
        const dinersList = []

        fetch(url1)
          .then((res) => {
              return res.json()
          })
          .then((data) => {
            for (let i in data) {
                dinersList.push({
                    dinerName: data[i].business_name,
                    dinerPhone: data[i].phone,
                    dinerAddress: data[i].geolocation_formatted_address,
                    dinerWebsite: data[i].website?.url,
                    dinerDelivery: data[i].delivery,
                    dinerTakeout: data[i].takeout,
                    dinerCashless: data[i].cashless

                })
            }

              this.setState({
                  displayResults: dinersList
              })
          })
          .catch((err) => console.log(err))

    }

    renderItems() {
        
        const dataFilter = item =>
        item.dinerName
            .toLowerCase()
            .match(this.state.searchQuery.toLowerCase()) && true;
        const filteredResults = this.state.displayResults.filter(dataFilter);

        return filteredResults.map((diner, i) => (
            <React.Fragment key={i}>
                <DiningSingle diner={diner} />
            </React.Fragment>
        ))
            
    }

    handleChange = (e) => {
        const searchName = e.target.name;
        const searchValue = e.target.value;

        this.setState({
            [searchName]: searchValue
        });
    }

    resetQuery = () => {
        this.setState({ 
            searchQuery: ''
        })
    }

    render() {
        return (
            <div className="row">
                
                    <h1>Search</h1>
                    <div className="col s12">
                        <a className='btn btn-large col s2 blue-grey darken-2 fade-in-image' onClick={this.resetQuery}>Reset</a>
                        <div className="input-field inline col s10">
                            <input
                                id="icon_prefix"
                                placeholder={'Enter Search'} 
                                value={this.state.searchQuery} 
                                onChange={this.handleChange}
                                name="searchQuery"
                                type="text"
                                className="validate"
                                style={{verticalAlign: 'middle'}}
                            />
                        </div>
                    </div>
                
                {this.renderItems()}
                
            </div>
        )
    }
}

export default EverettDining;