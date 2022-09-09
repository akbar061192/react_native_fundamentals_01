import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';

const GoalInput = props => {
  const { addNewGoal, showModal, hideModal } = props;
  const [newGoal, setNewGoal] = useState('');

  const goalInputHandler = enteredGoal => {
    setNewGoal(enteredGoal);
  };

  const onAddNewGoal = () => {
    addNewGoal(newGoal);
    setNewGoal('');
  };

  return (
    <Modal visible={showModal} animationType='slide'>
      <View style={styles.inputBtnContainer}>
        <Image style={styles.image} source={require('../images/goal.png')} />
        <TextInput style={styles.textInput} placeholder='Enter new goal' value={newGoal} onChangeText={goalInputHandler} />
        <View style={styles.btnView}>
          <Button title='Cancel' onPress={hideModal} color='red' />
          <Button title='Add' onPress={onAddNewGoal} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 16,
    backgroundColor: '#ddd',
    borderRadius: 6,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
