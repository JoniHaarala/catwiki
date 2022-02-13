import React, { useState } from "react";
import "../../styles/global.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        //searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="font-['Montserrat','sans-serif']">
            <div className="text-black flex items-center">
                <input
                    className="bg-white text-black border-0 rounded-full text-md px-4 h-8 w-24 md:w-64 text-xs md:text-sm placeholder:text-xs"
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon className="cursor-pointer" id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (

                <div className="mt-3 md:mt-6 w-40 md:w-80 rounded-2xl min-h-min max-h-48 absolute bg-white shadow-md overflow-hidden overflow-y-scroll text-xs md:text-sm">
                    {filteredData.slice(0, 10).map((value, key) => {
                        return (
                            <a className="w-full h-12 flex items-center text-black no-underline hover:bg-gray-200" href={"google.com/"+value.id} target="_blank" rel="noreferrer">
                                <p className="ml-3">{value.name} </p>
                            </a>
                        );
                    })}
                </div>

            )}
        </div>
    );
}

export default SearchBar;