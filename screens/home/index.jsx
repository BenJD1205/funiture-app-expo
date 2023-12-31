import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import {Ionicons, Fontisto} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import {Welcome} from '../../components';
import styles from './home.style';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.location}>Viet Name HCMC</Text>
          <View style={{alignItems:'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>
          </View> 
        </View>
      </View>
      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home