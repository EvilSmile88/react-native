import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import groupBy from 'lodash/groupBy'
class Event extends Component {
  static defaultProps = {
    eventList: [
      {title: 'Title 1', value: 'Value 1'}, {title: 'Title 2', value: 'Value 2'}, {title: 'Title 2', value: 'Value 3'}, {title: 'Title 4', value: 'Value 2'}, {title: 'Title 1', value: 'Value 3'},
      {title: 'Title 10', value: 'Value 2'}, {title: 'Title 10', value: 'Value 3'}, {title: 'Title 2', value: 'Value 2'}, {title: 'Title 2', value: 'Value 3'}, {title: 'Title 1', value: 'Value 2'},
      {title: 'Title 2', value: 'Value 3'}, {title: 'Title 1', value: 'Value 1'}, {title: 'Title 2', value: 'Value 2'}, {title: 'Title 2', value: 'Value 3'}, {title: 'Title 4', value: 'Value 2'},
      {title: 'Title 1', value: 'Value 3'}, {title: 'Title 10', value: 'Value 2'}, {title: 'Title 10', value: 'Value 3'}, {title: 'Title 2', value: 'Value 2'}, {title: 'Title 2', value: 'Value 3'},
      {title: 'Title 1', value: 'Value 2'}, {title: 'Title 2', value: 'Value 3'}
    ]
  }
  render() {
    const { eventList } = this.props;
    const grouped = groupBy(eventList, item => item.title)
    const sections = Object.entries(grouped).map(([letter, list]) => ({
      title: `${letter}, ${list.length} items`,
      data: list.map(item => ({key: `${item.title + Math.random()}`, value: item.value}))
    }));
    return (
      <View style={styles.container}>
         <SectionList
          sections={sections}
          renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
          renderItem={({item}) => <Text style={styles.li} key={item.key}>{item.value}</Text>}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: "100%",
  },
  li: {
   margin: 5,
  },
  header: {
    backgroundColor: '#eee',
    width: '100%',
    padding: 10,
  }
});

export default Event;