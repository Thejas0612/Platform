import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = (props) => {
 
  return <Line data={props.schema.data[0]} options={props.schema.options} />;
};

export default LineChart;
