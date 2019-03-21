# @rnhooks/network-status [![Build Status](https://travis-ci.com/react-native-hooks/network-status.svg?branch=master)](https://travis-ci.com/react-native-hooks/network-status) [![Maintainability](https://api.codeclimate.com/v1/badges/8ba0e5a25c0fa7150c6d/maintainability)](https://codeclimate.com/github/react-native-hooks/network-status/maintainability) <a href="https://github.com/pritishvaidya/react-native-hooks/network-status/blob/master/README.md"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>

> React Native hook for Network Status

### Installation

```bash
$ yarn add @rnhooks/network-status
```
### Usage

```
import useNetworkStatus from '@rnhooks/network-status';

function App() {
  const { type, effectiveType } = useNetworkStatus();

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`Type: ${type}`}</Text>
      <Text style={styles.effectiveType}>{`Effective Type: ${effectiveType}`}</Text>
    </View>
  );
}
```

### Output
| Prop  | Default  | Type | Description |
| :------------ |---------------:| :---------------| :-----|
| [type](https://facebook.github.io/react-native/docs/netinfo#connectiontype-enum) | `null` | `none / wifi / cellular / unknown` | Describes the type of connection the device is using to communicate with the network |
| [effectiveType](https://facebook.github.io/react-native/docs/netinfo#effectiveconnectiontype-enum) | `null` | `2g / 3g / 4g / unknown` | Cross platform values for EffectiveConnectionType |
