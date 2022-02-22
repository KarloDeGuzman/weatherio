import styles from './SearchBox.module.css';

function SearchBox({ location, setLocation, setWeatherForecastData }) {
  const onChangeLocation = (e) => {
    debugger;
    let location = e.target.value;
    if (location > 3) {
      setLocation(location);
      // setWeatherForecastData(location);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        name="location"
        placeholder=" "
        value={location}
        onChange={onChangeLocation}
        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 placeholder-transparent bg-transparent"
      />
      <label
        htmlFor="location"
        className={`${styles.floatingLabel} peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}
      >
        Location
      </label>
    </div>
  );
}

export default SearchBox;
