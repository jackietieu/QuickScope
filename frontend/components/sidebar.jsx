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
        <o>SIDEBAR CONTAINER</o>
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
        <div className="filters">

        </div>
      </section>
    );
  }
}

export default Sidebar;
