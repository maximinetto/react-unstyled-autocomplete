export interface Country {
  name: string;
  code: string;
}

export default async function getCountries() {
  return [
    {
      code: "ARG",
      name: "Argentina",
    },
    {
      code: "AR",
      name: "Argelia",
    },
    { code: "ES", name: "Spain" },
    { code: "UY", name: "Uruguay" },
  ];
}
