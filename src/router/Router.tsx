import { ScrollRestoration, createBrowserRouter } from 'react-router-dom';

// Import your page components
import { RegisterRoutesVehicles as RouteVehiclePath, Login as LoginPath, Register as RegisterPath } from './routes';
import { RegisterRoutesVehicles } from '@/pages/RegisterRoutesVehicles';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element:<>home</>,
    children: [
      {
        path: LoginPath,
        element: <><ScrollRestoration/><Login /></>
      },
      {
        path: RegisterPath,
        element: <><ScrollRestoration/><Register /></>
      },
      {
        path: RouteVehiclePath,
        element: <><ScrollRestoration/><RegisterRoutesVehicles/></>
      },
    ]
  },
  {
    path: '/*',
    element: <div>404</div>
  }
]);

export { router };
