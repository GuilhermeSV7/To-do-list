import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },

    text: {
        color: "#FFF",
        fontSize: 24,
        fontWeight : "bold",
        marginTop: 48,
        textAlign: "center",
        alignItems: "center"
    },

    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 60,
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        fontSize: 16,
        padding : 16,
        marginRight: 12
      },

    button:{
    width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor :'#3FA2F6',
      alignItems: 'center',
      justifyContent: 'center'
    },

    buttonText:{
        color: '#FFF',
        fontSize: 24,
    },

    listEmpty:{
      color: '#FFF',
      fontSize: 16,
      textAlign : 'center'
    }
});