/*
 * Marketplace specific configuration.
 */

export const experienceTypes = [
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

export const certificate = [
  { key: 'none', label: 'None', hideFromFilters: true, hideFromListingInfo: true },
  { key: 'easy', label: 'This experience is registered as difficulty easy' },
  { key: 'medium', label: 'This experience is registered as difficulty medium' },
  { key: 'hard', label: 'This experience is registered as difficulty hard' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
