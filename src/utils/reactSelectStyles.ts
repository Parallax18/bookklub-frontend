import { ThemeConfig, StylesConfig, GroupBase } from 'react-select';

export const reactSelectStyles: StylesConfig<any, false, GroupBase<any>> = {
  menu: (base) => ({
    ...base,
    background: '#1B1C1E',
  }),
  option: (base, { isFocused }) => ({
    ...base,
    background: isFocused ? '#ACCDBD' : '#1B1C1E',
    fontSize: '14px',
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '14px',
    color: '#98A2B3',
  }),
  control: (base, { isFocused }) => ({
    ...base,
    background: '#1B1C1E',
    borderColor: '#475367',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    caretColor: '#90BCA7',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#FAF9F6',
    fontSize: '14px',
  }),
  input: (base) => ({
    ...base,
    color: '#FAF9F6',
    fontSize: '14px',
  }),
};

export const reactSelectTheme: ThemeConfig = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'hotpink',
    primary: '#90BCA7',
  },
});
