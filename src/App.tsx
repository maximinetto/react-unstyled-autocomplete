// import { useEffect, useState } from "react";
import "./App.css";
import AutocompleteBaseUI from "./components/Autocomplete/BaseUI";
// import AutocompletePrimeReact from "./components/Autocomplete/PrimeReact";
// import getCountries, { Country } from "./country";

// import styles from "./styles.module.css";

function App() {
  // const [countries, setCountries] = useState<Country[]>([]);
  // const [selectedCountries, setSelectedCountries] = useState<Country | null>(
  //   null
  // );
  // const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  // useEffect(() => {
  //   getCountries().then((data) => setCountries(data));
  // }, []);

  return (
    <>
      {/* <AutocompletePrimeReact
        countries={countries}
        filteredCountries={filteredCountries}
        selectedCountries={selectedCountries}
        updateFilteredCountries={setFilteredCountries}
        updateSelectedCountries={setSelectedCountries}
      /> */}
      <AutocompleteBaseUI />
    </>
  );
}

export default App;
