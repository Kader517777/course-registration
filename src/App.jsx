
import { useState } from 'react';
import './App.css'
import Courses from './component/Courses'
import CourseName from './component/CourseName/CourseName';

function App() {

  const [data, setData] = useState([]);
  const [_data, set_Data] = useState([]);
  const [id, setId] = useState([]);
  // console.log(data);

  const handleCart = (props, id) => {
    const courss = props.course;
    const isExits = data.find(items => items.id == courss.id);
    if (isExits) {
      return alert('ther is blocked');
    }
    else {
      const final = [...data, courss];
      setData(final);
    }


    setId(id);
  }
  return (
    <div className='grid grid-cols-4 gap-4'>
      <Courses handleCart={handleCart}></Courses>
      <div>
        <div className="card bg-base-100 shadow-xl p-4 mt-2">


          <p><CourseName data={data} id={id} key={id}></CourseName></p>


        </div>
      </div>
    </div>
  )
}

export default App
