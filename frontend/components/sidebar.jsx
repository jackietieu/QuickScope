import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: "",
      filterId: -1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.requestBusinesses(this.state);
  }

  update(e){
    e.preventDefault();
    this.setState({search: e.currentTarget.value}, () => {
      this.props.requestBusinesses(this.state);
    });
  }

  handleClick(e){
    e.preventDefault();
    console.log(e.currentTarget.id);
    this.setState({filterId: e.currentTarget.id}, () => {
      this.props.requestBusinesses(this.state);
    });
    console.log(this.state);
  }

  render(){
    return (
      <section className="sidebar-container">
        <h1>SIDEBAR CONTAINER</h1>

        <div className="search">
          <form>
            <label>
              Search by Name or Address:
              <br />
              <input type="text"
                     value={this.state.search}
                     onChange={this.update.bind(this)} />
            </label>
            <button className="search-button"
                    type="submit"
                    id="search"
                    >Search!</button>
          </form>
        </div>

        <br />

        <div className="filters">
          <h1>FILTER TAGS</h1>
          <ul className="filters-tag-list">
            <li className="filter-tag-list-item" id={1} onClick={this.handleClick}>
              <Link to={'/businesses/1'}>Food</Link>
            </li>
            <li className="filter-tag-list-item" id={2} onClick={this.handleClick}>
              <Link to={'/businesses/2'}>Nightlife</Link>
            </li>
            <li className="filter-tag-list-item" id={3} onClick={this.handleClick}>
              <Link to={'/businesses/3'}>Restaurant</Link>
            </li>
            <li className="filter-tag-list-item" id={4} onClick={this.handleClick}>
              <Link to={'/businesses/4'}>Shopping</Link>
            </li>
            <li className="filter-tag-list-item" id={5} onClick={this.handleClick}>
              <Link to={'/businesses/5'}>Active Life</Link>
            </li>
            <li className="filter-tag-list-item" id={6} onClick={this.handleClick}>
              <Link to={'/businesses/6'}>Arts and Entertainment</Link>
            </li>
            <li className="filter-tag-list-item" id={7} onClick={this.handleClick}>
              <Link to={'/businesses/7'}>Automotive</Link>
            </li>
            <li className="filter-tag-list-item" id={8} onClick={this.handleClick}>
              <Link to={'/businesses/8'}>Beauty and Spa</Link>
            </li>
            <li className="filter-tag-list-item" id={9} onClick={this.handleClick}>
              <Link to={'/businesses/9'}>Education</Link>
            </li>
            <li className="filter-tag-list-item" id={10} onClick={this.handleClick}>
              <Link to={'/businesses/10'}>Event Planning</Link>
            </li>
            <li className="filter-tag-list-item" id={11} onClick={this.handleClick}>
              <Link to={'/businesses/11'}>Health and Medical</Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Sidebar;
