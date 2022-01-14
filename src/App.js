import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "./components/modules/header/header";
import VerticalNav from "./components/modules/verticalNav/verticalNav";
import Dashboard from "./components/views/dashboard/dashboard";
import Welcome from "./components/views/welcome/welcome";
import { DtoUser } from "./types/DtoUser";
import { DtoActivity } from "./types/DtoActivity";
import { DtoAverage } from "./types/DtoAverage";
import { DtoPerformance } from "./types/DtoPerformance";
import dataSource from "./services";
/**
 * Return the complete page
 * @returns {JSX.Element}
 */
export default function App() {
  
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const [userId, setUserId] = useState(12);
  const [user, setUser] = useState(undefined);
  const [activity, setActivity] = useState(undefined);
  const [sessionAverage, setSessionAverage] = useState(undefined);
  const [performance, setPerformance] = useState(undefined);

  const { getOneUserById, getPerformance, getSessionAverage, getUserActivity } = dataSource;

  /**
   * Select a user to show
   * @param {Number} id 
   */
  const selectUser = (id) => {
    setUserId(id)
  }

  /**
   * Load all data's
   * @returns {void}
   */
  useEffect(() => {
    const loadUser = async () => {
      const user = await getOneUserById(userId);
      setUser(new DtoUser(user.data.id, user.data.userInfos, user.data.todayScore || user.data.score, 0, user.data.keyData));
    }

    const loadActivity = async () => {
      const activity = await getUserActivity(userId);
      setActivity(new DtoActivity(activity.data.userId, activity.data.sessions));
    }

    const loadSessionAverage = async () => {
      const average = await getSessionAverage(userId);
      setSessionAverage(new DtoAverage(average.data.userId, average.data.sessions));
    }

    const loadPerformance = async () => {
      const performance = await getPerformance(userId);
      setPerformance(new DtoPerformance(performance.data.userId, performance.data.kind, performance.data.data));
    }

    (user === undefined || user.id !== userId) && Promise.all([
      loadUser(),
      loadActivity(),
      loadSessionAverage(),
      loadPerformance()
    ])
    .finally(() => {
      setLoading(false)
    })
    .catch(() => {
      setError(true)
    })
  }, [user, userId]);


  if(isLoading){
    return (
      <main>
        <div className="loading">
          <h1>Chargement des données...</h1>
        </div>
      </main>
    )
  }

  if(isError){
    return (
      <main>
        <div className="error">
          <h1>/!\ Impossible d'accéder aux données</h1>
        </div>
      </main>
    )
  }

  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <VerticalNav></VerticalNav>
        <Routes>
          <Route exact path="/" element={<Welcome onChange={selectUser}/>}></Route>
          <Route exact path="/dashboard" 
            element={<Dashboard 
              user={user}
              activity={activity}
              sessionAverage={sessionAverage}
              performance={performance}
          />}>
          </Route>
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}
