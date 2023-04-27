import React, { Component } from "react";
import { PropTypes } from "prop-types";

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { priceDisplay } from "../utils";

export default class DealItem extends Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  handlePress = () => {
    this.props.onPress(this.props.deal.key);
  };

  render() {
    const { deal } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress}>
        <Image source={{ uri: deal.media[0] }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.box}>
            <Text>{deal.cause.name}</Text>
            <Text>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginHorizontal: 12,
    marginTop: 12,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#bbb",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
  },
  info: {
    marginHorizontal: 10,
    marginVertical: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
