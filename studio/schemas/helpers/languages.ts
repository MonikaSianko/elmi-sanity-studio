// The languages you want to support.
// They need 'id' and 'title'

interface ILanguages {
  name: string;
  title: string;
}

export const languages: ILanguages[] = [
  { name: "en", title: "English" },
  { name: "pl", title: "Polish" },
  { name: "es", title: "Spanish" },
];

export const baseLanguage = languages[0];
