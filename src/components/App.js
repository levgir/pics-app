import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID xRkexxYLwZPFebbQek5KY3s4Eq5RGY72Zq0HhVPALik"
      }
    });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" styel={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
