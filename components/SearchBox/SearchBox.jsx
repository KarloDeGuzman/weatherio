function SearchBox({ setWeatherForecaseData }) {
  const onChangeLocation = (e) => {
    debugger;
    let location = e.target.value;
    if (location > 3) {
      setWeatherForecaseData(location);
    }
  };

  return (
    <div className="my-8 w-full border-b-2 focus-within:border-blue-500">
      <input
        type="text"
        name="location"
        placeholder=""
        onChange={onChangeLocation}
      />
      <label htmlFor="location">Location</label>
    </div>
  );
}

export default SearchBox;
