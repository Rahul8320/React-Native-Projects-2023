import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1632700081077-bc74932ee7cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <View style={styles.bodyContainer}>
            <Text style={styles.cardTitle}>Long Road</Text>
            <Text style={styles.cardLabel}>City Road, Location</Text>
          </View>
          <Text style={styles.cardDescription}>
            Loved by bikers, to race theirs bikes with friends and girlfriends.
            Loved by cameraman to shot beautiful pictures from their pocket and
            big cameras.
          </Text>
          <View style={styles.footerContainer}>
            <Text style={styles.cardFooter}>31 mins away</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  card: {
    width: '91%',
    height: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  cardFooter: {
    color: '#000000',
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  footerContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
});
