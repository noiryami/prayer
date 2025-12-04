import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout
import Layout from "./Layout/Layout";
import PrayersLayout from "./Layout/PrayersLayout";
import ArkanLayout from "./Layout/ArkanLayout";
//pages
import Home from "./pages/Home/Home";
import Prayers from "./pages/Prayers/Prayers";
import Aboutme from "./pages/Aboutme/Aboutme";
import Error from "./pages/Error/Error";

//side pages for prayer
import Fajr from "./pages/HowToPray/Fajr";
import Dauhur from "./pages/HowToPray/Dauhur";
import Asr from "./pages/HowToPray/Asr";
import Maghrib from "./pages/HowToPray/Maghrib";
import Isha from "./pages/HowToPray/Isha";
//side pages for arkan and azkar
import Arkan from "./pages/ArkanAzkar/Arkan";
import ArkanIslam from "./pages/ArkanAzkar/ArkanIslam";
import ArkanSalah from "./pages/ArkanAzkar/ArkanSalah";
import Azkar from "./pages/ArkanAzkar/Azkar";
import Tashiud from "./pages/ArkanAzkar/Tashiud";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "prayers",
        element: <PrayersLayout />,
        children: [
          { index: true, element: <Prayers /> },
          { path: "fajr", element: <Fajr /> },
          { path: "dauhur", element: <Dauhur /> },
          { path: "asr", element: <Asr /> },
          { path: "maghrib", element: <Maghrib /> },
          { path: "isha", element: <Isha /> },
        ],
      },
      {
        path: "arkan",
        element: <ArkanLayout />,
        children: [
          { index: true, element: <Arkan /> },
          { path: "islam", element: <ArkanIslam /> },
          { path: "salah", element: <ArkanSalah /> },
          { path: "azkar", element: <Azkar /> },
          { path: "tashiud", element: <Tashiud /> },
        ],
      },
      {
        path: "aboutme",
        element: <Aboutme />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
