import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import styles from './styles/HomeScreenStyles'
import { Images } from '../themes';
// import api from '../services/Api';
import question from '../services/Question';

class ChooseSkodaScreen extends React.Component {
  static navigationOptions = {
  }
  onNavigate(screen) {
    this.props.navigation.navigate(screen)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.warpLogo}>
          <Image style={styles.logo} source={Images.logo} resizeMode='contain' />
        </View>
        <TouchableOpacity style={styles.rowContent} onPress={() => this.onNavigate('ExamKitList')}>
        {/* <TouchableOpacity style={styles.rowContent} onPress={() => this.didGetQuestion()}> */}
          <Text style={styles.txtContent}>Bộ đề</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContent} onPress={() => this.onNavigate('History')}>
          <Text style={styles.txtContent}>Lịch sử</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContent} onPress={() => alert('sync')}>
          <Text style={styles.txtContent}>Đồng bộ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContent} onPress={() => this.onNavigate('Setting')}>
          <Text style={styles.txtContent}>Cài đặt</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ChooseSkodaScreen;