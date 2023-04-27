import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ajax from "./src/ajax";
import DealList from "./src/components/DealList";
import DealDetails from "./src/components/DealDetails";
import SearchBar from "./src/components/SearchBar";

class App extends React.Component {
  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId: null,
  };

  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState({ deals });
  }

  searchDeals = async (searchTerm) => {
    if (searchTerm) {
      const searchResult = await ajax.fetchDealsSearchResults(searchTerm);
      this.setState({ dealsFromSearch: searchResult });
    } else {
      this.setState({ dealsFromSearch: [] });
    }
  };

  setCurrentDeal = (dealId) => {
    this.setState({ currentDealId: dealId });
  };

  unsetCurrentDeal = () => {
    this.setState({ currentDealId: null });
  };

  currentDeal = () => {
    return this.state.deals.find(
      (deal) => deal.key === this.state.currentDealId
    );
  };

  render() {
    if (this.state.currentDealId) {
      return (
        <DealDetails
          initialData={this.currentDeal()}
          onItemPress={this.unsetCurrentDeal}
        />
      );
    }

    const dealsToDisplay =
      this.state.dealsFromSearch.length > 0
        ? this.state.dealsFromSearch
        : this.state.deals;

    if (dealsToDisplay.length > 0) {
      return (
        <View style={styles.box}>
          <SearchBar searchDeals={this.searchDeals} />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bakesale</Text>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#eee",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 40,
  },
});

export default App;
