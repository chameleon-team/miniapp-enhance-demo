import state from "./state";

export default {
  getOpenId(state,payload){
    console.log('store-getOpenId')
    state.openid = payload.openid;
  },
  getStorage(state,payload){
    console.log('store-getStorage')
    state.fileID = payload.fileID;
    state.cloudPath = payload.cloudPath;
    state.imagePath = payload.imagePath;

  }
}
