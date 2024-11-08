import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components import for routing
const DashboardLayout = lazy(() => import('./Layout/Admin/DashboardLayout'));
const List = lazy(() => import('./Pages/List/submissions'))
const TaskFirst = lazy(() => import('./Pages/TaskFirst/index'))
const TaskSecond = lazy(() => import('./Pages/TaskSecond/index'))

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<TaskFirst />} />
          <Route path='/task-second' element={<TaskSecond />} />
          <Route path='/submissions' element={<List />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}

export default App;

