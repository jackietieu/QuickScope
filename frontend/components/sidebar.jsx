import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: "",
      filterId: 0
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
    this.setState({filterId: e.currentTarget.id}, () => {
      this.props.requestBusinesses(this.state);
    });
  }

  render(){
    return (
      <section className="sidebar-container">
        <h1>SIDEBAR CONTAINER</h1>

        <div className="search">
          <form>
            <label>
              Search by Name:
              <br />
              <input type="text"
                     value={this.state.search}
                     onChange={this.update.bind(this)}
                     placeholder="Search..." />
            </label>
          </form>
        </div>

        <br />

        <div className="filters">
          <h1>FILTER TAGS</h1>
            <aside className="filter-tag-list">
              <Link className="filter-tag" to={'/businesses/0'} id={0} onClick={this.handleClick}>All Businesses</Link>
              <Link className="filter-tag" to={'/businesses/1'} id={1} onClick={this.handleClick}>Food</Link>
              <Link className="filter-tag" to={'/businesses/2'} id={2} onClick={this.handleClick}>Nightlife</Link>
              <Link className="filter-tag" to={'/businesses/3'} id={3} onClick={this.handleClick}>Restaurant</Link>
              <Link className="filter-tag" to={'/businesses/4'} id={4} onClick={this.handleClick}>Shopping</Link>
              <Link className="filter-tag" to={'/businesses/5'} id={5} onClick={this.handleClick}>Active Life</Link>
              <Link className="filter-tag" to={'/businesses/6'} id={6} onClick={this.handleClick}>Arts and Entertainment</Link>
              <Link className="filter-tag" to={'/businesses/7'} id={7} onClick={this.handleClick}>Automotive</Link>
              <Link className="filter-tag" to={'/businesses/8'} id={8} onClick={this.handleClick}>Beauty and Spa</Link>
              <Link className="filter-tag" to={'/businesses/9'} id={9} onClick={this.handleClick}>Education</Link>
              <Link className="filter-tag" to={'/businesses/10'} id={10} onClick={this.handleClick}>Event Planning</Link>
              <Link className="filter-tag" to={'/businesses/11'} id={11} onClick={this.handleClick}>Health and Medical</Link>
            </aside>
        </div>
      </section>
    );
  }
}

// <ul className="filters-tag-list">
//   <li className="filter-tag-list-item" id={0} onClick={this.handleClick}>
//     <Link to={'/businesses/0'}>All Businesses</Link>
//   </li>
//   <li className="filter-tag-list-item" id={1} onClick={this.handleClick}>
//     <Link to={'/businesses/1'}>Food</Link>
//   </li>
//   <li className="filter-tag-list-item" id={2} onClick={this.handleClick}>
//     <Link to={'/businesses/2'}>Nightlife</Link>
//   </li>
//   <li className="filter-tag-list-item" id={3} onClick={this.handleClick}>
//     <Link to={'/businesses/3'}>Restaurant</Link>
//   </li>
//   <li className="filter-tag-list-item" id={4} onClick={this.handleClick}>
//     <Link to={'/businesses/4'}>Shopping</Link>
//   </li>
//   <li className="filter-tag-list-item" id={5} onClick={this.handleClick}>
//     <Link to={'/businesses/5'}>Active Life</Link>
//   </li>
//   <li className="filter-tag-list-item" id={6} onClick={this.handleClick}>
//     <Link to={'/businesses/6'}>Arts and Entertainment</Link>
//   </li>
//   <li className="filter-tag-list-item" id={7} onClick={this.handleClick}>
//     <Link to={'/businesses/7'}>Automotive</Link>
//   </li>
//   <li className="filter-tag-list-item" id={8} onClick={this.handleClick}>
//     <Link to={'/businesses/8'}>Beauty and Spa</Link>
//   </li>
//   <li className="filter-tag-list-item" id={9} onClick={this.handleClick}>
//     <Link to={'/businesses/9'}>Education</Link>
//   </li>
//   <li className="filter-tag-list-item" id={10} onClick={this.handleClick}>
//     <Link to={'/businesses/10'}>Event Planning</Link>
//   </li>
//   <li className="filter-tag-list-item" id={11} onClick={this.handleClick}>
//     <Link to={'/businesses/11'}>Health and Medical</Link>
//   </li>
// </ul>

export default Sidebar;
