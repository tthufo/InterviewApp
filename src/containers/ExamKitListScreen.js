import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import host from './data/data'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/ExamKitListScreenStyles';
import { Metrics } from '../themes';
import NavigationService from '../appNavigation/NavigationService'

class ExamKitListScreen extends React.Component {
  static navigationOptions = {
    title: 'Exam Kit List',
  };

  constructor(props) {
    super(props)
    this.state = {
      examList: [],
      isRefreshing: false,
    }
  }

  componentDidMount() {
    this.didGetQuestion();
  }

  async didGetQuestion() {
    this.setState({ isRefreshing: true });
    try {
      const ApiCall = await fetch(host + '/list/getList');
      const examList = await ApiCall.json();
      this.setState({ examList, isRefreshing: false })
      console.log(ApiCall)
    } catch(err) {
      console.log("Error fetching data-----------", err);
      this.setState({ isRefreshing: false })
    }
  }

  renderItem(item) {
    return (
      <TouchableOpacity style={styles.rowContent} onPress={() => NavigationService.reset('StartExam', { id: item.id })}>
        <Text style={styles.txtContent}>{item.name}</Text>
        <Ionicons name='md-arrow-dropright' size={40} style={styles.iconArrow} />
      </TouchableOpacity>
    )
  }

  render() {
    const { isRefreshing } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.examList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => this.renderItem(item)}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={this.didGetQuestion.bind(this)}
            />
          }
        />
      </View>
    );
  }
}

export default ExamKitListScreen;