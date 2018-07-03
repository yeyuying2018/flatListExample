/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    RefreshControl
    } from 'react-native';

const CITY_NAME = ["长安区", "桥东区", "桥西区", "新华区", "裕华区", "井陉矿区", "辛集市", "藁城市", "晋州市", "新乐市", "鹿泉市", "井陉县", "微水镇", "正定县", "正定镇", "栾城县", "栾城镇", "行唐县", "龙州镇", "灵寿县", "灵寿镇", "高邑县", "高邑镇", "深泽县", "深泽镇", "赞皇县", "赞皇镇", "无极县", "无极镇", "平山县", "平山镇", "元氏县", "槐阳镇", "赵县", "赵州镇"];

export default class FlatListDemo extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: false,
            dataArray: CITY_NAME
        }
    }
    _renderItem(data){
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{data.item}</Text>
            </View>
        )
    }
    _loadData(){
        let dataArray = [];
        this.setState({
            isLoading: true,
        })
        setTimeout(()=>{
            console.log(1);
            for(let i=this.state.dataArray.length;i>=0;i--){
                dataArray.push(this.state.dataArray[i]);
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(data)=>this._renderItem(data)}
                    //refreshing = {this.state.isLoading}
                    //onRefresh ={()=>{this._loadData()}}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            colors={['red']}
                            tintColor={'red'}
                            titleColor={'red'}
                             refreshing = {this.state.isLoading}
                             onRefresh ={()=>{this._loadData()}}
                          />
                    }
                    >
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    item: {
        backgroundColor: '#169',
        height: 200,
        width: 300,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize:20,
        color: '#fff'
    }
});
