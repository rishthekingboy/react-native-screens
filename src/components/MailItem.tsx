import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import GlobalStyle from '../utils/GlobalStyle';

const width = Dimensions.get('screen').width;

const MailItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.avatar}>U</Text>
      <View style={styles.mailDetails}>
        <View style={styles.mailText}>
          <Text style={[GlobalStyle.CustomFont, styles.from]}>
            Upword Notificaton
          </Text>
          <Text style={[GlobalStyle.CustomFont, styles.body]} numberOfLines={1} ellipsizeMode="tail">
            You have new invite
          </Text>
          <Text style={[GlobalStyle.CustomFont, styles.body]} numberOfLines={1} ellipsizeMode="tail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem a, veritatis dolores aliquam esse quae.
          </Text>
        </View>
        <View style={styles.mailAction}>
          <Text style={styles.date}>Feb 5</Text>
          <EntypoIcon name="star-outlined" size={30} color="grey" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MailItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  avatar: {
    marginEnd: 10,
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: 'lightblue',
    fontSize: 40,
    borderRadius: 990,
    width: 70,
    height: 70,
  },
  mailDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mailText: {
    //   flex: 0.8,
    // flexDirection: 'row'
  },
  from: {
    fontSize: 18,
    width: width - 150,
  },

  body: {
    fontSize: 14,
    width: width - 150,
  },

  mailAction: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {},
});
