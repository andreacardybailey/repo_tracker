var actions = require('./actions');

// Array of empty repositories
var initialRepositoryState = [];

var repositoryReducer = function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.ADD_REPOSITORY) {
        /** 
         * Notice how we don't use push here; 
         * Just as in a standard React application you
         * should never mutate the state. 
         * Instead you return a new object containing the 
         * new state from the reducer. 
         */
        return state.concat({
            name: action.repository,
            rating: null
        });
    }
    else if (action.type === actions.RATE_REPOSITORY) {
        // Find the index of the matching repository
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var repository = state[i];
            if (repository.name === action.repository) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            throw new Error('Could not find repository');
        }
        /**
         * Copy the repositories in the positions 
         * before and after the one you are changing
         */
        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        /** 
         * Find the matching repository and create a
         * clone of it, adding in the new rating. 
         */
        var newRepository = Object.assign({}, repository, {rating: action.rating});
        return before.concat(newRepository, after);
    }
    
    return state;
};

exports.repositoryReducer = repositoryReducer;