import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FavoriteIcon from '../icons/favoriteIcon';
import UnFavoriteIcon from '../icons/unfavoriteIcon';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {toggleFavorite} from '../redux/slices/todoSlice';

interface TodoCardProps {
  day: string;
  month: string;
  title: string;
  todoId: number;
  favoriteIcon: boolean;
}

const TodoCard: React.FC<TodoCardProps> = ({
  day,
  month,
  title,
  todoId,
  favoriteIcon,
}) => {
  const [favorite, setFavorite] = useState(true);
  const dispatch = useDispatch();
  const handleToggleFavorite = () => {
    setFavorite(!favorite);
    dispatch(toggleFavorite(todoId));
  };

  const ShowFavoriteIcon = () => {
    if (favoriteIcon == true) {
      return favorite ? <FavoriteIcon /> : <UnFavoriteIcon />;
    } else  
    return null;
  };
  return (
    <View style={styles.card}>
      <View style={styles.cardDate}>
        <Text style={styles.cardDateText}>{day}</Text>
        <Text style={styles.cardDateText}>{month}</Text>
      </View>
      <View style={styles.cardDivider}></View>
      <View style={styles.cardContent}>
        <Text style={styles.cardContentText}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.cardImageContainer}
        onPress={handleToggleFavorite}>
        {ShowFavoriteIcon()}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: 72,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  cardDate: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  },
  cardDateText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#75728D',
  },
  cardDivider: {
    height: 34,
    width: 2,
    marginRight: 10,
    backgroundColor: '#75728D',
  },
  cardContent: {
    justifyContent: 'center',
    width: '65%',
  },
  cardContentText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#75728D',
  },
  cardImageContainer: {
    alignItems: 'center',

    justifyContent: 'center',
    width: '20%',
  },
  image: {
    width: 50,
    height: 50,
  },
});
export default TodoCard;
