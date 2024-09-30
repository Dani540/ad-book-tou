import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        index: 0,
        volume: 1
    }),
    actions: {
        setIndex(index) {
            this.index = index;
        },
        setVolume(volume) {
            this.volume = volume;
        }
    }
});