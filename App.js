import {
    Button,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

export default App = () => {
    return (
        <View style={styles.AndroidSafeArea}>
            <View style={styles.appContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Your next goal😉"
                        style={styles.textInput}
                    />

                    <Button title="Add" />
                </View>
                <View style={styles.goalsContainer}>
                    <Text>List of goals</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    appContainer: {
        padding: 50,
        paddingHorizontal: 16,
        flex: 1
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 8,
        marginRight: 10,
        width: '80%',
        borderColor: '#ccc'
    },
    goalsContainer: {
        flex: 5
    }
});
