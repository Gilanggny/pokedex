import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomNav from '../../components/BottomNav';
import { Gs } from '../../../assets/styles/GlobalStyle';

function Home(): JSX.Element {
    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={Gs.flexRow}>
                    <Image 
                        // source={require('../../../assets/images/profile_1.png')}
                        style={styles.profileContainer}
                    />
                    <View>
                        <Text style={Gs.textBlack}>Hi, Julio</Text>
                        <Text style={[Gs.font700, Gs.textBlack]}>Jackpot 1 Miliyar</Text>
                    </View>
                </View>
                <View style={Gs.flexRow}>
                     <Image 
                        // source={require('../../../assets/icons/gift.png')}
                        style={styles.iconContainer}
                    />
                     <Image 
                        // source={require('../../../assets/icons/notification.png')}
                        style={styles.iconContainer}
                    />
                </View>
        </View>
        );
      };
    
  return (
    <View style={styles.container}>
     {renderHeader()}
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
  headerContainer: {

  },
  profileContainer: {

  },
  iconContainer: {

  },
});

export default Home;