import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import "./chart.css"

const LineChart = (props) => {
  return (
    <>
      <div class="container">
        <div class="rotationText">{props.schema.options.scales.y.title.text}</div>
        <Line data={props.schema.data[0]} options={props.schema.options} />
      </div>
      <div class="center">
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="20" height="10" fill="#004b8d"></rect>
          <text x="25" y="10" class='text'>{props.schema.labels.tpeLabel}</text>
          <rect x="150" y="0" width="20" height="10" fill="#00805a"></rect>
          <text x="180" y="10" class='text' >{props.schema.labels.tpesLabel}</text>
        </svg>
      </div>
    </>
  )
}

export default LineChart;
