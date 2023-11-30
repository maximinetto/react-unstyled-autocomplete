import { PrimeReactProvider } from "primereact/api";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { useRef } from "react";
import { Country } from "../../country";
import {
  chip,
  container,
  input,
  inputWrapper,
  loadingIcon,
  root,
  suggestion,
  suggestionHighlight,
  suggestions,
  suggestionsWrapper,
} from "./PrimeReact.css";

type Props = {
  countries: Country[];
  selectedCountries: Country | null;
  filteredCountries: Country[];
  updateFilteredCountries: (filteredCoutries: Country[]) => void;
  updateSelectedCountries: (filteredCoutries: Country | null) => void;
};

export default function AutocompletePrimeReact({
  countries,
  selectedCountries,
  filteredCountries,
  updateFilteredCountries,
  updateSelectedCountries,
}: Props) {
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

      updateFilteredCountries(_filteredCountries);
    }, 250);
  };

  const highlight = () => {
    if (!autocompleteRef.current) return;
    if (!autocompleteRef.current.getOverlay()) return;

    const elementsHighlight = autocompleteRef.current
      .getOverlay()
      .querySelectorAll("[data-p-highlight]");
    for (const element of elementsHighlight) {
      if (element instanceof HTMLElement) {
        const isHighlight = element.dataset["pHighlight"] === "true";
        if (!isHighlight) element.classList.remove(suggestionHighlight);
        else element.classList.add(suggestionHighlight);
      }
    }
  };

  return (
    <PrimeReactProvider value={{ unstyled: true }}>
      <AutoComplete
        field="name"
        multiple
        value={selectedCountries}
        suggestions={filteredCountries}
        completeMethod={search}
        onChange={(e) => updateSelectedCountries(e.value)}
        ref={autocompleteRef}
        onKeyUp={highlight}
        pt={{
          container: {
            className: container,
          },
          token: {
            className: chip,
          },
          input: {
            className: input,
          },
          inputToken: {
            className: inputWrapper,
          },
          panel: {
            className: suggestionsWrapper,
          },
          list: {
            className: suggestions,
          },
          item: {
            className: suggestion,
          },
          root: {
            className: root,
          },
          loadingIcon: {
            className: loadingIcon,
          },
        }}
        unstyled={true}
      />
    </PrimeReactProvider>
  );
}
