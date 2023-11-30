import { createVar, style } from "@vanilla-extract/css";

const primaryBackgroundColor = createVar();

export const root = style({
  display: "block",
  position: "relative",
  border: "1px solid #fff",
  borderRadius: "10px",
  maxWidth: "400px",
});

export const container = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "0.2rem",
  position: "relative",
  padding: "0.5rem 1rem",
  margin: "0",
});

export const rootShadow = style({
  outline: "none",
  boxShadow: "0 0 0 0.2rem #a5f3fc",
  borderColor: "#06b6d4",
});

export const chip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "5px",
  listStyle: "none",
  backgroundColor: "rgb(42, 42, 212)",
  borderRadius: "2rem",
  padding: "0.5rem",
});

export const label = style({
  marginTop: "-2px",
});

export const input = style({
  border: "none",
  outline: "none",
  background: "none",
  display: "inline-block",
  verticalAlign: "middle",
  color: "#fafafa",
});

export const inputWrapper = style({
  display: "inline-flex",
  alignItems: "center",
  listStyle: "none",
  padding: "1rem 0",
});

export const suggestionsWrapper = style({
  backgroundColor: "#555151",
  padding: "1rem 0",
  borderRadius: "12px",
  overflowY: "auto",
  border: "1px solid #fafafa",
  vars: {
    [primaryBackgroundColor]: "#2c2929",
  },
});

export const suggestions = style({
  margin: "0",
  listStyleType: "none",
  padding: "0",
});

export const suggestion = style({
  padding: "0.5em 1em",
  cursor: "pointer",
  ":hover": {
    backgroundColor: primaryBackgroundColor,
  },
});

export const suggestionHighlight = style({
  backgroundColor: "#2c2929",
});

export const loadingIcon = style({
  display: "inline-block",
  position: "absolute",
  top: "50%",
  right: "14px",
  marginTop: "-0.5rem",
});
