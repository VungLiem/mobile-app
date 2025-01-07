import React from 'react';
import { Button } from '../ui-component/src'; // Đường dẫn đến ui-component
import { View, Text } from 'react-native';

const App = () => {
    return (
        <View>
            <Text>Welcome to VungLiemTown</Text>
            <Button title="Click Me" onPress={() => alert('Button Clicked!')} />
        </View>
    );
};

export default App;
