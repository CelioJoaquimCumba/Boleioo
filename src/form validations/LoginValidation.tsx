import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export const LoginValidation = () => {
  const navigate = useNavigate()
  return ({
    initialValues: {
      email: '',
      password:''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: () => navigate('/'),
  })
}