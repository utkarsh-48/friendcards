import React from "react";
import Card from "./components/Card";
import "./App.css"
function App() {
  const data = [
    {
      name: "Shadow",
      Image: "https://avatars.githubusercontent.com/u/178684183?v=4",
      friend: `https://discord.com/users/1157308520081928333`,
      git: "https://github.com/utkarsh-48",
      insta: "https://www.instagram.com/shadow41y91/",
    },
    {
      name: "Gaurav",
      Image: "https://avatars.githubusercontent.com/u/181625890?v=4",
      friend: "https://discord.com/users/1003391089635504238",
      git: "https://github.com/Gauravkr7488",
      insta: "",
    },
    {
      name: "Ankit",
      Image: "https://avatars.githubusercontent.com/u/173899469?v=4",
      friend: "https://discord.com/users/820548121460604959",
      git: "https://github.com/Aisheair",
      insta:
        "https://www.instagram.com/stoic.ais?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "Shubh",
      Image: "https://avatars.githubusercontent.com/u/143277026?v=4",
      friend: "https://discord.com/users/1125393715612094514",
      git: "https://github.com/shub39",
      insta: "",
    },
  ];
  return <div className="container">
    <Card value={data} />
  </div>;
}

export default App;
