import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
import Carousel from 'react-responsive-carousel'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Tabs>
          <Tab label="Item One" >
            <div>
              <h2 style={styles.headline}>Tab One</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
            </div>
          </Tab>
          <Tab label="Item Two" >
            <div>
              <h2 style={styles.headline}>Tab Two</h2>
              

            </div>
          </Tab>
          <Tab
            label="onActive"
            data-route="/home"
            onActive={handleActive}
          >
            <div>
              <h2 style={styles.headline}>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
    {/*     <Carousel showArrows={true}>
                    <div>
                        <img src="assets/1.jpeg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="assets/2.jpeg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="assets/4.jpeg" />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src="assets/5.jpeg" />
                        <p className="legend">Legend 5</p>
                    </div>
                    <div>
                        <img src="assets/6.jpeg" />
                        <p className="legend">Legend 6</p>
                    </div>
                </Carousel> */}
        </MuiThemeProvider>
      );
    }
  }

export default App;
