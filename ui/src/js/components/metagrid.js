var React = require('react');
var Grid = require('metaform').Grid;
var pluralize = require('pluralize');
var bootstrap = require('bootstrap');

var Metagrid = React.createClass({

  render: function () {
    var computedColumns = null, sortBy = null, order = null, view = null;
    var filter = this.props.filter;
    var name = this.props.name || 'form-schema';
    var nameColumn = 'name';
    var editable = true;
    var projection = ['name', 'description'];
    var url = pluralize(name);

    return (
      <Grid ref="grid1" source={'$ds1url/' + url} entity={name}
        projection={projection} nameColumn={nameColumn}
        sortBy={sortBy} order={order} view={view}
        parent={this.props.parentName} filter={filter} filterParam={this.props.filterParam}
        computedColumns={computedColumns} editable={editable}/>
    );
  }
});

module.exports = Metagrid;