import StyleSheet from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    topRow: {
      flex: 1,
      backgroundColor: '#D4456A',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomRow: {
      flex: 3,
      backgroundColor: '#006E60',
    },
    fullName: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5A2A2',
    },
    actionsRow: {
      flex: 2,
      padding: 16,
    },
    twoRowsContainer: {
      flex: 1,
      backgroundColor: '#445665',
      flexDirection: 'row',
    },
    gridContainer: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1,
      padding: 4,
    },
  });

export default styles;