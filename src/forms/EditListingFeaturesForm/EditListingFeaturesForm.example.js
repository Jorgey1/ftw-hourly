import EditListingFeaturesForm from './EditListingFeaturesForm';

const NAME = 'experienceTypes';

const initialValueArray = ['hatha', 'vinyasa', 'yin'];
const initialValues = { [NAME]: initialValueArray };

export const ExperienceTypes = {
  component: EditListingFeaturesForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingFeaturesForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save Experience Type',
    updated: false,
    updateInProgress: false,
    disabled: false,
    ready: false,
  },
  group: 'forms',
};
