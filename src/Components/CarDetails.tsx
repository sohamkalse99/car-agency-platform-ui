import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

interface Car {
  id: number;
  car_model:string;
  type:string;
  cost_per_km:number;
}

interface Owner {
  id : number;
  full_name : string;
  ph_no: number;
  other_info: string;
  travel_agency_name : string;
  cars : Car[];
}

// interface Driver {
//   id : number;
//   full_name : string;
//   ph_no: number;
//   other_info:string;
//   travel_agency_name:string;
//   driver_cost_per_day:string;
// }

function CarDetails() {

  let {id} = useParams();
  const[cars, setCars] = useState<Car[]>([]);

  async function fetchCarDetails() {
    let data = await fetch("/mock_data.json");
    let res = await data.json();
    let filteredOwner = res.filter((owner : Owner)=>{
 
      if(owner.id === Number(id)) {
        return owner;
      }
      
    })

    if(filteredOwner.length > 0) {
      setCars(filteredOwner[0].cars);
    } else {
      console.log("no owner found");
    }
    
  }
  useEffect(()=>{
    fetchCarDetails()
  }, [])
  return (
    <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-8 mx-8'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Car Models</th>
            <th>Type</th>
            <th>Cost per km</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index)=>(
            <tr key={car.id}>
              <th>{index+1}</th>
              <td>{car.car_model}</td>
              <td>{car.type}</td>
              <td>{car.cost_per_km}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default CarDetails