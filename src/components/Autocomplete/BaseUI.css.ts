import { globalStyle, style } from "@vanilla-extract/css";

export const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export const cyan = {
  50: "#E9F8FC",
  100: "#BDEBF4",
  200: "#99D8E5",
  300: "#66BACC",
  400: "#1F94AD",
  500: "#0D5463",
  600: "#094855",
  700: "#063C47",
  800: "#043039",
  900: "#022127",
};

export const autocompleteRoot = style({
  fontFamily: "IBM Plex Sans, sans-serif",
  fontWeight: "400",
  borderRadius: "8px",
  background: "#000",
  border: `1px solid ${grey[700]}`,
  color: grey[300],
  boxShadow: "0px 2px 4px rgba(0,0,0, 0.5)",
  display: "flex",
  gap: "5px",
  overflow: "hidden",
  width: "320px",
  ":hover": {
    borderColor: cyan[400],
  },
  ":focus-visible": {
    outline: "0",
  },
});

export const autocompleteFocused = style({
  boxShadow: `0 0 0 3px  ${cyan[500]}`,
  borderColor: cyan[400],
});

export const autocompletePopper = style({
  position: "relative",
  zIndex: "1001",
  width: "320px",
});

export const autocompleteInputRoot = style({
  background: "inherit",
  borderRadius: "inherit",
  flex: "1 0 auto",
});

export const autocompleteInput = style({
  fontSize: "0.875rem",
  fontFamily: "inherit",
  fontWeight: "400",
  lineHeight: "1.5",
  color: grey[300],
  background: "inherit",
  border: "none",
  borderRadius: "inherit",
  padding: "8px 12px",
  outline: "0",
});

export const autocompleteIndicator = style({
  outline: "0",
  boxShadow: "none",
  border: "0",
  borderRadius: "4px",
  backgroundColor: "transparent",
  alignSelf: "center",
  padding: "0 2px",
  marginRight: "4px",

  ":hover": {
    backgroundColor: grey[700],
    cursor: "pointer",
  },
  selectors: {},
});

globalStyle(".popIndicator > svg", {
  transform: "translateY(2px)",
});
globalStyle(".popup-indicator.popupOpen > svg", {
  transform: "translateY(2px) rotate(180deg)",
});

globalStyle(".clear-indicator > svg", {
  transform: "translateY(2px) scale(0.9)",
});

export const autocompleteListbox = style({
  fontFamily: "IBM Plex Sans, sans-serif",
  fontSize: "0.875rem",
  boxSizing: "border-box",
  padding: "6px",
  margin: "12px 0",
  width: "100%",
  borderRadius: "12px",
  overflow: "auto",
  outline: "0px",
  maxHeight: "300px",
  zIndex: "1",
  position: "absolute",
  background: grey[900],
  border: `1px solid ${grey[700]}`,
  color: grey[300],
  boxShadow: "0px 4px 6px rgba(0,0,0, 0.50)",
});

export const autocompleteOption = style({
  listStyle: "none",
  padding: "8px",
  borderRadius: "8px",
  cursor: "default",
  ":last-of-type": {
    borderBottom: "none",
  },
  ":hover": {
    cursor: "pointer",
  },
  selectors: {
    "&[aria-selected=true]": {
      backgroundColor: cyan[900],
      color: cyan[100],
    },
    "&.Mui-focused": {
      backgroundColor: grey[800],
      color: grey[300],
    },
    "&.Mui-focusVisible": {
      backgroundColor: grey[800],
      color: grey[300],
      boxShadow: `0 0 0 3px ${cyan[500]}`,
    },
    "&[aria-selected=true].Mui-focused": {
      backgroundColor: cyan[900],
      color: cyan[100],
    },
    "&[aria-selected=true].Mui-focusVisible": {
      backgroundColor: cyan[900],
      color: cyan[100],
    },
  },
});

export const autocompleteNoOptions = style({
  listStyle: "none",
  padding: "8px",
  cursor: "default",
});
