import './App.css'
import HomePage from './components/HomePage'
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router"
import {Router} from "react-router-dom";
import EducationPage from "./components/EducationPage.js";
import ExperiencePage from "./components/ExperiencePage.js";
import ProjectsPage from "./components/ProjectsPage.js";
import SkillsPage from "./components/SkillsPage.js";
import ReferencesPage from "./components/ReferencesPage.js";

function Root() {

  return (
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/references" element={<ReferencesPage />} />
          </Routes>
  )
}
const router = createBrowserRouter(
    [{path:"*", Component: Root},]
);

export default function App(){
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
