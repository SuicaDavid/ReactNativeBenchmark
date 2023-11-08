import React from 'react';
import {Button, View} from 'react-native';

export default function Home({navigation}: {navigation: any}) {
  return (
    <View>
      <Button
        title="Go to benchmark1"
        onPress={() => navigation.navigate('Benchmark1')}
      />
    </View>
  );
}
