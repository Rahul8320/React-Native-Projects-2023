import React, { Component } from "react";
import { PropTypes } from "prop-types";

import { StyleSheet, View, FlatList } from "react-native";
import DealItem from "./DealItem";

export default class DealList extends Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({ item }) => (
            <DealItem deal={item} onPress={this.props.onItemPress} />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    marginBottom: 10,
  },
});
