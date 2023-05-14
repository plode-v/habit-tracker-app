import React, { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import styles from './styles';
import { colors } from '../constants';

const Home = () => {

	const [habit, setHabit] = useState();
	const [habitList, setHabitList] = useState([]);

	const handleAddHabit = () => {
		Keyboard.dismiss();
		setHabitList([...habitList, habit]);
		setHabit(null);
	}
	

	return (
		<View style={styles.homeContainer}>
			<Text style={styles.homeText}>Habits Tracker ({habitList.length})</Text>
			<KeyboardAvoidingView 
				behavior={Platform.OS === "ios" ? "paddng" : "height"}
				style={styles.homeBottom}
			>
				<TextInput 
					style={styles.homeTextInput} 
					onChangeText={text => setHabit(text)}
					value={habit}
					placeholder="Add New Habit"
					placeholderTextColor={colors.white}
				/>
				<TouchableOpacity>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	)
}

export default Home;