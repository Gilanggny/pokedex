import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNav from '../../components/BottomNav';


function Profile(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;