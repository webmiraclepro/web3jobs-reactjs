import React, { Fragment, Suspense, lazy } from 'react';
import { Navigate, PathRouteProps, Route, Routes } from 'react-router-dom';
import { LinearProgress } from '@mui/material';

import NotFound from './pages/notFound'
import MainLayout from './components/MainLayout'
import PersonalDashboardLayout from './components/PersonalDashboardLayout'
import Home from './pages/home'
import SalariesPage from './pages/salaries'
import LearnWeb3Page from './pages/learn'
import SponsorshipPage from './pages/sponsorship'
import PostJobPage from './pages/postJob'
import JobPage from './pages/applyJob'
import Dashboard from './pages/dashboard'
import InvoicesPage from './pages/invoices'
import ManageJobsPage from './pages/manageJobs'
import DetailJobPage from './pages/detailJob'
import EditJobPage from './pages/editJob'
import HistoryPage from './pages/history'

export type RouteConfig = PathRouteProps & {
  guard?: any;
  layout?: any;
  routes?: RouteConfig[];
};

export const renderRoutes = (routes: RouteConfig[]) => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        {routes.map((route: RouteConfig, i: number) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const element = route.element as React.ElementType;

          return route.routes ? (
            route.routes.map((sub: RouteConfig, j: number) => {
              const subElement = sub.element as React.ElementType;
              return (
                <Route
                  key={j}
                  path={sub.path}
                  element={<Layout>{subElement}</Layout>}
                />
              );
            })
          ) : (
              <Route
                key={i}
                path={route.path}
                element={<Layout>{element}</Layout>}
              />
            );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const routes = [
  {
    path: '/:company',
    layout: MainLayout,
    element: <Home />,
  },
  {
    path: '/',
    layout: MainLayout,
    element: <Home />,
  },
  {
    path: '/salaries',
    layout: MainLayout,
    element: <SalariesPage />,
  },
  {
    path: '/learn',
    layout: MainLayout,
    element: <LearnWeb3Page />,
  },
  {
    path: '/sponsorship',
    layout: MainLayout,
    element: <SponsorshipPage />,
  },
  {
    path: '/salaries',
    layout: MainLayout,
    element: <SalariesPage />,
  },
  {
    path: '/post-job',
    layout: MainLayout,
    element: <PostJobPage />,
  },
  {
    path: '/job/:id',
    layout: MainLayout,
    element: <JobPage />,
  },
  {
    path: '/dashboard',
    layout: PersonalDashboardLayout,
    element: <Dashboard />,
  },
  {
    path: '/manage-jobs',
    layout: PersonalDashboardLayout,
    element: <ManageJobsPage />,
  },
  {
    path: '/detail-job/:id',
    layout: PersonalDashboardLayout,
    element: <DetailJobPage />,
  },
  {
    path: '/edit-job/:id',
    layout: PersonalDashboardLayout,
    element: <EditJobPage />,
  },
  {
    path: '/history',
    layout: PersonalDashboardLayout,
    element: <HistoryPage />,
  },
  {
    path: '/invoices',
    layout: PersonalDashboardLayout,
    element: <InvoicesPage />,
  },
];

export default routes;
