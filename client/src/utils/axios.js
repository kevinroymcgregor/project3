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
    getUserById: function(id) {
        return axios.get('/api/users/getUserById/'+ id)
    }
}

