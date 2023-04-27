import React, { Component } from "react";
import { PropTypes } from "prop-types";

import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { priceDisplay } from "../utils";
import ajax from "../ajax";

export default class DealDetails extends Component {
  static propTypes = {
    initialData: PropTypes.object.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };

  state = {
    deal: this.props.initialData,
  };

  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetails(this.state.deal.key);
    this.setState({ deal: fullDeal });
  }

  render() {
    const { deal } = this.state;
    return (
      <>
        <TouchableOpacity
          onPress={this.props.onItemPress}
          style={styles.backBox}
        >
          <Text style={{ color: "#22f" }}>Back</Text>
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <Image source={{ uri: deal.media[0] }} style={styles.image} />
          <View style={styles.titleBox}>
            <Text style={styles.title}>{deal.title}</Text>
          </View>
          <View style={styles.box}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
              <Text>{deal.cause.name}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              {deal.user && (
                <>
                  <Image
                    source={{ uri: deal.user.avatar }}
                    style={styles.avatar}
                  />
                  <Text>{deal.user.name}</Text>
                </>
              )}
            </View>
          </View>
          <View style={styles.infoBox}>
            {deal.description && (
              <>
                <Text>{deal.description}</Text>
              </>
            )}
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  backBox: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
  box: {
    paddingHorizontal: 42,
    paddingVertical: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    marginTop: 12,
    backgroundColor: "#fff",
    elevation: 2,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
  },
  infoBox: {
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 8,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  titleBox: {
    backgroundColor: "rgba(237,149,45,0.4)",
    padding: 8,
  },
});
