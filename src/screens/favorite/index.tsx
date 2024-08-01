import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';

import {useSelector} from 'react-redux';
import TodoCard from '../../components/TodoCard';
import {IToDoTask} from '../../redux/slices/todoSlice';

export default function Favorite() {
  const todos = useSelector((state: any) => state.todos);
  const favoriteTodos = todos.filter((todo: IToDoTask) => todo.isFavorite);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <ScrollView style={styles.scrollView}>
          {favoriteTodos.length > 0 ? (
            favoriteTodos.map((todo: IToDoTask) => (
              <TodoCard
                key={todo.id}
                day={todo.day}
                month={todo.month}
                mood={todo.title}
                todoId={todo.id}
                favoriteIcon={false}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                No favorite tasks available
              </Text>
            </View>
          )}
        </ScrollView>
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
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyStateText: {
    color: '#fff',
    fontSize: 18,
    marginTop:200
  },
});
