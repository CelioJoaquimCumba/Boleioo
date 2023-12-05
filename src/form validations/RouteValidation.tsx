import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import * as Yup from 'yup';

export const RouteValidation = () => {
  return {
    initialValues: {
      routeName: '',
      startTime: '',
      startLocation: '',
      endTime: '',
      endLocation: '',
    },
    validationSchema: Yup.object({
      routeName: Yup.string().required('Required'),
      startTime: Yup.string().required('Required'),
      startLocation: Yup.string().required('Required'),
      endTime: Yup.string().required('Required'),
      endLocation: Yup.string().required('Required')
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: () => {
      toast({
          title: "Route Saved ",
          description: "Your route has been saved",
          action: (
            <ToastAction altText="Cancel the route saving">Undo</ToastAction>
          ),
      })
    },
  }
};