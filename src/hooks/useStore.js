import create from 'zustand'

const useStore = create((set, get) => ({
  scroll: true,
  theme: "light",
  popupOpen: false,
  accordionsOpen: {},
  
  // Actions
  setPopupOpen: (isOpen) => set({ popupOpen: isOpen }),
  setAccordionOpen: (id, isOpen) => set((state) => ({
    accordionsOpen: { ...state.accordionsOpen, [id]: isOpen }
  })),
  toggleAccordion: (id) => set((state) => ({
    accordionsOpen: { ...state.accordionsOpen, [id]: !state.accordionsOpen[id] }
  }))
}))

export default useStore
