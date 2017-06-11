import React, { Component } from 'react';

import './styles/App.css';
import MenuTabs from './Menu'
import Home from './Home'
import AboutMe from "./AboutMe";
import { CSSTransitionGroup } from 'react-transition-group'
import './animations/Animaions.css'

class App extends Component {
    constructor(){
        super();

        this.state = {
            selected: 'home',
        };
        this.style = {
            tabs: {
                display: 'flex',
                justifyContent: 'flex-end',
            },

            home:{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '8em',
            }
        };
    }

    setSelectedToAboutMe() {
        this.setState({
            selected: 'aboutMe'

        });
    }
    setSelectedToContact(){
        this.setState({
            selected: 'contact'
        })
    }

    setSelectedToProjects(){
        this.setState({
            selected: 'projects'
        })
    }

    setSelectedToHome(){
        this.setState({
            selected: 'home'
        })
    }

    getSelectedMenuItem(){

        switch(this.state.selected){
            case 'aboutMe':
                return this.aboutMeHTML()
            case 'projects':
                return this.projectsHTML();

            case 'home':
                return this.homeHTML();

            case 'contact':
                return this.contactHTML()

            default: return '';


        }
    }

    homeHTML(){
        return(
                <div key={1} style={this.style.home}>
                    <Home
                        setSelectedToAboutMe={this.setSelectedToAboutMe.bind(this)}
                        setSelectedToProjects={this.setSelectedToProjects.bind(this)}
                        setSelectedToContact={this.setSelectedToContact.bind(this)}

                    />
                 </div>
              )
    }

    aboutMeHTML(){
        return(
                <div key={2} style={this.style.home}>
                    <AboutMe/>
                </div>
        )
    }

    contactHTML(){
        return(
            <div>

            </div>
        )
    }

    projectsHTML(){
        return(
            <div>

            </div>
        )
    }

    render() {

      const renderOnMain = this.getSelectedMenuItem();

      return (
          <div >
              <div style={{cursor: 'pointer'}} onClick={()=> this.setSelectedToHome()}>HOME</div>
              <div style={this.style.tabs}>
                <MenuTabs    setSelectedToAboutMe={this.setSelectedToAboutMe.bind(this)}
                             setSelectedToProjects={this.setSelectedToProjects.bind(this)}
                             setSelectedToContact={this.setSelectedToContact.bind(this)}
                />
              </div>
              <CSSTransitionGroup transitionName="example"
                                  transitionEnterTimeout={500}
                                  transitionLeaveTimeout={200}

                                  >
              {renderOnMain}
              </CSSTransitionGroup>
          </div>
    );
  }
}

export default App;
