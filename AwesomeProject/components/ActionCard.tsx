import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Building real-world projects in Web3 is important for anyone looking
            to understand and develop decentralized applications. It's essential
            to gain hands-on experience in using the latest technologies and
            frameworks to build a functional application. By working on projects
            like a Tiktok clone, you can learn about various aspects of Web3,
            such as social graphs, data querying, video infrastructure, and
            wallet authentication. These skills can be applied to develop more
            complex and sophisticated decentralized applications, paving the way
            for the future of the internet.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.suhailkakar.com/building-a-full-stack-web3-tiktok-clone-with-react-native-livepeer-and-lens-protocol',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://instagram.com/')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 10,
  },
  card: {
    width: 330,
    height: 360,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardImage: {
    height: 190,
  },
  elevatedCard: {
    backgroundColor: '#e07c24',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  socialLinks: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#CAD5E2',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
});
