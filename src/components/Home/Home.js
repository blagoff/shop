import React, { Component } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import data from "../../data/data";
import styles from "./Home.css";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };

    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key, method) {
    function change(a, b) {
      //var A = a.Name.toLowerCase();
      // var B = b.Name.toLowerCase();

      if (key === "title") {
        var A = a.title;
        var B = b.title;
      } else if (key === "price") {
        A = a.price;
        B = b.price;
      }

      if (method === "asc") {
        if (A > B) {
          return 1;
        } else if (A < B) {
          return -1;
        } else {
          return 0;
        }
      } else if (method === "desc") {
        if (A < B) {
          return 1;
        } else if (A > B) {
          return -1;
        } else {
          return 0;
        }
      }
    }

    function SortElements(data) {
      return data.sort(change);
    }

    this.setState(SortElements(data));
  }
  render() {
    return (
      <div className="Container row">
        <p className="footer-home" onClick={() => this.sortBy("price", "asc")}>
          Cena rosnąco
        </p>
        <p className="footer-home" onClick={() => this.sortBy("price", "desc")}>
          Cena malejąco
        </p>
        <p className="footer-home" onClick={() => this.sortBy("title", "asc")}>
          Nazwa rosnąco
        </p>
        <p className="footer-home" onClick={() => this.sortBy("title", "desc")}>
          Nazwa malejąco
        </p>

        <ProductInfo data={this.state.data} sortBy={this.sortBy} />
      </div>
    );
  }
}
