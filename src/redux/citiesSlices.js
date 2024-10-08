import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                name: "Tokyo",
                description: "Descrizione della citta",
                imgUrl: "https://plus.unsplash.com/premium_photo-1661873673782-88b30e6abef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
                isVisited: true
            },
            {
                id: 1,
                name: "Ginza",
                description: "Descrizione della citta",
                imgUrl: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9reW98ZW58MHx8MHx8fDA%3D",
                isVisited: true
            },
            {
                id: 2,
                name: "Notturna",
                description: "Descrizione della citta",
                imgUrl: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRva3lvfGVufDB8fDB8fHww",
                isVisited: true
            },
            {
                id: 3,
                name: "Altro",
                description: "Descrizione della citta",
                imgUrl: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww",
                isVisited: false
            },
            {
                id: 4,
                name: "Altro",
                description: "Descrizione della citta",
                imgUrl: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww",
                isVisited: true
            },
            {
                id: 5,
                name: "Altro",
                description: "Descrizione della citta",
                imgUrl: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww",
                isVisited: true
            }
        ]
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer