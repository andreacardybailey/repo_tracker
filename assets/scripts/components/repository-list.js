var React = require('react');
var connect = require('react-redux').connect;

var Repository = require('./repository');
var actions = require('../actions');

/**
 * The RepositoryList component displays a list 
 * of Repository components, and has a text input 
 * for adding new repositories.
 */
var RepositoryList = React.createClass({
    addRepository: function() {
        var repositoryName = this.refs.repositoryName.value;
        this.props.dispatch(actions.addRepository(repositoryName));
    },

    render: function() {
        var repositories = this.props.repositories.map(function(repository) {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref="repositoryName" />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
});

/**
 * The repositories prop should contain 
 * the array of repositories which is 
 * the entire state.
 */
var mapStateToProps = function(state, props) {
    return {
        repositories: state
    };
};


/**
 * Calling the connect function creates a 
 * factory, which when called returns a container component 
 * wrapping in this case the RepositoryList component.
 * 
 * As well as inserting the props specified in 
 * mapStateToProps the connect method also inserts 
 * the dispatch function by default.
 */
var Container = connect(mapStateToProps)(RepositoryList);

module.exports = Container;