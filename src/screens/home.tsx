import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MailItem from '../components/MailItem';

type Props = {};

const Home = (props: Props) => {
  return (
    <View>
      <FlatList data={[...Array(10)]} renderItem={() => <MailItem />} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
