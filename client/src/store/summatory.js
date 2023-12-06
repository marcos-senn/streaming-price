import {create} from 'zustand';

export const summatoryStore = create((set) => ({
   streaming:[{hola:'hola'}],
   addStreaming: (streamingName, streamingData) => set((state) => ({streaming: {[streamingName]: streamingData}})),
   deleteStreaming: (streamingName) => set((state) => (delete streaming[streamingName])),
}))

