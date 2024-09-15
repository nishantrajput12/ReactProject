import logo from './logo.svg';
import './App.css';
import Game from './Hello/game';
import Image from './Hello/image';
import Form from './Hello/form';
import Compo from './comp/compo';
import ParentComponent from './comp/parent';
import LifeCycleDemo from './comp/lifeCycle';
import TodoList from './lists/to-do';




function App() {
 
  return (
  
    <div className="App">
      <div class="header">
  <a href="#default" class="logo"></a>
  <div class="header-left">
    <a class="active" href="">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    
  </div>
  <div class="header-right">
    <a class="active" href="#contact">ContactUs</a></div>

  
</div>


      <Game/>
      <Image/>
      <Form/>
      <Compo/>
      <ParentComponent/>
      <LifeCycleDemo/>
      <TodoList/>
    </div>
    
  );
}

export default App;
