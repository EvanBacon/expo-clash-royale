import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { View } from '../differently-native';
import { WebBrowser } from 'expo';
import Assets from '../Assets';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
export default class ShopScreen extends React.Component {
  static navigationOptions = {
    title: 'Shop',
  };

  render() {
    const evanImage = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/7/75/Evan_Bacon%2C_Design_Technologist_II_at_Frog_Design.jpg',
    };
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer} />

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                flex: undefined,
              }}
            >
              <Card
                nextLevel={{ max: 5, value: 3 }}
                level={3}
                image={evanImage}
                tint={'#70C65F'}
              />
            </View>
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            />

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity
              onPress={this._handleHelpPress}
              style={styles.helpLink}
            >
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode',
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes',
    );
  };
}

const UpdateLoader = ({
  style,
  tint,
  loader: { style: loaderStyle, ...loader },
  icon,
}) => (
  <View style={[{ flexDirection: 'row', alignItems: 'flex-end' }, style]}>
    <UpgradeIcon
      style={{
        zIndex: 1,
        shadowOpacity: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 0,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
      }}
      color={tint}
      {...icon}
    />
    <ValueLoader offset={3} style={[loaderStyle]} tint={tint} {...loader} />
  </View>
);

const UpgradeIcon = props => (
  <Ionicons size={32} color="#ACFA76" {...props} name="md-star" />
);

const ValueLoader = ({ value, max, ...loader }) => {
  const thign = `${value}/${max}`;
  const percentage = value / max * 100;
  return (
    <Loader value={percentage} {...loader}>
      <Text
        style={{
          fontFamily: 'expro-magic',
          color: 'white',
          fontSize: 10,
          shadowOpacity: 1,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 0,
        }}
      >
        {thign}
      </Text>
    </Loader>
  );
};

const Loader = ({ tint, value, style, offset, children }) => (
  <View
    style={[
      {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
        backgroundColor: 'transparent',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        flex: 1,
      },
      style,
    ]}
  >
    <Image
      style={{
        height: 35,
        width: offset + (value - offset),
        backgroundColor: tint,
        resizeMode: 'stretch',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
      }}
      source={Assets.images['bar_fill.png']}
    />
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C4A5C',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
