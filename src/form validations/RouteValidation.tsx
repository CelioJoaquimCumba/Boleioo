import * as Yup from 'yup';

export const RouteValidation = () => {
  return {
    initialValues: {
      name: '',
      startTime: '',
      startLocation: '',
      endTime: '',
      endLocation: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      startTime: Yup.string().required('Required'),
      startLocation: Yup.string().required('Required'),
      endTime: Yup.string().required('Required'),
      endLocation: Yup.string().required('Required')
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: () => {
      alert('Submitted');
    }
  };
};