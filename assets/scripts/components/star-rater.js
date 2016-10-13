var React = require('react');
/** 
 * This displays five star icons 
 * (using FontAwesome), and allows 
 * you to click on them to call the 
 * onChange callback with the new rating.
 */
var StarRater = React.createClass({
    render: function() {
        var stars = [];
        for (var i=0; i<5; i++) {
            var className;
            if (i < this.props.rating || 0) {
                className = 'fa fa-star';
            }
            else {
                className = 'fa fa-star-o';
            }
            var star = (
                <i className={className} key={i}
                   onClick={this.props.onChange.bind(null, i + 1)}>
                </i>
            );
            stars.push(star);
        }

        return (
            <span className="star-rater">
                {stars}
            </span>
        );
    }
});

module.exports = StarRater;