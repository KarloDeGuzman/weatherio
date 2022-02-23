import { useState, useRef } from 'react';
import styles from './SearchBox.module.css';

function SearchBox({ location, setLocation }) {
  const [usedLocation, setUsedLocation] = useState(location);
  const locationRef = useRef();
  function handleOnSubmitSearch(e) {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === 'location');

    const value = fieldQuery.value || '';
    setUsedLocation(locationRef.current.value);
    setLocation(value);
  }

  return (
    <div className="relative">
      <form className="search" onSubmit={handleOnSubmitSearch}>
        <input
          type="text"
          name="location"
          type="search"
          defaultValue={usedLocation}
          ref={locationRef}
          placeholder=" "
          className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent bg-transparent"
        />
        <label
          htmlFor="location"
          className={`${styles.floatingLabel} peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
        >
          Location
        </label>
        <div className="text-center">
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-3.5 py-2 mt-2 mr-2 mb-2
          dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
