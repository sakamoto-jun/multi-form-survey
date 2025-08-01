import { Outlet, RouteObject } from "react-router";
import MainLayout from "./components/common/MainLayout";
import AdminPage from "./pages/AdminPage";
import CompletePage from "./pages/CompletePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import FormPage from "./pages/FormPage";
import { SurveyStoreProvider } from "./store";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout>
        <SurveyStoreProvider>
          <Outlet />
        </SurveyStoreProvider>
      </MainLayout>
    ),
    children: [
      {
        path: "surveys/new",
        element: <CreatePage />,
      },
      {
        path: "surveys/:surveyId",
        element: <FormPage />,
      },
      {
        path: "surveys/:surveyId",
        element: <AdminPage />,
        children: [
          {
            path: "edit",
            element: <EditPage />,
          },
          {
            path: "responses",
            element: <div>응답</div>,
          },
        ],
      },
      {
        path: "surveys/:surveyId/complete",
        element: <CompletePage />,
      },
    ],
  },
];
