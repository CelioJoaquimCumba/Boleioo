import * as Yup from 'yup';

export const RegisterValidation = () => {
  return {
    initialValues: {
      profilePicture: '',
      email: '',
      password: '',
      genre: '',
      birthDate: '',
      phoneNumber: '',
      identityDocument: ''
    },
    validationSchema: Yup.object({
      profilePicture: Yup.mixed()
        .required('Required')
        // .test(
        //   'fileSize',
        //   'File size must be no more than 5MB',
        //   (value) => {
        //     if (!value) return true; // If no file, validation passes
        //     // Assertion for TypeScript
        //     const file = value as File;
        //     console.log(value)
        //     return file.size <= 5 * 1024 * 1024; // 5MB
        //   }
        // )
        // .test(
        //   'fileFormat',
        //   'File format must be JPEG, PNG, or PDF',
        //   (value) => {
        //     if (!value) return true; // If no file, validation passes
        //     // Assertion for TypeScript
        //     const file = value as File;
        //     return ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
        //   }
        // )
        ,
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one of the special characters (@ $ ! % * ? & .)'
        )
        .required('Required'),
      genre: Yup.string().oneOf(['male', 'female'], 'Invalid gender').required('Required'),
      birthDate: Yup.date().required('Required'),
      phoneNumber: Yup.string()
        .matches(/^\d{9}$/, 'Phone number must be from Mozambique and have 9 additional digits')
        .required('Required'),
      identityDocument: Yup.mixed()
        .required('Required')
        // .test(
        //   'fileSize',
        //   'File size must be no more than 5MB',
        //   (value) => {
        //     if (!value) return true; // If no file, validation passes
        //     // Assertion for TypeScript
        //     const file = value as File;
        //     return file.size <= 5 * 1024 * 1024; // 5MB
        //   }
        // )
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: () => {
      alert('Submitted');
    }
  };
};
