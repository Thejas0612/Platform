import tick from "./tick.png";
import dash from "./dash.png";


const data = [

  {
    id:0,
    feature:"",
    bestFit:true,
    enhancedOffering:false
  },
  {
    id:1,
    feature:"",
    bestFit:true,
    enhancedOffering:true
  }
]
const MyTable = () => {
  return (
    <div style={{margin:'4rem'}}>
    <table>
      <thead>
       
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td></td>
            <td>
              {item.bestFit ?  <img  src={tick} alt="Example" /> : <img src={dash} alt="Example" />}
            </td>
            <td>
              {item.enhancedOffering ? <img src={dash} alt="Example" /> : <img src={dash} alt="Example" />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default MyTable;
