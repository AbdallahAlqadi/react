import './style/styleapp.css'
import {BrowserRouter,Link,Route,Routes} from'react-router-dom';
import NewHeades from './Componant/NewHeades';
import Page1 from './Componant/Page1';
import Page2 from './Componant/ExpandMoreProps';
import Page3 from './Componant/Page3';
import Counter from './Componant/counter';
import reportWebVitals from './reportWebVitals';
import ClasssPage from './Componant/Classcomponant';
import { ThemeContext,ThemeProvider } from './Componant/theme';
import React, { useContext, useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.svg';
import ReactDOM from 'react-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container,Grid } from '@mui/material';
import Table from './Componant/table';
import Deatels from './Componant/details';
import LifecycleDemo from './Componant/life';
import UseRefExample from './Componant/useRef';
import UseReducerExample from './Componant/reducer';
function App() { //جزئيه routes بتتحقق اذا كبست على NewHeaders بعرض  محتواها
 var [value,setValue]=useState();

  const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
  };
  var maxWidth;
  
const ThemeToggButton=()=>{
  const {theme,toggleTheme}=useContext(ThemeContext);
  useEffect(()=>{
    document.body.className=theme;

  },[theme]);

  return(
    <Button onClick={toggleTheme}>
      change to {theme==='light'?'dark':'light'} theme
    </Button>
  )
  
}


  return (
    <ThemeProvider>
<BrowserRouter>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <div id="nav"> 
<ul className='divUl'>
  <li><Link className='navButton' to="/Home"> Home</Link>   </li>
  <li><Link className='navButton' to="/NewHeaders"> NewHeaders</Link>   </li>
  <li> <Link className='navButton' to="/Class"> Class</Link>  </li>
  <li> <Link className='navButton' to="/page1"> Page1</Link>   </li>
  <li>  <Link className='navButton' to="/page2"> ExpandMoreProps</Link>   </li>
  <li><Link className='navButton' to="/page3"> Page3</Link>  </li>
  <li><Link className='navButton' to="/counter"> Counter</Link>  </li>
  <li><Link className='navButton' to="/table"> Table</Link>  </li>
  <li><Link className='navButton' to="/life"> Life</Link>  </li>
  <li><Link className='navButton' to="/useref"> UseRef</Link>  </li>
  <li><Link className='navButton' to="/reducer"> Reducer</Link>  </li>
  </ul>
  </div>
          
         
          <Button color="inherit" className='login'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <ThemeToggButton id='change'>Change</ThemeToggButton>

  <Routes>  

  <Route path='/Home' element={<index />}/>
  <Route path='/Class' element={<ClasssPage />}/>
    <Route path='/NewHeaders' element={<NewHeades />}/>
    <Route path='/page1' element={<Page1 />}/>
    <Route path='/page2' element={<Page2 />}/>  
      <Route path='/page3' element={<Page3 />}/>
      <Route path='/counter' element={<Counter />}/>
      <Route path='/table' element={<Table />}/>
      <Route path='/details' element={<Deatels />}/>
      <Route path='/life' element={<LifecycleDemo />}/>
      <Route path='/useref' element={<UseRefExample />}/>
      <Route path='/reducer' element={<UseReducerExample />}/>
  </Routes>

<div className='footer'>
 <Box id='box'
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography id="text" variant="h6" color="text.primary" gutterBottom>
             AK
            </Typography>
            {/* Add your logo component or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography id="text" variant="subtitle1" color="text.primary" gutterBottom>
              PRODUCT
            </Typography>
            <Link id="text" href="#" color="inherit" display="block">Features</Link>
            <Link id="text" href="#" color="inherit" display="block">Integrations</Link>
            <Link id="text" href="#" color="inherit" display="block">Pricing</Link>
            <Link id="text" href="#" color="inherit" display="block">FAQ</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography id="text" variant="subtitle1" color="text.primary" gutterBottom>
              COMPANY
            </Typography>
            <Link id="text" href="#" color="inherit" display="block">About Us</Link>
            <Link id="text" href="#" color="inherit" display="block">Careers</Link>
            <Link id="text" href="#" color="inherit" display="block">Privacy Policy</Link>
            <Link id="text" href="#" color="inherit" display="block">Terms of Service</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography id="text" variant="subtitle1" color="text.primary" gutterBottom>
              DEVELOPERS
            </Typography>
            <Link id="text" href="#" color="inherit" display="block">Public API</Link>
            <Link id="text" href="#" color="inherit" display="block">Documentation</Link>
            <Link id="text" href="#" color="inherit" display="block">Guides</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography id="text" variant="subtitle1" color="text.primary" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography id="text" variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>

    </div>
</BrowserRouter>
</ThemeProvider>
  );
}

export default App;
