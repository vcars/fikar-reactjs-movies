import Axios from "axios";
import React, { Component, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Movies.css";
import queryString from "querystring";
import Menu from "../Header/Menu";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      items: [],
      isLoaded: false,
    };
  }

  handleClickDetail = (id) => {
    this.props.history.push(`/detail/${id}`);
  };

  componentDidMount() {
    this.getListMovies();
  }

  getListMovies = () => {
    console.log("MASUK KE GET LIST MOVIES");
    console.log(this.state);
    Axios.get(
      "http://express-with-cqrs.herokuapp.com/api/movies?search=" +
        this.state.search,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.data)
      .then((data) => {
        console.log("DIATAS DATA");
        console.log(data);
        this.setState({
          items: data.data,
          isLoaded: true,
        });
      })
      .catch((error) => {
        console.log("ini error ", error);
      });
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    }, () => {
        this.getListMovies()
    })
   
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(
      {
        items: [0],
      },
      () => {
        this.getListMovies();
      }
    );
  };

  

  render() {
    console.log(this.state);
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="container-movies">
          <Menu
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          {items.length > 0 ? (
            items.map((index) => {
              return (
                <div
                  className="movies"
                  key={index.id}
                  onClick={() => {
                    this.handleClickDetail(index.id);
                  }}
                >
                  <div className="thumbnail">
                    <LazyLoadImage
                      effect="blur"
                      src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                      alt="Movies"
                    ></LazyLoadImage>
                    <div className="like">
                      <div className="icon"></div>
                      <p>{index.like}</p>
                    </div>
                  </div>
                  <p className="title">{index.title}</p>

                  <p className="date">{index.showTime}</p>
                </div>
              );
            })
          ) : (
            <p>
              Couldn't find any movie. Please search again using another search
              criteria.
            </p>
          )}
        </div>
      );
    }
  }
}

export default Movies;
