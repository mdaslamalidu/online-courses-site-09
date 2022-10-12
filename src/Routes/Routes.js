import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../components/Errorpage/Errorpage";
import { Faq } from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Quiz from "../components/Quizs/Quizs";
import ShowQuiz from "../components/ShowQuiz/ShowQuiz";
import Statistic from "../components/Statistic/Statistic";
import Root from "../Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Errorpage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async () => {
                    return fetch("https://openapi.programming-hero.com/api/quiz")
                }
            },
            {
                path: "/home",
                element: <Home />,
                loader: async () => {
                    return fetch("https://openapi.programming-hero.com/api/quiz")
                }
            },
            {
                path: "/quiz",
                element: <Quiz />,
                loader: async () => {
                    return fetch("https://openapi.programming-hero.com/api/quiz")
                }
            },
            {
                path: "/quiz/:id",
                element: <ShowQuiz/>,
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${[params.id]}`)
                }
            },
            {
                path: "/blog",
                element: <Faq/>
            },
            {
                path: "/statistic",
                element: <Statistic/>,
                loader: async () => {
                    return fetch("https://openapi.programming-hero.com/api/quiz")
                }
            }
        ]
    }
])