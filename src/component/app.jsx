//jshint esversion:6
import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import Notes from "../notes";



function App (){

  return  <div>
            <Header />
            {
              Notes.map(createnote => (
                 <Note
                title = {
                  createnote.title
                }
                content = {
                  createnote.content
                }
                />
              ))}
            <Footer />
          </div>
}

export default App;