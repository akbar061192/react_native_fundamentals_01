import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addNewGoal = userGoal => {
    setGoals(prevState => [...prevState, { id: Math.random().toFixed(5) * 10, goal: userGoal }]);
    setShowModal(false);
  };

  const deleteItem = id => {
    const filteredGoals = goals.filter(goal => goal.id !== id);
    setGoals(filteredGoals);
  };

  const displayModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <StatusBar style='auto' />

      <View style={styles.container}>
        <Button title='Add new goal' onPress={displayModal} />
        <GoalInput addNewGoal={addNewGoal} showModal={showModal} hideModal={hideModal} />
        <View style={styles.goalsListContainer}>
          <FlatList
            data={goals}
            renderItem={data => {
              return <GoalItem data={data.item} deleteItem={deleteItem} />;
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    marginHorizontal: 24,
  },
  goalsListContainer: {
    flex: 5,
  },
});

export default App;
