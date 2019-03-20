/*
通过mutation间接更新state的多个方法的对象
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
  } from './mutation-types'
  import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopRatings,
    reqShopGoods,
    reqShopInfo,
    reqSearchShop
  } from '../api'
  
  export default {
    // 异步获取地址
    async getAddress({commit, state}) {
      // 发送异步ajax请求
      const geohash = state.latitude + ',' + state.longitude
      const result = await reqAddress(geohash)
      // 提交一个mutation
      if (result.code === 0) {
        const address = result.data
        commit(RECEIVE_ADDRESS, {address})
      }
    },
  
    // 异步获取食品分类列表
    async getCategorys({commit}) {
      // 发送异步ajax请求
      const result = await reqFoodCategorys()
      // 提交一个mutation
      if (result.code === 0) {
        const categorys = result.data
        commit(RECEIVE_CATEGORYS, {categorys})
        //console.log(result)
      }
    },
  
    // 异步获取商家列表
    async getShops({commit, state}) {
      // 发送异步ajax请求
      const {longitude, latitude} = state
      const result = await reqShops(longitude, latitude)
      // 提交一个mutation
      if (result.code === 0) {
        const shops = result.data
        commit(RECEIVE_SHOPS, {shops})
        //console.log(shops)
      }
    },

    recordUser({commit},userInfo) {
      // 提交一个mutation
      {
        commit(RECEIVE_USER_INFO, {userInfo})
      }
    },

    
    async getUserInfo({commit}) {
      // 发送异步ajax请求
      const result = await reqUserInfo()
      // 提交一个mutation
      if (result.code === 0) {
        
        const userInfo = result.data
        commit(RECEIVE_USER_INFO, {userInfo})
        //console.log(result)
      }
    },

    async logout({commit}) {
      const result = await reqLogout()
      if (result.code === 0) {      
        commit(RESET_USER_INFO)
      }
    },

    async getShopInfo({commit}) {
      const result = await reqShopInfo()
      if (result.code === 0) {
        //console.log(654321)
        const info =result.data     
        commit(RECEIVE_INFO,{info})
      }
    },

    async getShopRatings({commit},callback) {
      const result = await reqShopRatings()
      if (result.code === 0) {
        const ratings =result.data     
        commit(RECEIVE_RATINGS,{ratings})
        callback&callback()
      }
    },
    async getShopGoods({commit},callback) {
      const result = await reqShopGoods()
      if (result.code === 0) {
        const goods =result.data     
        commit(RECEIVE_GOODS,{goods})
        callback&callback()
        //console.log(333333222221111)
      }
    },
    updateFoodCount({commit},{isAdd,food}){
      if(isAdd){
        commit(INCREMENT_FOOD_COUNT,{food})
      }else{
        commit(DECREMENT_FOOD_COUNT,{food})
      }
    },
    clearCart({commit}){
      commit(CLEAR_CART)
    },

    async searchShops({commit,state},keyword) {
      const geohash = state.latitude + ',' + state.longitude
      const result = await reqSearchShop(geohash,keyword)
      if (result.code === 0) {
        const searchShops =result.data     
        commit(RECEIVE_SEARCH_SHOPS,{searchShops})
      }
    },
}