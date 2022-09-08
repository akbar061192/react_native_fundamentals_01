import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  const [newGoal, setNewGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = enteredValue => {
    setNewGoal(enteredValue);
  };

  const addNewGoal = () => {
    setGoals(prevState => [...prevState, { id: Math.random().toFixed(5) * 10, goal: newGoal }]);
    setNewGoal('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBtnContainer}>
        <TextInput style={styles.textInput} placeholder='Enter new goal' value={newGoal} onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addNewGoal} />
      </View>
      <View style={styles.goalsListContainer}>
        <ScrollView>
          {goals.map(goal => {
            return (
              <View style={styles.goal} key={goal.id}>
                <Text>{goal.goal}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
  },
  inputBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  textInput: {
    width: '70%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    marginRight: 10,
  },
  goalsListContainer: {
    flex: 5,
  },
  goal: {
    margin: 12,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default App;
