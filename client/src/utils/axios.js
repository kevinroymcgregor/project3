import axios from "axios";

export default {
    getItems: function() {
        return axios.get("/api/items/getItems");
    },
    getItemByID: function(id) {
        return axios.get("/api/items/getItemByID/" + id);
    },
    addItem: function(itemData){
        return axios.post("/api/items/addItem", itemData);
    },
  
    getUserById: function(id) {
        return axios.get('/api/users/getUserById/'+ id);
    },

    deleteItem: function(id){
        return axios.put("/api/items/deleteItem/" + id);
    },
    updateItem: function(id, itemData){
        return axios.post("/api/items/addItem/" + id, itemData);
    },
    getItemsBySellerID: function(id) {
        return axios.get("/api/items/getItemsBySellerId/" + id);
    },
    addItemToCart: function(id) {
        return axios.get("/api/items/add-to-cart/" + id);
    },
    getItemCount: function() {
        return axios.get("/api/items/countItems");
    }
}


