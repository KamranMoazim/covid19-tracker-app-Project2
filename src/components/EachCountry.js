import React, { useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2';

function EachCountry(props) {

    // const [country, setCountry] = ""



    const forEachCountryDataUrl = `https://covid2019-api.herokuapp.com/v2/country/${props.country}`
    const [eachCountryData, setEachCountryData]  = useState({})
    useEffect( () => {
        async function getData() {
            const response = await fetch(forEachCountryDataUrl);
            let data = await response.json();
            setEachCountryData(data)
        }
        getData();
    }, [])


    const data = eachCountryData["data"]
    let countryName = ""
    let recovered = 0
    let deaths = 0
    let confirmed = 0
    let active = 0

    if (data) {
        countryName = data["location"]
        recovered = data["recovered"]
        deaths = data["deaths"]
        confirmed = data["confirmed"]
        active = data["active"]
    }


    const barData = {
        labels: ['Recovered', 'Deaths', 'Confirmed', 'Active'],
        datasets: [
          {
            label: countryName,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [recovered, deaths, confirmed, active]
          }
        ]
      };

    return (


        <>
            <h1 style={{textAlign:"center"}}>{countryName}</h1>
            <div style={{display: "flex", justifyContent: "center", width: "65%", marginLeft: "260px"}} >
                <Bar data={barData} width={100} height={50} />
            </div>
        </>

       
    )
}

export default EachCountry
