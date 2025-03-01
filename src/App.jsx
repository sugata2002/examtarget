import { useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './module/Homepage';
import Question from './module/component/QuestionPaper/Question';
import Notification from './module/component/JobnotificationCOM/Notification';
import Modelquestion from './module/component/Modelquestion/Modelquestion';
import Test from './module/component/Test/Test';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Homepage></Homepage>
         
        </>
      ),
    },
    {
      path: 'question',
      element: (
        <>
          <Question></Question>
         
        </>
      ),
    },
    {
      path: 'notification',
      element: (
        <>
          <Notification/>
         
        </>
      ),
    },

    {
      path: 'exam',
      element: (
        <>
          <Modelquestion/>
         
        </>
      ),
    },
    {
      path: 'test',
      element: (
        <>
          <Test/>
         
        </>
      ),
    },
  
  ],

    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    });
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }}></RouterProvider>
  )
}

export default App
