import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { getPosts } from "./api/axios";
import SearchFilter from "./SearchFilter";
import ListPage from "./ListPage";
import Example1 from "./Example1";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([])

  // useEffect(() => {
  //   getPosts().then(res => {
  //     setPosts(res);
  //     return res
  //   }).then(json => {
  //     setSearchResults(json)
  //   })
  // }, [])


  return (
    <div className="container">
      {/* <SearchFilter posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} /> */}
      <Example1 />
    </div>
  );
}

export default App;



function Home() {
  const msg = useContext(UserContext);
  const [animals, setAnimals] = useState({ birds: 0, dogs: 0, cats: 0 })
  useEffect(() => {
    document.title = JSON.stringify(animals);
  }, [animals]);

  const handleClick = (type) => {
    setAnimals(prev => ({ ...prev, [type]: animals[type] + 1 }))
  }
  const myAminals = [
    {
      name: "Birds",
      value: "birds"
    },
    {
      name: "Dogs",
      value: "dogs"
    },
    {
      name: "Cats",
      value: "cats"
    },
  ]
  return <>
    <h2>Home</h2>
    <div>{msg}</div>
    <pre>{JSON.stringify(animals)}</pre>
    {
      myAminals.map((animal) => <button onClick={() => handleClick(animal.value)} key={animal.name}>Increment {animal.name}</button>)
    }
  </>
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}