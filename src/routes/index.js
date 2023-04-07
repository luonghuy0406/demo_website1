import AboutUs from '../pages/AboutUs';
import Application from '../pages/Application';
import Home from '../pages/Home';
import LWW from '../pages/LWW';
import NotFound from '../pages/NotFound';
import Pump from '../pages/Pump';
import ChildPump from '../pages/Pump/ChildPump';
import PPE from '../pages/Robotics';
import Robotics from '../pages/Robotics';
const pages = [
    "Home",
    "About us",
    "Line wire washing",
    "Applycation",
    "Pump",
    "Robotics",
    "PPE",
    "Partner",
    "Literature",
  ];
// public view
const publicRoutes = [
    {path:'/',component:Home,label:"Home"},    
    {path:'/about',component:AboutUs,label:"About us"},
    {path:'/lww',component:LWW,label:"Line wire washing"},
    {path:'/application',component:Application,label:"Application"},
    {path:'/pump',component:Pump,label:"Pump"},
    {path:'/robotics',component:Robotics,label:"Robotics"},
    {path:'/ppe',component:PPE,label:"PPE"},
    {path:'/pump/:id',component:ChildPump},
    {path:'/404',component:NotFound,label:"404",layout:null},
    {path:'*',component:NotFound,layout:null},
]

//need to login
const privateRoutes = [

]

export {publicRoutes,privateRoutes}