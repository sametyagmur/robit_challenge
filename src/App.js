import React ,{useEffect,useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Platform from "./components/Platform/Platform";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";
import './App.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const classes=useStyles();
  const [post, setPost]=useState(null);
  
  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response=>response.json())
.then(response=>{
  const {body}=response
  setPost(<Loader/>)
})
  },[])
  
  return (
    <div className="App">
 <Navbar />
 <Banner />
 <Main />
 <Platform />
 <Footer />
 <Loader />
 {post?post :<Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" value="50"/>
      </Backdrop>}
 
    </div>
  );
}

export default App;
