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

  let handleEnquiry = async () => {
    let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({message: `Message from soham`}),
      }
      )
      
      let data = await response.json();

      console.log(data);
  }

  return (
    
    <div>
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

      <div className='m-6'>
        Want to enquire? 
        <button className='btn mx-2' onClick={handleEnquiry}>Enquire</button>
      </div>
    </div>
  )
}

export default CarDetails