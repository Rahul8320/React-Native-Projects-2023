const apiHost = "https://bakesaleforgood.com";

export default {
  async fetchInitialDeals() {
    try {
      const response = await fetch(apiHost + "/api/deals");
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDealDetails(dealId) {
    try {
      const response = await fetch(apiHost + "/api/deals/" + dealId);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDealsSearchResults(searchTerm) {
    try {
      const response = await fetch(
        apiHost + "/api/deals?searchTerm=" + searchTerm
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
};
