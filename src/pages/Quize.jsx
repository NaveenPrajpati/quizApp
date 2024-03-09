import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Button, HelperText, List} from 'react-native-paper';
import quizQuestions from '../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../context/MyContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timer, setTimer] = useState(30);
  const navigation = useNavigation();

  const {correctAnswerd, setCorrectAnswerd} = useContext(Context);
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('score', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    // Reset the timer to 30 seconds whenever currentQuestion changes
    setTimer(30);
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) return prevTimer - 1;

        clearInterval(countdown);
        handleNext();
        return 0;
      });
    }, 1000);

    // Clear the interval on component unmount or when moving to the next question
    return () => clearInterval(countdown);
  }, [currentQuestion]);

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (selectedAnswer == quizQuestions[currentQuestion].correctAnswer) {
      setCorrectAnswerd(correctAnswerd + 1);
    }
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer('');
    } else {
      storeData(correctAnswerd);
      navigation.goBack();
    }
  };

  const handlePrev = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  const currentQuizQuestion = quizQuestions[currentQuestion];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.quizName}>Quiz Name</Text>
        <View style={styles.questionContainer}>
          <View style={styles.questionHeader}>
            <Text>
              Question {currentQuestion + 1}/{quizQuestions.length}
            </Text>
            <Text>{timer} sec</Text>
          </View>
          <Text style={styles.questionText}>
            {currentQuizQuestion.question}
          </Text>
        </View>
        <View>
          <List.Section>
            {currentQuizQuestion.options.map((item, index) => (
              <List.Item
                key={index}
                title={item}
                onPress={() => setSelectedAnswer(item)}
                titleStyle={styles.listTitle}
                style={[
                  styles.listItem,
                  selectedAnswer === item ? styles.selectedItem : null,
                ]}
                left={() => <Avatar.Text size={30} label={`${index + 1}`} />}
              />
            ))}
          </List.Section>
          <HelperText
            type={
              selectedAnswer === currentQuizQuestion.correctAnswer
                ? 'info'
                : 'error'
            }
            visible={!!selectedAnswer}>
            {selectedAnswer === currentQuizQuestion.correctAnswer
              ? currentQuizQuestion.correctAnswerReason
              : currentQuizQuestion.wrongAnswerReason}
          </HelperText>
        </View>
      </View>
      <View style={styles.navigation}>
        <Button onPress={handlePrev} mode="contained">
          Prev
        </Button>
        <Button onPress={handleNext} mode="contained">
          Next
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'space-between'},
  quizName: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  questionContainer: {backgroundColor: 'snow', borderRadius: 10, padding: 5},
  questionHeader: {flexDirection: 'row', justifyContent: 'space-between'},
  questionText: {fontSize: 22},
  listTitle: {fontSize: 25, fontWeight: '600'},
  listItem: {
    backgroundColor: 'snow',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  selectedItem: {
    backgroundColor: 'gray',
  },
  navigation: {flexDirection: 'row', justifyContent: 'space-around'},
});

export default Quiz;
