import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class CountryDetails extends Component {
  state = {
    allcountries: ''
  }

    findDetails = () => {
      
      console.log('country detail cca3:',this.props.match.params.hippopotamus, this.props.countries)

        
        
    }



    render() {

      let theCountry = this.props.countries.find(eachCountry => {
        return eachCountry.cca3 === this.props.match.params.hippopotamus
    })
      console.log(this)
        return (
            <div className="col-7">

            <h1>{theCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{theCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{theCountry.area}km
           <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {theCountry.borders.map((each)=>{
                        return <li><Link to={each}>{each}</Link></li>
                      })}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default CountryDetails;