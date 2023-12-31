import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import CalculationBenchmark from './src/pages/benchmark1/CalculationBenchmark';
import Home from './src/home';
import ComplexUIBenchMark from './src/pages/benchmark2/ComplexUIBenchMark';
import ComplexAnimationBenchMark from './src/pages/benchmark3/ComplexAnimationBenchMark';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Benchmark1" component={CalculationBenchmark} />
        <Stack.Screen name="Benchmark2" component={ComplexUIBenchMark} />
        <Stack.Screen name="Benchmark3" component={ComplexAnimationBenchMark} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
