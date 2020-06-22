import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeServiceField, addService } from "../actions/actionCrud";

class ServiceCrudClassBased extends Component {
  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.props.onChange(name, value);
  };

  handleSubmit = (evt) => {
    const { item } = this.props;
    evt.preventDefault();
    this.props.onSave(item.id, item.name, item.price);
  };

  handleCancel = (evt) => {
    evt.preventDefault();
    this.props.onChange('id', '');
    this.props.onChange('name', '');
    this.props.onChange('price', '');
  };

  render() {
    const { item } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" onChange={this.handleChange} value={item.name} />
        <input name="price" onChange={this.handleChange} value={item.price} />
        <button type="submit"> Save </button>
        <button type="button" onClick={this.handleCancel}>
          Cancel
        </button>
      </form>
    );
  }
}

ServiceCrudClassBased.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.serviceCrud,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (id, name, price) => dispatch(addService(id, name, price)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceCrudClassBased);
