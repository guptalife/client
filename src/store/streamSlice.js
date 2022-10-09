import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    localStream: null,
    localscreenStream: null,
    remotestreams: []
};

const streamSlice = createSlice(
    {
        name: 'stream',
        initialState,
        reducers: {
            setLocalStream: (state, action) => {
                console.log('stream- came');
                console.log(action);
                console.log(action.payload);
                state.localStream = action.payload;
            },
            setLocalScreenStream: (state, action) => {
                state.localscreenStream = action.payload;
            },
            addRemoteStream: (state, action) => {
                state.remotestreams.push(action.payload);
            },
            removeStreamOfId: (state, action) => {
                state.remotestreams = state.remotestreams.filter((obj) => {
                   return obj.socketId !== action.payload;
                })
            }
        }
    }
)

export const 
{ 
setLocalStream,
setLocalScreenStream,
addRemoteStream,
removeStreamOfId
}
= streamSlice.actions;
export const selectLocalStream = (state) => state.stream.localStream
export const selectLocalScreenStream = (state) => state.stream.localscreenStream;
export const selectRemoteStreams = (state) => state.stream.remotestreams;
export default streamSlice.reducer;
