import dayjs from 'dayjs';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { IToDoTask, addTodo } from '../redux/slices/todoSlice'; 

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose }) => {
  const now = dayjs();
  const day = now.format("DD");  
  const month = now.format("MMM"); 
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title.trim()) {
      const newTodo: IToDoTask = {
        title: title.trim(),
        day: day,
        month: month,
        isFavorite: false,
        id: Math.floor(Math.random() * 1000), 
      };
      dispatch(addTodo(newTodo));
      setTitle(''); 
      onClose(); 
    } else {
     
      console.log("Title cannot be empty");
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Add a task</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add"
            color="#fff"
            onPress={handleSubmit} 
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 6,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 12,
    fontSize: 20,
    color: "#75728D",
  },
  buttonContainer: {
    marginTop: 25,
    width: "30%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#75728D",
    justifyContent:'center',
  },
  input: {
    height: 40,
    width: "90%",
    marginTop: 25,
    borderColor: "#75728D",
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
  },
});

export default Popup;
