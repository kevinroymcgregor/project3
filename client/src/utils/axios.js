import axios from "axios";

export default {
    getItems: function() {
        return axios.get("/api/items/getItems")
    },
    getItemByID: function(id) {
        return axios.get("/api/items/getItemByID/" + id)
    },
    addItem: function(itemData){
        return axios.post("/api/items/addItem", itemData);
    },
    deleteItem: function(id){
        return axios.post("/api/items/deleteItem/" + id);
    },
    updateItem: function(id, itemData){
        return axios.post("/api/items/addItem/" + id, itemData);
    },
}

