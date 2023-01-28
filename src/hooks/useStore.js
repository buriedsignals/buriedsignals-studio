import create from 'zustand'

const useStore = create((set) => {
  return {
    // scroll: true,
    popupOpen: false,
    accordionsOpen: {}
  }
})

export default useStore
