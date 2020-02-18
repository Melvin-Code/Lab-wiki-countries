// import React, { Component } from 'react';
// import countries from '../countries.json'
// import { Link } from 'react-router-dom'
// class Borders extends Component {
//     state ={
//         countries
//     }
//     showBordersLinks = () => {
//         let countryList = [...this.state.countries]
//         return countryList.borders.map(eachCountry => {
//             console.log(eachCountry);
//           return <Link key={eachCountry.cca3} to={`/country-detail/${eachCountry.cca3}`}>{eachCountry.borders}</Link>
//         })
//       }
//     render() {
//         return (
//             <li>
//                 <ul>

//                  {this.showBordersLinks()}
//                 </ul>
//         </li>
            
//         );
//     }
// }

export default Borders;