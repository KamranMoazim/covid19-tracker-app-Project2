import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2';

function DailyUpdate() {

    const forWholeWorldTimeseriesDataUrl = "https://covid2019-api.herokuapp.com/v2/timeseries/global"
    const [globalTimeseriesData, setGlobalTimeseriesData]  = useState({})
    useEffect( () => {
        async function getData() {
            const response = await fetch(forWholeWorldTimeseriesDataUrl);
            let data = await response.json();
            setGlobalTimeseriesData(data)
        }
        getData();
    }, [])


    const data = globalTimeseriesData["data"]
    const dates = []
    const recovered = []
    const deaths = []
    const confirmed = []
    
    // useEffect( () => {

    if (data) {

        // const dates = []
        for (let i = 0; i < Object.keys(data).length; i++) {
            dates.push( Object.keys(data[i]) )
        }
        // console.log(dates)


        // const recovered = []
        let j = 0
        for (let i = 0; i < Object.keys(data).length; i++) {
            recovered.push(  data[i][dates[j]].recovered  )
                j++
        }
        // console.log(recovered)


        // const deaths = []
        let k = 0
        for (let i = 0; i < Object.keys(data).length; i++) {
            deaths.push(  data[i][dates[k]].deaths  )
                k++
        }
        // console.log(deaths)


        // const confirmed = []
        let l = 0
        for (let i = 0; i < Object.keys(data).length; i++) {
            confirmed.push(  data[i][dates[l]].confirmed  )
                l++
        }
        // console.log(confirmed)

        
        // const date = (data[0]["1/22/20"].recovered)
        // console.log(Object.values(data[301]))        
    }

// }, [])

    


    const lineData = {
        labels: dates,
        datasets: [
          {
            label: 'Confirmed',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(0,0,255,0.2)',
            borderColor: 'rgba(0,0,255,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0,0,255,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(0,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: confirmed
          },


          {
            label: 'Deaths',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,0,0,0.2)',
            borderColor: 'rgba(255,0,0,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255,0,0,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: deaths
          },



          {
            label: 'Recovered',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 255, 0,0.2)',
            borderColor: 'rgba(0, 255, 0,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 255, 0,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: recovered
          },

        ]
      }




    return (
        <>
            <h1 style={{textAlign:"center"}}>World Wide Summary</h1>
            <div style={{display: "flex", justifyContent: "center", width: "65%", padding: "115px", marginLeft: "150px", paddingTop: "30px", paddingBottom: "30px"}} >
                <Line data={lineData} />
            </div>
        </>
    )
}

export default DailyUpdate
