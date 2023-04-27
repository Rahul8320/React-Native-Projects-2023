import { TextInput, StyleSheet } from "react-native";
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import debounce from "lodash.debounce";

export default class SearchBar extends Component {
  static propTypes = {
    searchDeals: PropTypes.func.isRequired,
  };
  state = {
    searchTerm: "",
  };

  debouncedSearchDeals = debounce(this.props.searchDeals, 300);

  handleChange = (inputText) => {
    this.setState({ searchTerm: inputText }, () => {
      this.debouncedSearchDeals(this.state.searchTerm);
    });
  };

  render() {
    return (
      <TextInput
        placeholder="Search All Deals"
        style={styles.input}
        onChangeText={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 15,
  },
});
