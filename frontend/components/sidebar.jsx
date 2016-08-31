import React from 'react';

class Sidebar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: "",
      filterId: 0
    };
  }

  componentDidUpdate(){
    console.log('update');
    console.log(this.props.state);
  }

  update(property){
    return e => { this.setState({[property]: e.currentTarget.value }); };
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
                     onChange={this.update('search')} />
            </label>
            <button className="search-button"
                    type="submit"
                    id="search"
                    onClick={this.handleClick}>Search!</button>
          </form>
        </div>
        <br />
        <div className="filters">
          <h1>FILTER TAGS</h1>
          <ul className="filters-tag-list">
            <li className="filter-tag-list-item" id={1}>
              Food
            </li>
            <li className="filter-tag-list-item" id={2}>
              Nightlife
            </li>
            <li className="filter-tag-list-item" id={3}>
              Restaurant
            </li>
            <li className="filter-tag-list-item" id={4}>
              Shopping
            </li>
            <li className="filter-tag-list-item" id={5}>
              Active Life
            </li>
            <li className="filter-tag-list-item" id={6}>
              Arts and Entertainment
            </li>
            <li className="filter-tag-list-item" id={7}>
              Automotive
            </li>
            <li className="filter-tag-list-item" id={8}>
              Beauty and Spa
            </li>
            <li className="filter-tag-list-item" id={9}>
              Education
            </li>
            <li className="filter-tag-list-item" id={10}>
              Event Planning
            </li>
            <li className="filter-tag-list-item" id={11}>
              Health and Medical
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Sidebar;
