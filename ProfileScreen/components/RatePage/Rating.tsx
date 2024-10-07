import { Text, View, StyleSheet, Pressable, Button, TouchableOpacity, Image} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import React, { useState } from 'react';



const Ratescreen = () => {
    const [defaultRating, setdefaultRating] =useState(2)
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5])
    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

    const CustomRatingBar = () => {
        return (
            <View style = {styles.customRatingBar}>
                {maxRating.map((item, key) => {
                    return(
                        <TouchableOpacity activeOpacity={0.7}
                         key = {item} 
                         onPress = {() => setdefaultRating(item)}
                         style={styles.starContainer}>
                            <Image
                                style={styles.starImage}
                                source = {
                                    item <= defaultRating ? {uri: starImgFilled}: {uri: starImgCorner}
                            }/>

                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

return (
    <View style = {styles.container}>      
        <View style={styles.rateCard}>
            <CustomRatingBar/>

            <Text style = {styles.title}>Rate our app</Text>
            <Text style = {styles.description}>Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor
                ullamco exercitation. Ullamco tempor
                adipisicing et voluptate duis sit esse
                aliqua esse ex dolore esse. Consequat 
                velit qui adipisicing sunt.</Text>
            <Pressable >
                <Text style = {styles.loveButton}>I love it!</Text>
                <Text style = {styles.complain}>Don’t like the app? Let us know.</Text>
                
            </Pressable>
      
        </View>
    </View>    
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5DB075',
        flex: 1,
    },
    customRatingBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    starContainer: {
        marginHorizontal: 5,
    },
    starImage: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
    },
    rateCard: {
        backgroundColor: "white",
                borderRadius: 8,
        margin: 'auto',
        marginLeft: '4.2%',
        marginRight: '4.2%',
        marginTop: '20%',
        marginBottom: '80%'
        
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        lineHeight: 36,
        textAlign: 'center',
        marginBottom: '4%'
    },
    description: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 19,
        marginLeft: '4.5%',
        marginRight: '4.5%',
        textAlign: 'center',
        marginBottom: 45,
        color: '#666666'
    },
    loveButton: {
        backgroundColor: "#5DB075",
        borderRadius: 50,
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        paddingLeft: 32,
        paddingBottom: 16,
        paddingTop: 16,
        paddingRight: 32,
        marginRight: '4.6%',
        marginLeft: '4.6%',
    },
    complain: {
        color: 'green',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '7.4%'


    },
    

})

export default Ratescreen;



