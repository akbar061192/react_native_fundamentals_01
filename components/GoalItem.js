import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const GoalItem = props => {
  const { data, deleteItem } = props;
  return (
    <View style={styles.goal}>
      <Pressable onPress={() => deleteItem(data.id)} android_ripple={{ color: 'red' }}>
        <Text style={styles.goalText}>{data.goal}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    margin: 12,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  goalText: {
    padding: 10,
  },
});
