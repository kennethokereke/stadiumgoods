    import React, {Component} from 'react'
    import { Button } from 'react-native-elements'

    import {
        View,
        Text,
        Platform,
        Dimensions,
        TextInput,
        TouchableWithoutFeedback,
        ActivityIndicator,
        Animated,
        Keyboard,
    KeyboardAvoidingView,


    } from 'react-native'


    // import {validateEmailId} from '../../Validations'
    import styles from './style'
import { validateUsername } from '../../Validations';





    export default class Login extends Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                password: '',
                loading:false
            };
            this.springValue = new Animated.Value(0.3)
        }

    
        UNSAFE_componentWillMount() {
            this.spring()
        }

        spring() {
            this.springValue.setValue(0.3)
            Animated.spring(
                this.springValue,
                {
                    toValue:1,
                    friction:1
                }
            ).start()
        }

        //Checking validation, verfiying if the user has entered their email and password
        checkValidations(){
            if (this.state.username == null || this.state.username.trim().length == 0) {
                alert('Please Enter Username')
        
            }
        else  if (!validateUsername(this.state.username)) {
            alert('Please Enter valid Username')
        }
            else if (this.state.password.trim().length == 0) {
                alert('Please Enter password')
            }
            else {
                this.setState({loading:true})
                setTimeout(() => {
                    this.setState({loading:false})
                    alert('Logged in')
                }, 3000);
                
            }
        }

        

    render() {
        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                <View style={styles.loginFormView}>
                <Animated.View style ={{transform:[{scale: this.springValue}]}}>
                <Text style={styles.logoText}>Stadium Goods</Text>
                <TextInput placeholder="Username" 
                placeholderColor="#c4c3cb" 
                style={styles.loginFormTextInput}  
                autoCapitalize="none" 
                onChangeText={(username) => this.setState({username})} 
                value={this.state.username} />
                <TextInput placeholder="Password" 
                placeholderColor="#c4c3cb" 
                style={styles.loginFormTextInput} 
                secureTextEntry={true} 
                autoCapitalize="none"   
                onChangeText={(password) => this.setState({password})} 
                value={this.state.password}/>
                </Animated.View>
                
                <Animated.View style ={{transform:[{scale: this.springValue}]}}>
                <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.checkValidations()}
                title="Login"
                />
                </Animated.View>
                    
                </View>
                </View>
                
            </TouchableWithoutFeedback>
            {
    this.state.loading===true?<ActivityIndicator style={{flex:1}}size="large" color="#000000" />:null
                    }


            </KeyboardAvoidingView>
        
        );
    }
    _handlePress() {
        console.log('Pressed!');
    }
    }