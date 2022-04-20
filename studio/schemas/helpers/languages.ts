// The languages you want to support.
// They need 'id' and 'title'

interface ILanguages {
  name: string;
  title: string;
}

export const languages: ILanguages[] = [
  { name: "pl", title: "Polish" },
  { name: "en", title: "English" },
  { name: "es", title: "Spanish" },
];

export const baseLanguage = languages[0];
