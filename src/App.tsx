import { PrimeReactProvider } from "primereact/api";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import getCountries, { Country } from "./country";
import styles from "./styles.module.css";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country | null>(
    null
  );
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const autocompleteRef = useRef<AutoComplete>(null);

  const search = (event: AutoCompleteCompleteEvent) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredCountries;

      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country) => {
          return country.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredCountries);
    }, 250);
  };

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);

  const highlight = () => {
    if (!autocompleteRef.current) return;
    if (!autocompleteRef.current.getOverlay()) return;

    const elementsHighlight = autocompleteRef.current
      .getOverlay()
      .querySelectorAll("[data-p-highlight]");
    for (const element of elementsHighlight) {
      if (element instanceof HTMLElement) {
        const isHighlight = element.dataset["pHighlight"] === "true";
        if (!isHighlight) element.classList.remove(styles.suggestionHighlight);
        else element.classList.add(styles.suggestionHighlight);
      }
    }
  };

  return (
    <>
      <PrimeReactProvider value={{ unstyled: false }}>
        <AutoComplete
          field="name"
          multiple
          value={selectedCountries}
          suggestions={filteredCountries}
          completeMethod={search}
          onChange={(e) => setSelectedCountries(e.value)}
          ref={autocompleteRef}
          onKeyUp={highlight}
          pt={{
            container: {
              className: styles.container,
            },
            token: {
              className: styles.chip,
            },
            input: {
              className: styles.input,
            },
            inputToken: {
              className: styles.inputWrapper,
            },
            panel: {
              className: styles.suggestionsWrapper,
            },
            list: {
              className: styles.suggestions,
            },
            item: {
              className: styles.suggestion,
            },
            root: {
              className: styles.root,
            },
            loadingIcon: {
              className: styles.loadingIcon,
            },
          }}
          unstyled={true}
        />
      </PrimeReactProvider>
    </>
  );
}

export default App;
