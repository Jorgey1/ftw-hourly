import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectMultipleFilter from './SelectMultipleFilter';
import { stringify, parse } from '../../util/urlHelpers';

const URL_PARAM = 'pub_experienceTypes';

const options = [
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

const handleSubmit = (urlParam, values, history) => {
  console.log('Submitting values', values);
  const queryParams = values ? `?${stringify({ [urlParam]: values.join(',') })}` : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const ExperienceTypesFilterPopup = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const experienceTypes = params[URL_PARAM];
  const initialValues = !!experienceTypes ? experienceTypes.split(',') : [];

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPopupExample"
      name="experienceTypes"
      urlParam={URL_PARAM}
      label="experienceTypes"
      onSubmit={(urlParam, values) => handleSubmit(urlParam, values, history)}
      showAsPopup={true}
      liveEdit={false}
      options={options}
      initialValues={initialValues}
      contentPlacementOffset={-14}
    />
  );
});

export const ExperienceTypesFilterPopupExample = {
  component: ExperienceTypesFilterPopup,
  props: {},
  group: 'filters',
};

const ExperienceTypesFilterPlain = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const experienceTypes = params[URL_PARAM];
  const initialValues = !!experienceTypes ? experienceTypes.split(',') : [];

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPlainExample"
      name="experienceTypes"
      urlParam={URL_PARAM}
      label="experienceTypes"
      onSubmit={(urlParam, values) => {
        handleSubmit(urlParam, values, history);
      }}
      showAsPopup={false}
      liveEdit={true}
      options={options}
      initialValues={initialValues}
    />
  );
});

export const ExperienceTypesFilterPlainExample = {
  component: ExperienceTypesFilterPlain,
  props: {},
  group: 'filters',
};
