import React from 'react';
import { Link, hashHistory } from 'react-router';
import BusinessMap from './business_map';
import { isEmpty } from 'lodash';

class Sidebar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: "",
      filterId: 0
    };

    this.currentBusinessReviewsPath = "";
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.requestBusinesses(this.state);
  }

  update(e){
    e.preventDefault();
    this.setState({
      search: e.currentTarget.value,
      filterId: this.props.filters.filterId
    }, () => {
        let reviewKeys = Object.keys(this.props.reviews);
        if ((this.props.businesses[this.props.businessId] !== undefined) && !this.props.businesses[this.props.businessId].name.toLowerCase().includes(this.state.search.toLowerCase())) {
          hashHistory.push(`/businesses/${this.state.filterId}`);
          this.props.requestBusinesses(this.state);
        } else if ((reviewKeys.length !== 0) && (this.props.reviews[reviewKeys[0]].business_id == this.props.businessId) && (this.props.businesses[this.props.businessId] !== undefined) && (this.props.businesses[this.props.businessId].name.toLowerCase().includes(this.state.search.toLowerCase()))){
          this.props.requestBusinesses(this.state);
        } else if (this.state.filterId != 0) {
          hashHistory.push(`/businesses/${this.state.filterId}`);
          this.props.requestBusinesses(this.state);
        } else {
          if (this.props.filters.filterId !== 0 || (this.state.filterId === 0 && this.state.search === "")){
            hashHistory.push("/businesses/0");
          }
          this.props.requestBusinesses(this.state);
        }
    });
  }

  handleClick(e){
    this.setState({filterId: e.currentTarget.id}, () => {
      this.props.requestBusinesses(this.state);
    });
  }

  render(){
    let reviewKeys = Object.keys(this.props.reviews);

    // if ((reviewKeys.length !== 0) && (this.props.reviews[reviewKeys[0]].business_id == this.props.businessId) && (this.props.businesses[this.props.businessId] !== undefined) && (this.props.businesses[this.props.businessId].name.includes(this.state.search))){
    //   this.currentBusinessReviewsPath = `/${this.props.businessId}`;
    // }

    return (
      <section className="sidebar-container">
        <div className="search">
          <form>
            <label>
              <div className="search-box">
                <input type="text"
                  value={this.state.search}
                  onChange={this.update.bind(this)}
                  placeholder="Search..." />
                <i className="fa fa-search fa-2x" aria-hidden="true"></i>
              </div>
            </label>
          </form>
        </div>

        <br />

        <div className="filters">
          <aside className="filter-tag-list">
            <Link className="filter-tag" to={`/businesses/0`} id={0} onClick={this.handleClick}>All Businesses</Link>
            <Link className="filter-tag" to={`/businesses/1`} id={1} onClick={this.handleClick}>Food</Link>
            <Link className="filter-tag" to={`/businesses/2`} id={2} onClick={this.handleClick}>Nightlife</Link>
            <Link className="filter-tag" to={`/businesses/3`} id={3} onClick={this.handleClick}>Restaurant</Link>
            <Link className="filter-tag" to={`/businesses/4`} id={4} onClick={this.handleClick}>Shopping</Link>
            <Link className="filter-tag" to={`/businesses/6`} id={6} onClick={this.handleClick}>Arts and Entertainment</Link>
          </aside>
        </div>

        <BusinessMap businesses={this.props.businesses} businessId={this.props.businessId}/>
      </section>
    );
  }
}

export default Sidebar;
