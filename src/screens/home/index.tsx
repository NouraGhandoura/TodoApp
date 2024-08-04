import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import MyDayIcon from '../../icons/mydayIcon';
import {useSelector} from 'react-redux';
import Popup from '../../components/Popup';
import {IToDoTask} from '../../redux/slices/todoSlice';
import TodoCard from '../../components/TodoCard';

export default function Home() {
  const todos = useSelector((state: any) => state.todos);
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MyDayIcon />
        </View>
        <ScrollView style={styles.scrollView}>
          {todos.length > 0 ? (
            todos.map(
              (todo: IToDoTask, index: React.Key | null | undefined) => (
                <TodoCard
                  key={index}
                  day={todo.day}
                  month={todo.month}
                  title={todo.title}
                  todoId={todo.id}
                  favoriteIcon={true}
                />
              ),
            )
          ) : (
            <View style={styles.emptyState}>
              <Text style={{color: '#fff', fontSize: 18, marginTop:200}}>
                No tasks available
              </Text>
            </View>
          )}
        </ScrollView>
        <Popup isVisible={isModalVisible} onClose={hideModal} />
        <View style={styles.buttonContainer}>
          <Button title="Add a task   +" color="#fff" onPress={showModal} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#E4CBCB',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#E4CBCB',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 120,
    alignSelf: 'center',
    height: '10%',
  },
  scrollView: {
    backgroundColor: '#E4CBCB',
    flexGrow: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 196,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#75728D',
  },
});
