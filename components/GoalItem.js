import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = (props) => {
    const onPressHandler = () => {
        props.deleteGoalHandler(props.item.key);
    };

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{
                    color: '##d3c5ff'
                }}
                onPress={onPressHandler}
            >
                <Text style={styles.goalText}>{props.item.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 5,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        color: 'white',
        padding: 12
    }
});
