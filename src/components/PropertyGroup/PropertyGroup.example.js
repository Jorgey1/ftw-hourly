import PropertyGroup from './PropertyGroup';

const exampleOptions = [
  { key: 'climbing', label: 'Climbing' },
  { key: 'kayaking', label: 'Kayaking' },
  { key: 'canoeing', label: 'Canoeing' },
  { key: 'hiking', label: 'Hiking' },
  { key: 'motorbiking', label: 'Motorbiking' },
  { key: 'sailing', label: 'Sailing' },
  { key: 'flying', label: 'Flying' },
  { key: 'swimming', label: 'Swimming' },
  { key: 'horseriding', label: 'Horse Riding' },
  { key: 'sea safari', label: 'Sea Safari' },
];

export const WithSomeSelected = {
  component: PropertyGroup,
  props: {
    id: 'experienceTypes',
    options: exampleOptions,
    selectedOptions: ['climbing', 'kayaking', 'canoeing'],
    twoColumns: true,
  },
  group: 'misc',
};
