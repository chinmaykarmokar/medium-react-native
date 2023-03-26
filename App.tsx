// Import React
import React from 'react';

// Import components from react native
import { View, StyleSheet } from 'react-native';

// Import custom components
import TextComponent from './components/textComponent';

const App: React.FC = () => {
	return (
		<View style = {styles.body}>
			<TextComponent/>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: "#f0f5f5",
		padding: 30,
		alignItems: "center"
	}
})

export default App;