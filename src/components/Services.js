import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, explicabo.",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, explicabo.",
    },
    {
      icon: <FaShuttleVan />,
      title: "free Shuttle",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, explicabo.",
    },
    {
      icon: <FaBeer />,
      title: "Best Beer",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, explicabo.",
    },
  ];
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
