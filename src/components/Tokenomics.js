import {Chart, Tooltip, Title, ArcElement } from 'chart.js'
import { Doughnut } from "react-chartjs-2";
import token from '../assets/token.png'
Chart.register(Tooltip, Title, ArcElement);

export default function Tokenomics() {
    const state = {
        labels: ['Presale', 'Liquidity', 'Marketing', 'Staking', 'Academy and Charity', 'Team', 'Reserve for Game '],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#52d726',
            '#ffec00',
            '#ff7300',
            '#ff0000',
            '#007ed6',
            '#7cdddd',
            '#354d00'
            
            ],
            // hoverBackgroundColor: [
            // '#52d726',
            // '#ffec00',
            // '#ff7300',
            // '#ff0000',
            // '#007ed6',
            // '#7cdddd'
            // ],
            data: [35, 30, 5, 15, 5, 3, 7]
          }
        ]
      }
    return(<div>
        <h1 className='text-center font-bold text-3xl md:text-6xl text-slate-100 wow fadeInUp' data-wow-duration="2s">Tokenomics</h1>
        <div className='flex flex-wrap p-5'>
            <div className='w-full md:w-1/2 wow fadeInUp' data-wow-duration="2s">
                <div className='w-2/3 md:2/3 mx-auto wow fadeInUp' data-wow-duration="2s">
                <Doughnut
            data={state}
            options={{
              
              htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-container',
              },
              legend:{
                display:false,
              },
              defaults:{
                legend:false
              }
            }}
          />
                </div>
            </div>
            <div className='wow fadeInUp' data-wow-duration="2s">
                <img className='block mx-autowow fadeInUp' data-wow-duration="2s" src={token}/>
                </div>
        </div>
    </div>)
};
