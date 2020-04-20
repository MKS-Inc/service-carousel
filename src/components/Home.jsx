import React from "react";
import axios from 'axios'
import SlideShow from './slideShow.jsx'
import Modal from './modal.jsx'
import { Container, Box, TopImage, BoxText, TopImageContainer } from "./stylePage.jsx"; // check these styles!

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeHouse: {},
      fakeUrls: [],
      firstHouse: {},
      slideShow: false,
      currentIndex: 0,
    };
    this.returnHome = this.returnHome.bind(this);
  }

  componentDidMount() {
    let otherThis = this;
    axios({
      method: 'GET',
      url: '/carousel/listings/4/images',
    })
      .then((res) => {
        console.log(res.data);
      });

    // .then(function (response) {
    //   // set the state to contain our fakeHouse data
    //   otherThis.setState({
    //     fakeHouse: response.data.fakeHouse[0],
    //     fakeUrls: response.data.fakeUrls,
    //     firstHouse: response.data.fakeUrls[0]
    //   })
    // })
  }
  returnHome() {
    this.setState({ slideShow: false })
  }

  render() {
    if (this.state.slideShow) {
      return (
        <div>
          <SlideShow index={this.state.currentIndex} urls={this.state.fakeUrls} return={this.returnHome} />
        </div>
      );
    }

    return (
      <div>
        <TopImageContainer>
          <TopImage src={this.state.firstHouse.url}>
          </TopImage></TopImageContainer>
        <Container>
          {this.state.fakeUrls.map((obj, index) => (
            <Box src={obj.url} onClick={() => { this.setState({ slideShow: true, currentIndex: index }) }} key={index} bgColor='red' image={obj.url}>
            </Box>
          ))}
        </Container></div>
    );
  }
}

export default Home;
