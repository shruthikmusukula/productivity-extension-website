import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Layout,
  Navigation,
  Header,
  Drawer,
  Content,
  Button,
  Card,
  CardMenu,
  CardTitle,
  CardText,
  CardActionProps,
  CardActions,
  IconButton,
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterDropDownSectionProps,
  FooterLinkList,
  Grid,
  Cell,
} from "react-mdl";

function App() {
  return (
    <Layout>
      <Header
        class="header-color"
        title="Homeroom"
        style={{ position: "relative" }}
      >
        <Navigation>
          <a href="#about">About</a>
          <a href="#todo">To Do</a>
          <a href="#classtasks">Class Tasks</a>
          <a href="#pomodoro">Pomodoro Timer</a>
          <a href="#blocker">Website Blocker</a>
        </Navigation>
      </Header>

      <a name="about">
        <Grid scroll>
          <Cell col={12}>
            <Card
              scroll
              style={{
                width: "77em",
                margin: "auto",
              }}
            >
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80)",
                }}
              >
                To Do List
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
            </Card>
          </Cell>
        </Grid>
      </a>

      <a name="todo">
        <Grid name="todo" scroll>
          <Cell col={12}>
            <Card
              scroll
              style={{
                width: "77em",
                margin: "auto",
              }}
            >
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg)",
                }}
              >
                To Do List
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{
                height: "300px",
                width: "400px",
                background:
                  "url(https://media.discordapp.net/attachments/741774580204437589/742552304556834896/unknown.png) center / cover",
                margin: "auto",
              }}
            ></Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{
                height: "300px",
                width: "400px",
                background:
                  "url(https://media.discordapp.net/attachments/741774580204437589/742552777976316024/unknown.png) center / cover",
                margin: "auto",
              }}
            ></Card>
          </Cell>
        </Grid>
      </a>

      <a name="classtasks">
        <Grid className="demo-grid-2" scroll>
          <Cell col={12}>
            <Card
              scroll
              style={{
                width: "77em",
                margin: "auto",
              }}
            >
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg)",
                }}
              >
                To Do List
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{
                height: "300px",
                width: "400px",
                background:
                  "url(https://media.discordapp.net/attachments/741774580204437589/742552304556834896/unknown.png) center / cover",
                margin: "auto",
              }}
            ></Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{
                height: "300px",
                width: "400px",
                background:
                  "url(https://media.discordapp.net/attachments/741774580204437589/742552777976316024/unknown.png) center / cover",
                margin: "auto",
              }}
            ></Card>
          </Cell>
        </Grid>
      </a>

      <a name="pomodoro">
        <Grid className="demo-grid-2" scroll>
          <Cell col={12}>
            <Card
              scroll
              style={{
                width: "77em",
                margin: "auto",
              }}
            >
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg)",
                }}
              >
                To Do List
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{
                height: "300px",
                width: "400px",
                background:
                  "url(https://media.discordapp.net/attachments/741774580204437589/742552304556834896/unknown.png) center / cover",
                margin: "auto",
              }}
            ></Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{
                height: "300px",
                width: "400px",
                background:
                  "url(https://media.discordapp.net/attachments/741774580204437589/742552777976316024/unknown.png) center / cover",
                margin: "auto",
              }}
            ></Card>
          </Cell>
        </Grid>
      </a>
    </Layout>
  );
}

export default App;
