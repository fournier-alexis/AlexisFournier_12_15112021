import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "./components/modules/header/header";
import VerticalNav from "./components/modules/verticalNav/verticalNav";
import Dashboard from "./components/views/dashboard/dashboard";
import { getOneUserById, getPerformance, getSessionAverage, getUserActivity } from "./model/Api.service";
import Welcome from "./components/views/welcome/welcome";

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

  const selectUser = (id) => {
    setUserId(id)
  }

  /**
   * Load all data's
   */
  useEffect(() => {
    const loadUser = async () => {
      const user = await getOneUserById(userId);
      setUser(user.data);
    }

    const loadActivity = async () => {
      const activity = await getUserActivity(userId);
      setActivity(activity.data);
    }

    const loadSessionAverage = async () => {
      const average = await getSessionAverage(userId);
      setSessionAverage(average.data);
    }

    const loadPerformance = async () => {
      const performance = await getPerformance(userId);
      setPerformance(performance.data);
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
