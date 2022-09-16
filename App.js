import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    Button,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default App = () => {
    const [goals, setGoals] = useState([]);
    const [visibility, setVisibility] = useState(false);

    const modalVisibilityHandler = () => {
        setVisibility((visibility) => !visibility);
    };

    const addGoalHandler = (input) => {
        if (input) {
            setGoals((currentGoals) => [
                { text: input, key: input + Math.random() },
                ...currentGoals
            ]);
        }
    };

    const deleteGoalHandler = (key) => {
        console.log('deleted');
        setGoals((currentGoals) =>
            currentGoals.filter((goal) => goal.key !== key)
        );
    };

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <GoalInput
                    modalVisibilityHandler={modalVisibilityHandler}
                    addGoalHandler={addGoalHandler}
                    visibility={visibility}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        renderItem={({ item }) => (
                            <GoalItem
                                item={item}
                                deleteGoalHandler={deleteGoalHandler}
                            />
                        )}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="+"
                        color="#8e54db"
                        onPress={modalVisibilityHandler}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        paddingBottom: 16,
        paddingHorizontal: 16,
        flex: 1,
        position: 'relative'
    },
    goalsContainer: {
        flex: 1
    },
    buttonContainer: {
        width: 100,
        marginTop: 16,
        alignSelf: 'center'
    }
});
