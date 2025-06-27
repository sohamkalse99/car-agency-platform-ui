import { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';

interface Owner {
    id : number;
    full_name : string;
    ph_no: number;
    other_info: string;
    travel_agency_name : string;
  }
function Home() {

  
  const [owners, SetOwners] = useState<Owner[]>([]);
  
  async function fetchData() {
      let data = await fetch("mock_data.json");
      let res = await data.json();
      SetOwners(res);
    }

  useEffect(()=>{

    fetchData();
  }, [])

  return (


    <div className='flex flex-wrap p-4 gap-6 justify-center'>
      {owners.map((owner)=>(
        <Link key={owner.id}to={`/owner/${owner.id}`}>
          <Card owner={owner}/>
        </Link>
      ))}
    </div>
  )
}

export default Home