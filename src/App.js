import React from 'react';
import classes from './App.module.css';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api';

class App extends React.Component {
  state = {
    data :{},
    country : '',
    
  }

  async componentDidMount(){
     const fetchedData = await fetchData();
     this.setState({
       data : fetchedData
     })

     console.log(new Date(this.state.data.lastUpdate).toDateString);
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({
      country : fetchedData,
      
    })
  }


  render() {
  const data = this.state.data;
  const country = this.state.country;

  return (
    <div className={classes.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
        
    </div>
  );
  }
}

export default App;
