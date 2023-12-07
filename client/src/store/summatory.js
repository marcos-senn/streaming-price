import {create} from 'zustand';

export const summatoryStore = create((set, get) => {
	return {
		streaming: [],
		addStreaming: (serviceName, planName, planPrice) =>
			set((state) => {
				const newStreaming = [...state.streaming]; // Create a copy of the existing state
				newStreaming.push({
					serviceName,
					planName,
					planPrice,
				}); // Add the new object to the copy
				return {...state, streaming: newStreaming}; // Update the state with the new streaming array
			}),
		deleteStreaming: (serviceName, planName) =>
			set((state) => {
				const removeService = [...state.streaming].filter(
					(service) =>
						!(
							service.serviceName === serviceName &&
							service.planName === planName
						),
				);
				return {...state, streaming: removeService};
			}),
	};
});
