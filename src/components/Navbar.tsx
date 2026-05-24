import '../styles/navbar.css'
import logo from '../assets/sun.png';
import myLocationSm from '../assets/myLocationSm.png'

import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction
} from "react";

type NavbarProps = {
    city : string
    setCity : Dispatch<SetStateAction<string>>;
}

function Navbar({ setCity} : NavbarProps) {  
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setSearchInput(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (!searchInput.trim()) return;

    setCity(searchInput);

    setSearchInput("");
  };

  return (
    <div className="navbar flex justify-between px-30 py-4">
        <div className="logo flex  gap-2">
            <img src={logo} alt="logo" />
            <h1 className="text-3xl font-bold text-purple-500"><span className='text-white'>Moody</span>Cast</h1>
        </div>
        <div className="searchBar flex">
            <form className='flex' onSubmit={handleSubmit}>
                <input type="text" className="search border border-gray-400 rounded-sm bg-gray-200 px-8 py-2" placeholder="Search your location" value={searchInput}  onChange={handleChange}/>
                <button type="submit" className='font-bold bg-gray-200  text-white px-2 rounded-sm'><img src={myLocationSm} alt="my location" /></button>
            </form>
        </div>
    </div>
  )
}

export default Navbar