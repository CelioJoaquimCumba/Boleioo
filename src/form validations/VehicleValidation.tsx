import * as Yup from 'yup';

export const VehicleValidation = () => {
  const mozambiquePlateRegex = /^[A-Z]{3} \d{3} [A-Z]{2}$/;

  return {
    initialValues: {
      make: '',
      model: '',
      color: '',
      plate: '',
      cylinders: '',
      seats: '',
      year: '',
    },
    validationSchema: Yup.object({
      make: Yup.string().required('Make is required'),
      model: Yup.string().required('Model is required'),
      color: Yup.string().required('Color is required'),
      plate: Yup.string()
        .matches(mozambiquePlateRegex, 'Invalid Mozambique license plate format. example of a valid: AAA 000 MC')
        .required('Plate is required'),
      cylinders: Yup.number().min(1, 'Cylinders must be at least 1').required('Cylinders are required'),
      seats: Yup.number().min(1, 'Seats must be at least 1').required('Seats are required'),
      year: Yup.number().min(1900, 'Year must be at least 1900').max(new Date().getFullYear(), 'Invalid future year').required('Year is required'),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: () => {
      alert('Submitted');
    },
  };
};
