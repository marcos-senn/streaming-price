import {create} from 'zustand';

export const StreamingServiceStore = create((set, get) => {
	return {
		streaming: [],
		updateScrapingData : '',
		checkedState:{},
		addCheckedState: (checkedState) => set((state)=>{return {...state, checkedState: checkedState}}),
		addStreaming: (serviceName, planName, planPrice) =>
			set((state) => {
				const newStreaming = [...state.streaming];
				newStreaming.push({
					serviceName,
					planName,
					planPrice,
				});
				return {...state, streaming: newStreaming};
			}),
		deleteStreaming: (serviceName, planName) => {
			try {
				set((state) => {
					const removeService = [...state.streaming].filter(
						(service) =>
							!(
								service.serviceName === serviceName &&
								service.planName === planName
							),
					);
					return {...state, streaming: removeService};
				});
			} catch (error) {
				console.log(`Error deleting streaming service: ${error}`);
				return state;
			}
		},
		updateScrapingTime: (updateScrapingData) => set((state)=>{return {...state, updateScrapingData: updateScrapingData}}),
	};
});
