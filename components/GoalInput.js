import { useState } from 'react';
import {
    Button,
    Image,
    Modal,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

const GoalInput = (props) => {
    const [input, setInput] = useState('');
    const goalInputHandler = (text) => {
        setInput(text);
    };
    const onPressHandler = () => {
        if (input) {
            props.addGoalHandler(input);
            props.modalVisibilityHandler();
            setInput('');
        }
    };

    return (
        <Modal visible={props.visibility} animationType="fade">
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    placeholderTextColor="#311b6b"
                    placeholder="Your next goal😉"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={input}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color="#f31282"
                            onPress={props.modalVisibilityHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            color="#5e0acc"
                            onPress={onPressHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        backgroundColor: '#311b6b',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    textInput: {
        borderRadius: 5,
        padding: 8,
        width: '100%',

        backgroundColor: '#fff',
        color: '#311b6b'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 24
    },
    button: {
        width: '30%',
        marginHorizontal: 16
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});
