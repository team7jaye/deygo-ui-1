import { create } from "zustand";

// Define the interface for StoreState
interface StoreState {
  selectedDetail: string | null;
  setSelectedDetail: (detail: string | null) => void;
}

// Define the store for StoreState with explicit typing for the state parameter
const useStore = create<StoreState>((set) => ({
  selectedDetail: null, // Initial state
  setSelectedDetail: (detail: string | null) => set({ selectedDetail: detail }), // Action to set selectedDetail
}));

// Define the interface for ViewState
interface ViewState {
  view: 'list' | 'grid';
  toggleView: () => void;
}

// Define the store for ViewState with explicit typing for the state parameter
const useViewStore = create<ViewState>((set) => ({
  view: 'list', // Initial state
  toggleView: () =>
    set((state) => ({
      view: state.view === 'list' ? 'grid' : 'list', // Toggle view between 'list' and 'grid'
    })),
}));

export { useStore, useViewStore }; // Export the stores for use in other components
