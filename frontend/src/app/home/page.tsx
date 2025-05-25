"use client"
import { useEffect, useState } from "react"
import LoggedInHome from "../components/LoggedInHome";
import LoggedOutHome from "../components/LoggedOutHome";
import { WebSocketProvider } from "../WebSocketContext";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userDetails, setuserDetails] = useState({});
  useEffect(() => {
    if (localStorage.getItem('auth-Token')) {
      setIsLoggedIn(true);
    }
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/getUser", {
        method: "GET",
        headers: {
          'auth-Token': localStorage.getItem('auth-Token') || ''
        }
      });
      const data = await response.json();
      setuserDetails(data["user"]);
      console.log(data["user"]);
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white">
      {isLoggedIn ?
        <LoggedInHome />
        : <h1>
          <LoggedOutHome />
        </h1>}
    </div>

  )
}
