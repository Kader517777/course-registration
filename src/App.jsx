
import { useState } from 'react';
import './App.css'
import Courses from './component/Courses'
import CourseName from './component/CourseName/CourseName';

function App() {

  const [data, setData] = useState([]);
  const [reamining, setReamining] = useState(20);
  const [totaCredit, setTotaCredit] = useState(0);
  const [totaCost, setTotaCost] = useState(0);
  const [id, setId] = useState([]);
  // console.log(data);

  const handleCart = (props, id) => {
    const courss = props.course;

    const isExits = data.find(items => items.id == courss.id);
    if (isExits) {
      return alert('ther is blocked');
    }
    else {
      let count = reamining;
      let credit = totaCredit;
      let cost = totaCost;
      console.log('declare count', count);
      console.log('declare credit', count);
      console.log('declare cost', cost);

      count = count - courss.credie;
      credit = credit + courss.credie;
      cost = cost + courss.price;
      console.log('minus count', count);
      console.log('minus credit', credit);
      console.log('plus cost', cost);


      if (count <= 0) {
        return alert('ar na');
      }
      else {
        // console.log('this is else ', count);
        const final = [...data, courss];
        setData(final);
        setReamining(count);
        setTotaCredit(credit);
        setTotaCost(cost);
      }


    }


    setId(id);
  }
  return (
    <div className='grid grid-cols-4 gap-4'>
      <Courses handleCart={handleCart}></Courses>
      <div>
        <div className="card bg-base-100 shadow-xl p-4 mt-2">
          <p><CourseName
            data={data}
            id={id}
            key={id}
            reamining={reamining}
            totaCredit={totaCredit}
            totaCost={totaCost}
          ></CourseName></p>
        </div>
      </div>
    </div>
  )
}

export default App
